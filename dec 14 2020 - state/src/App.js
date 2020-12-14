import './App.css';
import React from 'react';


function App() {

  let [num1, setNum1] = React.useState(0);
  let [data, setData] = React.useState({ theme: "Dark", room: 5 });

  const add = () => {
    setNum1(num1 + 1)
    console.log(num1);
  }

  const changeTheme = () => {
    if (data.theme === "Dark") {

      setData({ ...data, theme: "Light" })

    } else {
      setData({ ...data, theme: "Dark" })

    }
    console.log(data);
  }

  return (
    <div className="App">
      <h1> {num1}  </h1>
      <h1> {(num1 % 2 === 0) ? "even number" : "odd number"}  </h1>
      <button onClick={add} >Add</button>
      <br />
      <button onClick={changeTheme} >Change Theme </button>
      <h3>Theme: {data.theme}</h3>
      <h3>Room: {data.room}</h3>
    </div>
  );
}

export default App;
