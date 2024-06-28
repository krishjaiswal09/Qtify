import React from "react";
import styles from "../Hero/Hero.module.css";
import headphones from "../../assets/hero_headphones.png"; // Importing the image

function Hero() {
    return (
        <div className={styles.hero}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousand podcast episodes</h1>
            </div>
            <div>
                <img 
                    src={headphones} // Using the imported image
                    width={212}         
                    alt="headphone"
                />
            </div>
        </div>
    );
}

export default Hero;
