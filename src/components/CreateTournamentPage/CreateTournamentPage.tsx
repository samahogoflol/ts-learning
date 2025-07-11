import React from "react";

import "./stylies.scss";

import SimpleSlider from "../Slider/Slider";

const CreateTournamentPage = () => {
  return (
    <>
      <div className="create_tournament_page">
        <h2>
          Створи турнір по своїм власним правилам! Доступно декілька варіантів турнірів, можна грати по різному сценарію, на будь-яку
          к-сть учасників! Прийми участь та насолоджуйся грою.
        </h2>
        <h2 className="header_create_tournament">Форма створення турніру : </h2>

        <div className="create_tournament_form">
          <div className="create_tournament_form_left_side">
            <div>
              <div>
                <input placeholder="Ім'я учасника" type="text" />
                <button>Додати учасника</button>
              </div>

              <input placeholder="Формат турніру" type="text" />
              <button>Змінити формат турніру</button>
            </div>
          </div>
          <div className="create_tournament_form_spinner">
            <div className="create_tournament_form_spinner_top_border">England</div>
            <SimpleSlider />
            <div className="create_tournament_form_spinner_bottom_border">England Premier League</div>
          </div>

          <div className="create_tournament_form_right_side">
            <table>
              <caption>Формат Турніру : </caption>
              <thead>
                <tr>
                  <th>Denys</th>
                  <th>Maksym</th>
                </tr>
              </thead>
              <tbody>
                <th>
                  <tr>1. Manchester United</tr>
                  <tr>2. Manchester City</tr>
                  <tr>3. Liverpool</tr>
                </th>
                <th>
                  <tr>1. Manchester United</tr>
                  <tr>2. Manchester City</tr>
                  <tr>3. Liverpool</tr>
                </th>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTournamentPage;
