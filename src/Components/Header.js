import React from "react";
import bacgraun from '../Imge/bacgkraund.png'
import naqsh from '../Imge/basgNaqsh.png'
function Header(props) {
  return (
    <section className="header" id='home'>
      <div className="left-h">
        <h1>Welcome to <br/>Restaurant</h1>
        <p>
          The people, food and the prime locations make the perfect place good
          friends & family to come together and have great time.
        </p>
        <button className="btn">View Menu</button>
      </div>
      <div className="right-h">
          <div></div>
          <div></div>
          <div></div>
          <img src={bacgraun} alt=""/>
          <img src={naqsh} alt=""/>
      </div>
    </section>
  );
}

export default Header;
