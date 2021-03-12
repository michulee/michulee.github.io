import { ReactComponent as Github } from "../assets/github-brands.svg";
import { ReactComponent as Live } from "../assets/globe-solid.svg";
import { ReactComponent as SWIFT } from "../assets/swift-website.svg";
import clsx from "clsx";

function Projects() {
  return (
    <div className={clsx("fullHeight")}>
      <div
        className={clsx("inheritHeight container col middle text-align-center")}
      >
        <h2>Projects</h2>

        {/* SWIFT Website */}
        <div className={clsx("")}>
          <div className={clsx('gradient image-border')}>
            <SWIFT className={clsx("desktop")} />
          </div>
          <div>
            <h3 className={clsx("row middle")}>SWIFT Website</h3>
            <div className={clsx("row middle")}>
              <a href="https://github.com/michulee">
                <Github className={clsx("socialIcon")} />
              </a>
              <a href="https://github.com/michulee">
                <Live className={clsx("socialIcon")} />
              </a>
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

              <div className={clsx("skill")}>
                <div>React</div>
              </div>
              <div className={clsx("skill")}>
                <div>React</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
