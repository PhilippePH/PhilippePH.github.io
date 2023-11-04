import React from "react";
import { useNavigate } from "react-router-dom";
import './NavBar.scss';
import CV from "../../files/PhilippePaquinHirtleCV_USLetter.pdf";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand clickable" onClick={() => { navigate("/")}}>Philippe Paquin-Hirtle</div>

        {/* for hamburger menu on small device */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><button class="dropdown-item" onClick={() => { navigate("/projects/thesis")}}>Thesis: Blocking Cookie Banners</button></li>
                <li><a class="dropdown-item" href = "https://github.com/PhilippePH/MixAtHome" without rel="noopener noreferrer" target="_blank" >MixAtHome</a></li>
                <li><button class="dropdown-item" onClick={() => { navigate("/projects/trx")}}>TRX Star</button></li>
              </ul>
            </li>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Guides
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><button class="dropdown-item" onClick={() => { navigate("/guides/privacyRelevance")}}>Privacy Relevance</button></li>
                <li><button class="dropdown-item" onClick={() => { navigate("/guides/privacyRecommendation")}}>Privacy Setup</button></li>
                <li><hr class="dropdown-divider"/></li>
                <li><button class="dropdown-item" onClick={() => { navigate("/guides/browserSecurity")}}>Security Setup</button></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://www.linkedin.com/in/philippe-paquin-hirtle/" without rel="noopener noreferrer" target="_blank">LinkedIn</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://github.com/PhilippePH" without rel="noopener noreferrer" target="_blank">Github</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={CV} without rel="noopener noreferrer" target="_blank" >Resume (CV)</a> 
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;