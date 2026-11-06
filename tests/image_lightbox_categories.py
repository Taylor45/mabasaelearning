"""Run with python3 tests/image_lightbox_categories.py against the local preview."""
import asyncio
from playwright.async_api import async_playwright


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 1800})
        for width, height in [(1280, 1800), (390, 844)]:
            await page.set_viewport_size({"width": width, "height": height})
            await page.goto("http://localhost:8080/elearning-multimedia")
            triggers = page.get_by_role("button", name="Open full-size banner")
            graphic_names = [
                "Online distance education symposium keynote graphic",
                "Online distance education symposium AI graphic",
                "Coding Basics for Instructional Design online course banner",
                "Online symposium opening screen graphic",
            ]
            trigger = page.get_by_role("button", name=f"Open {graphic_names[0]}", exact=True)
            await trigger.click()
            dialog = page.get_by_role("dialog")
            await dialog.wait_for()
            for index in range(8):
                assert await dialog.get_by_role("img").get_attribute("alt") == graphic_names[index % 4]
                assert await dialog.get_by_role("heading").inner_text() == f"Banner {index % 4 + 1} / 4"
                await page.get_by_role("button", name="Next banner", exact=True).click()
            await page.keyboard.press("ArrowLeft")
            assert await dialog.get_by_role("img").get_attribute("alt") == graphic_names[3]
            await page.screenshot(path=f"/tmp/browser/category-preview-{width}.png")
            await page.keyboard.press("Escape")
            await dialog.wait_for(state="hidden")
            assert await trigger.evaluate("el => el === document.activeElement")
            await page.get_by_role("button", name="Show banner 1", exact=True).click()
            await page.get_by_role("button", name="Open Health policy and management course banner", exact=True).click()
            await dialog.wait_for()
            for _ in range(5):
                assert await dialog.get_by_role("img").get_attribute("alt") not in graphic_names
                assert (await dialog.get_by_role("heading").inner_text()).endswith("/ 4")
                await page.keyboard.press("ArrowRight")
            await page.get_by_role("button", name="Close viewer", exact=True).click()
            print(f"{width}px: both categories remain separate, wrap correctly, and restore focus")
        await browser.close()


asyncio.run(main())