import React from 'react'
import logo from '../src/Assets/Imgs/neon_logo.png'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <div className='d-block d-lg-none'>
                    <img src={logo} width='100' alt="LOGO" />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item me-4">
                            <p class="fs18 fw-bold text-black mb-0" href="#">HOME</p>
                        </li>
                        <li class="nav-item me-4">
                            <p class="fs18 fw-bold text-black mb-0" aria-current="page" href="#">DESIGN YOUR OWN SIGN</p>
                        </li>
                        <li class="nav-item me-4">
                            <p class="fs18 fw-bold text-black mb-0" href="#">UPLOAD AN IMAGE</p>
                        </li>
                        <li className='d-none d-lg-block mx-4'>
                            <img src={logo} width='100' alt="LOGO" />
                        </li>
                        <li class="nav-item me-4">
                            <p class="fs18 fw-bold text-black mb-0" href="#">BUSINESS LOGOS</p>
                        </li>
                        <li class="nav-item me-4">
                            <p class="fs18 fw-bold text-black mb-0" href="#">OUTDOOR SIGNS</p>
                        </li>
                        <li class="nav-item me-4">
                            <p class="fs18 fw-bold text-black mb-0" href="#">SHOP</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar