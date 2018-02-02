import React from 'react';
import RTColumn from './RTColumn';
import RTBody from './RTBody';
import Paginator from './Paginator';
import './assets/css/datatable.css';

class DataTable extends React.Component {

    constructor(props){
        super(props);

        let {config, datasource} = props;
        let sortInfo = config.sortDefault ? config.sortDefault : {property: "", direction: "ASC"};

        this.state = {
            sortInfo: sortInfo,
            config: config,
            datasource: datasource
        }
    }

    componentWillReceiveProps(nextProps){
        let {datasource} = nextProps;
        this.setState({ datasource: datasource });
    }

    sortData(property){
        console.log("sort by: ", property);
        let {sortInfo, datasource} = this.state;
        if(sortInfo.property === property){
            sortInfo.direction = (sortInfo.direction === "ASC") ? "DESC" : "ASC";
        }
        else{
            sortInfo.property = property;
            sortInfo.direction = "ASC";
        }
        datasource.sort(function(a, b){
            let keyA = a[property],
                keyB = b[property];
            // Compare
            if(sortInfo.direction === "ASC" && keyA < keyB) return -1;
            if(sortInfo.direction === "ASC" && keyA > keyB) return 1;
            if(sortInfo.direction === "DESC" && keyA > keyB) return -1;
            if(sortInfo.direction === "DESC" && keyA < keyB) return 1;
            return 0;
        });
        this.setState({sortInfo: sortInfo});
    }
    
    goToPage(paged){
        console.log("Datable goToPage: ", paged);
        let {config} = this.state;
        config.paged = paged;
        this.setState({config: config});
    }
    
    changePageSize(size){
        console.log("Page size: ", size);
        let {config} = this.state;
        config.rowsPerPage = size;
        config.paged = 1;
        this.setState({config: config});
    }
   
    render(){
        const {config, datasource, sortInfo} = this.state;
        let filter = config.hasOwnProperty('filter') ? config.hasOwnProperty('filter') : false;
        if(typeof config === 'undefined' || typeof datasource === 'undefined' || !config.cols || datasource.length === 0) return null;
        return (
            <div className="m_datatable m-datatable m-datatable--default m-datatable--loaded">
                <table className="m-datatable__table" style={{display: "block", height: "auto", overflowX: "auto"}}>
                    <RTColumn filter={filter} cols={config.cols} sortInfo={sortInfo} sortData={this.sortData.bind(this)} />
                    <RTBody {...this.state}/>
                </table>
                <Paginator
                    paged={config.paged}
                    rowsPerPage={config.rowsPerPage}
                    totalRecord={datasource.length}
                    goToPage={this.goToPage.bind(this)}
                    changePageSize={this.changePageSize.bind(this)}
                />
            </div>  
        );
    }
}

export default DataTable;