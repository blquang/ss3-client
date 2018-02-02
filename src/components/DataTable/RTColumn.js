import React from 'react';

const SortControl = ({col, sortInfo}) => {
    if ( col.sortable && sortInfo.property === col.property ) {
        return (sortInfo.direction === "ASC") ? <i className="la la-arrow-up"></i> : <i className="la la-arrow-down"></i>;
    }
    return null;
}

class RTColumn extends React.Component {

    sortData(col){
        if(col.sortable){
            this.props.sortData(col.property);
        }
    }

    cellDecoration(decorator){
        let className = "";
        let style = {};
        let cellClassName = "";
        let cellStyle = {};
        
        if ( typeof decorator === 'function' ) {
            try {
                let decoration = decorator.call();

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
        const {cols, filter, sortInfo} = this.props;
        return (
            <thead className="m-datatable__head">
                <tr className="m-datatable__row" style={{height: "53px"}}>
                {
                     cols.map(function(col,idx) {
                        let decoration = this.cellDecoration(col.decorator);
                        if(col.sortable){
                            decoration.className += " m-datatable__cell--sort";
                        }
                        return (
                            <th data-field={col.property} key={idx} className={decoration.className} style={decoration.style} onClick={this.sortData.bind(this, col)}>
                                <span className={decoration.cellClassName} style={decoration.cellStyle}>
                                    {col.header}
                                    <SortControl col={col} sortInfo={sortInfo}/>
                                </span>
                            </th>
                        )
                    }.bind(this))
                }
                </tr>
                {
                    filter ?
                        <tr className="filters m-datatable__row">
                        {
                            cols.map(function(col,idx) {
                                let decor = this.cellDecoration(col.decorator);
                                return (
                                    <td data-field={col.property} key={idx} className={decor.className} style={decor.style}>
                                        {!col.noFilter ? <input type="text" className="form-control" name={col.property} /> : null}
                                    </td>
                                )
                            }.bind(this))
                        }
                        </tr>
                        : null
                }
            </thead>
        );
    }
}

export default RTColumn;