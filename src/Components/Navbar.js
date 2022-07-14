import React, { useState,useRef } from "react";
import { Link } from "react-scroll";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { BiMenuAltRight } from "react-icons/bi";
function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobail = window.innerWidth <=991.98 ? true : false;
  return (
    <nav className="navbar">
      {menuOpen === false && mobail === true ?( <div><BiMenuAltRight onClick={()=> setMenuOpen(true)} /></div>):(
          <div className="nav-content flex"   >
            <ul>
              <Link className="list-link  " to="home" onClick={()=>setMenuOpen(false)} >
                Home
              </Link>
              <Link className="list-link" to="about" onClick={()=>setMenuOpen(false)} >
                About Us
              </Link>
              <Link className="list-link" to="menu" onClick={()=>setMenuOpen(false)} >
                Our Menu
              </Link>
              <Link className="list-link" to="pages" onClick={()=>setMenuOpen(false)} >
                Pages
              </Link>
              <Link className="list-link" to="blog" onClick={()=>setMenuOpen(false)} >
                Blog
              </Link>
              <Link className="list-link" to="contact"onClick={()=>setMenuOpen(false)}  >
                Contact Us
              </Link>
            </ul>
            <div className="icons">
              <a href="https://www.instagram.com/">
                <AiOutlineInstagram />
              </a>
              <a href="https://www.facebook.com/campaign/landing.php?campaign_id=11554070363&extra_1=s%7Cc%7C477437435744%7Ce%7Cfacebook%7C&placement=&creative=477437435744&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMImO_bsLHz-AIVSwWiAx1MYAfvEAAYASAAEgJTLPD_BwE">
                <AiFillFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <ImPinterest2 />
              </a>
              <a href="#"></a>
            </div>
          </div>
      )}
    </nav>
  );
}

export default Navbar;
