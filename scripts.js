document.addEventListener('DOMContentLoaded', function() {
	var accButtons = document.querySelectorAll('.accordion-button');

	accButtons.forEach(function(button) {
			button.addEventListener('click', function() {
					this.classList.toggle('active');
					var content = this.nextElementSibling;
					if (content.style.display === 'block') {
							content.style.display = 'none';
					} else {
							content.style.display = 'block';
					}
			});
	});
});