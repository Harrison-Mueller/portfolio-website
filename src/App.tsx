// import { useState } from 'react'
import Scene from "./components/Scene.tsx"
import { Canvas } from "@react-three/fiber";
import HomePage from "./components/HomePage.tsx"
import AboutPage from "./components/AboutPage.tsx"
import ProjectsPage from "./components/ProjectsPage.tsx"
import ContactPage from "./components/ContactPage.tsx"
import Provider from "./components/Provider.tsx"
import './css/App.css'

function App() {
  return (
    <Provider>
      <div className = "canvas-container">
        <Canvas shadows>
          <Scene />
        </Canvas>
        <div className="canvas-edge-gradient"/>
      </div>

      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </Provider>
  )
}

export default App
