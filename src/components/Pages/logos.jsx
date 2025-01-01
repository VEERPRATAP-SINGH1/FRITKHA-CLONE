import React, { useState, useEffect } from 'react';
import "../../styles/logos.css";

const LogoCarousel = () => {
    const logos = [
        "Images/lgs/a.png",
        "Images/lgs/b.png",
        "Images/lgs/d.png",
        "Images/lgs/e.png"
    ];

    const [currentLogos, setCurrentLogos] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLogos(prevLogos => {
                const newStartIndex = (prevLogos[0] + 3) % logos.length;
                return [newStartIndex, (newStartIndex + 1) % logos.length, (newStartIndex + 2) % logos.length];
            });
        }, 3000); // Change logos every 3 seconds

        return () => clearInterval(interval);
    }, [logos.length]);

    return (
        <div className="logo-carousel-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logo-carousel-inner">
                            {currentLogos.map(index => (
                                <div className="single-logo-item" key={index}>
                                    <img src={logos[index]} alt={`Logo ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
