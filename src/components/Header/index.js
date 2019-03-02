import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import './styles.scss';

const Header = () => {
    const [ page, setPage ] = useState(null);

    const grabElement = (e) => {
        return (
            document.querySelector(e).offsetTop
        ) 
    }

    const handleScroll = (e) => {
        const scroll = window.scrollY;
        
        if (scroll >= grabElement('.contact')){
            setPage('contact');
        } else if (scroll >= grabElement('.projects')){
            setPage('projects');
        } else if (scroll >= grabElement('.about')) { 
            setPage('about');
        } else {
            setPage(null)
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <header className="header">
            <div className="header__bar header__bar--first"></div>
            <div className="header__bar header__bar--second"></div>
            <div className="header-nav">
                <a href="#">
                    <img className="header-nav__face" src="/images/Face.svg" />
                </a>
                <ul className="header-nav__list">
                    <li className="header-nav__list-item">
                        <a className={classnames('header-nav__list-link', { 'header-nav__list-link--active': page === 'about' })} href="#about">About</a>
                    </li>
                    <li className="header-nav__list-item">
                        <a className={classnames('header-nav__list-link', { 'header-nav__list-link--active': page === 'projects' })} href="#projects">Projects</a>
                    </li>
                    <li className="header-nav__list-item">
                        <a className={classnames('header-nav__list-link', { 'header-nav__list-link--active': page === 'contact' })} href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;