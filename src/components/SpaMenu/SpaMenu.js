import React from 'react';
import { spaMenuData } from '../../spaMenuData';
import './SpaMenu.css';

export const SpaMenu = () => {

  const menu = spaMenuData

  const buildExperienceHeading = title => {
    return (
      <div className='experience-heading-box'>
        <div className='experience-heading-border'>
          <h3 className='experience-heading'>{title}</h3>
        </div>
      </div>
    )
  }

  return (
    <section id='experience-section' className='work-experience-outer-container'>
      <div className='experience-container'>
        { buildExperienceHeading('Experience') }
        <div className='experience-right-container'>
          {menu.jobs.map(job => {
            return (
              <div key={job.name} className='job-container'>
                <p className='experience-title'>{job.name}</p>
                <i className='experience-position'>{job.position}</i>
                <i className='experience-time'>{job.time}</i>
                <ul className='description-list'>
                  {job.description.map(item => <li key={item} className='experience-item'>{item}</li>)}
                </ul>
              </div>)
          })}
        </div>
      </div>
      <div className='tech-experience-container' id="skills-section">
        { buildExperienceHeading('Tech Skills') }
        <div className='tech-skills-container'>
          <ul className='tech-skills-bullets'>{menu.techSkillz.map(item => <li key={item} className='experience-item'>{item}</li>)}</ul>
        </div>
      </div>
      <div className='experience-container'>
        { buildExperienceHeading('Education') }
        <div className='experience-right-container'>
          <h3 className='experience-title'>{menu.education.school}</h3>
          <i className='experience-position'>{menu.education.position}</i>
          <i className='experience-time'>{menu.education.time}</i>
          <ul className='description-list'>
            {menu.education.description.map(item => <li key={item} className='experience-item'>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
