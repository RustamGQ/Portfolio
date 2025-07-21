import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './hero.scss';

export default function Hero() {
    const [text, setText] = useState('');
    const fullText = 'Frontend Developer';
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 150);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__content">
                        <h1 className="hero__title">
                            Привет! Я Рустам
                        </h1>
                        <h2 className="hero__subtitle">
                            {text}<span className="hero__cursor">|</span>
                        </h2>
                        <p className="hero__description">
                            Создаю современные и адаптивные веб-интерфейсы с чистым кодом и отличным UX
                        </p>
                        <div className="hero__buttons">
                            <Link to="about" smooth={true} duration={500} className="hero__btn hero__btn--primary">
                                Узнать больше
                            </Link>
                            <Link to="skills" smooth={true} duration={500} className="hero__btn hero__btn--secondary">
                                Мои навыки
                            </Link>
                        </div>
                    </div>
                    <div className="hero__visual">
                        <div className="hero__code-block">
                            <div className="hero__code-header">
                                <span className="hero__code-dot"></span>
                                <span className="hero__code-dot"></span>
                                <span className="hero__code-dot"></span>
                            </div>
                            <pre className="hero__code">
                                <code>
{`const developer = {
  name: "Рустам",
  role: "Frontend Developer",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  passion: "Создание отличных UI/UX"
};`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 