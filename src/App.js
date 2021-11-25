import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, Fragment } from 'react';
import HomeBg from './components/HomeBg';
import Header from './pages/Header';
import Hello from './pages/Hello';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HomeBg/>
                <Header/>
                <Fragment>
                    <Hello />
                    {/* <AboutMe /> */}
                    <Experience />
                    <Education />
                    <Project />
                    <Skills />
                    <Contact />
                    <Footer />
                </Fragment>
            </div>
        </BrowserRouter>
    );
}

export default App;
