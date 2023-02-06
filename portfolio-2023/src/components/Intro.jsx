import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl mb-1
            md:mb-3 font-bold">Eric Hsieh</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Developer</p>
            <p className ="text-sm max-w-xl mb-6 font-bold">Hello! My name is Eric and I am currently studying Computer Science, 
            Physics, and Earth Sciences at the University of British Columbia, expecting to graduate in May 2023. 
            I have enjoyed gaining a comprehensive understanding of the natural sciences as they provides me an analytic problem-solving 
            outlook from the basic understanding of nature. 
            <br/>
            <br/>
            I enjoy working on full-stack web applications and designing solutions to solve real world problems. I am a problem solver 
            aspiring to become an exceptionally skilled software engineer.
            </p>

        </div>
    )
}

export default Intro;