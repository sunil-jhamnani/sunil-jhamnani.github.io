import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
    <nav class="top-nav _social-links"> 
      {/* _social-links */}
        <ul class="_links-list">
          <li class="_social-link">
            <a href="https://x.com/_suniljhamnani">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="_social-link">
            <a href="https://github.com/sunil-jhamnani">
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li class="_social-link">
            <a href="https://www.instagram.com/suniljhamnani/">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
          <li class="_social-link">
            <a href="https://www.linkedin.com/in/suniljhamnani/">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li class="_social-link">
            <a href="mailto:jhamnanisunil@gmail.com">
              <i class="fa fa-at"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
