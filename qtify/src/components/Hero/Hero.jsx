import React from "react";
import styles from "../Hero/Hero.module.css"

function Hero(){
    <div className={styles.hero}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousand podcast episodes</h1>
        </div>
        <div>
            <img 
            src={require("../../assets/hero_headphones.png")}
            width={212}         
            alt="headphone"
            />
        </div>
    </div>
}

export default Hero;