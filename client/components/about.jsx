import React from 'react'

function About () {
  return (
    <section className='about'>
      <div className='about__Container'>
        <h3 className='about__Text'>About Skio Ting</h3>
        <p>
          At the intersection of food science and art, lies Skio Ting&apos;s
          unique patisserie. Finding notes of flavour and composing with healthy
          inovative ingredients, this is where Skio Ting enables the local
          community to celebrate every special occastion.
        </p>
      </div>

      <div className='about__Image'>
        <img
          src="https://ucarecdn.com/002c5655-2c42-49fd-be65-2919d0ab0163/"
          alt="Skio Ting"
        />
      </div>
    </section>
  )
}

export default About
