import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";

import Button from "../../shared/Button/Button";
import "./stylies.scss";

import CreateTournamentPage from "../CreateTournamentPage/CreateTournamentPage";

import tournamentImg from "../../imgs/cole_palmer.jpeg";
import fonLeagueChempionsImg from "../../imgs/league_champions_fon.jpg";
import messi from "../../imgs/messi.jpeg";
import ronaldo from "../../imgs/ronaldo.jpeg";
import neymar from "../../imgs/neymar.jpeg";
import yamal from "../../imgs/yamal.jpeg";

const CreateTournament = ({}) => {
  const [members, setMembers] = useState<number>(0);
  const [tournamentType, setTounamentType] = useState<string>("Турнір");

  const onMembers = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = Number(value);
    setMembers(numericValue);
  };

  const onTournament = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTounamentType(value);
  };

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
          <input value={members} onChange={onMembers} placeholder="Введіть кількість учасників" type="number" />

          <select value={tournamentType} onChange={onTournament}>
            <option>League Champions</option>
            <option>English Premier League</option>
            <option>World Cup</option>
            <option>Фантазія</option>
          </select>
          <Link
            to={
              {
                pathname: "/createTournamentPage",
                state: {
                  numberOfMembers: members,
                  tournamentType: tournamentType,
                },
              } as any
            }
          >
            <Button text="Створити турнір " />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateTournament;
