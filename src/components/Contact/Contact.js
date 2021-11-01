import React, { useEffect } from 'react';
import './Contact.css';

export const Contact = () => {

  useEffect(() => {
    const socialIcons = document.querySelectorAll('.icon');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseleave', e => icon.classList.add('mouse-leave'));
    })
  })

  return (
    <div>
      <div className='contact-clip-path-top'></div>
      <section id='contact-section' className='contact-outer-container'>
        
        <i className='contact-message'>Gift certificates available!</i>
        
        <h2 className='about-text' style={{ color: '#fc9be8' }}>SW Electrolysis & Spa</h2>
        
        <p className='about-text'>4646 W Jefferson Blvd</p>
        <p className='about-text'>Fort Wayne, IN 46804</p>
        <a href="tel:2603875040" style={{ textDecorationColor: '#FFF' }}><p className='about-text'>260.387.5040</p></a>
        <a rel='noopener noreferrer' aria-label='send email' href='mailto: swelectrolysis@gmail.com ' target='_blank'><p className='about-text email-text'>SWelectrolysis@gmail.com </p></a>

        <h2 className='about-text' id='hours-section' style={{ color: '#fc9be8', marginTop: '40px' }}>Hours</h2>
        <p className='about-text'>Mon-Fri 9am-5pm</p>
        <p className='about-text'>*weekend appointments by request</p>

        <p className='about-text' style={{ marginTop: '60px', fontSize: '12px' }}>&#xA9; 2021 SW Electrolysis & Spa</p>
        {/* <div className='social-icons-container'>
          <a rel='noopener noreferrer' aria-label='github profile' href={resumeData.gitHubURL} target='_blank'><img alt='Github icon' src={gitHubIcon} className='social-icon icon'/></a>
          <a rel='noopener noreferrer' aria-label='linkedin profile' href={resumeData.linkedInURL} target='_blank'><img alt='Linkedin icon' src={linkedInIcon} className='social-icon icon'/></a>
          <a rel='noopener noreferrer' aria-label='twitter profile' href={resumeData.twitterURL} target='_blank'><img alt='Twitter icon' src={twitterIcon} className='social-icon icon'/></a>
        </div> */}
      </section>
    </div>
  );
}
