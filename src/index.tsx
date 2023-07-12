import React from 'react'
import ReactDOM from 'react-dom/client'
import { MicroframeTextField } from 'microframe-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div style={{ width: '600px', margin: '20px auto' }}>
            <div>
                <h3>Default TextField</h3>
                <MicroframeTextField />
            </div>
            <hr />
        </div>
    </React.StrictMode>,
)