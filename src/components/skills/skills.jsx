import { useState, useEffect } from 'react';
import './skills.scss';

import html from '../../img/html.png';
import css from '../../img/css.png';
import bem from '../../img/bem.jpeg';
import react from '../../img/react.png';
import scss from '../../img/scss.webp';
import js from '../../img/js.png';
import git from '../../img/git.png';
import chatgpt from '../../img/chatgpt.png';

const skillsData = [
  { key: 'html', img: html, percent: 85, color: '#e34c26' },
  { key: 'css', img: css, percent: 78, color: '#264de4' },
  { key: 'scss', img: scss, percent: 90, color: '#cd6799' },
  { key: 'git', img: git, percent: 60, color: '#f34f29' },
  { key: 'js', img: js, percent: 40, color: 'rgb(104, 128, 0)' },
  { key: 'bem', img: bem, percent: 88, color: 'rgb(44, 187, 243)' },
  { key: 'react', img: react, percent: 40, color: '#61dafb' },
  { key: 'chatgpt', img: chatgpt, percent: 90, color: 'rgb(24, 255, 120)' },
];

export default function Skills() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="skills">
      <div className="container">
        <div className="skills__inner">
          <h2 className="skills__title">My Stack</h2>

          <div className="skills__wrapper">
            {skillsData.map(({ key, img, percent, color }) => (
              <div
                key={key}
                className={`skills__wrapper-img ${showHint ? 'hint' : ''} skills__wrapper-img--${key} ${
                  ['scss', 'bem', 'chatgpt'].includes(key) ? `skills__wrapper-img-${key}` : ''
                }`}
                style={{ '--percent-width': `${percent}%`, '--percent-color': color }}
              >
                <img src={img} alt={key} />
                <div className="skills__progress">
                  <div className="skills__progress-bar" />
                  <span className="skills__wrapper-img-percent">{percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
