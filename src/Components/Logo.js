import React from "react";
import logo from "../Imge/IMAGE.svg";
function Logo(props) {
  return (
    <section className="logo">
      <div className="content-l">
          <button className='logo-btn'>Call - 123 456 789</button>
          <img src={logo} alt="Logo" />
          <button className='logo-btn'>Reservation</button>
      </div>

    </section>
  );
}

export default Logo;
