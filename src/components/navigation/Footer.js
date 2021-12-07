import React from "react";
import "./styles/HeaderFooter.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="row">
        <img
          className="logo"
          position="relative"
          width="140px"
          src="https://logovtor.com/wp-content/uploads/2021/06/beckman-coulter-inc-logo-vector.png"
          alt="a"
        />
        <p>Terms Of Service | Privacy</p>
      </div>
    </div>
  );
}

export default Footer;
