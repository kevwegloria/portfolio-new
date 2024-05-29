import React, { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import logo from './images/logo.png';
import { useEffect } from 'react';

const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <div className={`navigation ${visible ? '' : 'hidden'}`}>
            <div>
                <img
                    src={logo}
                    alt='logo'
                    className='logo'
                />
            </div>
            <div className='hamburger-container'>
                <div className='hamburger-wrapper'>
                    <div className={`custom-hamburger ${isOpen ? 'open' : ''}`}>
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
                <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                    
                    <li><a href="https://docs.google.com/document/d/14wgATc7pgcrsgcv2v_bDz3gPKBdAjv6-/edit">My Resume</a></li>
                    <p className='sayhello'>Say Hello</p>
                    <li><a href="mailto:kevweglo@gmail.com">kevweglo@gmail.com</a></li>
                    <div className="icons1">
                        <a href="https://www.linkedin.com/in/kevwe-okpoh/"><i class="fa fa-linkedin-square"
                            aria-hidden="true"></i></a>
                        <a href="https://github.com/kevwegloria"><i class="fa fa-github" aria-hidden="true"></i></a>
                        <a href="mailto:kevweglo@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/kevwegloria/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
