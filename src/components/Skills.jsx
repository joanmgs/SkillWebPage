//libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faRunning, faWalking, faMale, faGrinStars } from '@fortawesome/free-solid-svg-icons';
//styles
import '../styles/Skills.css';

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

      {/* Master */}
      {skills.master.length > 0 && <div className='skill-section'>
        { skills.master.length > 0 && <h4><i>{masterIcon}</i>Master</h4> }
        { skills.master.length > 0 && <ul>{ skills.master.map( ({ name }, index) => <li key={index}>{ name }</li>) }</ul> }
      </div>}

      {/* Expert */}
      {skills.expert.length > 0 && <div className='skill-section'>
        { skills.expert.length > 0 && <h4><i>{expertIcon}</i>Expert</h4> }
        { skills.expert.length > 0 && <ul>{ skills.expert.map( ({ name }, index) => <li key={index}>{ name }</li>) }</ul> }
      </div>}

      {/* Proficient */}
      {skills.proficient.length > 0 && <div className='skill-section'>
        { skills.proficient.length > 0 && <h4><i>{proficientIcon}</i>Proficient</h4> }
        { skills.proficient.length > 0 && <ul>{ skills.proficient.map( ({ name }, index) => <li key={index}>{ name }</li>) }</ul> }
      </div>}

      {/* Novice */}
      {skills.novice.length > 0 && <div className='skill-section'>
        { skills.novice.length > 0 && <h4><i>{noviceIcon}</i>Novice</h4> }
        { skills.novice.length > 0 && <ul>{ skills.novice.map( ({ name }, index) => <li key={index}>{ name }</li>) }</ul> }
      </div>}

      {/* No Experience, but interested */}
      {skills.noExperience.length > 0 && <div className='skill-section'>
        { skills.noExperience.length > 0 && <h4><i>{noExperienceIcon}</i>No experience, but interested</h4> }
        { skills.noExperience.length > 0 && <ul>{ skills.noExperience.map( ({ name }, index) => <li key={index}>{ name }</li>) }</ul> }
      </div>}
    </section>
  </>
  );
}
