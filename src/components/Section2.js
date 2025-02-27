import React from "react";
import myVideo from './videos/about.mp4';
import Shape2 from './images/shape2a.png';
import Shape1 from './images/shape1.png';

import shape6 from './images/shape6.png'



export default function Section2() {
    return (
        <div className="section2">
            <div className="sect2">
                <div className="shape6cont">
                    <img
                        src={shape6}
                        alt="shape6"
                        className="shape6second"
                    />
                </div>
                <div className="myvideo-container">
                    <video autoPlay muted loop style={{
                        height: '20em', 

                    
                    }}>
                        <source src={myVideo} type="video/mp4" alt="myvideo" className="myvideo" />

                    </video>

                </div>
            </div>
            <div className="sec2b">
                <div className="sec2h3-container">
                    <h3>About Me</h3>
                </div>
                <p>I am a frontend web and mobile developer with a passion for creating simple, beautiful and functional user interfaces. I have experience in NextJS, Reactjs, React Native, Material UI, Tailwind, Bootstrap, API Integration, Code Management, Testing and Designing. I take pride in my design abilities and attention to details. I also ensure that I write clean and maintainable code. I am dedicated to learning and growing as a developer, I am constantly attending workshops, bootcamps and conferences as well as seeking out new challenges in order to expand my knowledge.</p>
                <div className="shape2-container">
                    <img
                        src={Shape2}
                        alt="shape2"
                        className="shape2"
                    />

                </div>
                <div className="shape1-container">
                    <img
                        src={Shape1}
                        alt="shape1"
                        className="shape1"
                    />
                </div>
            </div>
        </div>
    );
}
