import React, { Component } from 'react';
import styles from './AlertBox.css';
import Button from "../Button/Button";


class AlertBox extends Component {

    render() {
        return (

            <div className={styles.popup} id="popup">
                <div className={styles.popupContents}>
                    <span className={styles.popupText}>Are you sure you want to download?</span>
                    <br/>
                    <Button
                        label="Okay!"
                    />
                </div>
            </div>
        );
    }
}
export default AlertBox;



