import React, { Fragment } from "react";

const HomePage = () => {
  return(
    <Fragment>
        <h3>About me</h3>
          <p>I have recently graduated from Imperial College London (UK), a world-leading university in science and engineering, where I pursued a master's degree in computer science (MSc Computing). Through this program, I have developed a strong foundation in core and specialized computing topics while gaining hands-on practical skills. I have worked with programming languages such as C++, Python, JavaScript (Node.js, React.js).</p>
          <p>Prior to my masters, I obtained a Bachelor of Commerce (Finance) degree from McGill University's Desautels Faculty of Management (Canada), where I developed a solid foundation in business, finance, and sustainability. This multidisciplinary background equips me with a unique perspective that blends technical expertise with a deep understanding of organizational needs and challenges.</p>

      <h3>Current Projects and Interests</h3>
        <ul>
          <li><b>Web privacy and security: </b>I have been interested in web privacy and security for over a year.
              Two resources I am very fond of are <a href="https://www.youtube.com/@SunKnudsen" class="link-dark"> Sun Knudsen's YouTube channel</a>, 
              and <a href="https://inteltechniques.com/podcast.html" class="link-dark"> Michael Bazzell's Privacy, Security and OSINT podcast</a>. 
              Recently, I have also been reading up on cybersecurity and OSINT.</li>

          <li><b>ConnectED: </b>I am currently advising McGill students who are running the 
            <a href="https://connectedmcgill.wixsite.com/connected"class="link-dark"> ConnectED initiative</a>, 
            an initiative I created during my last year at McGill with some amazing teammates and friends. 
            ConnectED's goal is to diversify learning opportunities by connecting university students with elementary and secondary classrooms.</li>

          <li><b><a href="https://github.com/PhilippePH/MixAtHome" class="link-dark">MixAtHome</a>: </b> Two years ago, I created a tool that helps users categorize 
            cocktails and list the recipes one can make based on available ingredients. could make based on the 
            I am currently adapting this tool to create a more user friendly app that I can share with my friends.
            It's also a great opportunity for me to add numerous features I've had in the back of my head for a while.</li>

          <li><b>Reading: </b>I allocate time for reading, tracking my progress on Goodreads. 
            I'm pleased to have maintained an upward trend since 2019 and am determined 
            not to break the streak this year. My favorite reads of the year (so far) are 
            <a href="https://www.goodreads.com/book/show/62814722-femme-fleuve"class="link-dark">'Femme fleuve'</a> 
            and <a href="https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time"class="link-dark">'A Brief History of Time'</a>.</li>
        </ul>
      
      {/* <h3>Past Projects</h3>
      <ul>
        <li><a href="thesisPage/thesis.html" class="link-dark"> Thesis: "Crawling the web to identify the perseverance of cookie banners and respect for choice"</a> (September 2023)</li>
        <li><a href="trxPage/trx.html" class="link-dark"> TRX Star App</a> (March 2023)</li>
      </ul>

      <h3>Guides</h3>
      <p>These guides are intended for friends and family who may want to update their web setup. My recommendations are not exhaustive, and might become outdated. I do my best to cite the original sources that I consulted when doing my research. Feel free to reach out if you have any questions.</p>
      <ul>
        <li><a href="browserPrivacy/privacyRelevance.html" class="link-dark"> Understanding Web Tracking and Its Implications for Everyday Users</a></li>
        <li><a href="browserPrivacy/privacy.html" class="link-dark"> My browser privacy setup recommendation</a></li>
        <li><a href="webSecurityRecommendations/security.html" class="link-dark"> My web security setup recommendation</a></li>
        <li>Coming soon: A more secure email setup (hint: you need more than one email address)</li>
        <li>Coming later: Mobile browsing recommendations</li>
      </ul> */}
</Fragment>
    )
}

export default HomePage;