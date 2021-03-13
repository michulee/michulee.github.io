import { ReactComponent as Github } from "../assets/github-brands.svg";
import { ReactComponent as Live } from "../assets/globe-solid.svg";
import SWIFT from "../assets/swift.jpg";
import TechSymposium from "../assets/tech-symposium.jpg";
import Pizza from "../assets/pizza-app.jpg";
import Library from "../assets/library.jpg";
import clsx from "clsx";

function Projects() {
  return (
    <div className={clsx("")}>
      <div
        className={clsx(" container col middle text-align-center")}
      >
        <h2>Projects</h2>

        {/* SWIFT Website */}
        <div className={clsx("project")}>
          <div className={clsx('gradient image-border')}>
          <img src={SWIFT} alt="Front page of a website"/>
          </div>
          <div className={clsx('project-header gap-xs col')}>
            <h3 className={clsx("row middle")}>SWIFT Website</h3>
            <div className={clsx("row middle")}>
              {/* <a href=""> */}
                <Github className={clsx("socialIcon")} />
              {/* </a> */}
              {/* <a href=""> */}
                <Live className={clsx("socialIcon")} />
              {/* </a> */}
            </div>
            <div className={clsx("row middle")}>
              <div className={clsx("skill")}>
                <div>HTML</div>
              </div>
              <div className={clsx("skill")}>
                <div>CSS</div>
              </div>
              <div className={clsx("skill")}>
                <div>React</div>
              </div>
              <div className={clsx("skill")}>
                <div>Docusaurus</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Symposium Schedules */}
        <div className={clsx("project")}>
          <div className={clsx('gradient image-border')}>
            <img src={TechSymposium} alt="Front page of a website"/>
          </div>
          <div className={clsx('project-header gap-xs col')}>
            <h3 className={clsx("row middle")}>Tech Symposium Schedules</h3>
            <div className={clsx("row middle")}>
              {/* <a href=""> */}
                <Github className={clsx("socialIcon")} />
              {/* </a> */}
              {/* <a href=""> */}
                <Live className={clsx("socialIcon")} />
              {/* </a> */}
            </div>
            <div className={clsx("row middle")}>
              <div className={clsx("skill")}>
                <div>HTML</div>
              </div>
              <div className={clsx("skill")}>
                <div>CSS</div>
              </div>
              <div className={clsx("skill")}>
                <div>JavaScript</div>
              </div>
              <div className={clsx("skill")}>
                <div>Jekyll</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pizza Mobile App */}
        <div className={clsx("project")}>
          <div className={clsx('gradient image-border')}>
            <img src={Pizza} alt="Front page of a website"/>
          </div>
          <div className={clsx('project-header gap-xs col')}>
            <h3 className={clsx("row middle")}>Pizza Mobile App</h3>
            <div className={clsx("row middle")}>
              {/* <a href=""> */}
                <Github className={clsx("socialIcon")} />
              {/* </a> */}
            </div>
            <div className={clsx("row middle")}>
              <div className={clsx("skill")}>
                <div>XML</div>
              </div>
              <div className={clsx("skill")}>
                <div>Java</div>
              </div>
              <div className={clsx("skill")}>
                <div>Android Studio</div>
              </div>
            </div>
          </div>
        </div>

        {/* Library */}
        <div className={clsx("project")}>
          <div className={clsx('gradient image-border')}>
            <img src={Library} alt="Front page of a website"/>
          </div>
          <div className={clsx('project-header gap-xs col')}>
            <h3 className={clsx("row middle")}>The Odin Project | Library</h3>
            <div className={clsx("row middle")}>
              {/* <a href=""> */}
                <Github className={clsx("socialIcon")} />
              {/* </a> */}
              {/* <a href=""> */}
                <Live className={clsx("socialIcon")} />
              {/* </a> */}
            </div>
            <div className={clsx("row middle")}>
              <div className={clsx("skill")}>
                <div>HTML</div>
              </div>
              <div className={clsx("skill")}>
                <div>CSS</div>
              </div>
              <div className={clsx("skill")}>
                <div>JavaScript</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
