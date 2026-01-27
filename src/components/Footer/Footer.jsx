import './Footer.css';
import Social from '../Social/Social.jsx'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Branding */}
        <div className="footer__brand">
          <span className="footer__symbol">✦</span>
          <span className="footer__name">Luismi</span>
          <span className="footer__year">© 2026 Luis Miguel</span>
        </div>

        {/* Links */}
        <nav className="footer__links">
          <Social
            url='https://www.linkedin.com/in/luismi0296'
            Icon={<FaLinkedin />}
          />

          <Social
            url='https://github.com/tu-usuario'
            Icon={<FaGithub />}
          />

          <Social
            url='mailto:luismi0296@gmail.com'
            Icon={<FaEnvelope />}
          />
        </nav>

      </div>
    </footer>
  )
}

export default Footer
