import React from 'react';
import Hannah from '../images/SheaHannah.jpg';
import Jose from '../images/RangelJose.jpg';
import Kevin from '../images/MatthewsKevin.jpg';
import Albert from '../images/DiazAlbert.jpg';
import github from '../images/github.jpg';
import linkedin from '../images/LinkedIn-Logo.png';
const About = () => {
  return (
    <React.Fragment>
      <div className="about-us-banner"></div>
      <div>
        <p id="team-munchies">Team Munchies</p>
      </div>
      <div className="flex-picture-names">
        <div className="profile-block">
          <p className="our-names">Jose Rangel</p>
          <img src={Jose} alt="jose" className="about-pic" />
          <div className="inner-flex">
            <img src={github} alt="github" className="github-logo" />
            <img src={linkedin} alt="linkedin" className="linkedin-logo" />
          </div>
        </div>

        <div className="profile-block">
          <p className="our-names">Hannah Shea</p>
          <img src={Hannah} alt="hannah" className="about-pic" />
          <div className="inner-flex">
            <img src={github} alt="github" className="github-logo" />
            <img src={linkedin} alt="linkedin" className="linkedin-logo" />
          </div>
        </div>

        <div className="profile-block">
          <p className="our-names">Kevin Matthews</p>
          <img src={Kevin} alt="kevin" className="about-pic" />
          <div className="inner-flex">
            <img src={github} alt="github" className="github-logo" />
            <img src={linkedin} alt="linkedin" className="linkedin-logo" />
          </div>
        </div>

        <div className="profile-block">
          <p className="our-names">Albert Diaz</p>
          <img src={Albert} alt="albert" className="about-pic" />
          <div className="inner-flex">
            <img src={github} alt="github" className="github-logo" />
            <img src={linkedin} alt="linkedin" className="linkedin-logo" />
          </div>
        </div>

        {/* --> //flex-picture-names// */}
      </div>
      <div className="flex-git-linkedin"></div>
    </React.Fragment>
  );
};
export default About;
