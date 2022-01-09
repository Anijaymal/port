import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <i className="far fa-copyright" /> SCOTT'S GALLERY {new Date().getFullYear()}
      </div>
      <div className="social-links">
        <a
           href="https://api.whatsapp.com/send?phone=+44915609527"
         
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp" />
        </a>
        
      </div>
    </div>
  );
}
