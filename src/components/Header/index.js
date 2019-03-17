import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import './styles.scss';

const grabElement = (e) => document.querySelector(e).offsetTop;

const ListItem = ({label, page, link}) => (
    <li className="header-nav__list-item">
        <a className={classnames('header-nav__list-link', { 'header-nav__list-link--active': page === link })} href={`#${link}`}>{label}</a>
    </li>
)

const Header = () => {
    const [ page, setPage ] = useState(null);

    const handleScroll = (e) => {
        const scroll = window.scrollY + 100;
        if (scroll >= grabElement('.contact') - 300){
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
                    <ListItem label="About" page={page} link="about"/>
                    <ListItem label="Projects" page={page} link="projects"/>
                    <ListItem label="Contact" page={page} link="contact"/>
                </ul>
            </div>
        </header>
    );
};






export default Header;