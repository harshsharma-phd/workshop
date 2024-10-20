document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});
