import React, { Fragment } from "react";
import trxOne from "../../files/trx-1.jpg";
import trxTwo from "../../files/trx-2.jpg";
import trxThree from "../../files/trx-3.jpg";

const TrxPage = () => {
  return(
    <Fragment>
      <h2>TRX App Project</h2>
        <p>TRX Star aims to democratize workout platforms and empower users to take control of their exercise experience. 
          Currently, users can watch free videos and follow along with a coach, however, this is not personalised and can get repetitive. 
          The other option is to buy personalised workout plans, which are not guided by a coach, and are limited to a few workouts. 
          <b>TRX STAR bridges this gap by allowing users to select their preferences and generate a new playlist of exercises guided by a coach.</b>
          Our vision for TRX STAR is for it to also become a platform where coaches can easily create and share their content with a vast audience of users.</p>
        <p>This app was built using React JS, and it entirely a front-end application. Indeed, we used the in-browser database IndexedDB as our goal was to build a lightweight and highly-scalable app, so that it can be used by a wide audience without incurring the costs of a large, centralised database.</p>

        <p><i>This project was made as part of the Software Engineering group project module, during my MSc Computing masters at Imperial College London. 
            This project was made with my amazing teammates
              <a class="link-dark" href="https://github.com/Adela140" without rel="noopener noreferrer" target="_blank"> Adela Viskova</a>, 
              <a class="link-dark" href="https://github.com/dan-doyle" without rel="noopener noreferrer" target="_blank"> Daniel Doyle</a>,
              <a class="link-dark" href="https://www.linkedin.com/in/tsun-eugene-ting/" without rel="noopener noreferrer" target="_blank"> Eugene Ting</a>,
              <a class="link-dark" href="https://github.com/SoFia2401" without rel="noopener noreferrer" target="_blank"> Sofia Hernandez Gelado</a>, and
              <a class="link-dark" href="https://www.linkedin.com/in/soren-antebi/"without rel="noopener noreferrer" target="_blank"> Soren Antebi</a>. 
        </i>  </p>
        
        <div className = "container">
          <div class = "row justify-content-around mb-5">
            <button className = "btn btn-dark col-5" href="https://www.trxstar.co.uk/">App</button>
            <button className = "btn btn-dark col-5" href="https://github.com/PhilippePH/SoftwareEngineeringTRXStar">Repository</button>
          </div>
      </div>

      <div className = "mb-3">
        <div class = "row justify-content-around">
          <div className="col-4">
            <img className = "w-50 mx-auto d-block" src={trxOne}/>
          </div>
          <div className="col-4">
            <img className = "w-50 mx-auto d-block" src={trxTwo}/>
          </div>
          <div className="col-4">
            <img className = "w-50 mx-auto d-block" src={trxThree}/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default TrxPage;
