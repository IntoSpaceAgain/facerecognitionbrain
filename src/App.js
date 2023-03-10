import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import Particles from './Components/Particles/Particles'
import "./App.css";

function App() {
    return (
        <div className="App">
            <Particles />          
            <Navigation />
            <Logo />
            <Rank />
            < ImageLinkForm />
            {/* <FaceRecognition />} */}
        </div>
    );
}

export default App;
