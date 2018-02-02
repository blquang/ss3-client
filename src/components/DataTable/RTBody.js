import React from 'react';
import RTRow from './RTRow';

class RTBody extends React.Component {
  
    render(){
        const {config, datasource} = this.props;
        return (
            <tbody className="m-datatable__body">
                {
                     datasource.map(function(data,idx) {
                        let startIdx = (config.paged - 1) * config.rowsPerPage;
                        let endIdx = startIdx + (config.rowsPerPage - 1);
                        if(idx < startIdx || idx > endIdx) return null;
                        return (
                            <RTRow key={idx} idx={idx} record={data} cols={config.cols}/>
                        )
                    })
                }
            </tbody>
        );
    }
}

export default RTBody;