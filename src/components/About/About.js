import React from 'react';
// import profilePic from '../../images/profile_pic.jpg';
import './About.css';

export const About = () => {

  return (
    <div>
      <div className="about-clip-path-top"></div>
      <section id='about-section' className='about-outer-container'>
        {/* <div className='profile-pic-container'><img alt='zacharys profile' src={profilePic} className='profile-pic'/></div> */}
        <div className='about-info-container'>
          <p className='bio-text'>At Southwest Electrolysis & Spa we specialize in electrolysis, microneedling, microdermabrasion, dermaplaning, facials, and peels. Owner and operator Brenda Nemeroff has more than 30 years of experience in the esthetics and medical industry. She has dedicated her life to helping people reach a higher level of wellness and beauty. We are committed to delivering the best skin care possible with state of the art equipment and products and we proudly offer Image Skin Care.</p>
          <p className='bio-text'>Call today to schedule an appointment and get a free skin care and/or electrolysis consult!</p>
          <a href="tel:2603875040" style={{ textDecorationColor: '#FFF' }}><p className='about-text'>260.387.5040</p></a>
          <a rel='noopener noreferrer' aria-label='send email' href='mailto: swelectrolysis@gmail.com ' target='_blank'><p className='about-text email-text'>SWelectrolysis@gmail.com </p></a>
          {/* <a rel='noopener noreferrer' href={resumeData.resumeURL} target='_blank'><button tabIndex='-1' aria-label='view resume as PDF' className='resume-button'>resume.pdf</button></a> */}
        </div>
      </section>
    </div>
  );
}
