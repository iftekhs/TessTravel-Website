import React from 'react';
import './Footer.css';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_content_child">
          <h4> ABOUT </h4>
          <p>How Tess Work</p>
          <p>Newsroom</p>
          <p>investors</p>
          <p>Tess pro</p>
          <p>Hotel booking</p>
          <p>Career</p>
          <p>Olympics</p>
        </div>
        <div className="footer_content_child">
          <h4> COMMUNITY </h4>
          <p>Diversity & Belonging</p>
          <p>Tess Associates</p>
          <p>Gift cards</p>
          <p>Against Discrimination</p>
          <p>Frontline Stays</p>
          <p>Tess.org</p>
          <p>Accessibility</p>
        </div>
        <div className="footer_content_child">
          <h4> HOST </h4>
          <p>Host your home</p>
          <p>Responsible hosting</p>
          <p>Host an Online Experience</p>
          <p>Resource Center</p>
          <p>Host an Experience</p>
          <p>Community Center</p>
          <p>Invite friends</p>
        </div>
        <div className="footer_content_child">
          <h4> SUPPORT </h4>
          <p>Our COVID-19 Response</p>
          <p>Neighborhood Support</p>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>Cancellation options</p>
          <p>Frontline Stays</p>
          <p>Accessibility</p>
        </div>
      </div>

      <div className="final_footer">
        <p>
          © 2021 Tess Inc. All rights
          reserved·Privacy·Terms·Sitemap
        </p>

        <div className="finalFooter__right">
          <LanguageIcon />
          <h4> English(US) </h4>
          <h4> $ USD </h4>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
