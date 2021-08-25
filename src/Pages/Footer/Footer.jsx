import React from "react";
import Banner from "Components/Banner/Banner";
import { socialMedia, footerLinks } from "utils/project-datas";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__Container">
        <div className="about__Company">
          <div className="banner">
            <Banner />
          </div>
          <div className="paragraph">
            <p>
              <span>LaslesVPN</span> is a private virtual network that has
              unique features and has high security.
            </p>
          </div>

          <div className="social__Networks">
            {socialMedia.map((image, key) => {
              return (
                <img
                  key={key}
                  src={require(`assets/images/${image}.svg`).default}
                  alt={image}
                />
              );
            })}
          </div>
          <footer>
            ©2020Lasles<span>VPN</span>
          </footer>
        </div>
        <div className="footer__Links">
          {footerLinks.map((link, key) => {
            return (
              <div key={key} className="footer__Link">
                <h1>{link.name}</h1>
                <div className="links">
                  {link.links.map((link, key) => {
                    return <h3 key={key}>{link}</h3>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
