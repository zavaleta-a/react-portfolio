// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Main from "../src/views/main";
// import Projects from "./views/Projects";
// import Resume from "./views/Resume";
import About from "./views/about";
import Contact from "./views/contact";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {/* <NavBar /> */}
        <Main />
        {/* <Projects /> */}
        <About />
        {/* <Resume /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
