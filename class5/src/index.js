import React from 'react';
import ReactDOM from 'react-dom';

let abc = 4545;

const Hi = ({ img, flag, name, date, time }) =>  (
    <div>
      <span>{(flag) ? "it is true" : "it is false"}</span> <br />
      <b>{name}</b> <br />
      <span> {date} - {time} </span>
      <br />
      <img width="300px" src={img}></img>

      <br />
      <br />
      <br />
    </div>
  );

ReactDOM.render(
  <p>
    <Hi name="Malik" flag={true} date="1-Dec-2020" time="10:30 am" img="https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg" />
    <Hi name="Asim" date="1-Dec-2020" time="10:00 am" img="https://upload.wikimedia.org/wikipedia/commons/2/25/2018_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282018-11-02%29_01.jpg" />
  </p>
  , document.querySelector('#root'));
