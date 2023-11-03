import React, { Fragment } from "react";

const BrowserSecurity = () => {
  return(
    <Fragment>
      <h2>Web Security Recommendations</h2>

      <ul>
        <li><b>Make your updates:</b> This is one of the best security practices there are. Browser updates takes only one or two seconds, and could be fixing important vulnerabilities.</li>
        
        <li><b>Browse the web using HTTPS:</b> HTTPS encrypts requests and responses made between your device and the webistes you visit. Make sure your browser is set up to enable HTTPS-Only (most browsers have this functionality). 
          Alternatively, you can use extensions such as <a href="https://www.eff.org/https-everywhere"> HTTPS Everywhere</a>.</li>
        
        <li><b>Use an antivirus and monitor the links you click on.</b> Many antiviruses hae browser extensions that can help ensure you are browsing safely and not visiting malicious websites. Of course, do not click or download anything you're unsure of on the internet. 
              Similarly, do not scan QR codes you do not trust: this is the equivalent to clicking a random link.</li>

        <li><b>Secure account management:</b>
          <ul>
            <li><b>Password management:</b> Use a password manager, and ensure that you use strong, random, non-repeated, passwords. 
                  Do not save your passwords (or credit card information) on your web browser (that's where the password manager comes in handy)</li>
            <li><b>Two-factor authentication (2FA):</b> Always enable 2FA, when possible. For regular users, I'd recommend using authenticator apps. Avoid SMS options <b>(add source to why not secure)</b>. 
              For more advanced users, have a look at <a href="https://www.yubico.com/">YubiKeys</a>.</li>
          </ul>
        </li>
      </ul>

      <p>These guides are intended for friends and family who may want to adapt their web setup. My recommendations are not exhaustive, and might become outdated. Many thanks to <a href="https://sunknudsen.com/">Sun Knudsen</a>; his great Youtube channel piqued my interest concerning web privacy and security, and a lot of my set up is based on his.</p>

      <p><i>You can find my web privacy recommendations <a href="../browserPrivacy/privacy.html">here</a></i>.</p>
  </Fragment>
  )
}
export default BrowserSecurity;



