import React from 'react'
import FloatingButton from './components/FloatingButton'

function App() {
  return (
    <div className="font-sans">
      <header className="p-4 bg-black text-white text-center">PLAKA - Demo UI</header>
      <main className="p-8">
        <h1 className="text-3xl font-bold">Page d'accueil inspirée de PLAKA</h1>
        <p className="mt-4">Ce projet est une base React + Tailwind pour Bolt.</p>
      </main>
      <FloatingButton />
    </div>
  )
}

export default App