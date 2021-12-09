import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light'); //it tells whether our app is in dark mode or light mode

  const [mode1, setmode1] = useState('light');
  const [mode2, setmode2] = useState('light');
  const [mode3, setmode3] = useState('light');
  // const [mode4, setmode4] = useState('violet'); 

  // const [textmode, settextmode] = useState('dark');

  const [alert, setAlert] = useState(null);

  const alertShow = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#1b2d4c';
      alertShow("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      alertShow("Light mode has been enabled", "success");
    }
  }


  const CustomTheme = () => {
    if (mode1 === 'light') {
      setmode1('green');
      document.body.style.backgroundColor = '#198754';
    }
    else {
      setmode1('white');
      document.body.style.backgroundColor = 'white';
    }
  }

  const CustomTheme1 = () => {
    if (mode2 === 'light') {
      setmode2('yellow');
      document.body.style.backgroundColor = 'yellow';
    }
    else {
      setmode2('white');
      document.body.style.backgroundColor = 'white';
    }
  }

  const CustomTheme2 = () => {
    if (mode3 === 'light') {
      setmode3('red');
      document.body.style.backgroundColor = 'red';
    }
    else {
      setmode3('white');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="CodeWithMixxz" mode={mode} mode1={mode1} mode2={mode2} mode3={mode3} home="Home" CustomTheme={CustomTheme} CustomTheme1={CustomTheme1} CustomTheme2={CustomTheme2} togglemode={togglemode} about="AboutUs" contact="ContactUs" />
        <Alert alert={alert} />
        <div className="container">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm alertShow={alertShow} mode={mode} mode1={mode1} mode2={mode2} mode3={mode3} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
