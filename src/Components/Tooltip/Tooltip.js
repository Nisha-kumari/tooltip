import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Tooltip.css';


class Tooltip extends Component {
    render() {

        const {content, styleVal} = this.props;
        return (
            <div
                className={classNames(styles.wrapper,styles.styleVal)}
                style={{left: styleVal.left, top: styleVal.top}}
            >
                <span
                    className={classNames(styles.tooltipArrow)}
                />
                <span
                    className={classNames(styles.tooltipContent)}
                >{content}</span>
            </div>
        );
    }
}
export default Tooltip;



