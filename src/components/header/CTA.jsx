import React from 'react'
import CV from '../../assets/CV.PDF'
import app from '../../App.jsx'

const CTA = () => {
  return (
    <div className="cta">
    <a href={CV}download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talks</a>
</div>
  )
}

export default CTA