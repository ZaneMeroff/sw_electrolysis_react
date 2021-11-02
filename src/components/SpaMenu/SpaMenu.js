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

                      <div key={index} className='menu-item-container' style={{ display: 'flex', height: 'auto', width: '400px', border: '1px solid red' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '300px'}}>
                          <div className='menu-item-title' style={{ height: 'auto', width: '100%', border: '1px solid blue' }}>{item.name}</div>
                          <div className='menu-item-desc' style={{ height: 'auto', width: '100%', border: '1px solid green' }}>{item.desc}</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '6px', border: '1px solid yellow' }}>
                          <div className='menu-item-price' style={{ height: 'auto', border: '1px solid blue' }}><i>${item.price}</i></div>
                          <div className='menu-item-price' style={{ height: 'auto', border: '1px solid green' }}><i>{ item.pkg1Price }</i></div>
                          <div className='menu-item-price' style={{ height: 'auto', border: '1px solid yellow' }}><i>{ item.pkg2Price }</i></div>
                        </div>
                      </div>

                      // <table key={index} className='menu-item-container'>
                      //   <tbody>
                      //     <tr>
                      //       <td className='menu-item-title'>{item.name}</td>
                      //       <td className='menu-item-price'><i>${item.price}</i></td>
                      //     </tr>
                      //     <tr>
                      //       <td className='menu-item-desc'>{item.desc}</td>
                      //       <td className='menu-item-pkg-price'><i>{ item.pkg1Price }</i></td>
                      //     </tr>
                      //   </tbody>
                      // </table>
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
