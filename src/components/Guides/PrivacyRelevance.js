import React, { Fragment } from "react";

const PrivacyRelevance = () => {
  return(
    <Fragment>
      <h2>Understanding Web Tracking and Its Implications for Everyday Users</h2>
        <h4>A short introduction to web tracking</h4>
          <p>
          Web tracking refers to the practice of monitoring and recording user activities
          and interactions on the internet, typically for the purpose of gathering data and analytics.
          This involves the collection of information about users' online behavior, such as the websites they visit,
          the pages they view, the links they click, the time spent on various webpages, and more.

          Web tracking is an omnipresent aspect of our online experience. It is is present on about 90% of websites<sup>[1]</sup>.
          Among these, cookies are the most widespread, capable of reconstructing the majority of users' browsing histories<sup>[2]</sup>. 
          This data is often traded among third parties, serving as a valuable resource for understanding user behavior.
          </p>
            
        <div>
          <h4>Why should you care?</h4>
          <div>
            <ul>
                <li><b>Lack of regulation: </b>Online privacy lacks robust regulation (especially outside of the EU) and enforcement. Some regulation
                                                now requires user consent before tracking can be performed (hence a rise in the presence of cookie banners),
                                                but most websites have been found not to respect the regulation or the user's decision<sup>[3]</sup>. Unfortunately, for now,
                                                users can only rely on the steps <i>they take</i> to protect their data. </li>
                
                <li><b>Security: </b>78% of tracking data has been found to be exchanged in an unsafe way<sup>[4]</sup>,
                                    potentially leaking personal information such as a user's full name, email address, phone number, date of birth, and login credentials<sup>[5]</sup>. 
                                    In addition, once tracking data is stored in third-party databases, then the information is exposed to a potential data breach.
                                    Once tracking data is out there, it is not coming back and users cannot control what it will be used for.</li>
                
                <li><b>Avoiding manipulation: </b>The data collected by cookies and trackers can be used to manipulate users' online experience.
                                                    For example, most web users are shown biased news and content that reinforces 
                                                    their existing beliefs (echo chambers). This contributes to polarization, a serious threat to democracy. 
                                                    One simply needs to recall the <a className="link-dark" href="https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal">Cambridge Analytica scandal</a> to see
                                                    how user data can be used without one's consent or knowledge in order to influence one's behavior. 
                                                    </li>
                <li><b>Future Impact: </b>I kept what is probably the most important for last: data collected today may have unforseen long-term consequences. 
                                          User data generated online must be considered permanent data. Even if a users delete their accounts, and try to delete their data, chances
                                          are that copies of this data already exist in different databases, backups, and archives. With this in mind, one must
                                          think about the fact that information shared innocuously today might be reinterpreted or repurposed in the future,
                                          potentially causing unintended consequences. </li>
            </ul>
          </div>  
        </div>

        <h4>Why should we all care?</h4>
          <p>
            Online privacy safeguards individuals from extensive surveillance, which plays a crucial role in upholding 
            the principles of freedom of speech and freedom of opinion in democratic societies.
            Throughout history, individuals have used aliases, pseudonyms, or anonymity to protect their identities when
            expressing dissenting opinions or advocating for social and political change. In the digital age, preserving online
            privacy serves as the modern equivalent of these historical safeguards. It allows people to freely express dissent, 
            engage in open discourse, and challenge the status quo without fear of government or corporate monitoring.
          </p>

        <div>
          <p>Cited sources</p>
          <p>[1] (Sanchez-Rola et al., 2018), (Libert, T. 2018), (Papadopoulos et al., 2019), (Sanchez-Rola et al., 2019), (Bielova et al., 2020)</p>
          <p>[2] (Englehardt et al., 2015)</p>
          <p>[3] (Sanchez-Rola et al., 2019), (Trevisan et al., 2019), (Matte et al., 2020)</p>
          <p>[4] (Yu et al., 2016)</p>
          <p>[5] (Papadopoulos et al., 2019)</p>
          
      </div>  
  </Fragment>
  )
}
export default PrivacyRelevance;



