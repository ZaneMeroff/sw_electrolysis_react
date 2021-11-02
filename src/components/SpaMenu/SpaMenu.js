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
                      <div key={index} className='menu-item-container' style={{ display: 'flex', height: 'auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                          <div className='menu-item-title'>{item.name}</div>
                          <div className='menu-item-desc'>{item.desc}</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '10px' }}>
                          <div className='menu-item-price'><i>${item.price}</i></div>
                          {item.pkg3xPrice && <div className='menu-item-price'><i>${ item.pkg3xPrice } (3x)</i></div>}
                          {item.pkg6xPrice && <div className='menu-item-price'><i>${ item.pkg6xPrice } (6x)</i></div>}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </section>
  );
}
