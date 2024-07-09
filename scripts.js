window.onload = function() {
    var modal = document.getElementById("balanceModal");
    var span = document.getElementsByClassName("close")[0];
    
    // Показываем модальное окно при загрузке страницы
    modal.style.display = "block";
    
    // Закрываем модальное окно при закрытии
    span.onclick = function() {
        modal.style.display = "none";
    }
};
