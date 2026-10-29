const PROJECT_URL = "https://id-dev-journey.lovable.app";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" />
    </svg>
  );
}

export function FeaturedProjectCode() {
  return (
    <section aria-labelledby="featured-project-title" className="surface-hero">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="text-center">
          <h2 id="featured-project-title" className="font-inter text-3xl font-bold text-white sm:text-4xl">
            Featured Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-sky-200/70 sm:text-base">
            Instructional frameworks, visual learning architecture, and strategic
            storyboarding.
          </p>
        </div>

        <div
          role="region"
          aria-label="Featured project code window"
          className="code-window mt-10 overflow-hidden rounded-[22px] bg-[#0d0d0d] text-[#d4d4d4] shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:mt-12 max-[700px]:rounded-2xl"
        >
          {/* Title bar with tab */}
          <div className="flex h-[52px] items-center gap-[22px] bg-black px-6 pt-3 max-[700px]:h-11 max-[700px]:gap-3 max-[700px]:px-3.5">
            <div aria-hidden="true" className="flex gap-3 pb-3 max-[700px]:gap-1.5">
              <span className="h-[18px] w-[18px] rounded-full bg-[#ff5f57] max-[700px]:h-3 max-[700px]:w-3" />
              <span className="h-[18px] w-[18px] rounded-full bg-[#febc2e] max-[700px]:h-3 max-[700px]:w-3" />
              <span className="h-[18px] w-[18px] rounded-full bg-[#28c840] max-[700px]:h-3 max-[700px]:w-3" />
            </div>
            <div className="flex h-full items-center gap-2.5 rounded-t-[10px] border-t-2 border-[#4fc1ff] bg-[#0d0d0d] px-5 text-[clamp(12px,1.25vw,15px)] text-white max-[700px]:px-3">
              <span className="rounded-[3px] bg-[#f7df1e] px-1 py-px text-[10px] font-bold leading-[1.3] text-black">
                JS
              </span>
              script.js
              <span aria-hidden="true" className="ml-2 text-sm text-[#4a4f57]">
                ×
              </span>
            </div>
          </div>

          {/* Editor body */}
          <div className="p-[clamp(12px,2vw,22px)] pr-[clamp(12px,2.5vw,28px)]">
            <div
              className="code-lines min-w-0 flex-1 text-left text-[clamp(10px,1.35vw,15px)] font-normal leading-[1.75]"
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
                  <span className="tok-comment">// How do I approach eLearning projects that focus on</span>
                </span>
              </div>
              <div className="code-line">
                <span>
                  {"  "}
                  <span className="tok-comment">// learning objectives requiring practical application,</span>
                </span>
              </div>
              <div className="code-line">
                <span>
                  {"  "}
                  <span className="tok-comment">// technical skills, and hands-on experience?</span>
                </span>
              </div>
              <div className="code-line">
                <span>
                  {"  "}
                  <span className="tok-key">featuredProject</span>
                  <span className="tok-op">:</span>{" "}
                  <span className="tok-str">&quot;Coding Basics For Instructional Design&quot;</span>
                </span>
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
          <div className="flex items-center justify-between gap-3 bg-black py-2 pl-6 pr-[22px] max-[700px]:justify-end max-[700px]:px-3">
            <p className="min-w-0 truncate text-[clamp(10px,1vw,12px)] text-[#8b949e] max-[700px]:hidden">
              <span className="font-medium text-[#33dd2e]">●</span> JavaScript &nbsp;·&nbsp; UTF-8
              &nbsp;·&nbsp; Ln 9, Col 3
            </p>
            <div className="flex items-center gap-3.5">
              <a
                href={PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cw-btn cw-btn-run"
              >
                <PlayIcon />
                Run
              </a>
              <a
                href={PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cw-btn cw-btn-explore"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
