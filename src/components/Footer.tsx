import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-logo">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="KMC Alimunze Logo" className="footer-logo-img" />
          </div>
          <p className="footer-desc">Kasenge Miracle Centre Church — Alimunze. Building lives, repairing the broken, and
            restoring generations since 1992.</p>
          <div className="footer-socials">
            <a href="https://youtube.com/@robinahntambiministries" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i
                className="fa-brands fa-youtube"></i></a>
            <a href="https://www.facebook.com/PastorRobinah" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i
                className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.tiktok.com/@ali_munze" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i
                className="fa-brands fa-tiktok"></i></a>
            <a href="https://www.instagram.com/ali_munze/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i
                className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/ali_munze" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X"><i
                className="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Navigate</p>
          <ul>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/ministries">Get Involved</Link></li>
            <li><Link to="/sermons">Watch &amp; Listen</Link></li>
            <li><Link to="/give">Give &amp; Partner</Link></li>
            <li><Link to="/join-us">Plan a Visit</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Reach Us</p>
          <ul>
            <li><Link to="/prayer">Send a Prayer</Link></li>
            <li><Link to="/join-us">Contact the Church</Link></li>
            <li><a href="tel:+256778815396">+256 778 815 396 (MTN)</a></li>
            <li><a href="tel:+256703989948">+256 703 989 948 (Airtel)</a></li>
            <li><a href="mailto:info@kasengemiraclecentre.org">Email Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; <span id="current-year">{currentYear}</span> Kasenge Miracle Centre Church · Alimunze. All rights reserved.</p>
        <p className="footer-tagline">"Building lives. Shaping destinies."</p>
      </div>
    </footer>
  );
}
