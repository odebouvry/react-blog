import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [widthScr, setWidthScr] = useState(window.innerWidth);

  const toggleState = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidthScr = () => {
      setWidthScr(window.innerWidth);
    };
    window.addEventListener('resize', changeWidthScr);

    return () => {
      window.removeEventListener('resize', changeWidthScr);
    };
  }, []);

  return (
    <nav className="navbar">
      {(toggleMenu || widthScr > 575) && (
        <ul className="liste">
          <li className="items">Accueil</li>
          <li className="items">Écrire</li>
          <li className="items">Contact</li>
        </ul>
      )}
      <button onClick={toggleState} className="btn">
        Burger
      </button>
    </nav>
  );
}
