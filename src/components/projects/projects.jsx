import { useState } from 'react';
import './projects.scss';

const projectsData = [
    {
        id: 1,
        title: 'Музыкальное агентство',
        description: 'Современный сайт для музыкального агентства с адаптивным дизайном',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Music+Agency',
        link: '#',
        category: 'web'
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        description: 'Интернет-магазин с корзиной и системой оплаты',
        technologies: ['React', 'Node.js', 'MongoDB'],
        image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=E-commerce',
        link: '#',
        category: 'web'
    },
    {
        id: 3,
        title: 'Task Manager App',
        description: 'Приложение для управления задачами с drag-and-drop',
        technologies: ['React', 'TypeScript', 'SCSS'],
        image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Task+Manager',
        link: '#',
        category: 'app'
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        description: 'Дашборд погоды с API интеграцией',
        technologies: ['JavaScript', 'API', 'CSS'],
        image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Weather+App',
        link: '#',
        category: 'app'
    }
];

const categories = [
    { id: 'all', label: 'Все проекты' },
    { id: 'web', label: 'Веб-сайты' },
    { id: 'app', label: 'Приложения' }
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    const filteredProjects = activeCategory === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="projects__inner">
                    <h2 className="projects__title">Мои проекты</h2>
                    <p className="projects__subtitle">
                        Вот несколько проектов, над которыми я работал
                    </p>

                    <div className="projects__filters">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`projects__filter ${activeCategory === category.id ? 'projects__filter--active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="projects__grid">
                        {filteredProjects.map(project => (
                            <div
                                key={project.id}
                                className={`projects__card ${hoveredProject === project.id ? 'projects__card--hovered' : ''}`}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className="projects__card-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="projects__card-overlay">
                                        <a href={project.link} className="projects__card-link" target="_blank" rel="noopener noreferrer">
                                            Посмотреть проект
                                        </a>
                                    </div>
                                </div>
                                <div className="projects__card-content">
                                    <h3 className="projects__card-title">{project.title}</h3>
                                    <p className="projects__card-description">{project.description}</p>
                                    <div className="projects__card-technologies">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="projects__card-tech">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="projects__cta">
                        <p>Хотите увидеть больше проектов?</p>
                        <a href="https://github.com/yourusername" className="projects__cta-link" target="_blank" rel="noopener noreferrer">
                            Посетить GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 