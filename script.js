document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('message');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function() {
        if (message.style.display === 'none') {
            message.style.display = 'block';
            toggleButton.textContent = 'Hide Message';
        } else {
            message.style.display = 'none';
            toggleButton.textContent = 'Show Message';
        }
    });
});
