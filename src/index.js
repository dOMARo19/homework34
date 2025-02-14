import Post from './post'
import '@css/style.css'
import jsonData from './data'
import logo from './icon-square-big.png'
import $ from 'jquery';

const post = new Post('Webpack Post Title', logo)

// console.log('Post to string:' , post.toString())
$('pre').text(post.toString())
console.log('JSON:', jsonData)