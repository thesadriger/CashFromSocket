window.onload = function() {
    // Получаем модальные окна и кнопки закрытия
    var modals = document.querySelectorAll(".modal");
    var closeButtons = document.querySelectorAll(".close");

    // Показываем первое модальное окно при загрузке страницы
    modals[0].style.display = "block";

    // Закрываем модальное окно при клике на кнопку закрытия
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.stopPropagation(); // Предотвращаем закрытие при клике на кнопку
            var currentModal = this.closest(".modal"); // Находим ближайшее модальное окно
            closeModal(currentModal.id);
        });
    });

    // Функции для открытия и закрытия модальных окон
    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = "none"; // Закрываем модальное окно
        modal.removeEventListener('click', closeModal); // Удаляем обработчик события закрытия
    }

    // Добавляем обработчики событий для кнопок
    document.querySelectorAll('.nav-button-friends, .nav-button-mining, .nav-button-tasks').forEach(function(button) {
        button.addEventListener("click", function() {
            var modalId = this.classList.contains('nav-button-friends') ? 'friendModal' : 
                           this.classList.contains('nav-button-mining') ? 'miningModal' :
                           'taskModal';
            openModal(modalId);
        });
    });

    // Закрытие модального окна при клике вне его области
    window.addEventListener("click", function(event) {
        var clickedElement = event.target;
        var modals = Array.from(document.querySelectorAll('.modal'));
        
        modals.forEach(function(modal) {
            if (!modal.contains(clickedElement)) {
                closeModal(modal.id); // Если клик вне модального окна, закрываем его
            }
        });
    });
};
