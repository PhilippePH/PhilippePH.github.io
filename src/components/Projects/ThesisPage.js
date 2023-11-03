import React, { Fragment } from "react";

const ThesisPage = () => {
  return(
    <Fragment>
      <div class="bg-light min-vh-100">
        <div class="p-3">
          <a href="../index.html">Home</a>
          
          <h1>Thesis</h1>
          <h2>"Crawling the web to identify the perseverance of cookie banners and respect for choice"</h2>
          

          <h3>Abstract</h3>
          <p>This project crawls 10,000 websites from the UK. The aim of this data collection is to determine how efficient the Brave, Firefox and Ghostery browsers are at hiding cookie banners. By answering this question, this paper will also shed light on the different techniques used by browsers to block cookie banners. To do so, a banner detection algorithm which detects the presence of a cookie banner on a website and assesses its visibility has been created. Additional privacy-related data, such as total storage and requests, are being collected and analysed to assess the overall privacy gains of these browsers when the cookie banner blocking features are enabled.
            This project finds that all three browsers are able to reduce the number of visible cookie banners when compared to the Google Chrome browser. Brave is the browser with the best performance as it <b>reduces by 86.9% the number of visible cookie banners</b>. In terms of browser storage (cookies and local storage), every browser reduces the total number of storage units as well as third-party storage units. Brave is again the browser that reduces those values the most, with a 78.5% reduction of total storage compared to Google Chrome. It is followed by Ghostery at 67.1% and Firefox at 18.4%. As for requests, both Brave and Ghostery have been found to reduce the overall number of requests and the number of third-party requests.
            Finally, a comparison between crawl data collected in the UK and in the US shows that US websites have fewer visible cookie banners. For Google Chrome, the number of storage values, especially from third parties, increases from the US vantage point. Only, Ghostery is able to limit this increase, and Brave is able to almost entirely cancel this increase in storage values.</p>
            
          <p><i>This work was submitted in partial fulfilment of the requirements for the MSc Degree in Computing of Imperial College London.
              Many thanks to Dr. Hamed Haddadi and Dr. Pete Snyder for their help and supervision.</i></p>

          <p>
            Links:
            <a href="Presentation.pdf">Presentation</a>, 
            <a href="Thesis.pdf">Thesis</a>
          </p>

          <div>
            <div>
              <p><i>Percentage Change in Visible Cookie Banners, Compared to Google Chrome, per Browser (Lower is Better)</i></p>
              <img src="./bannersVisiblePercentageChange.png" alt="Percentage change in cookie banners, compared to Google Chrome" title="Percentage change in cookie banners, compared to Google Chrome"/>
            </div>
            <div>
              <p><i>Percentage Change in Storage, Compared to Google Chrome, per Browser (Lower is Better)</i></p>
              <img src="./totStorage_Subset_Percentage.png" alt="Percentage Change in Storage, Compared to Google Chrome, per Browser (Lower is Better)" title="Percentage Change in Storage, Compared to Google Chrome, per Browser (Lower is Better)"/>
            </div>
          </div>
        </div>
      </div>
  </Fragment>
  )
}

export default ThesisPage;