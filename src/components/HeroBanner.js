import React from 'react';
import {ReactComponent as Github} from '../assets/github-brands.svg';
import {ReactComponent as Mail} from '../assets/envelope-solid.svg';
import {ReactComponent as Globe} from '../assets/globe-solid.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin-brands.svg';
// import Flexbox from 'react-svg-flexbox';
import clsx from 'clsx';

function HeroBanner() {
  return (
    <div className={clsx("fullHeight gradient")}>
      <div className={clsx("inheritHeight container col middle")}>
        <h1 className={clsx('heroHeader')}>Michelle Lee</h1>
        <p className={clsx('heroText')}>
          React Web Developer that has experience developing beautiful and
          functional web applications for others.
        </p>
        <div className={clsx('socials')}>
          {/* can't use flexbox, must be display: block */}
          hey
          {/* <Flexbox> */}
            <Github />
            <Linkedin />
            <Mail />
          {/* </Flexbox> */}
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
