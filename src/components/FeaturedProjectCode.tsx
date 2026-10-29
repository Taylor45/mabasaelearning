import { Link } from "@tanstack/react-router";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
      <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" />
    </svg>
  );
}

export function FeaturedProjectCode() {
  return (
    <section aria-labelledby="featured-project-title" className="surface-hero">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="text-center">
          <h2 id="featured-project-title" className="font-inter text-2xl font-bold text-white sm:text-3xl">
            Featured Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A closer look at how the Coding Basics for Instructional Design course was
            storyboarded, developed, and brought to life.
          </p>
        </div>

        <div
          role="region"
          aria-label="Featured project code window"
          className="code-window mx-auto mt-8 w-full max-w-[900px] overflow-hidden rounded-[18px] bg-[#0d0d0d] text-[#d4d4d4] shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:mt-10 max-[700px]:rounded-xl"
        >
          {/* Title bar with tab */}
          <div className="flex h-11 items-center gap-4 bg-black px-4 pt-2 max-[700px]:h-9 max-[700px]:gap-2.5 max-[700px]:px-3">
            <div aria-hidden="true" className="flex gap-2.5 pb-2 max-[700px]:gap-1.5">
              <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57] max-[700px]:h-2.5 max-[700px]:w-2.5" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e] max-[700px]:h-2.5 max-[700px]:w-2.5" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#28c840] max-[700px]:h-2.5 max-[700px]:w-2.5" />
            </div>
            <div className="flex h-full items-center gap-2 rounded-t-[8px] border-t-2 border-[#4fc1ff] bg-[#0d0d0d] px-4 text-[clamp(11px,1.1vw,13px)] text-white max-[700px]:px-2.5">
              <span className="rounded-[3px] bg-[#f7df1e] px-1 py-px text-[9px] font-bold leading-[1.3] text-black">
                JS
              </span>
              script.js
              <span aria-hidden="true" className="ml-1.5 text-[13px] text-[#4a4f57]">
                ×
              </span>
            </div>
          </div>

          {/* Editor body */}
          <div className="px-[clamp(14px,2vw,22px)] py-[clamp(12px,1.8vw,18px)]">
            <div
              className="code-lines min-w-0 text-left text-[clamp(10px,1.15vw,13.5px)] font-normal leading-[1.8]"
            >
              <div className="code-line">
                <span>
                  <span className="tok-kw">const</span> <span className="tok-var">specialist</span>{" "}
                  <span className="tok-op">=</span> <span className="tok-punc">{"{"}</span>
                </span>
              </div>
              <div className="code-line">
                <span>
                  {"  "}
                  <span className="tok-key">role</span>
                  <span className="tok-op">:</span>{" "}
                  <span className="tok-str">&quot;Full Stack Learning Experience Designer&quot;</span>
                  <span className="tok-op">,</span>
                </span>
              </div>
              <div className="code-line">
                <span>
                  {"  "}
                  <span className="tok-key">focus</span>
                  <span className="tok-op">:</span> <span className="tok-brk">[</span>
                  <span className="tok-str">&quot;UX&quot;</span>
                  <span className="tok-op">,</span> <span className="tok-str">&quot;eLearning&quot;</span>
                  <span className="tok-op">,</span> <span className="tok-str">&quot;technology&quot;</span>
                  <span className="tok-brk">]</span>
                  <span className="tok-op">,</span>
                </span>
              </div>
              <div className="code-line">
                <span> </span>
              </div>
              <div className="code-line">
                <span>
                  {"  "}
                  <span className="tok-comment">// How do I approach eLearning projects that focus on learning objectives requiring practical application, technical skills, and hands-on experience?</span>
                </span>
              </div>
              <div className="code-line">
                <span> </span>
              </div>
              <div className="code-line">
                <span>
                  {"  "}
                  <span className="tok-key">featuredProject</span>
                  <span className="tok-op">:</span>{" "}
                  <span className="tok-str">&quot;Coding Basics For Instructional Design&quot;</span>
                </span>
              </div>
              <div className="code-line">
                <span> </span>
              </div>
              <div className="code-line active">
                <span>
                  <span className="tok-punc">{"}"}</span>
                  <span className="tok-op">;</span>
                  <span className="code-caret" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex items-center justify-between gap-3 bg-black py-1.5 pl-4 pr-3.5 max-[700px]:justify-end max-[700px]:px-2.5">
            <p className="min-w-0 truncate text-[clamp(9px,0.9vw,11px)] text-[#8b949e] max-[700px]:hidden">
              <span className="font-medium text-[#33dd2e]">●</span> JavaScript &nbsp;·&nbsp; UTF-8
              &nbsp;·&nbsp; Ln 9, Col 3
            </p>
            <div className="flex items-center gap-2.5">
              <Link
                to="/web-design-ux-ui"
                className="cw-btn cw-btn-run"
              >
                <PlayIcon />
                Run
              </Link>
              <Link
                to="/elearning-development"
                className="cw-btn cw-btn-explore"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
