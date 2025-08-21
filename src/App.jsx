import { useState } from 'react'
import styles from "./App.module.css"
import { getImageUrl } from './utils'
import Navbar from './components/Navbar/Navbar'


export default function App() {
  


  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  )
}