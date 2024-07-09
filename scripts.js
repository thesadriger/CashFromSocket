window.onload = function() {
    // Get modal windows and close buttons
    var modals = document.querySelectorAll(".modal");
    var closeButtons = document.querySelectorAll(".close");

    // Show the first modal window when the page loads
    if (modals.length > 0) {
        modals[0].style.display = "block";
    }

    // Close the modal window when clicking the close button
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent closing when clicking the button
            var currentModal = this.closest(".modal"); // Find the nearest modal window
            closeModal(currentModal.id);
        });
    });

    // Functions to open and close modal windows
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
    }

    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none"; // Close the modal window
        }
    }

    // Add event handlers for navigation buttons
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

    // Close the modal window when clicking outside its area
    window.addEventListener("click", function(event) {
        var clickedElement = event.target;
        modals.forEach(function(modal) {
            if (modal.style.display === "block" && !modal.contains(clickedElement) && !clickedElement.classList.contains('nav-button-friends') && !clickedElement.classList.contains('nav-button-mining') && !clickedElement.classList.contains('nav-button-tasks')) {
                closeModal(modal.id); // If click outside the modal window, close it
            }
        });
    });
};
