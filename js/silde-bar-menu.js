document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.button-menu-body-item');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
                this.classList.remove('active');
                var paths = this.querySelectorAll('svg path');
                paths.forEach(function(path) {
                    path.style.stroke = '#888888'; 
                });
            } else {
                dropdowns.forEach(function(item) {
                    var otherContent = item.nextElementSibling;
                    if (otherContent !== content) {
                        otherContent.style.display = 'none';
                        item.classList.remove('active');
                        var otherPaths = item.querySelectorAll('svg path');
                        otherPaths.forEach(function(path) {
                            path.style.stroke = '#888888'; 
                        });
                    }
                });
                content.style.display = 'block';
                this.classList.add('active');
                var paths = this.querySelectorAll('svg path');
                paths.forEach(function(path) {
                    path.style.stroke = '#0D99FF'; 
                });
            }
        });
    });
    
    // Close dropdowns when clicking outside
    window.addEventListener('click', function(event) {
        dropdowns.forEach(function(dropdown) {
            var content = dropdown.nextElementSibling;
            if (!dropdown.contains(event.target) && !content.contains(event.target)) {
                content.style.display = 'none';
                dropdown.classList.remove('active');
                var paths = dropdown.querySelectorAll('svg path');
                paths.forEach(function(path) {
                    path.style.stroke = '#888888'; 
                });
            }
        });
    });
});
