import React from 'react'
import { Link } from 'react-router-dom'

const Navuser = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-primary">
  <div class="container-fluid bg-info ">
    <Link class="nav-link" to="/">TODO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Add">Addpost</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Search">Search</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Delete">Delete</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
         
         
    </div>
  )
}

export default Navuser