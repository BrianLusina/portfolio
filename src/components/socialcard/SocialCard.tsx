import { FunctionComponent } from 'react';

const SocialCard: FunctionComponent = () => {
  return (
    <section>
      <h2>Follow</h2>
      <ul className="icons">
        <li>
          <a href="#" className="icon brands style2 fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands style2 fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands style2 fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands style2 fa-dribbble">
            <span className="label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands style2 fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands style2 fa-500px">
            <span className="label">500px</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon solid style2 fa-phone">
            <span className="label">Phone</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon solid style2 fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialCard;
