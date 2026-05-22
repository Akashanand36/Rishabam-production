import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/rishambam-productions-5731823b3?utm_source=share_via&utm_content=profile&utm_medium=member_ios"><FaLinkedinIn /></a>
        <a href="https://www.facebook.com/share/18BF2aCA4m/?mibextid=wwXIfr"><FaFacebookF /></a>
        <a href="https://www.instagram.com/rishabamproductions?igsh=MW12OXRreDVydXE1eA=="><FaInstagram /></a>
        <a href="mailto:rishabamproductions@email.com"><FaEnvelope /></a>
        <a href="https://x.com/yourusername"><FaXTwitter /></a>
      </div>

      <p>© 2026 Rishabam Production. All rights reserved.</p>
    </footer>
  );
}

export default Footer;