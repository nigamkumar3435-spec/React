import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <button type="button" class="btn-solid theme-primary">Primary</button>
        <button type="button" class="btn-outline theme-accent">Accent</button>
        <button type="button" class="btn-outline theme-danger">Danger</button>
        <button type="button" class="btn-subtle theme-warning">Warning</button>
        <button type="button" class="btn-text theme-info">Info</button>
        <button type="button" class="btn-solid theme-inverse">Inverse</button>
        <button type="button" class="btn-text theme-secondary">Secondary</button>
        <button type="button" class="btn-solid theme-primary">
  Notifications <span class="badge theme-danger">4</span>
</button>
    </div>
  )
}

export default App
