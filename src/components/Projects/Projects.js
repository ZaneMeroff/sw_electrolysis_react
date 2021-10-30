import React from 'react';
import { projectData } from '../../projectData';
import './Projects.css';

export const Projects = () => {
  return (
    <section id='menu-section' className='projects-outer-container'>
        
        <div className='project-container'>
          <h3 className='project-title'>Spa Menu - coming soon!</h3>
          <i className='project-techs'>electrolysis + microneedling + microdermabrasion + dermaplaning + facials + peels</i>
          <p className='project-description'>Sorry, our new page is under construction right now. Feel free to call or email with any questions you have.</p>
          <div className='project-buttons-container'>
            {/* <a rel='noopener noreferrer' tabIndex='-1' aria-label='github project repo' href={project.repoURL} target='_blank'><button className='project-button'>GitHub Repo</button></a>
            <a rel='noopener noreferrer' tabIndex='-1' aria-label='live project' href={project.liveLink} target='_blank'><button className='project-button'>{project.liveButtonText}</button></a> */}
          </div>
        </div>

      {/* {projectData.map(project => {
        return (
          <div key={project.name} className='project-container'>
            <h3 className='project-title'>{project.name}</h3>
            <i className='project-techs'>{project.techsUsed}</i>
            <p className='project-description'>{project.description}</p>
            <div className='project-buttons-container'>
              <a rel='noopener noreferrer' tabIndex='-1' aria-label='github project repo' href={project.repoURL} target='_blank'><button className='project-button'>GitHub Repo</button></a>
              <a rel='noopener noreferrer' tabIndex='-1' aria-label='live project' href={project.liveLink} target='_blank'><button className='project-button'>{project.liveButtonText}</button></a>
            </div>
          </div>
        )
      })} */}
    </section>
  );

}
