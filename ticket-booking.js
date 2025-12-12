// Данные спектаклей (должны соответствовать данным на главной странице)
const playsData = {
    1: {
        title: "Гамлет",
        genre: "Классика",
        subtitle: "Трагическая история датского принца",
        duration: "3 ч. 20 мин.",
        age: "16+"
    },
    2: {
        title: "Ревизор",
        genre: "Комедия",
        subtitle: "Знаменитая комедия Гоголя о чиновниках провинциального города",
        duration: "2 ч. 40 мин.",
        age: "12+"
    },
    3: {
        title: "Вишневый сад",
        genre: "Драма",
        subtitle: "Лирическая драма Чехова о конце эпохи русских дворян",
        duration: "3 ч. 10 мин.",
        age: "14+"
    },
    4: {
        title: "Сон в летнюю ночь",
        genre: "Комедия",
        subtitle: "Волшебная комедия Шекспира о любви и магии сказочного леса",
        duration: "2 ч. 50 мин.",
        age: "6+"
    },
    5: {
        title: "Три сестры",
        genre: "Драма",
        subtitle: "Психологическая драма Чехова о мечтах и реальности",
        duration: "3 ч. 30 мин.",
        age: "16+"
    },
    6: {
        title: "Новая эра",
        genre: "Современное",
        subtitle: "Современная пьеса о проблемах цифрового общества",
        duration: "2 ч. 20 мин.",
        age: "18+"
    },
    7: {
        title: "Евгений Онегин",
        genre: "Классика",
        subtitle: "По мотивам романа в стихах Пушкина",
        duration: "3 ч. 00 мин.",
        age: "14+"
    },
    8: {
        title: "Игра в правду",
        genre: "Современное",
        subtitle: "Острая социальная драма о поисках истины в мире постправды",
        duration: "2 ч. 40 мин.",
        age: "18+"
    }
};

// DOM элементы
const dateSelect = document.getElementById('dateSelect');
const hallButtons = document.querySelectorAll('.hall-btn');
const selectedSeatsCount = document.getElementById('selectedSeatsCount');
const selectedSeatsSum = document.getElementById('selectedSeatsSum');
const selectedSeatsList = document.getElementById('selectedSeatsList');
const totalAmount = document.getElementById('totalAmount');
const totalDetails = document.getElementById('totalDetails');
const clearSelectionBtn = document.getElementById('clearSelection');
const proceedToPaymentBtn = document.getElementById('proceedToPayment');
const confirmationModal = document.getElementById('confirmationModal');
const confirmationModalClose = document.getElementById('confirmationModalClose');
const confirmationDetails = document.getElementById('confirmationDetails');
const closeConfirmationBtn = document.getElementById('closeConfirmation');
const printTicketsBtn = document.getElementById('printTickets');
const selectedDateElement = document.getElementById('selectedDate');
const selectedHallElement = document.getElementById('selectedHall');
const bookingTitle = document.getElementById('booking-title');
const bookingGenre = document.getElementById('booking-genre');
const bookingSubtitle = document.getElementById('booking-subtitle');
const playDuration = document.getElementById('playDuration');
const playAge = document.getElementById('playAge');
const breadcrumbsTitle = document.getElementById('breadcrumbs-title');

// Данные выбранных мест
let selectedSeats = [];

// Получение параметров из URL
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    
    for (let pair of pairs) {
        const [key, value] = pair.split('=');
        if (key && value) {
            params[key] = decodeURIComponent(value);
        }
    }
    
    return params;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Получаем параметры из URL
    const params = getUrlParams();
    const spectacleId = params.spectacle ? parseInt(params.spectacle) : 1; // По умолчанию Гамлет
    
    // Загружаем данные спектакля
    const play = playsData[spectacleId];
    
    if (play) {
        // Обновляем информацию о спектакле
        bookingTitle.textContent = play.title;
        bookingGenre.textContent = play.genre;
        bookingSubtitle.textContent = play.subtitle;
        playDuration.textContent = play.duration;
        playAge.textContent = play.age;
        breadcrumbsTitle.textContent = `Выбор мест - ${play.title}`;
        
        // Обновляем заголовок страницы
        document.title = `${play.title} - Выбор мест | Grand Theatre`;
    }
    
    // Обработчик изменения даты
    dateSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const text = selectedOption.text;
        selectedDateElement.textContent = text.split(' - ')[0];
        
        // Обновляем выбранный зал
        const hallName = text.split(' - ')[1];
        selectedHallElement.textContent = hallName;
        
        // Переключаем на соответствующий зал
        hallButtons.forEach(btn => {
            const hallType = btn.dataset.hall;
            const hallText = btn.textContent;
            
            if (hallName.includes(hallText)) {
                btn.classList.add('active');
                switchHallLayout(hallType);
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Сбрасываем выбранные места
        clearSelection();
    });
    
    // Обработчики кнопок выбора зала
    hallButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок
            hallButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс нажатой кнопке
            button.classList.add('active');
            
            const hallType = button.dataset.hall;
            selectedHallElement.textContent = button.textContent;
            
            switchHallLayout(hallType);
            
            // Сбрасываем выбранные места
            clearSelection();
        });
    });
    
    // Обработчики кликов по местам
    document.addEventListener('click', (e) => {
        const seat = e.target;
        
        if (seat.classList.contains('seat') && !seat.classList.contains('occupied')) {
            const seatId = seat.dataset.row + ' ' + seat.dataset.seat;
            const price = parseInt(seat.dataset.price);
            
            // Проверяем, выбрано ли уже это место
            const seatIndex = selectedSeats.findIndex(s => s.id === seatId);
            
            if (seatIndex === -1) {
                // Добавляем место в выбранные
                selectedSeats.push({
                    id: seatId,
                    row: seat.dataset.row,
                    seat: seat.dataset.seat,
                    price: price,
                    element: seat
                });
                seat.classList.add('selected');
            } else {
                // Удаляем место из выбранных
                selectedSeats.splice(seatIndex, 1);
                seat.classList.remove('selected');
            }
            
            updateSelectedSeats();
        }
    });
    
    // Обработчик кнопки очистки выбора
    clearSelectionBtn.addEventListener('click', clearSelection);
    
    // Обработчик кнопки перехода к оплате
    proceedToPaymentBtn.addEventListener('click', () => {
        showConfirmationModal();
    });
    
    // Обработчики модального окна подтверждения
    confirmationModalClose.addEventListener('click', () => {
        closeModal(confirmationModal);
    });
    
    closeConfirmationBtn.addEventListener('click', () => {
        closeModal(confirmationModal);
    });
    
    printTicketsBtn.addEventListener('click', () => {
        alert('Функция печати билетов. В реальном приложении здесь был бы вызов службы печати или отправка на email.');
        
        // Имитация печати
        setTimeout(() => {
            alert('Билеты успешно отправлены на печать!');
            closeModal(confirmationModal);
            
            // Перенаправляем на главную страницу через 1 секунду
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }, 500);
    });
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            closeModal(confirmationModal);
        }
    });
    
    // Закрытие модального окна при нажатии ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && confirmationModal.style.display === 'flex') {
            closeModal(confirmationModal);
        }
    });
    
    // Бургер-меню для мобильных устройств
    const burger = document.getElementById('burger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Обработка формы подписки
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = subscribeForm.querySelector('input[type="email"]').value;
            
            alert(`Спасибо за подписку! На адрес ${email} будут отправляться уведомления о новых спектаклях.`);
            subscribeForm.reset();
        });
    }
    
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
    
    // Инициализируем выбранные места
    updateSelectedSeats();
});

// Функция переключения схемы зала
function switchHallLayout(hallType) {
    // Скрываем все схемы залов
    document.querySelectorAll('.hall-layout').forEach(layout => {
        layout.classList.remove('active');
    });
    
    // Показываем выбранную схему
    const selectedLayout = document.querySelector(`.${hallType}-hall`);
    if (selectedLayout) {
        selectedLayout.classList.add('active');
    }
    
    // Сбрасываем выбранные места
    clearSelection();
}

// Функция обновления информации о выбранных местах
function updateSelectedSeats() {
    const count = selectedSeats.length;
    const total = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
    
    // Обновляем счетчик
    selectedSeatsCount.textContent = count;
    selectedSeatsSum.textContent = ` | Сумма: ${total} ₽`;
    
    // Обновляем список выбранных мест
    if (count === 0) {
        selectedSeatsList.innerHTML = '<p class="empty-seats">Места не выбраны</p>';
    } else {
        selectedSeatsList.innerHTML = selectedSeats.map(seat => `
            <div class="selected-seat-item">
                <div class="seat-info">
                    <span class="seat-location">${seat.row}, место ${seat.seat}</span>
                    <span class="seat-price">${seat.price} ₽</span>
                </div>
                <button class="remove-seat" data-seat-id="${seat.id}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
        
        // Добавляем обработчики для новых кнопок удаления
        document.querySelectorAll('.remove-seat').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const seatId = this.dataset.seatId;
                removeSeat(seatId);
            });
        });
    }
    
    // Обновляем итоговую сумму
    totalAmount.textContent = `${total} ₽`;
    
    if (count > 0) {
        totalDetails.textContent = `${count} место(а) на сумму ${total} ₽`;
        proceedToPaymentBtn.disabled = false;
    } else {
        totalDetails.textContent = 'Выберите места для расчета стоимости';
        proceedToPaymentBtn.disabled = true;
    }
}

// Функция удаления места из выбранных
function removeSeat(seatId) {
    const seatIndex = selectedSeats.findIndex(s => s.id === seatId);
    
    if (seatIndex !== -1) {
        // Удаляем класс selected с элемента места
        if (selectedSeats[seatIndex].element) {
            selectedSeats[seatIndex].element.classList.remove('selected');
        }
        
        // Удаляем место из массива
        selectedSeats.splice(seatIndex, 1);
        
        updateSelectedSeats();
    }
}

// Функция очистки выбора
function clearSelection() {
    // Убираем класс selected со всех мест
    selectedSeats.forEach(seat => {
        if (seat.element) {
            seat.element.classList.remove('selected');
        }
    });
    
    // Очищаем массив выбранных мест
    selectedSeats = [];
    
    updateSelectedSeats();
}

// Функция показа модального окна подтверждения
function showConfirmationModal() {
    const total = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
    const date = selectedDateElement.textContent;
    const hall = selectedHallElement.textContent;
    const playTitle = bookingTitle.textContent;
    const playGenre = bookingGenre.textContent;
    
    confirmationDetails.innerHTML = `
        <div class="confirmation-item">
            <span class="confirmation-item-label">Спектакль:</span>
            <span class="confirmation-item-value">${playTitle}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-item-label">Жанр:</span>
            <span class="confirmation-item-value">${playGenre}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-item-label">Дата и время:</span>
            <span class="confirmation-item-value">${date}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-item-label">Зал:</span>
            <span class="confirmation-item-value">${hall}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-item-label">Выбранные места:</span>
            <span class="confirmation-item-value">${selectedSeats.map(s => `${s.row}, место ${s.seat}`).join(', ')}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-item-label">Количество билетов:</span>
            <span class="confirmation-item-value">${selectedSeats.length}</span>
        </div>
        <div class="confirmation-item">
            <span class="confirmation-item-label">Общая стоимость:</span>
            <span class="confirmation-item-value price">${total} ₽</span>
        </div>
        <div class="confirmation-item" style="margin-top: 20px; padding-top: 20px; border-top: 2px solid rgba(201, 169, 89, 0.3);">
            <span class="confirmation-item-label">Номер заказа:</span>
            <span class="confirmation-item-value">GT-${Date.now().toString().slice(-8)}</span>
        </div>
    `;
    
    // Анимация открытия модального окна
    confirmationModal.style.display = 'flex';
    setTimeout(() => {
        confirmationModal.style.opacity = '1';
        confirmationModal.querySelector('.modal-content').style.opacity = '1';
        confirmationModal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
    
    document.body.style.overflow = 'hidden';
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