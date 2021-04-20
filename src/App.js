//import logo from './logo.svg';
import './App.css';
import Unity, { UnityContext } from 'react-unity-webgl'
import {useState} from 'react'


function App() {
  const [progression, setProgression] = useState(0)
  //const [isLoading, setIsLoading] = useState(true)
  //const [didError, setDidError] = useState(false)
  //const [errorMessage, setErrorMessage] = useState("")


  const unityContext = new UnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
  });

  unityContext.on('progress', (progression) => {
    setProgression(progression)
    
  })
 
  return (
      <div className='App'>
      <p>{`Loading... ${progression * 100}%`}</p>
      <Unity style={{height: "100vh", width: "100%"}} unityContext={unityContext}/>
      </div>
      
  );
}

export default App;
