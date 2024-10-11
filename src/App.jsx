import { useState } from 'react'
import viteLogo from '/nintendo-switch.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <h1>Game Console Nintendo Switch</h1>
          <div className='flex'>
              <div className="button--left">
                  <div className='flex-grow'>
                      <button onClick={() => setCount((count) => count + 1)}>
                          Left
                      </button>
                      <button onClick={() => setCount((count) => count + 1)}>
                          Volume Dowm
                      </button>
                      <button onClick={() => setCount((count) => count + 1)}>
                          L-Joystick
                      </button>
                  </div>
                  <div>
                      <div>
                          <button onClick={() => setCount((count) => count + 1)}>
                              Up
                          </button>
                      </div>
                      <div>
                          <button onClick={() => setCount((count) => count + 1)}>
                              Right
                          </button>
                          <button onClick={() => setCount((count) => count + 1)}>
                              Down
                          </button>
                      </div>
                      <div>
                          <button onClick={() => setCount((count) => count + 1)}>
                              Left
                          </button>
                      </div>
                  </div>
                  <div>
                      <button onClick={() => setCount((count) => count + 1)}>
                          Screenshot
                      </button>
                  </div>
              </div>
              <div>
                  <button onClick={() => setCount((count) => count + 1)}>
                      On/Off
                  </button>
                  <div target="_blank">
                      <img src={viteLogo} className='w-[833px] h-[344.61px]' alt="Vite logo"/>
                  </div>
              </div>
              <div className="button--right">
                  <div>
                      <button onClick={() => setCount((count) => count + 1)}>
                          Right
                      </button>
                      <button onClick={() => setCount((count) => count + 1)}>
                          Volume Up
                      </button>
                      <div>
                          <div>
                              <button onClick={() => setCount((count) => count + 1)}>
                                  X
                              </button>
                          </div>
                          <div>
                              <button onClick={() => setCount((count) => count + 1)}>
                                  A
                              </button>
                              <button onClick={() => setCount((count) => count + 1)}>
                                  B
                              </button>
                          </div>
                          <div>
                              <button onClick={() => setCount((count) => count + 1)}>
                                  Y
                              </button>
                          </div>
                      </div>
                  </div>
                  <div>
                      <button onClick={() => setCount((count) => count + 1)}>
                          R-Joystick
                      </button>
                  </div>
                  <div>
                      <button onClick={() => setCount((count) => count + 1)}>
                          Home
                      </button>
                  </div>
              </div>
          </div>
      </>
  )
}

export default App
