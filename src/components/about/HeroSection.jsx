import React from 'react'
import './HeroSection.css'
import '../../App.css'

export const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="videos/video-1.mp4" autoPlay loop muted />
            <h1>Hi! I'm Mukund Shukla</h1>
            <p>An ECE undergrad at CGC Landran</p>
        </div>
    )
}