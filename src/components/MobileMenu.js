import React from "react";

export default function MobileMenu(props) {
  const handleLinkClick = e => {
    const page = e.target.innerHTML;
    props.handleLinkClick(page);
  };

  return (
    <div className="mobile-menu">
      <ul>
      <li onClick={handleLinkClick}>ABOUT ME</li>
        <li onClick={handleLinkClick}>WORK</li>
        <li onClick={handleLinkClick}>CONTACT</li>
        <li>
          <a
            onClick={handleLinkClick}
           
            href="https://api.whatsapp.com/send?phone=+44915609527"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp" />
          </a>
        </li>
       
        <li />
        <li />
      </ul>
    </div>
  );
}
