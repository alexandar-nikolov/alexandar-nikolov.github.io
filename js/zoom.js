//zooming in for the images (click on image to make it bigger)
const images = document.querySelectorAll(".image3");

images.forEach(image => {
    image.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.className = "modal";
        const enlargedImage = new Image();
        enlargedImage.src = image.src;

        modal.appendChild(enlargedImage);
        document.body.appendChild(modal);
        modal.style.display = "block";

        modal.addEventListener("click", () => {
            modal.style.display = "none";
            modal.removeChild(enlargedImage);
        });
    });
});