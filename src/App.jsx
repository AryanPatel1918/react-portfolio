import { useState } from 'react'
import styles from "./App.module.css"
import { getImageUrl } from './utils'
import Navbar from './components/Navbar/Navbar'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <Navbar />
    </div>
  )
}