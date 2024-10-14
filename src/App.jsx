import './App.css'
import Header from "./components/header.jsx";
import sideLeft from "./components/side-left.jsx";
import conScrOnOff from "./components/console-screen-on-off.jsx";
import sideRight from "./components/side-right.jsx";
function App() {

  return (
      <>
          {Header()}
          <div className='flex justify-between'>
              {sideLeft()}
              {conScrOnOff()}
              {sideRight()}
          </div>
      </>
  )
}

export default App
