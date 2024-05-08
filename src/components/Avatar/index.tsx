import React from 'react'
import avatar from '../../assets/avatar.jpg';
import styles from './Avatar.module.css';
const Avatar = () => {
    return (
        <div className={styles.box_avatar}>
            <p className={styles.avatart_image}>
                <img src={avatar} width={240} height={240} />
            </p>
            <p className={styles.avatar_name}>Linh </p>
            <p className={styles.avatar_caption}>Developemnt </p>
        </div>
    )
}

export default Avatar