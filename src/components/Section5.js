import React from "react";
import logo from './images/logo.png'

export default function Section5() {
    return (
        <div>
            <div className="footer">
              <div className="foot">
                <img
                src={logo} alt="logo" className="logo-foot"/>
              <p>Kevwe Gloria Okpoh</p>
              </div>
              <div className="icons-bottom">
                        <a href="https://www.linkedin.com/in/kevwe-okpoh/"><i class="fa fa-linkedin-square"
                            aria-hidden="true"></i></a>
                        <a href="https://github.com/kevwegloria"><i class="fa fa-github" aria-hidden="true"></i></a>
                        <a href="mailto:kevweglo@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/kevwegloria/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
            </div>
        </div>
    )
}