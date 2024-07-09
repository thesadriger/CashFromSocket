window.onload = function() {
    var modal = document.getElementById("balanceModal");
    var span = document.getElementsByClassName("close")[0];

    // Показываем модальное окно при загрузке страницы
    modal.style.display = "block";

    // Закрываем модальное окно при закрытии
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Функция для открытия модального окна
    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    // Функция для закрытия модального окна
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Пример использования функций для кнопок
    document.querySelector('.nav-button-friends').onclick = function() { openModal('friendModal'); };
    document.querySelector('.nav-button-mining').onclick = function() { openModal('miningModal'); };
    document.querySelector('.nav-button-tasks').onclick = function() { openModal('taskModal'); };

    // Закрытие модального окна при клике вне его области
    window.onclick = function(event) {
        var modals = ['balanceModal', 'friendModal', 'miningModal', 'taskModal'];
        for (var i = 0; i < modals.length; i++) {
            var modal = document.getElementById(modals[i]);
            if (event.target == modal) {
                closeModal(modals[i]);
            }
        }
    };
};
