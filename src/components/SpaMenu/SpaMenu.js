import React from 'react';
import { spaMenuData } from '../../spaMenuData';
import './SpaMenu.css';

export const SpaMenu = () => {

  const menu = spaMenuData

  const buildHeading = title => {
    return (
      <div className='heading-wrapper'>
        <div className='heading-border'>
          <h3 className='heading-title'>{ title }</h3>
        </div>
      </div>
    )
  }

  return (
    <section id='menu-section' className='menu-outer-container'>
      
      {
        Object.keys(menu).map(section => {
          return (
            <div className='menu-section-wrapper' key={section}>
              { buildHeading(section) }
              <div className='menu-right-container'>
                {
                  menu[section].map((item, index) => {
                    return (

                      <table key={index} className='menu-item-container'>
                        <tbody>
                          <tr>
                            <td className='menu-item-title'>{item.name}</td>
                            <td className='menu-item-price'><i>${item.price}</i></td>
                          </tr>
                          { item.desc &&
                            <tr>
                              <td className='menu-item-desc'>{item.desc}</td>
                              <td></td>
                            </tr>
                          }
                        </tbody>
                      </table>

                      // <div key={index} className='menu-item-container'>
                      //   <p className='menu-item-title'>{item.name} <span className="menu-item-price"><i>${item.price}</i></span></p>
                      //   <p className='menu-item-desc'>{item.desc}</p>
                      // </div>
                      
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }


      {/* <div className='tech-experience-container' id="skills-section">
        { buildHeading('Tech Skills') }
        <div className='tech-skills-container'>
          <ul className='tech-skills-bullets'>{menu.techSkillz.map(item => <li key={item} className='experience-item'>{item}</li>)}</ul>
        </div>
      </div> */}

      {/* <div className='experience-container'>
        { buildHeading('Education') }
        <div className='experience-right-container'>
          <h3 className='experience-title'>{menu.education.school}</h3>
          <i className='experience-position'>{menu.education.position}</i>
          <i className='experience-time'>{menu.education.time}</i>
          <ul className='description-list'>
            {menu.education.description.map(item => <li key={item} className='experience-item'>{item}</li>)}
          </ul>
        </div>
      </div> */}

    </section>
  );
}
