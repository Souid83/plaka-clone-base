import React from 'react'

export default function FloatingButton() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <a href="tel:+33600000000" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
        📞
      </a>
      <button
        onClick={() => alert('Ouverture du formulaire de contact')}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        ✉️
      </button>
    </div>
  )
}