import React from "react";
import design from '../../images/design.svg'
import * as styles from './banner.module.scss';



const Banner = ({welcomeMessage}) => (
    <section className={styles.container}>
        <div className={styles.imageMobile} >
            <img src={design} alt='design' loading='lazy' height={74}/>
        </div>
        <div className={styles.welcome}>
            <p>Hi, Welcome!<br />
                <span>
                    {welcomeMessage}
                </span>
            </p>
            <button>Book an Appointment</button>
        </div>
        <div className={styles.imageContainer} >
            <img src={design} alt='design' loading='lazy' height={200}/>
        </div>
    </section>
)

export default Banner;
