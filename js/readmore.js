
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 11; i++) {
      document.getElementById(`read-more-link-${i}`).addEventListener('click', function(event) {
        event.preventDefault();
        var moreText = document.getElementById(`more-text-${i}`);
        if (moreText.style.display === 'none' || moreText.style.display === '') {
          moreText.style.display = 'block';
          this.textContent = 'Read less';
        } else {
          moreText.style.display = 'none';
          this.textContent = 'Read more';
        }
      });
    }
  });
  