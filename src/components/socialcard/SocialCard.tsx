import { FunctionComponent } from 'react';

const SocialCard: FunctionComponent = () => {
  return (
    <section>
      <h2>Follow</h2>
      <ul className="icons">
        <li>
          <a href="#https://twitter.com/BrianLusina" className="icon brands style2 fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/BrianLusina" className="icon brands style2 fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/brianlusina/"
            className="icon solid style2 fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialCard;
