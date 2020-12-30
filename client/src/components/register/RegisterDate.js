import React,{useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect} from 'react-redux';
import { setDate } from '../../actions/registerForm';

// react-date-picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//  style="margin: 0 auto;" width="60%"
import homeIcon from '../../img/home_circle_icon_137496.png';
import dateImgSample from '../../img/register-date.png';


const RegisterDate = ({setDate,history}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const ExampleCustomInput = ({ value, onClick }) => (
    <button id="yoo" className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );

  const handleCalendarClose = () => setDate(selectedDate, history);

  return (<div className="screen">
            <div className="container">
              <h1>いつ拾われましたか？</h1>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                customInput={<ExampleCustomInput />}
                dateFormat="MM/dd"
                maxDate={new Date()}
                onCalendarClose={handleCalendarClose}/>
              {/* <img className="register-date-img" src={dateImgSample} alt="register-date" /> */}
            </div>
            <div><Link to="/"><img src={homeIcon} alt="homeIcon"/></Link></div>
          </div> 
  )
}

export default connect(null,{setDate})(withRouter(RegisterDate));