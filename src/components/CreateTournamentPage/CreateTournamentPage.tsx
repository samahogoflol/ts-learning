import React from "react";

import "./stylies.scss";

import SimpleSlider from "../Slider/Slider";

const CreateTournament = () => {
  return (
    <>
      <div className="create_tournament_page_container">
        <h2>Створи турнір по шаблону, або зроби свій варіант.</h2>

        <div className="main_create_tournament_block">
          <SimpleSlider />
        </div>
      </div>
    </>
  );
};

export default CreateTournament;
