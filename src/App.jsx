import React, { useState } from 'react'

function ColorPickerHooks() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))

  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))

  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100))

  function randomColor() {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
  }

  document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}% )`

  return (
    <main>
      <div>
        {/* header */}
        <h1 className="stripe-text>">Color Pickers</h1>

        {/* add sliders */}
        <section>
          <label>
            <h2>
              <div className="rainbow-letters">
                <span>H</span>
                <span>U</span>
                <span>E</span>
              </div>
              <input
                name="Hue"
                type="range"
                value={hue}
                min="0"
                max="360"
                onChange={(event) => setHue(event.target.value)}
              />
            </h2>
          </label>

          <label>
            <h2>
              <div className="fadingColor">
                <span>S</span>
                <span>A</span>
                <span>T</span>
                <span>U</span>
                <span>R</span>
                <span>A</span>
                <span>T</span>
                <span>I</span>
                <span>O</span>
                <span>N</span>
              </div>
              <input
                name="Saturation"
                type="range"
                value={saturation}
                min="0"
                max="100"
                onChange={(event) => setSaturation(event.target.value)}
              />
            </h2>
          </label>
          <h2>
            <div className="brightLetter">
              <span>L</span>
              <span>I</span>
              <span>G</span>
              <span>H</span>
              <span>T</span>
              <span>N</span>
              <span>E</span>
              <span>S</span>
              <span>S</span>
            </div>
            <input
              name="Lightness"
              type="range"
              value={lightness}
              min="0"
              max="100"
              onChange={(event) => setLightness(event.target.value)}
            />
          </h2>
        </section>
      </div>
      <footer>
        <button onClick={randomColor}> Pick A Random Color</button>
      </footer>
    </main>
  )
}

export function App() {
  return <ColorPickerHooks />
}
