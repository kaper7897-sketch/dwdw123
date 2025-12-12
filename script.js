// Данные спектаклей
const playsData = [
    {
        id: 1,
        title: "Гамлет",
        genre: "classic",
        description: "Трагическая история датского принца, одержимого идеей мести за смерть отца. Шекспировская классика в новой постановке.",
        detailedDescription: "Эта постановка Гамлета представляет собой смелое переосмысление шекспировской трагедии. Режиссер Иван Петров переносит действие в современный мир корпораций, где Эльсинор становится могущественной семейной компанией. Спектакль исследует темы власти, безумия и морали в контексте современного общества. Декорации и костюмы созданы специально для этой постановки ведущими художниками театра.",
        date: "25 октября",
        time: "19:00",
        duration: "3 ч. 20 мин.",
        price: "1500 ₽",
        age: "16+",
        director: "Иван Петров",
        image: "gamlet.jpg"
    },
    {
        id: 2,
        title: "Ревизор",
        genre: "comedy",
        description: "Знаменитая комедия Гоголя о чиновниках провинциального города, ожидающих приезда ревизора.",
        detailedDescription: "Гоголевская комедия представлена в стилистике театра абсурда. Костюмы и декорации создают атмосферу сюрреалистического сна, подчеркивая гротескность происходящего. Актерский ансамбль блестяще передает иронию и сатиру оригинала. Особое внимание уделено музыкальному сопровождению, которое усиливает комический эффект происходящего на сцене.",
        date: "28 октября",
        time: "18:30",
        duration: "2 ч. 40 мин.",
        price: "1200 ₽",
        age: "12+",
        director: "Мария Смирнова",
        image: "revizor.jpg"
    },
    {
        id: 3,
        title: "Вишневый сад",
        genre: "drama",
        description: "Лирическая драма Чехова о конце эпохи русских дворян и продаже родового имения.",
        detailedDescription: "Чеховская драма получает новое дыхание в этой камерной постановке. Режиссер делает акцент на психологической глубине персонажей, их внутренних конфликтах и тоске по уходящей эпохе. Специально написанная музыка создает меланхоличную атмосферу. Сценография минималистична, что позволяет зрителю сосредоточиться на тонкой игре актеров и глубине чеховского текста.",
        date: "30 октября",
        time: "19:30",
        duration: "3 ч. 10 мин.",
        price: "1400 ₽",
        age: "14+",
        director: "Алексей Волков",
        image: "vishneviy.jpg"
    },
    {
        id: 4,
        title: "Сон в летнюю ночь",
        genre: "comedy",
        description: "Волшебная комедия Шекспира о любви, запутанных отношениях и магии сказочного леса.",
        detailedDescription: "Волшебная комедия Шекспира превращается в красочное театральное шоу с элементами цирка и фантазии. Летающие феи, меняющиеся декорации и оригинальные музыкальные номера делают этот спектакль идеальным для семейного просмотра. Хореография сочетает в себе классический балет и современный танец, создавая волшебную атмосферу сказочного леса.",
        date: "1 ноября",
        time: "18:00",
        duration: "2 ч. 50 мин.",
        price: "1300 ₽",
        age: "6+",
        director: "Ольга Козлова",
        image: "son.jpg"
    },
    {
        id: 5,
        title: "Три сестры",
        genre: "drama",
        description: "Психологическая драма Чехова о мечтах и реальности, надеждах и разочарованиях.",
        detailedDescription: "Монохромная сценография и минималистичный подход режиссера подчеркивают экзистенциальные темы чеховской драма. Спектакль фокусируется на диалогах и внутренних переживаниях персонажей, создавая интенсивное эмоциональное напряжение. Особое внимание уделено работе со светом и звуком, которые становятся полноценными участниками действия.",
        date: "3 ноября",
        time: "19:00",
        duration: "3 ч. 30 мин.",
        price: "1600 ₽",
        age: "16+",
        director: "Сергей Иванов",
        image: "tri.jpg"
    },
    {
        id: 6,
        title: "Новая эра",
        genre: "modern",
        description: "Современная пьеса о проблемах цифрового общества и человеческих отношениях в эпоху технологий.",
        detailedDescription: "Спектакль-эксперимент, использующий технологии виртуальной реальности и интерактивные элементы. Зрители становятся участниками действия, что создает уникальный иммерсивный опыт. Современная хореография и саунд-дизайн дополняют атмосферу цифрового будущего. Пьеса исследует вопросы приватности, искусственного интеллекта и человеческой идентичности в эпоху тотальной цифровизации.",
        date: "5 ноября",
        time: "20:00",
        duration: "2 ч. 20 мин.",
        price: "1700 ₽",
        age: "18+",
        director: "Дмитрий Новиков",
        image: "novaya.jpg"
    },
    {
        id: 7,
        title: "Евгений Онегин",
        genre: "classic",
        description: "По мотивам романа в стихах Пушкина. История неразделенной любви и упущенных возможностей.",
        detailedDescription: "Классическая опера Чайковского адаптирована для драматической сцены. Лирические сцены перемежаются с хореографическими вставками, создавая синтез театра, оперы и балета. Роскошные костюмы эпохи ампир воссоздают атмосферу XIX века. Особое внимание уделено музыкальному сопровождению в живом исполнении оркестра театра.",
        date: "7 ноября",
        time: "19:30",
        duration: "3 ч. 00 мин.",
        price: "1550 ₽",
        age: "14+",
        director: "Анна Кузнецова",
        image: "evgenii.jpg"
    },
    {
        id: 8,
        title: "Игра в правду",
        genre: "modern",
        description: "Острая социальная драма о поисках истины в мире постправды и фейковых новостей.",
        detailedDescription: "Интеллектуальный триллер, построенный на диалогах и психологической игре. Сценарий, написанный специально для этой постановки, исследует природу правды в эпоху медиаманипуляций. Динамичная режиссура держит зрителя в напряжении до самого финала. Спектакль заставляет задуматься о том, где проходит грань между правдой и ложью в современном мире.",
        date: "10 ноября",
        time: "19:00",
        duration: "2 ч. 40 мин.",
        price: "1650 ₽",
        age: "18+",
        director: "Павел Соколов",
        image: "igra.jpg"
    }
];

// Данные новостей
const newsData = [
    {
        id: 1,
        title: "Новая постановка 'Гамлета'",
        date: "15 октября 2023",
        excerpt: "В этом сезоне мы представляем совершенно новую интерпретацию шекспировского 'Гамлета' от режиссера-лауреата международных премий.",
        content: "<p>В этом сезоне Grand Theatre представляет совершенно новую интерпретацию шекспировского 'Гамлета' от режиссера-лауреата международных премий Ивана Петрова. Постановка переносит действие в современный мир корпораций, где Эльсинор становится могущественной семейной компанией.</p><p>Спектакль исследует темы власти, безумия и морали в контексте современного общества. Декорации и костюмы созданы специально для этой постановки ведущими художниками театра. Особое внимание уделено музыкальному сопровождению, которое сочетает классические мотивы с современными электронными звуками.</p><p>Премьера состоится 25 октября в 19:00. Билеты уже в продаже на нашем сайте и в кассах театра.</p>",
        image: "gamlet.jpg"
    },
    {
        id: 2,
        title: "Экскурсии за кулисы",
        date: "22 октября 2023",
        excerpt: "С этого месяца мы запускаем уникальные экскурсии за кулисы театра. Узнайте, как создаются спектакли изнутри.",
        content: "<p>С этого месяца Grand Theatre запускает уникальные экскурсии за кулисы театра. Участники экскурсии смогут узнать, как создаются спектакли изнутри, увидеть процесс подготовки декораций и костюмов, а также побывать в гримерных актеров.</p><p>Экскурсии будут проводиться по субботам в 11:00 и 14:00. Продолжительность экскурсии - 1,5 часа. Группы до 15 человек. Экскурсии доступны для всех возрастов, рекомендуемый возраст - от 10 лет.</p><p>Стоимость экскурсии: 800 рублей для взрослых, 500 рублей для детей и пенсионеров. Запись на экскурсии открыта на нашем сайте и по телефону кассы.</p>",
        image: "kulici.jpg"
    },
    {
        id: 3,
        title: "Фестиваль современной драмы",
        date: "5 ноября 2023",
        excerpt: "В ноябре состоится ежегодный фестиваль современной драмы, где будут представлены работы молодых драматургов.",
        content: "<p>В ноябре состоится ежегодный фестиваль современной драмы, где будут представлены работы молодых драматургов. В этом году фестиваль пройдет с 10 по 20 ноября и представит 8 новых пьес от российских и зарубежных авторов.</p><p>В программе фестиваля: читки новых пьес, дискуссии с драматургами и режиссерами, мастер-классы по написанию пьес. Особенностью этого года станет специальная программа для подростков и молодежи.</p><p>Все мероприятия фестиваля бесплатны, но требуют предварительной регистрации на нашем сайте. Количество мест ограничено.</p>",
        image: "sovremennaya.jpg"
    }
];

// DOM элементы
const postersGrid = document.getElementById('postersGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const burger = document.getElementById('burger');
const navMenu = document.querySelector('.nav-menu');
const playModal = document.getElementById('playModal');
const playModalClose = document.getElementById('playModalClose');
const playModalBody = document.getElementById('playModalBody');
const newsModal = document.getElementById('newsModal');
const newsModalClose = document.getElementById('newsModalClose');
const newsModalBody = document.getElementById('newsModalBody');
const subscribeForm = document.getElementById('subscribeForm');

// Генерация случайных сеансов для спектаклей
function generateSessions() {
    const sessions = [];
    const dates = ["25 октября", "26 октября", "28 октября", "30 октября", "1 ноября", "3 ноября", "5 ноября"];
    const times = ["14:00", "15:30", "18:00", "19:30", "20:00"];
    const halls = ["Большой зал", "Малый зал", "Камерная сцена"];
    
    for (let i = 0; i < 5; i++) {
        const randomDate = dates[Math.floor(Math.random() * dates.length)];
        const randomTime = times[Math.floor(Math.random() * times.length)];
        const randomHall = halls[Math.floor(Math.random() * halls.length)];
        
        sessions.push({
            date: randomDate,
            time: randomTime,
            hall: randomHall
        });
    }
    
    return sessions;
}

// Отображение постеров
function displayPlays(plays) {
    postersGrid.innerHTML = '';
    
    plays.forEach(play => {
        const genreText = {
            'drama': 'Драма',
            'comedy': 'Комедия',
            'classic': 'Классика',
            'modern': 'Современное'
        }[play.genre] || play.genre;
        
        const posterCard = document.createElement('div');
        posterCard.className = 'poster-card';
        posterCard.dataset.genre = play.genre;
        posterCard.dataset.id = play.id;
        
        posterCard.innerHTML = `
            <div class="poster-image">
                <img src="${play.image}" alt="${play.title}">
            </div>
            <div class="poster-content">
                <span class="poster-genre">${genreText}</span>
                <h3 class="poster-title">${play.title}</h3>
                <div class="poster-info">
                    <div class="poster-date">
                        <i class="far fa-calendar-alt"></i>
                        <span>${play.date}, ${play.time}</span>
                    </div>
                    <div class="poster-duration">
                        <i class="far fa-clock"></i>
                        <span>${play.duration}</span>
                    </div>
                </div>
                <p class="poster-description">${play.description}</p>
                <div class="poster-price">
                    <span class="price">от ${play.price}</span>
                    <button class="btn-secondary btn-details" data-id="${play.id}">Подробнее</button>
                </div>
            </div>
        `;
        
        postersGrid.appendChild(posterCard);
    });
    
    // Добавляем обработчики для кнопок "Подробнее" в афише
    document.querySelectorAll('.btn-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const playId = parseInt(e.target.dataset.id);
            openPlayModal(playId);
        });
    });
}

// Фильтрация по жанрам
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс нажатой кнопке
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        
        if (filter === 'all') {
            displayPlays(playsData);
        } else {
            const filteredPlays = playsData.filter(play => play.genre === filter);
            displayPlays(filteredPlays);
        }
    });
});

// Открытие модального окна с деталями спектакля
function openPlayModal(playId) {
    const play = playsData.find(p => p.id === playId);
    
    if (!play) return;
    
    const genreText = {
        'drama': 'Драма',
        'comedy': 'Комедия',
        'classic': 'Классика',
        'modern': 'Современное'
    }[play.genre] || play.genre;
    
    const sessions = generateSessions();
    
    playModalBody.innerHTML = `
        <div class="modal-play">
            <div class="modal-play-image">
                <img src="${play.image}" alt="${play.title}" style="object-fit: cover; width: 100%; height: 100%;">
                <div style="position: absolute; bottom: 20px; left: 20px; background: rgba(0,0,0,0.7); padding: 10px 15px; border-radius: 4px; color: white; font-size: 0.9rem;">
                    <i class="fas fa-camera"></i> Фото со спектакля
                </div>
            </div>
            <div class="modal-play-content-container">
                <span class="modal-play-genre">${genreText}</span>
                <h2 class="modal-play-title">${play.title}</h2>
                
                <div class="modal-play-info">
                    <div class="modal-play-info-item">
                        <i class="far fa-clock"></i>
                        <div>
                            <h4>Продолжительность</h4>
                            <p>${play.duration}</p>
                        </div>
                    </div>
                    <div class="modal-play-info-item">
                        <i class="fas fa-user-tie"></i>
                        <div>
                            <h4>Режиссер</h4>
                            <p>${play.director}</p>
                        </div>
                    </div>
                    <div class="modal-play-info-item">
                        <i class="fas fa-user-friends"></i>
                        <div>
                            <h4>Возрастное ограничение</h4>
                            <p>${play.age}</p>
                        </div>
                    </div>
                    <div class="modal-play-info-item">
                        <i class="fas fa-theater-masks"></i>
                        <div>
                            <h4>Жанр</h4>
                            <p>${genreText}</p>
                        </div>
                    </div>
                </div>
                
                <div class="modal-play-description">
                    <h3>О спектакле</h3>
                    <p>${play.detailedDescription}</p>
                </div>
                
                <div class="modal-play-sessions">
                    <h3>Ближайшие сеансы</h3>
                    <div class="sessions-list">
                        ${sessions.map(session => `
                            <div class="session-item">
                                <div class="session-date">${session.date}</div>
                                <div class="session-time">${session.time}</div>
                                <div class="session-hall">${session.hall}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="modal-play-actions">
                    <div class="modal-play-price">
                        <span>Стоимость билетов от</span>
                        <span class="modal-play-price-large">${play.price}</span>
                    </div>
                    <a href="ticket-booking.html?spectacle=${play.id}&title=${encodeURIComponent(play.title)}&genre=${play.genre}" class="btn-external">
                        <i class="fas fa-chair"></i> Выбрать место
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Анимация открытия модального окна
    playModal.style.display = 'flex';
    setTimeout(() => {
        playModal.style.opacity = '1';
        playModal.querySelector('.modal-content').style.opacity = '1';
        playModal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

// Открытие модального окна с новостью
function openNewsModal(newsId) {
    const news = newsData.find(n => n.id === newsId);
    
    if (!news) return;
    
    newsModalBody.innerHTML = `
        <div class="modal-news">
            <div class="modal-news-image">
                <img src="${news.image}" alt="${news.title}" style="object-fit: cover; width: 100%; height: 100%;">
            </div>
            <div class="modal-news-content">
                <div class="modal-news-date">${news.date}</div>
                <h2 class="modal-news-title">${news.title}</h2>
                <div class="modal-news-text">
                    ${news.content}
                </div>
                <div class="modal-news-actions">
                    <a href="#" class="btn-external close-news-link">
                        <i class="fas fa-times"></i> Закрыть
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Анимация открытия модального окна
    newsModal.style.display = 'flex';
    setTimeout(() => {
        newsModal.style.opacity = '1';
        newsModal.querySelector('.modal-content').style.opacity = '1';
        newsModal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
    
    document.body.style.overflow = 'hidden';
    
    // Добавляем обработчик для кнопки "Закрыть" внутри модального окна
    setTimeout(() => {
        const closeNewsLink = document.querySelector('.close-news-link');
        if (closeNewsLink) {
            closeNewsLink.addEventListener('click', (e) => {
                e.preventDefault();
                closeModal(newsModal);
            });
        }
    }, 100);
}

// Функция закрытия модального окна
function closeModal(modal) {
    modal.style.opacity = '0';
    modal.querySelector('.modal-content').style.opacity = '0';
    modal.querySelector('.modal-content').style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Закрытие модальных окон
playModalClose.addEventListener('click', () => closeModal(playModal));
newsModalClose.addEventListener('click', () => closeModal(newsModal));

// Закрытие модальных окон при клике вне их
window.addEventListener('click', (e) => {
    if (e.target === playModal) {
        closeModal(playModal);
    }
    if (e.target === newsModal) {
        closeModal(newsModal);
    }
});

// Закрытие модальных окон при нажатии ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (playModal.style.display === 'flex') closeModal(playModal);
        if (newsModal.style.display === 'flex') closeModal(newsModal);
    }
});

// Бургер-меню для мобильных устройств
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Обработка формы подписки
subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = subscribeForm.querySelector('input[type="email"]').value;
    
    // В реальном приложении здесь была бы отправка на сервер
    alert(`Спасибо за подписку! На адрес ${email} будут отправляться уведомления о новых спектаклях.`);
    subscribeForm.reset();
});

// Плавная прокрутка для ссылок якоря
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Добавляем обработчики для кнопок "Подробнее" в новостях
document.querySelectorAll('.news-details-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const newsId = parseInt(e.target.dataset.id);
        openNewsModal(newsId);
    });
});

// Добавляем обработчики для клика по карточкам новостей
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Проверяем, не был ли клик по ссылке "Подробнее"
        if (!e.target.classList.contains('news-details-btn') && 
            !e.target.parentElement.classList.contains('news-details-btn')) {
            const newsId = parseInt(card.dataset.id);
            openNewsModal(newsId);
        }
    });
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Отображаем все спектакли по умолчанию
    displayPlays(playsData);
    
    // Добавляем небольшой эффект при прокрутке
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        }
    });
});