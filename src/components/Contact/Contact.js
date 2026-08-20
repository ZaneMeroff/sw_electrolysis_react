import React, { useEffect } from 'react';
import lgbtqIcon from '../../images/lgbtq_friendly_icon.png';
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
        
        <h2 className='about-text about-title-text'>SW Electrolysis & Spa</h2>
        
        <p className='about-text'>4646 W Jefferson Blvd</p>
        <p className='about-text'>Suite 170</p>
        <p className='about-text'>Fort Wayne, IN 46804</p>
        <a href="tel:2603853199" style={{ textDecorationColor: '#FFF' }}><p className='about-text'>260.385.3199</p></a>
        <a rel='noopener noreferrer' aria-label='send email' href='mailto: swelectrolysis@gmail.com ' target='_blank'><p className='about-text email-text'>SWelectrolysis@gmail.com </p></a>
        <div className='lgbtq-icon-container'>
          <img alt="LGBTQ+ friendly icon" src={lgbtqIcon} className="lgbtq-icon" />
          <p className='about-text'>LGBTQ+ friendly</p>
        </div>

        <h2 className='about-text about-title-text' id='hours-section' style={{ marginTop: '40px' }}>Hours</h2>
        <p className='about-text'>Mon-Fri 9am-5pm</p>
        <p className='about-text' style={{ textAlign: 'center', width: '220px' }}>*weekend & after-hour appointments by request</p>
        <p className='about-text' style={{ marginTop: '60px', fontSize: '12px' }}>&#xA9; {new Date().getFullYear()} SW Electrolysis & Spa</p>
      </section>
    </div>
  );
}
