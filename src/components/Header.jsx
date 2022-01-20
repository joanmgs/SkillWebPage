// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
// Styles
import '../styles/Header.css';

export default function Header() {
  // Iconos
  const menuIcon = <FontAwesomeIcon icon={faBars} />
  const searchIcon = <FontAwesomeIcon icon={faSearch} />

  return (
    <header className='header'>
      <div>
        <i className='menu-burger'>{menuIcon}</i>
        <h2>Torre<span>.co</span></h2>
      </div>
      <div>
        <i>{searchIcon}</i>
        <p>SIGN IN</p>
      </div>
    </header>
  );
}
