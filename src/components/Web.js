import React from 'react';
import Producto from './Producto';
import Saludo from './Saludo';
import Footer from './Footer';
import { Route, Link } from 'react-router-dom'

function Web(){
  return (
    <div className="container">
      <Link to="/"> saludo </Link>
      <Link to="/producto">producto </Link>
      <Link to="/footer"> footer</Link>
      <Route exact path="/" component={Saludo} />
      <Route path="/producto" component={Producto} />
      <Route path="/footer" component={Footer} />
    </div>
  )
}
export default Web;