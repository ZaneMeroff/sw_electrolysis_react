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
                          <tr>
                            <td className='menu-item-desc'>{item.desc}</td>
                            <td className='menu-item-pkg-price'><i>{ item.pkgPrice }</i></td>
                          </tr>
                        </tbody>
                      </table>
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
