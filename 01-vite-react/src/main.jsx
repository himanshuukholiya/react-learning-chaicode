import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// we can directly create function and render it
function MyApp() {
    return (
        <h1>Hello from main.jsx MyApp function</h1>
    )
}

// we can create variable and call it as well
const anotherElement = (
    <a href="https://google.com/" target='_blank'>Visit Google</a>
)

// directly creating react object using .render()
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com/',
        target: '_blank'
    },
    'click me to visit google'
)

// you can also use variable directly
const anotherUser = "Himanshu"


createRoot(document.getElementById('root')).render(
    <>
    <MyApp />
    {/* because its a function we can also call it like function */}
    MyApp() {/* not recommended because of optimization */}
    </>
)

createRoot(document.getElementById('root')).render(
    anotherElement
)

createRoot(document.getElementById('root')).render(
    reactElement
)

createRoot(document.getElementById('root')).render(
    anotherUser
)

createRoot(document.getElementById('root')).render(
    <App />
)
