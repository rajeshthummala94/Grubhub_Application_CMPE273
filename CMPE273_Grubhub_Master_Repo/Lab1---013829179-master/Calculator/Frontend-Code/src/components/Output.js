import React, { Component } from 'react';
import styles from './Style.css';

class ResultComponent extends Component {
    render() {
        let { result } = this.props;
        return (
            <div className="result">
                <input className="resultScreen" type="text" value={result} style={{ width: 234, height: 50 }} />

            </div>
        )
            ;
    }
}


export default ResultComponent;