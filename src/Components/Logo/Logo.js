import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0" style={{ width: '150px', height: '150px' }}>
            <Tilt className="Tilt br2 shadow-2" tiltMaxAngleX={55} tiltMaxAngleY={55}>
                <div className="Tilt-inner pa3" style={{height: '150px' }}>
                    <img style={{paddingTop: '10px'}} src={brain} alt="Logo" />
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;