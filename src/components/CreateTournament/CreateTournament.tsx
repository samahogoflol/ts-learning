import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

import CreateTournamentPage from "../CreateTournamentPage/CreateTournamentPage";

import Button from "../../shared/Button/Button";
import "./stylies.scss";

import tournamentImg from "../../imgs/cole_palmer.jpeg";
import fonLeagueChempionsImg from "../../imgs/league_champions_fon.jpg";
import messi from "../../imgs/messi.jpeg";
import ronaldo from "../../imgs/ronaldo.jpeg";
import neymar from "../../imgs/neymar.jpeg";
import yamal from "../../imgs/yamal.jpeg";

const CreateTournament = ({}) => {
  return (
    <>
      <div className="tournament_block">
        <img className="tournament_block_fon_img" src={fonLeagueChempionsImg}></img>

        <div className="tournament_block_create_tournament">
          <h2>Створи свій унікальний Fifa турнір</h2>
          <div className="tournament_block_img_icons">
            <img src={tournamentImg} alt="Створити турнір"></img>
            <img src={messi} alt="Створити турнір"></img>
            <img src={yamal}></img>
            <img src={ronaldo}></img>
            <img src={neymar}></img>
          </div>
          <img></img>
          <input placeholder="Введіть кількість учасників" type="number" />
          <select>
            <option>Турнір</option>
            <option>League Champions</option>
            <option>English Premier League</option>
            <option>World Cup</option>
            <option>Фантазія</option>
          </select>
          <Link to="/createTournamentPage">
            <Button text="Створити турнір " />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateTournament;
