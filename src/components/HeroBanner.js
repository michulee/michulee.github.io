import {ReactComponent as Github} from '../assets/github-brands.svg';
import {ReactComponent as Mail} from '../assets/envelope-solid.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin-brands.svg';
import {ReactComponent as DownArrow} from '../assets/angle-double-down-solid.svg';
import clsx from 'clsx';

function HeroBanner() {
  return (
    <div className={clsx("fullHeight gradient heroBanner")}>
      <div className={clsx("inheritHeight container col middle")}>
        <h1 className={clsx('heroHeader')}>Michelle Lee</h1>
        <p className={clsx('heroText')}>
          React Web Developer that has experience developing beautiful and
          functional web applications for others.
        </p>
        <div className={clsx('row socials')}>
          <a href="https://github.com/michulee">
            <Github className={clsx('socialIcon')}/>
          </a>
          <a href="https://www.linkedin.com/in/michulee/">
            <Linkedin className={clsx('socialIcon')}/>
          </a>
          <a href="mailto: michellechulee@gmail.com">
            <Mail className={clsx('socialIcon')}/>
          </a>
        </div>
        <DownArrow className={clsx('downIcon')}/>
      </div>
    </div>
  );
}

export default HeroBanner;
