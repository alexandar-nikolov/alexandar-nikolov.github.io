// Select all elements with the class "carousel"
const carousels = document.querySelectorAll(".carousel");

// Select arrow icons for navigation (left and right)
const arrowIcons = document.querySelectorAll(".wrapper i.fa-angle-left, .wrapper i.fa-angle-right");

// Iterate over each carousel element
carousels.forEach((carousel, index) => {
    // Find the first image or video element within the carousel
    let firstImg = carousel.querySelector("img","video");

    // Variables to handle drag and slide functionality
    let isDragStart = false,
        isDragging = false,
        prevPageX,
        prevScrollLeft,
        positionDiff;

    // Function to show or hide navigation arrows based on scroll position
    const showHideIcons = () => {
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        arrowIcons[index * 2].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[index * 2 + 1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    }

    // Event listener for clicking on the left arrow icon
    arrowIcons[index * 2].addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft -= firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });

    // Event listener for clicking on the right arrow icon
    arrowIcons[index * 2 + 1].addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });

    // Function to handle auto slide animation
    const autoSlide = () => {
        if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth + 14;
        let valDifference = firstImgWidth - positionDiff;

        if (carousel.scrollLeft > prevScrollLeft) {
            return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    // Function to handle start of dragging
    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    // Function to handle dragging movement
    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }

    // Function to handle end of dragging
    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");

        if (!isDragging) return;
        isDragging = false;
        autoSlide();
    }

    // Event listeners for mouse and touch events to enable dragging/swiping
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);
});
