import React from 'react'
import './styles.css';
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-babypink">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand pacifico-font" href="#"> SwiftSavor </a>
    <ul class="navbar-nav me-auto mb-1 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact us</a>
        </li>
      </ul>
      <a class="text-dark p-1 h7" href="/login">Login </a>/<a class="text-dark p-1 h7" href="/register"> Register</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar