import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from './components/Home'
import Projects from "./components/Projects";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
//token ghp_qJN4GX0d
  return (
   
      <>

        {!loading ? (
          <div >
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
   

  );
}

export default App;