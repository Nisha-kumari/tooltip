import React, { Component } from 'react';
import styles from './Button.css';

class Button extends Component {

    render() {
        return (
            <button className={styles.confirmBtn} onClick={this.hidePopup}>{this.props.label}</button>
        );
    }
}

export default Button;