import { useState, useEffect } from 'react';
import './about.scss';
import about__img from '../../img/about.jpg';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('about');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('about');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const tabs = [
        { id: 'about', label: 'Обо мне', content: 'about' },
        { id: 'experience', label: 'Опыт', content: 'experience' },
        { id: 'goals', label: 'Цели', content: 'goals' }
    ];

    const content = {
        about: (
            <p className='about__content-text'>
                Меня зовут Рустам — я frontend-разработчик с упором на современную адаптивную вёрстку и чистый код. 
                Работаю с HTML, CSS/SCSS, JavaScript и изучаю React, активно совершенствуюсь в английском языке (A2 - Basic user). 
                За плечами — полноценные проекты от идеи до реализации, включая разработку сайта музыкального агентства.
            </p>
        ),
        experience: (
            <div className='about__experience'>
                <div className='about__experience-item'>
                    <h4>Веб-разработка</h4>
                    <p>Создание адаптивных сайтов с использованием современных технологий</p>
                </div>
                <div className='about__experience-item'>
                    <h4>UI/UX Дизайн</h4>
                    <p>Разработка интуитивных и красивых пользовательских интерфейсов</p>
                </div>
                <div className='about__experience-item'>
                    <h4>Проекты</h4>
                    <p>Полный цикл разработки от концепции до запуска</p>
                </div>
            </div>
        ),
        goals: (
            <p className='about__content-text'>
                Моя цель — создавать удобные, лёгкие и визуально точные интерфейсы, которые работают одинаково хорошо 
                на всех устройствах. Мне важна детализация, аккуратность и скорость. Каждый проект для меня — это 
                возможность прокачать навык и сделать веб лучше.
            </p>
        )
    };

    return (
        <section id="about" className={`about ${isVisible ? 'about--visible' : ''}`}>
            <div className="container">
                <div className="about__inner">
                    <div className="about__content">
                        <h2 className='about__content-title'>Обо мне</h2>
                        
                        <div className="about__tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`about__tab ${activeTab === tab.id ? 'about__tab--active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="about__tab-content">
                            {content[activeTab]}
                        </div>

                        <div className="about__stats">
                            <div className="about__stat">
                                <span className="about__stat-number">1+</span>
                                <span className="about__stat-label">Года опыта</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-number">5+</span>
                                <span className="about__stat-label">Проектов</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-number">100%</span>
                                <span className="about__stat-label">Дедлайнов</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about__image-container">
                        <img src={about__img} alt="Портрет" className="about__img" />
                        <div className="about__image-overlay">
                            <div className="about__image-info">
                                <h3>Рустам</h3>
                                <p>Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}