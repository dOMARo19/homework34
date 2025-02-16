import Post from './post'
import '@css/style.css'
import '@less/style.less'
import '@sass/style.sass'
import '@sass/style.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'

import jsonData from './data'
import logo from './icon-square-big.png'
import $ from 'jquery';

import '../lodash'

const post = new Post('Webpack Post Title', logo)

// console.log('Post to string:' , post.toString())
$('pre').addClass('code').text(post.toString())
console.log('JSON:', jsonData)

async function start () {
    return await new Promise((r) => setTimeout(() => r('Async done.'), 2000))
}

start().then((res) => console.log(res))

const App = () => (
    <div className="container">
      <h1>Webpack training</h1>
    
    <div className="logo"/>
    <pre/>

    <div className="less-demo">
      <h2>Less Demo</h2>
    </div>
    <div className="sass-demo">
      <h3>Sass Demo</h3>
    </div>
    <div className="scss-demo">
      <h4>SCSS Demo</h4>
    </div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
