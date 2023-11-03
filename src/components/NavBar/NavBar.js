import React from "react";

const NavBar = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" href="../index.html">Philippe Paquin-Hirtle</a>
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
                  <li><a class="dropdown-item" href="../thesisPage/thesis.html">Thesis: Blocking Cookie Banners</a></li>
                  <li><a class="dropdown-item" href="https://github.com/PhilippePH/MixAtHome">MixAtHome</a></li>
                  <li><a class="dropdown-item" href="trxPage/trx.html">TRX Star</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Guides
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="../browserPrivacy/privacyRelevance.html">Privacy Relevance</a></li>
                  <li><a class="dropdown-item" href="../browserPrivacy/privacy.html">Privacy Setup</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Security Setup</a></li>
                </ul>
              </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="https://www.linkedin.com/in/philippe-paquin-hirtle/">LinkedIn</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="https://github.com/PhilippePH">Github</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="../PhilippePaquinHirtleCV_USLetter.pdf">Resume (PDF)</a>
                </li>
              
              </ul>
          </div>
        </div>
      </nav>
  )
}
export default NavBar;