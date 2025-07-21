import { useState } from 'react';
import './contact.scss';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Имитация отправки формы
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            setTimeout(() => {
                setSubmitStatus(null);
            }, 3000);
        }, 1500);
    };

    const socialLinks = [
        {
            name: 'Telegram',
            url: 'https://t.me/RustamVibe',
            icon: '📱',
            color: '#0088cc'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/yourusername',
            icon: '🐙',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/yourusername',
            icon: '💼',
            color: '#0077b5'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__inner">
                    <div className="contact__header">
                        <h2 className="contact__title">Свяжитесь со мной</h2>
                        <p className="contact__subtitle">
                            Готов к новым проектам и интересным предложениям
                        </p>
                    </div>

                    <div className="contact__content">
                        <div className="contact__info">
                            <h3>Давайте работать вместе!</h3>
                            <p>
                                Если у вас есть проект, над которым вы хотели бы работать, 
                                или просто хотите поздороваться, не стесняйтесь обращаться.
                            </p>
                            
                            <div className="contact__social">
                                <h4>Найдите меня в соцсетях:</h4>
                                <div className="contact__social-links">
                                    {socialLinks.map(link => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            className="contact__social-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ '--social-color': link.color }}
                                        >
                                            <span className="contact__social-icon">{link.icon}</span>
                                            <span className="contact__social-name">{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="contact__form-container">
                            <form className="contact__form" onSubmit={handleSubmit}>
                                <div className="contact__form-group">
                                    <label htmlFor="name" className="contact__label">Имя</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="contact__input"
                                        required
                                    />
                                </div>

                                <div className="contact__form-group">
                                    <label htmlFor="email" className="contact__label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="contact__input"
                                        required
                                    />
                                </div>

                                <div className="contact__form-group">
                                    <label htmlFor="message" className="contact__label">Сообщение</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="contact__textarea"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={`contact__submit ${isSubmitting ? 'contact__submit--loading' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="contact__success">
                                        ✅ Сообщение отправлено! Скоро свяжусь с вами.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 