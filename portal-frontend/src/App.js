<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/body/Main';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
=======
  // import './App.css';
  // import Header from './components/Header';
  // import Body from './components/body/Main';
  // import Footer from './components/Footer';
  // import '@fortawesome/fontawesome-free/css/all.min.css';
  // import Dashboard from './components/Home_main/home'
  // function App() {
  //   return (
  //     <div className='App'>
  //       {/* <Header />
  //       <Body />
  //       <Footer /> */}
  //       <Dashboard />
  //     </div>
  //   );
  // }
=======
// import './App.css';
// import Header from './components/Header';
// import Body from './components/body/Main';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <Body />
//     </div>
//   );
// }
>>>>>>> fcd77a5 (merge conflict resolve)
=======
import './App.css';
import Header from './components/Header';
import Body from './components/body/Main';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  );
}
>>>>>>> cee0b4b (requirements.txt file)

<<<<<<< HEAD
  // export default App;
>>>>>>> 9aecfb3 (first react commit)

<<<<<<< HEAD

  // import "./styles.css";
  import Home from "./components/Home_main/Home/Home";
  // import About from "./Component/Home_main/About/About";
  import Skills from "./components/Home_main/skills/skill";
  import Navbar from "./components/Home_main/navbar/navbar";
  import TopNavbar from "./components/Home_main/navbar/topnavbar";  // Ensure you are using the correct component name if different
  import Project from "./components/Home_main/Projects/project";
  // import Contact from "./components";
  import BottomNavbar from "./components/Home_main/navbar/bottomnavbar";
  import Footer from "./components/Footer";
  // import Header from "./components/Header"; // Commented out as it's not being used
  
  export default function App() {
    return (
      <>
        {/* <Model /> */}
        {/* <Topnav /> */}
        <Home />
        {/* <About /> */}
        <Skills />
        <Project />
        {/* <Contact /> */}
        <div className="navC">
          <Navbar />
        </div>
        <Footer />
        <div className="navbar"> {/* Changed 'class' to 'className' */}
          <BottomNavbar />
        </div>
      </>
    );
  }
    
  
=======
export default App;
>>>>>>> 0882735 (appjs correct)
=======
export default function App() {
  return (
    <>
      {/* <Model /> */}
      {/* <Topnav /> */}
      <Home />
      {/* <About /> */}
      <Skills />
      <Project />
      {/* <Contact /> */}
      <div className='navC'>
        <Navbar />
      </div>
      <Footer />
      <div className='navbar'>
        {' '}
        {/* Changed 'class' to 'className' */}
        <BottomNavbar />
      </div>
    </>
  );
}

// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";


// import Home from "./components/Report/components/Home";
// import Contact from "./components/Report/components/Contact";
// import About from "./components/Report/components/About";
// import Nav from "./components/Report/components/Nav";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/contact" component={Contact} />
//         </Switch>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

>>>>>>> fcd77a5 (merge conflict resolve)
