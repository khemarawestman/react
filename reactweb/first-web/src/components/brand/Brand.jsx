import React from 'react'
import './brand.css'
import {google,slack, atlassian,dropbox,shopify} from './imports';

const brand = () => {
  return (
    <section className='gpt3__brand section__padding'>
     <aside> 
      <img src= {google} />
     </aside>
     <aside> 
      <img src= {slack} />
     </aside>
     <aside> 
      <img src= {atlassian} />
     </aside>
     
     <aside> 
      <img src= {dropbox} />
     </aside>
     
     <aside> 
      <img src= {shopify} />
     </aside>
     
     
    </section>
  )
}

export default brand
