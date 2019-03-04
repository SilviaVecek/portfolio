import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Silvitko from './components/Silvitko';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
    render() {
        return (
            <div className="App">

                <Header />

                <Home>
                    <Silvitko className="silvitko--bottom"/>
                </Home>
                <About>
                    <Silvitko />
                </About>
                <Projects>
                    <Silvitko />
                </Projects>
                <Contact />
            </div> 
        );
    }
}

export default App;
