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
      <h1>About Us</h1>
      <div>
        <p class="our-names">Jose Rangel</p>
        <img src={Jose} alt="jose" className="about-pic" />
      </div>
      <div>
        <img src={github} alt="github" className="github-logo" />
        <img src={linkedin} alt="linkedin" className="linkedin-logo" />
      </div>
      <div>
        <p class="our-names">Hannah Shea</p>
        <img src={Hannah} alt="hannah" className="about-pic" />
      </div>
      <div>
        <img src={github} alt="github" className="github-logo" />
        <img src={linkedin} alt="linkedin" className="linkedin-logo" />
      </div>
      <div>
        <p class="our-names">Kevin Matthews</p>
        <img src={Kevin} alt="kevin" className="about-pic" />
      </div>
      <div>
        <img src={github} alt="github" className="github-logo" />
        <img src={linkedin} alt="linkedin" className="linkedin-logo" />
      </div>
      <div>
        <p class="our-names">Albert Diaz</p>
        <img src={Albert} alt="albert" className="about-pic" />
      </div>
      <div>
        <img src={github} alt="github" className="github-logo" />
        <img src={linkedin} alt="linkedin" className="linkedin-logo" />
      </div>
    </React.Fragment>
  );
};
export default About;