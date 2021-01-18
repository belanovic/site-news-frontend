import React from 'react';
import BootstrapCarousel from './BootstrapCarousel.js'
import Navigation from './Navigation.js';
export default function App() {    
    return (
        <div className = "wrapper">
            <header className = "header">
                <div className = "container header-container">
                    <Navigation />
                </div>
            </header>

            <main className = "main">
                <div className = "container main-container">
                    <BootstrapCarousel />
                </div>
            </main>

            <footer className = "footer">
                <div className = "container footer-container">

                </div>
            </footer>
        </div>
    )
}