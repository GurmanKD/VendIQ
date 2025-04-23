<<<<<<< HEAD
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

<<<<<<< HEAD
  // export default App;
>>>>>>> 9aecfb3 (first react commit)


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
