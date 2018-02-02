import React from 'react';

class RTCell extends React.Component {
  
    renderElement( value, rowIdx ) {
        let renderer = this.props.col.renderer;
        
        if ( typeof renderer === 'function' ) {
            try {
                return renderer.call({value, rowIdx});
            } catch ( e ) {
                return null;
            } 
        }
    }

    cellDecoration(value) {
        var decorator =  this.props.col.decorator;
        var decoration = null;
        var className = "";
        var style = {};
        var cellClassName = "";
        var cellStyle = {};
        
        if ( typeof decorator === 'function' ) {
            try {
                decoration = decorator.call(value);

                if ( typeof decoration === 'string' ) {
                    className = decoration;
                } else  {
                    className = decoration.className || "m-datatable__cell";
                    style = decoration.style || {};
                    cellClassName = decoration.cellClassName || "";
                    cellStyle = decoration.cellStyle || {};
                }
            } catch ( e ) {
                throw new Error("Error on decorator: " + e);
            }
        } else if ( typeof decorator === 'string' ) {
            className = decorator;
        }
        return {
            className : className,
            style : style,
            cellClassName : cellClassName,
            cellStyle : cellStyle
        }
    }

    render(){
        const {record, col, rowIdx} = this.props;
        let renderedValue = record[col.property];
        
        if ( col.renderer ) {
            renderedValue = this.renderElement( renderedValue, rowIdx );
        }
        let decoration = this.cellDecoration(record[col.property]);
        return (
            <td data-field={col.property} className={decoration.className} style={decoration.style}>
                <span className={decoration.cellClassName} style={decoration.cellStyle}>{renderedValue}</span>
            </td>
        );
    }
}

export default RTCell;