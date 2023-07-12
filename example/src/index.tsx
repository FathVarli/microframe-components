// @ts-ignore
import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom/client'
import { MicroframeTextField } from 'microframe-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
      <MicroframeTextField />
    </div>
    <hr />
  </React.StrictMode>,
)
