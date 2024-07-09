window.onload = function() {
    var modals = document.querySelectorAll(".modal");
    var closeButtons = document.querySelectorAll(".close");

    if (modals.length > 0) {
        modals[0].style.display = "block";
    }

    closeButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.stopPropagation();
            var currentModal = this.closest(".modal");
            closeModal(currentModal.id);
        });
    });

    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
    }

    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
        }
    }

    document.querySelectorAll('.nav-button-friends, .nav-button-mining, .nav-button-tasks').forEach(function(button) {
        button.addEventListener("click", function() {
            var modalId;
            if (this.classList.contains('nav-button-friends')) {
                modalId = 'friendModal';
            } else if (this.classList.contains('nav-button-mining')) {
                modalId = 'miningModal';
            } else if (this.classList.contains('nav-button-tasks')) {
                modalId = 'taskModal';
            }
            openModal(modalId);
        });
    });

    window.addEventListener("click", function(event) {
        var clickedElement = event.target;
        modals.forEach(function(modal) {
            if (modal.style.display === "block" && !modal.contains(clickedElement) && !clickedElement.classList.contains('nav-button-friends') && !clickedElement.classList.contains('nav-button-mining') && !clickedElement.classList.contains('nav-button-tasks')) {
                closeModal(modal.id);
            }
        });
    });
};
