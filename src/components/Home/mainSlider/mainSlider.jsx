import React from "react";
import "./mainSlider.css";
import image from "./images/profile1.png";
import { Link } from "react-scroll";
//  nopad-t nopad-b
const mainSlider = () => {
  //   return (
  //     <section id="section" class="light">
  //       <div class="container">
  //         <div class="col-8">
  //           <div id="face" class="face">
  //             <h1>Sunil Jhamnani</h1>
  //             <Link to="dev1" smooth={true} duration={100}>
  //               <div id="em" class="em">
  //                 <div id="em-desc" class="description">
  // <h2>Engineering Leader</h2>
  // <p>
  //   Sunil Jhamnani is a Software Engineer and Leader currently working with Myntra
  // </p>
  //                 </div>
  //               </div>
  //             </Link>

  //             <Link to="dev1" smooth={true} duration={100}>
  //               <div id="coder">
  //                 <div id="coder-desc" class="description">
  // <h2>
  //   <span class="chevron-left">&lt;</span>Coder/
  //   <span class="chevron-right">&gt;</span>
  // </h2>
  // <p>
  //   Full Stack MERN developer who writes clean, elegant and
  //   efficient code.
  // </p>
  //                 </div>
  //               </div>
  //             </Link>

  //             <Link to="dev1" smooth={true} duration={100}>
  //               <div id="em" class="em">
  //                 <div id="em-desc" class="description">
  //                   <h2>Design System Enthusiast</h2>
  //                   <p>
  //                     Full Stack developer who writes clean, elegant and efficient
  //                     code.
  //                   </p>
  //                 </div>
  //               </div>
  //             </Link>
  //           </div>
  //         </div>
  //         <div class="col-4">
  //             <img src={image} alt="" />
  //         </div>
  //       </div>
  //     </section>
  //   );
  return (
    <section id="section" class="light nopad-t nopad-b">
      <div class="row full-width">
        <div>
          <div id="face" class="face">
            <h1 class="name-title">Sunil Jhamnani</h1>
            <Link to="des1" smooth={true} duration={100}>
              <div id="designer" class="designer">
                <div id="designer-desc" class="description">
                  <h2 class="subtitle"><span class="chevron-left">&lt;</span>Engineering Leader/<span class="chevron-right">&gt;</span></h2>
                  <h3 class="subtext">
                    Sunil Jhamnani is a Software Engineer and Leader currently
                    working with Myntra
                  </h3>
                </div>
              </div>
            </Link>

            <Link to="dev1" smooth={true} duration={100}>
              <div id="coder" class="coder">
                <div id="coder-desc" class="description">
                  <h2 class="subtitle">
                    <span class="chevron-left">&lt;</span>Coder/
                    <span class="chevron-right">&gt;</span>
                  </h2>
                  <h3 class="subtext">
                    Full Stack MERN developer who writes clean, elegant and
                    efficient code.
                  </h3>
                </div>
              </div>
            </Link>

            {/* <img
              id="face-img"
              class="face-img"
              src={image}
              alt="Sunil Jhamnani"
            /> */}

            <div id="designer-bg" class="designer-bg"></div>
            <div id="coder-bg" class="coder-bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default mainSlider;
