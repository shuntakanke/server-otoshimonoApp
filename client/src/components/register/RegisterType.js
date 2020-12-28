import React,{useState} from 'react';
import { Link, withRouter} from 'react-router-dom';
import { connect} from 'react-redux';
import { setType } from '../../actions/registerForm';

// img⬇️
import homeIcon from '../../img/home_circle_icon_137496.png';
import bag from '../../img/suitcase.svg';
import key from '../../img/key.svg';
import credit from '../../img/credit-card.svg';

const RegisterType = ({setType, history}) => {
  const [radio, setRadio] = useState("shunta");

  const onSubmit =  e => {
    e.preventDefault();
    setType(radio, history);
  }

  return (<div className="screen">
  <div className="container">
    <h1>何を拾われましたか？Radio:  {radio} </h1>
  <form className="form" onSubmit={e => onSubmit(e)}>
    <div className="radio-tile-group">
{/* 3つだけでテストしてるnow */}
      <div className="input-container">
        <input id="walk" className="radio-button" type="radio" name="radio"
        checked={radio ==="bag"}
        value="bag"
        // ⬇️のonChangeをinputのなかに何回も繰り返し書いてるのを、一回で住むようにrefacteringする(udemyMERN参考！)
        onChange={(e) => {
          setRadio(e.target.value);
        }} />
        <div className="radio-tile">
          <div className="icon walk-icon">
            <img src={bag} alt="bag"/>
          </div>
          <label for="walk" className="radio-tile-label">bag</label>
        </div>
      </div>
  
      <div className="input-container">
        <input id="bike" className="radio-button" type="radio" name="radio"
        checked={radio === "key"}
        value="key"
        onChange={(e) => {
          setRadio(e.target.value);
        }} />
        <div className="radio-tile">
          <div className="icon bike-icon">
            <img src={key} alt="key"/>
          </div>
          <label for="bike" className="radio-tile-label">key</label>
        </div>
      </div>
  
      <div className="input-container">
        <input id="drive" className="radio-button" type="radio" name="radio"
        checked={radio ==="credit"}
        value="credit"
        onChange={(e) => {
          setRadio(e.target.value);
        }} />
        <div className="radio-tile">
          <div className="icon car-icon">
            <img src={credit} alt="credit"/>
          </div>
          <label for="drive" className="radio-tile-label">credit</label>
        </div>
      </div>
{/*  */}
      <div className="input-container">
        <input id="fly" className="radio-button" type="radio" name="radio" />
        <div className="radio-tile">
          <div className="icon fly-icon">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.18 9"/>
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <label for="fly" className="radio-tile-label">Fly</label>
        </div>
      </div>

      <div className="input-container">
        <input id="fly" className="radio-button" type="radio" name="radio" />
        <div className="radio-tile">
          <div className="icon fly-icon">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.18 9"/>
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <label for="fly" className="radio-tile-label">Fly</label>
        </div>
      </div>

      <div className="input-container">
        <input id="fly" className="radio-button" type="radio" name="radio" />
        <div className="radio-tile">
          <div className="icon fly-icon">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.18 9"/>
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <label for="fly" className="radio-tile-label">Fly</label>
        </div>
      </div>

      <div className="input-container">
        <input id="fly" className="radio-button" type="radio" name="radio" />
        <div className="radio-tile">
          <div className="icon fly-icon">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.18 9"/>
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <label for="fly" className="radio-tile-label">Fly</label>
        </div>
      </div>

      <div className="input-container">
        <input id="fly" className="radio-button" type="radio" name="radio" />
        <div className="radio-tile">
          <div className="icon fly-icon">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.18 9"/>
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <label for="fly" className="radio-tile-label">Fly</label>
        </div>
      </div>

      <div className="input-container">
        <input id="fly" className="radio-button" type="radio" name="radio" />
        <div className="radio-tile">
          <div className="icon fly-icon">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.18 9"/>
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <label for="fly" className="radio-tile-label">Fly</label>
        </div>
      </div>

    </div> 
    <input type="submit" value="submit" />
  </form>
    

  </div>
  <div><Link to="/"><img src={homeIcon} alt="homeIcon"/></Link></div>
</div> 
  )
}

export default connect(null,{setType})(withRouter(RegisterType));