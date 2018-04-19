import React, { Component } from 'react';
import classNames from 'classnames';
import tableData from '../../../src/tableData.json';
import AlertBox from "../../Components/AlertBox/AlertBox";
import styles from './Table.css';
import Tooltip from "../Tooltip/Tooltip";



class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPopup:false,
            tooltipVisibility: false,
            tooltipData: '',
            tooltipStyle: {}
        };

    }
    handleClick = ()=>{
        if(!this.state.showPopup){
            document.addEventListener('click',this.handleClickOutside,false)
        }
        else {
            document.removeEventListener('click',this.handleClickOutside,false)
        }
        this.setState({ showPopup:!this.state.showPopup})
    };

    handleClickOutside= (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleClick();
    }

    render() {
        const {firstHeading,secondHeading} = this.props;
        return (
            <div>
            <table className={classNames(styles.fileTable, styles.mainTable)}>
                <tr className={styles.tableRow}>
                    <td className={classNames(styles.tableCol, styles.filename, styles.nameCol)}>{firstHeading}</td>
                    <td className={classNames(styles.tableCol, styles.filelink , styles.downloadCol)}>{secondHeading}</td>
                </tr>
                    {
                        tableData.map((val) => (
                            <tr className={styles.tableRow}>
                            <td className={classNames(styles.tableCol, styles.nameCol)} key={val.id}>{val.name}</td>
                            <td className={classNames(styles.tableCol ,styles.downloadCol)} ref={node =>{this.node=node;}}>
                                <a
                                    href="#"
                                    id={val.id}
                                    className={classNames(styles.downloadLink , styles.tooltip)}
                                    onClick={this.handleClick}
                                    onMouseOver={(e) => {
                                        this.setState({
                                            tooltipVisibility: true,
                                            tooltipData: val.dataTooltip,
                                            tooltipStyle: {left: `${e.target.getBoundingClientRect().x}px`, top: `${e.target.getBoundingClientRect().y}px`}
                                        })
                                    }}
                                    onMouseLeave={(e)=> {
                                        this.setState({
                                            tooltipVisibility: false,
                                            tooltipData: '',
                                            tooltipStyle: {}
                                        })
                                    }}
                                    ref={node =>{this.parentNode=node;}}
                                >
                                    Download
                                </a>
                            </td>
                            </tr>
                        ))
                    }
            </table>
                {this.state.showPopup &&(
                    <AlertBox/>
                )}
                {this.state.tooltipVisibility && <Tooltip
                    targetRef={this.parentNode}
                    content={this.state.tooltipData}
                styleVal={this.state.tooltipStyle}/>}

        </div>
        );
    }
}
export default Table;
