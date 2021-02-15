import './App.css';
import BackgroundVideo from './BackgroundVideo'
import Bio from './Bio'
import Languages from './Languages'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Bio />
      <Languages />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;


// add video 
//https://medium.com/@RayyanX95/how-to-make-a-background-video-component-in-react-8725e32da272