import React from "react";
import profile from './images/profile.png';
import shape2b from './images/shape2b.png';
import shape6 from './images/shape6.png';
import shape7 from './images/shape7.png';

import shape3 from './images/shape3.png'


export default function Section1() {
    return (
        <div className="section1">
            <div className="sec1">
                <div className="sec1a">
                    <div>
                        <h1>Frontend Web and Mobile Developer.</h1>
                        <p> <span className="wave">👋🏾</span>Hi, I'm Kevwe. I love creating beautiful and fun things with code. I enjoy creating sturdy and adaptable frontend products with exceptional user experiences.</p>
                        <a class="bck-grnd" href="https://docs.google.com/document/d/14wgATc7pgcrsgcv2v_bDz3gPKBdAjv6-/edit?usp=sharing&ouid=112916005114193758573&rtpof=true&sd=true"><span class="style" ></span>Resume </a>
                    </div>
                 
                    <div className="top-icons">
                        <img
                            src={shape2b}
                            alt="shape2b"
                            className="shape2b"
                        />
                    </div>
                    <div>
                        <img
                            src={shape6}
                            alt="shape6"
                            className="shape6"
                        />
                    </div>
                </div>
                <div>

                </div>
                <div className="sec1b">

                    <div className="profile-img">
                        <span>
                            <img
                                src={profile}
                                alt="profile"
                                className="profile"
                            />
                        </span>
                    </div>
                    <div>
                        <img
                            src={shape7}
                            alt="shape7"
                            className="shape7"
                        />
                    </div>
                 
                    <div>
                        <img
                            src={shape3}
                            alt="shape3"
                            className="shape3"
                        />
                    </div>

                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
