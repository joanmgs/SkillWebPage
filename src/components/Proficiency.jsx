import '../styles/Skills.css';

export default function Proficiency({ proficiencyArray, proficiencyName, icon }) {
  return (
    <>
      {proficiencyArray.length > 0 && <div className='skill-section'>
        { proficiencyArray.length > 0 && <h4><i>{icon}</i>{proficiencyName}</h4> }
        { proficiencyArray.length > 0 && <ul>{ proficiencyArray.map( ({ name }, index) => <li key={index}>{ name }</li>) }</ul> }
      </div>}
    </>
  );
}
