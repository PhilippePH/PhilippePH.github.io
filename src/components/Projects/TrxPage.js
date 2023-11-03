import React, { Fragment } from "react";

const TrxPage = () => {
  return(
    <Fragment>
      <div class="bg-light min-vh-100">
      <div class="p-3">
        <a href="../index.html">Home</a>

        <h1>TRX App Project</h1>
        <p><a href="https://www.trxstar.co.uk/">TRX Star</a> aims to democratize workout platforms and empower users to take control of their exercise experience. 
          Currently, users can watch free videos and follow along with a coach, however, this is not personalised and can get repetitive. 
          The other option is to buy personalised workout plans, which are not guided by a coach, and are limited to a few workouts. 
          <b>TRX STAR bridges this gap by allowing users to select their preferences and generate a new playlist of exercises guided by a coach.</b>
          Our vision for TRX STAR is for it to also become a platform where coaches can easily create and share their content with a vast audience of users.</p>
        <p>This app was built using React JS, and it entirely a front-end application. Indeed, we used the in-browser database IndexedDB as our goal was to build a lightweight and highly-scalable app, so that it can be used by a wide audience without incurring the costs of a large, centralised database.</p>

        <p>This project was made as part of the Software Engineering group project module, during my MSc Computing masters at Imperial College London. 
            This project was made with
              <a href="https://github.com/Adela140">Adela Viskova</a>, 
              <a href="https://github.com/dan-doyle">Daniel Doyle</a>,
              <a href="https://www.linkedin.com/in/tsun-eugene-ting/">Eugene Ting</a>
              <a href="https://github.com/SoFia2401">Sofia Hernandez Gelado</a>, and
              <a href="https://www.linkedin.com/in/soren-antebi/">Soren Antebi</a>. 
              
          </p>
      
          <p>
            Links:
            <a href="https://www.trxstar.co.uk/">App</a>,
            <a href="https://github.com/PhilippePH/SoftwareEngineeringTRXStar">Repository</a>
          </p>
      </div>
    </div>
    </Fragment>
  )
}
export default TrxPage;
