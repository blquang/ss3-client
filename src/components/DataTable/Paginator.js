import React from 'react';

const Pagination = ({paged, pages, onClick}) => {
    let showitems = 4;
    let showpages = '';
    let prev = paged - 1;
    let next = paged + 1;
    let output_page = [];

    // first, prev pages
    if( paged === 1 ){
        // disabled                
        output_page.push(<li key="first"><a className="m-datatable__pager-link m-datatable__pager-link--first m-datatable__pager-link--disabled" disabled="disabled" title="First"><i className="la la-angle-double-left"></i></a></li>);
        output_page.push(<li key="prev"><a className="m-datatable__pager-link m-datatable__pager-link--prev m-datatable__pager-link--disabled" disabled="disabled" title="Previous"><i className="la la-angle-left"></i></a></li>);        
    }
    else{
       // enabled              
       output_page.push(<li key="first"><a className="m-datatable__pager-link m-datatable__pager-link--first" title="First" onClick={()=>onClick(1)}><i className="la la-angle-double-left"></i></a></li>);
       output_page.push(<li key="prev"><a className="m-datatable__pager-link m-datatable__pager-link--prev" title="Previous" onClick={()=>onClick(prev)}><i className="la la-angle-left"></i></a></li>);
    }
   
    // show ...
    if( paged > showitems ) {
        output_page.push(<li key="more-prev"><a className="m-datatable__pager-link m-datatable__pager-link--more-prev" title="More pages" onClick={()=>onClick(paged - showitems)}><i className="la la-ellipsis-h"></i></a></li>);
    }

    // show page number
    for (let i=1; i <= pages; i++) {
        if (1 !== pages &&( !(i >= paged+showitems || i <= paged-showitems) || pages <= showitems )) {
            if( paged === i ) {
                output_page.push(<li key={i}><a className="m-datatable__pager-link m-datatable__pager-link-number m-datatable__pager-link--active" title={i}>{i}</a></li>);
            } else {
                output_page.push(<li key={i}><a className="m-datatable__pager-link m-datatable__pager-link-number" title={i} onClick={()=>onClick(i)}>{i}</a></li>);
            }
            showpages = i;
        }
    }

    // show ...
    if( paged < pages-1 && showpages < pages ){
        showpages = showpages + 1;
        output_page.push(<li key="more-next"><a className="m-datatable__pager-link m-datatable__pager-link--more-next" title="More pages" onClick={()=>onClick(paged + showitems)}><i className="la la-ellipsis-h"></i></a></li>);
    }

    //next, end page
    if( paged === pages ) {
        // disabled
        output_page.push(<li key="next"><a className="m-datatable__pager-link m-datatable__pager-link--next m-datatable__pager-link--disabled" disabled="disabled" title="Next"><i className="la la-angle-right"></i></a></li>);
        output_page.push(<li key="last"><a className="m-datatable__pager-link m-datatable__pager-link--last m-datatable__pager-link--disabled" disabled="disabled" title="Last"><i className="la la-angle-double-right"></i></a></li>);
    }
    else{
        //enabled
        output_page.push(<li key="next"><a className="m-datatable__pager-link m-datatable__pager-link--next" title="Next" onClick={()=>onClick(next)}><i className="la la-angle-right"></i></a></li>);
        output_page.push(<li key="last"><a className="m-datatable__pager-link m-datatable__pager-link--last" title="Last" onClick={()=>onClick(pages)}><i className="la la-angle-double-right"></i></a></li>);
    }

    return output_page;
}

class Paginator extends React.Component {

    /*componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: ", nextProps);
    }*/

    render(){
        const {paged, totalRecord, rowsPerPage, goToPage, changePageSize} = this.props;
        let totalPage = Math.ceil(totalRecord / rowsPerPage);
        let startIdx = (paged - 1) * rowsPerPage + 1;
        let endIdx = startIdx + (rowsPerPage - 1);
        endIdx = (endIdx > totalRecord) ? totalRecord : endIdx;
        return (
            <div className="m-datatable__pager m-datatable--paging-loaded clearfix">
                {
                    (rowsPerPage >= totalRecord) ? null :
                    <ul className="m-datatable__pager-nav">
                        <Pagination paged={paged} pages={totalPage} onClick={goToPage} />
                    </ul>
                }
                <div className="m-datatable__pager-info">
                    <div className="btn-group bootstrap-select m-datatable__pager-size" style={{width: "70px"}}>
                       <select className="selectpicker m-datatable__pager-size" title="Select page size" data-width="70px" data-selected="10" tabIndex="-98" onChange={(ev)=>changePageSize(ev.target.value)}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <span className="m-datatable__pager-detail">Displaying {startIdx} - {endIdx} of {totalRecord} records</span>
                </div>
            </div>
        );
    }
}

export default Paginator;