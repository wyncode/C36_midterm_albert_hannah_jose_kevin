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
      <div className="about-us-banner">
        <p className="team-munchies">Team Munchies</p>
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
      <hr />
      <span className="flex-git-linkedin">
        <div>
          <p className="about-paragraph">
            <h1 class="why-munchies">Why Munchies?</h1>
            <p>Have you ever had the dilema of being hangry but having nowhere to turn? When you feel like your only option is fast food, Munchies will help you find your cities hidden gems. Munchies is a restaurant directory that uses crowd sourced content to help you find the best food at any hour.</p>
            <p> Team Munchies is comprised of a group of web developers who are passionate about food - ranging from plant based to Miami's best hole in the wall Latin delicacies. Whether it's tofu, croquetas or pizza... we're game. Our goal was to make a clean, functional app for people who love to eat and explore new cities.</p>
          </p>
        </div>
      </span>
    </React.Fragment >
  );
};
export default About;
