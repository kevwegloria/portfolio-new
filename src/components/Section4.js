import React from "react";
import emoji from './images/emoji.png';
import resume from './images/resume.png';
import instagram from './images/instagram.png';
import love from './images/love-letter.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import phone from './images/contacts.png';
import shape7 from './images/shape7.png';
import shape5 from './images/shape5.png';
import shape6 from './images/shape6.png';
import shape3 from './images/shape3.png';
import shape1 from './images/shape1.png'




export default function Section4() {
    return (
        <div className="section4">
            <div className="emoji-container">

                <h1>Get in touch with me!</h1>
                <img
                    src={emoji}
                    alt="emoji"
                    className="emoji" />
            </div>
            <p>You can reach me on my socials</p>
            <div className="sec4-shapes">
                <img
                    src={shape1}
                    alt="shape1"
                    className="s1" />
                <img
                    src={shape3}
                    alt="shape1"
                    className="s2" />
                <img
                    src={shape5}
                    alt="shape1"
                    className="s3" />
                <img
                    src={shape7}
                    alt="shape1"
                    className="s4" />
                <img
                    src={shape6}
                    alt="shape1"
                    className="s5" />
            </div>
            <div className="mysocials">
                <div className="socials1">
                    <a href="https://docs.google.com/document/d/14wgATc7pgcrsgcv2v_bDz3gPKBdAjv6-/edit">
                        <img
                            src={resume}
                            alt='resume'
                            className="resume" />Resume
                    </a>
                    <a href="mailto:kevweglo@gmail.com">
                        <img
                            src={love}
                            alt='love'
                            className="love" /> Email
                    </a>
                    <a href="https://www.linkedin.com/in/kevwe-okpoh/" className="linkedin">
                        <img
                            src={linkedin}
                            alt='linkedin'
                        />
                        Linkedin
                    </a>
                </div>

                <div className="socials2">
                    <a href="https://wa.link/7xaby9">
                        <img
                            src={phone}
                            alt='phone'
                            className="phone" /> 08036776914
                    </a>
                    <a href="https://www.instagram.com/kevwegloria/">
                        <img
                            src={instagram}
                            alt='instagram'
                            className="instagram" /> Instagram
                    </a>
                    <a href="https://github.com/kevwegloria">
                        <img
                            src={github}
                            alt='github'
                            className="github" /> Github
                    </a>
                </div>
            </div>
        </div>
    )
}