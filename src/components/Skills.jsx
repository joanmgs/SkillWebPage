//libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faRunning, faWalking, faMale, faGrinStars } from '@fortawesome/free-solid-svg-icons';
//styles
import '../styles/Skills.css';
import Proficiency from './Proficiency';

export default function Skills({ strengths }) {
  // Icons
  const masterIcon = <FontAwesomeIcon icon={faBiking} />;
  const expertIcon = <FontAwesomeIcon icon={faRunning} />;
  const proficientIcon = <FontAwesomeIcon icon={faWalking} />;
  const noviceIcon = <FontAwesomeIcon icon={faMale} />;
  const noExperienceIcon = <FontAwesomeIcon icon={faGrinStars} />;

  const skills = {
    master: strengths.filter( ({ proficiency }) => proficiency === "master" ),
    expert: strengths.filter( ({ proficiency }) => proficiency === "expert" ),
    proficient: strengths.filter( ({ proficiency }) => proficiency === "proficient" ),
    novice: strengths.filter( ({ proficiency }) => proficiency === "novice" ),
    noExperience: strengths.filter( ({ proficiency }) => proficiency === "no-experience-interested" ),
  };

  return (
  <>
    <section className='skills-container'>
      <h3>Skill and interests:</h3>

      <Proficiency proficiencyArray={skills.master} proficiencyName={"Master"} icon={masterIcon} />
      <Proficiency proficiencyArray={skills.expert} proficiencyName={"Expert"} icon={expertIcon} />
      <Proficiency proficiencyArray={skills.proficient} proficiencyName={"Proficient"} icon={proficientIcon} />
      <Proficiency proficiencyArray={skills.novice} proficiencyName={"Novice"} icon={noviceIcon} />
      <Proficiency proficiencyArray={skills.noExperience} proficiencyName={"No experience, but interested"} icon={noExperienceIcon} />

    </section>
  </>
  );
}
