import React from 'react';
import RTCell from './RTCell';

class RTRow extends React.Component {
  
    render(){
        const {idx, record, cols} = this.props;
        let className = "m-datatable__row " + ((idx%2 === 0) ? "m-datatable__row--even" : "");
        let rowIdx = idx;
        return (
            <tr data-row={idx} className={className} style={{height: "55px"}}>
            {
                cols.map(function (col, idx) {
                    return <RTCell key={idx} idx={idx} rowIdx={rowIdx} col={col} record={record}/>
                })
            }
            </tr>
        );
    }
}

export default RTRow;