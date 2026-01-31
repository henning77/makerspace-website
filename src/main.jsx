import React from 'react'
import ReactDOM from 'react-dom/client'
import MakerSpaceWebsite from './MakerSpaceWebsite.jsx'

// Storage shim using localStorage
window.storage = {
  async get(key, isGlobal = false) {
    try {
      const value = localStorage.getItem(key);
      return value ? { value } : null;
    } catch (e) {
      return null;
    }
  },
  async set(key, value, isGlobal = false) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  },
  async delete(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MakerSpaceWebsite />
  </React.StrictMode>
)
