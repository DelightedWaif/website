import styles from '../styles/section_item.module.css';
import React, { useState, useRef, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithub } from 'react-icons/fa';

const SectionItem = ({ description, image, title, subtitle, children, subimages, git = false }) => {

    return <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className={styles.SectionItem}>
            <div className={styles.image}>
                <img className={styles.mainImage} src={image} alt="img" />
                <div className={styles.imageGroup}>
                    {subimages &&
                        subimages.map((item, index) => {
                            return <img key={index} className={styles.subimage} src={item} alt={index} />
                        })
                    }
                </div>
            </div>
            <div className={styles.sectionDescription}>
                <div className={styles.itemHeading}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <p className={styles.description}>{description}</p>
                <div className={styles.techList}>
                    {children}
                </div>
            </div>
            {git != false &&
                <a href={git}>
                    <FaGithub className={styles.icon} />
                </a>
            }
        </div>
    </ScrollAnimation>
}

export default SectionItem;
