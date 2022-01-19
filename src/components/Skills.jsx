export default function Skills({ strengths }) {
  const skills = {
    master: strengths.filter( ({ proficiency }) => proficiency === "master" ),
    expert: strengths.filter( ({ proficiency }) => proficiency === "expert" ),
    proficient: strengths.filter( ({ proficiency }) => proficiency === "proficient" ),
    novice: strengths.filter( ({ proficiency }) => proficiency === "novice" ),
    noExperience: strengths.filter( ({ proficiency }) => proficiency === "no-experience-interested" ),
  };

  return (
    <>
      <h3>Skill and interests:</h3>

      {/* Master */}
      { skills.master.length > 0 && <h4>Master</h4> }
      { skills.master.length > 0 && <ul>{ skills.master.map( ({ name }) => <li>{ name }</li>) }</ul> }

      {/* Expert */}
      { skills.expert.length > 0 && <h4>Expert</h4> }
      { skills.expert.length > 0 && <ul>{ skills.expert.map( ({ name }) => <li>{ name }</li>) }</ul> }

      {/* Proficient */}
      { skills.proficient.length > 0 && <h4>Proficient</h4> }
      { skills.proficient.length > 0 && <ul>{ skills.proficient.map( ({ name }) => <li>{ name }</li>) }</ul> }

      {/* Novice */}
      { skills.novice.length > 0 && <h4>Novice</h4> }
      { skills.novice.length > 0 && <ul>{ skills.novice.map( ({ name }) => <li>{ name }</li>) }</ul> }

      {/* No Experience, but interested */}
      { skills.noExperience.length > 0 && <h4>No experience, but interested</h4> }
      { skills.noExperience.length > 0 && <ul>{ skills.noExperience.map( ({ name }) => <li>{ name }</li>) }</ul> }
    </>
  );
}
