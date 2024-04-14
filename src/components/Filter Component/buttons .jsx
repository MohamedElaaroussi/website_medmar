import React from "react";
import Data from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  const isMobile = window.innerWidth <= 768; // Définir la largeur de l'écran pour les appareils mobiles

  return (
    <>
      <div className="d-flex justify-content-center mb-2 Pointer">
        {menuItems.map((Val, id) => {
          return (
            <>
              <div class="tag-scrollers">
                <div class="tag-scroller">
                  <ul class="tag-list">
                    <li
                      className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill "
                      onClick={() => filterItem(Val)}
                      key={id}
                    >
                      {Val}
                    </li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
        <ul class="tag-list">
          <li
            className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill "

            onClick={() => setItem(Data)}
          >
            All
          </li>
        </ul>
      </div>
    </>
  );
};

export default Buttons;
