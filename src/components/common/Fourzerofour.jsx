import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function FourZeroFour(){
  return(
    <>
    <Navbar/>
<main class="error-page">
  <div class="container">
    <div class="eyes">
      <div class="eye">
        <div class="eye__pupil eye__pupil--left"></div>
      </div>
      <div class="eye">
        <div class="eye__pupil eye__pupil--right"></div>
      </div>
    </div>

    <div class="error-page__heading">
      <h1 class="error-page__heading-title">Looks like you're lost</h1>
      <p class="error-page__heading-desciption">404 error</p>
    </div>

    <Link to="/">Back to Home</Link>
  </div>
</main>

<Footer/>

    </>
  )
}
export default FourZeroFour;