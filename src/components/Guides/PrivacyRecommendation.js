import React, { Fragment } from "react";

const PrivacyRecommendation = () => {
  return(
    <Fragment>
      <h1>My browser privacy setup recommendation</h1>          
        <ul>
          <li>Use a more privacy-focused browser. I currently use <a href="https://www.mozilla.org/en-CA/firefox/new/">Firefox</a>. (If you use Firefox,
            disable sponsored shortcuts and sponsored stories, found in about:preferences#home (I disable them altogether). I also disabled Snippets.)</li>
          
          <li>Install the <a href="https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-ad-blo/mlomiejdfkolichcflejclcbmpeaniij">Ghostery</a> web extension. It will help block a lot of trackers, and reduce the number of annoying cookie banner.</li>
          
          <li>Install the <a href="https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/">containers</a> extension, 
            and <a href="https://support.mozilla.org/en-US/kb/how-use-firefox-containers">set it up</a> according to your internet
            usage. For example, I have a container for Meta websites, Google websites, and Microsoft websites. I also have a container
            for the finance websites I use (banks), one for other social media, and one for the newsite I visit.
            This method containerizes (isolates) cookies, scripts, etc., limiting the scope trackers can track your browsing.
            This is also great for security reasons as malicious scripts will be limited to the container they are contained in. </li>
        
          
            <li>Change the default search engine to DuckDuckGo. For day-to-day browsing, DuckDuckGo should be satisfactory. When doing advanced research, it might be useful to use Google as its search results are still better.</li>
          
          <li>Use "custom" tracking protection. Tick every box, and select "all cross-site cookies" and "in all windows" (about:preferences#privacy).
            Personally, I have found that very few websites actually break due to those hardened settings. In those rare cases, simply click the Firefox lock icon in the search bar and
              disable enhanced protection for that one website. </li>
          
          <li>I do NOT delete cookies and site data when Firefox is closed, because I have found this to be too much of a hurdle (it logs you out of every website, everytime Firefox closes). I do however enable the functionality "Clear history when Firefox closes" as this does not impact my browsing experience much.</li>
          <li>Refuse when websites ask to access your location, unless you judge it to be absolutely necessary</li>
        
        </ul>
          <p>These guides are intended for friends and family who may want to adapt their web setup. 
            My recommendations are not perfect, nor are they exhaustive, and they might become outdated. 
            Many thanks to <a href="https://sunknudsen.com/">Sun Knudsen</a>; 
            his great Youtube channel piqued my interest concerning web privacy and security, 
            and a lot of my set up is based on his.</p>

        <h3>Do you absolutely want to keep using Google Chrome?</h3>
          <p>If you absolutely want to keep using Google Chrome (which I don't recommend), then here's how you can make some improvements to your setup. </p>
          <ul>
            <li>Consider using a different web browser</li>
            <li>Install the <a href="https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-ad-blo/mlomiejdfkolichcflejclcbmpeaniij">Ghostery</a> web extension. It will help block a lot of trackers, and reduce the number of annoying cookie banner.</li>
            <li>Disable everything in the ad menu (chrome://settings/adPrivacy)</li>
            <li>Remove "Make searches and browsing better" (chrome://settings/privacy/guide?step=msbb)</li>
            <li>Refuse when websites ask to access your location, unless you judge it to be absolutely necessary</li>
            <li>Change the default search engine to DuckDuckGo. For day-to-day browsing, DuckDuckGo should be satisfactory. When doing advanced research, it might be useful to use Google as its search results are still better.</li>
          </ul>
  </Fragment>
  )
}
export default PrivacyRecommendation;



