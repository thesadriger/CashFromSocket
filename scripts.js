window.onload = function() {
    // Получаем все модальные окна и кнопки закрытия
    var modals = document.querySelectorAll(".modal");
    var closeButtons = document.querySelectorAll(".close");

    

    // Добавляем обработчики событий для кнопок закрытия
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.stopPropagation(); // Останавливаем всплытие события, чтобы избежать закрытия модального окна при клике на кнопку
            var currentModal = this.closest(".modal"); // Находим ближайшее модальное окно
            closeModal(currentModal.id); // Закрываем текущее модальное окно
        });
    });

    // Функция для открытия модального окна по ID
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block"; // Показываем модальное окно
        }
    }

    // Функция для закрытия модального окна по ID
    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none"; // Скрываем модальное окно
        }
    }

    // Добавляем обработчики событий для кнопок навигации
    document.querySelectorAll('.nav-button-friends, .nav-button-mining, .nav-button-tasks').forEach(function(button) {
        button.addEventListener("click", function() {
            var modalId;
            // Определяем ID модального окна на основе класса кнопки
            if (this.classList.contains('nav-button-friends')) {
                modalId = 'friendModal';
            } else if (this.classList.contains('nav-button-mining')) {
                modalId = 'miningModal';
            } else if (this.classList.contains('nav-button-tasks')) {
                modalId = 'taskModal';
            }
            openModal(modalId); // Открываем соответствующее модальное окно
        });
    });

    // Добавляем обработчик события для закрытия модальных окон при клике вне их области
    window.addEventListener("click", function(event) {
        var clickedElement = event.target; // Элемент, по которому был произведен клик
        modals.forEach(function(modal) {
            var modalContent = modal.querySelector('.modal-content'); // Содержимое модального окна
            // Проверяем, открыт ли модальное окно, и был ли клик вне области его содержимого
            if (modal.style.display === "block" && !modalContent.contains(clickedElement) 
                                                && !clickedElement.classList.contains('nav-button-friends') 
                                                && !clickedElement.classList.contains('nav-button-mining') 
                                                && !clickedElement.classList.contains('nav-button-tasks')) {
                closeModal(modal.id); // Закрываем модальное окно
            }
        });
    });
};
