import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = {
    margin: '10px 16px',
    color: darkMode ? 'white' : '#0f172a',
    textDecoration: 'none',
    fontWeight: '500'
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      style={{
        backgroundColor: darkMode ? '#0f172a' : '#f8fafc',
        color: darkMode ? 'white' : '#0f172a',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}
    >
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontFamily: 'monospace', fontWeight: '600', fontSize: '1.5rem' }}>
        <a href="#hero">
  <img src="/logo.png" alt="Logo" style={{ height: '80px' }} />
</a>


</h1>



        {/* Desktop Nav Links */}
        <div className="nav-links-desktop" style={{ display: 'none' }}>
          <a href="#hero" style={linkStyle}>Home</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#contact" style={linkStyle}>Contact</a>
          <a href="#skills" style={linkStyle}>Skills</a>
        </div>

        {/* Right Icons */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer',
              marginRight: '12px',
              color: darkMode ? 'white' : '#0f172a'
            }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hamburger Icon */}
          <button
            className="hamburger-button"
            onClick={toggleMenu}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: darkMode ? 'white' : '#0f172a'
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="nav-links-mobile" style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="#hero" style={linkStyle} onClick={toggleMenu}>Home</a>
          <a href="#projects" style={linkStyle} onClick={toggleMenu}>Projects</a>
          <a href="#about" style={linkStyle} onClick={toggleMenu}>About</a>
          <a href="#contact" style={linkStyle} onClick={toggleMenu}>Contact</a>
          <a href="#skills" style={linkStyle} onClick={toggleMenu}>Skills</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
