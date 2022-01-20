//@ts-nocheck
import { useLocation } from "react-router-dom";
import iconForSkills from "../helper/iconForSkills";
//Library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
//Styles
import '../styles/SkillDetail.css';

export default function SkillDetail() {
  const { state: { data, proficiencyName, icon } } = useLocation();
  const exit = <FontAwesomeIcon icon={faTimes} />;

  return (
    <>
      <header className="header-details">
        <i><Link to='/'>{exit}</Link></i>
        <h2>{data.name}</h2>
      </header>
      <section className="detail-info">
        <p>Proficiency: <i>{iconForSkills(icon)}</i>{proficiencyName}</p>
        <p>Recommendations: <span>{data.recommendations}</span></p>
      </section>
      <hr />
    </>
  );
}
