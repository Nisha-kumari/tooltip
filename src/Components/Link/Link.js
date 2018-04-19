import React, { Component } from 'react';
import styles from './Link.css';

class Link extends Component {

    showPopup =()=> {
        var popupElement = document.querySelector('#popup');
        popupElement.style.display = 'block';
    }
    render() {

        return (
            <a href="#" id="popup" className={`download-link tooltip ${this.props.data.linkClass}`} data-tooltip={this.props.data.dataTooltip} onClick={this.showPopup}>
                            Download
                        </a>
        );
    }
}

export default Link;