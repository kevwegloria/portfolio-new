import React from "react";
import foodie from './videos/foodie1.mp4';
import movers from './videos/movers1.mp4';
import ebele from './videos/ebele1.mp4';
import indozi from './videos/indozi1.mp4';
import kdrama from './videos/kdramalove.mp4';
import shape2 from './images/shape2b.png';
import shape7 from './images/shape7.png';
import shape6 from './images/shape6.png';
import shape4 from './images/shape4.png';
import shape1 from './images/shape1.png'


export default function Section3() {
    return (
        <div>
            <div className="section3">
                <div className="myprojects"><h3>My Projects</h3></div>
              <img
              src={shape1} 
              alt="shape1"
              className="m1"/>
              <img
              src={shape2} 
              alt="shape2"
              className="m2"/>
              <img
              src={shape4} 
              alt="shape4"
              className="m3"/>
              <img
              src={shape6} 
              alt="shape6"
              className="m4"/>
              <img
              src={shape7} 
              alt="shape7"
              className="m5"/>

                <div className="project-grid">
                    <div className="project-container">
                        <video autoPlay loop muted className="project-video" >
                            <source src={kdrama} type="video/mp4" alt="foodie" />
                        </video>
                        <div className="project-overlay">

                            <a href="https://kdrama-love.vercel.app/">Kdrama Love</a>
                            <p>This website is to discover the best kdramas.</p>
                            <div className="type1">
                                <p>React</p>
                                <p>Material UI</p>
                                <p>TMDB API</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <video autoPlay loop muted className="project-video" >
                            <source src={foodie} type="video/mp4" alt="foodie" />
                        </video>
                        <div className="project-overlay">

                            <a href="https://foodie-webb.vercel.app/">Foodie</a>
                            <p>This is a food ordering website.</p>
                            <div className="type1">
                                <p>React</p>
                                <p>CSS</p>
                                <p>Bootstrap</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <video autoPlay loop muted className="project-video">
                            <source src={movers} type="video/mp4" />

                        </video>
                        <div className="project-overlay">
                            <a href="https://movers-gamma.vercel.app/">Movers</a>
                            <p>This is a landing page for a moving company.</p>
                            <div className="type1">
                                <p>CSS</p>
                                <p>Bootstrap</p>
                                <p>Javascript</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <video autoPlay loop muted className="project-video">
                            <source src={ebele} type="video/mp4" />

                        </video>
                        <div className="project-overlay">
                            <a href="https://ebele-blog-new.vercel.app/">Ebele</a>
                            <p>This is a 6 page blog</p>
                            <div className="type1">
                                <p>Bootstrap</p>
                                <p>CSS</p>
                                <p>Javascript</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <video autoPlay loop muted className="project-video">
                            <source src={indozi} type="video/mp4" />

                           
                        </video>
                        <div className="project-overlay">
                            <a href="https://indozi.vercel.app/">Indozi</a>
                            <p>This is a landing page for a task website. </p>
                            <div className="type1">
                                <p>Javascript</p>
                                <p>CSS</p>
                                <p>Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
