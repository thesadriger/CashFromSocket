window.onload = function() {
    // Получаем модальное окно баланса и кнопку закрытия
    var balanceModal = document.getElementById("balanceModal");
    var closeButtons = document.querySelectorAll(".close");

    // Показываем модальное окно баланса при загрузке страницы
    balanceModal.style.display = "block";

    // Закрываем модальное окно при клике на кнопку закрытия
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            balanceModal.style.display = "none";
        });
    });

    // Функции для открытия и закрытия модальных окон
    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Добавляем обработчики событий для кнопок
    document.querySelector('.nav-button-friends').addEventListener("click", function() { openModal('friendModal'); });
    document.querySelector('.nav-button-mining').addEventListener("click", function() { openModal('miningModal'); });
    document.querySelector('.nav-button-tasks').addEventListener("click", function() { openModal('taskModal'); });

    // Закрытие модального окна при клике вне его области
    window.addEventListener("click", function(event) {
        var modals = ['balanceModal', 'friendModal', 'miningModal', 'taskModal'];
        var clickedElement = event.target;

        // Проверяем, был ли клик внутри одного из модальных окон
        for (var i = 0; i < modals.length; i++) {
            var modal = document.getElementById(modals[i]);
            if (clickedElement === modal || clickedElement.closest(modal)) {
                closeModal(modals[i]); // Если да, закрываем модальное окно
                break; // Выходим из цикла
            }
        }
    });
};
