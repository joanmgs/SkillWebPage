//libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBiking,
  faRunning,
  faWalking,
  faMale,
  faGrinStars,
} from "@fortawesome/free-solid-svg-icons";

export default function iconForSkills(iconType) {
  const masterIcon = <FontAwesomeIcon icon={faBiking} />;
  const expertIcon = <FontAwesomeIcon icon={faRunning} />;
  const proficientIcon = <FontAwesomeIcon icon={faWalking} />;
  const noviceIcon = <FontAwesomeIcon icon={faMale} />;
  const noExperienceIcon = <FontAwesomeIcon icon={faGrinStars} />;
  
  switch (iconType) {
    case "masterIcon":
      return masterIcon;
    case "expertIcon":
      return expertIcon;
    case "proficientIcon":
      return proficientIcon;
    case "noviceIcon":
      return noviceIcon;
    case "noExperienceIcon":
      return noExperienceIcon;
    default:
      return null;
  };
}
