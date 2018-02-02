import React from 'react'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

class DateTime extends React.Component {
    componentDidMount(){
        if( this.props.defaultValue ){
            var defaultValue = this.props.defaultValue;
            if( this.props.dateFormat !== false ){
                var formatString = this.getFormats(this.props).datetime;
                defaultValue = Datetime.moment(defaultValue).format(formatString);
            }
            if( this.props.onChange ){
                this.props.onChange(defaultValue);
            }
        }
    }

    handleChange = (datetime) => {
        var formatString = this.getFormats(this.props).datetime;
        if( this.props.onChange ){
            this.props.onChange(datetime.format(formatString));
        }
    }

    getFormats = ( props ) => {
        var formats = {
                date: props.dateFormat || '',
                time: props.timeFormat || ''
            },
            locale = this.localMoment( props.date, null, props ).localeData()
        ;

        if ( formats.date === true ) {
            formats.date = locale.longDateFormat('L');
        }
        else if ( this.getUpdateOn(formats) !== 'days' ) {
            formats.time = '';
        }

        if ( formats.time === true ) {
            formats.time = locale.longDateFormat('LT');
        }

        formats.datetime = formats.date && formats.time ?
            formats.date + ' ' + formats.time :
            formats.date || formats.time
        ;

        return formats;
    }

    localMoment = ( date, format, props ) => {
        props = props || this.props;
        var momentFn = props.utc ? Datetime.moment.utc : Datetime.moment;
        var m = momentFn( date, format, props.strictParsing );
        if ( props.locale )
            m.locale( props.locale );
        return m;
    }

    getUpdateOn = ( formats ) => {
        if ( formats.date.match(/[lLD]/) ) {
            return 'days';
        }
        else if ( formats.date.indexOf('M') !== -1 ) {
            return 'months';
        }
        else if ( formats.date.indexOf('Y') !== -1 ) {
            return 'years';
        }

        return 'days';
    }

    render(){
        var date = new Date();
        var yesterday = Datetime.moment(date).subtract(1, 'day');

        var valid = (current) => {
            return current.isAfter(yesterday);
        };
        const { onChange, ...atts } = this.props;
        return (<Datetime isValidDate={valid} {...atts}  onChange={(val)=>this.handleChange(val)}/>);
    }
}

DateTime.defaultProps = {
    timeFormat: "HH:mm",
    dateFormat: "YYYY-MM-DD"
}

export default DateTime;