import React, { useEffect } from 'react';
import { resumeData } from '../../resumeData';
import { ParticlesAnimation } from '../ParticlesAnimation/ParticlesAnimation';
import gitHubIcon from '../../images/github_icon.png';
import twitterIcon from '../../images/twitter_icon.png';
import linkedInIcon from '../../images/linkedin_icon.png';
import './Header.css';

export const Header = () => {

  useEffect(() => {
    const socialIcons = document.querySelectorAll('.icon');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseleave', e => icon.classList.add('mouse-leave'));
    })
  })

  const performSmoothScroll = () => {
    document.querySelector('#about-section').scrollIntoView({behavior: 'smooth'});
  }

  return (
    <section id='home-section' className='header-outer-container'>
      <ParticlesAnimation />
      <h1 className='title-name'>Zachary</h1>
      <h1 className='title-name'>Nemeroff</h1>
      <h2 className='title-industry'>Software Developer</h2>
      <div className='social-icon-container'>
        <a rel='noopener noreferrer' aria-label='github profile' href={resumeData.gitHubURL} target='_blank'><img alt='Github icon' src={gitHubIcon} className='social-icon icon'/></a>
        <a rel='noopener noreferrer' aria-label='linkedin profile' href={resumeData.linkedInURL} target='_blank'><img alt='Linkedin icon' src={linkedInIcon} className='social-icon icon'/></a>
        <a rel='noopener noreferrer' aria-label='twitter profile' href={resumeData.twitterURL} target='_blank'><img alt='Twitter icon' src={twitterIcon} className='social-icon icon'/></a>
      </div>
      <button aria-label='scroll down' onClick={performSmoothScroll} className='down-arrow icon'></button>
    </section>
  );
}
