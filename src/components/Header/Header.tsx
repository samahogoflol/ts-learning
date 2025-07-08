import React from "react";

import "./stylies.scss";

const Header = () => {
  const fifaVersion = "2025";

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>Головна</li>
            <li> Турніри Fifa {fifaVersion} </li>
            <li> Турнір Прогнозистів {fifaVersion} </li>
            <li> Футбольні новини </li>
            <li> Історія турнірів </li>
            <li> Правила </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
