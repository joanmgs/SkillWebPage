//Libraries
import { Link } from 'react-router-dom';
import iconForSkills from '../helper/iconForSkills';

export default function Proficiency({
  proficiencyArray,
  proficiencyName,
  icon,
}) {
  return (
    <>
      {proficiencyArray.length > 0 && (
        <div className="skill-section">
          {proficiencyArray.length > 0 && (
            <h4>
              <i>{iconForSkills(icon)}</i>
              {proficiencyName}
            </h4>
          )}
          {proficiencyArray.length > 0 && (
            <ul>
              {proficiencyArray.map((item, index) => (
                <li key={index} >
                  <Link 
                    to="/skilldetail" 
                    state={{ 
                      data: item, 
                      proficiencyName, 
                      icon,
                    }}
                  >{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
