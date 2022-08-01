import React from 'react';

export default function Nav() {
  return (
    <nav>
      <img
        src='src/assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg'
        alt='Profile image'
        width={'200px'}
      />
      <h1 className='title--name'>Laura Smith</h1>
      <p className='title--job-title'>Frontend Developer</p>
      <p className='title--website'>laurasmith.website</p>
      <div className='title--links'>
        <a href='mailto: laurasmith@website.com' className='email'>
          <img className='email-link links' src='src/assets/envelope-solid.svg' alt='email icon' /> Email
        </a>
        <a href='linkeden/profile'>
          <img className='linkdin-link links' src='src/assets/linkedin-brands.svg' alt='linkdein icon' />
          Linkedin
        </a>
      </div>
    </nav>
  );
}
