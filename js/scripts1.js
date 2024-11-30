// Array of image paths
const images = [
    "../images/street1/1.jpg",
    "../images/street1/2.jpg",
    "../images/street1/3.jpg",
    "../images/street1/4.jpg",
    "../images/street1/5.jpg",
    "../images/street1/6.jpg",
    "../images/street1/7.jpg",
    "../images/street1/8.jpg",
    "../images/street1/9.jpg",
    "../images/street1/10.jpg",
    "../images/street1/7.jpg",
];

const visibleThumbnails = 7; // Number of thumbnails visible at a time
let currentIndex = 0; // Current active image index
let sliderImage; // Main image element
let thumbnailsContainer; // Thumbnail container element

function initializeGallery() {
    sliderImage = document.getElementById("sliderImage");
    thumbnailsContainer = document.getElementById("thumbnails");

    // Add all images to the thumbnails container
    images.forEach((image, index) => {
        const thumbnail = createThumbnail(image, index);
        thumbnailsContainer.appendChild(thumbnail);
    });

    // Set the initial main image
    sliderImage.src = images[currentIndex];
    sliderImage.classList.add("visible"); // Ensure initial visibility
    updateMainImage(currentIndex);
}

function createThumbnail(image, index) {
    const thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.alt = `Thumbnail ${index + 1}`;
    thumbnail.className = index === currentIndex ? "thumbnail active" : "thumbnail";

    // Add click event to show clicked image and adjust transformX
    thumbnail.onclick = () => {
        updateMainImage(index);
    };

    return thumbnail;
}

function updateMainImage(index) {
    if (currentIndex === index) return; // Prevent unnecessary updates

    // Fade out current image
    sliderImage.classList.remove("visible");

    // Change the image after fade-out duration
    setTimeout(() => {
        currentIndex = index;
        sliderImage.src = images[currentIndex];

        // Fade in new image
        setTimeout(() => {
            sliderImage.classList.add("visible");
            updateThumbnails();
        }, 100); // Slight delay for smooth fade-in
    }, 300); // Matches CSS fade-out duration
}

function updateThumbnails() {
    const thumbnails = document.querySelectorAll(".thumbnails img");
    const thumbnailWidth = getThumbnailWidth();
    const totalThumbnails = images.length;
    const maxOffset = (totalThumbnails - visibleThumbnails) * thumbnailWidth;

    let startIndex;

    // Prevent shifting for the first three images
    if (currentIndex < 3) {
        startIndex = 0; // Always start with the first thumbnail
    } 
    // Prevent shifting for the last three images
    else if (currentIndex + Math.floor(visibleThumbnails / 2) >= totalThumbnails) {
        startIndex = Math.max(totalThumbnails - visibleThumbnails, 0); // Shift to show the last set of thumbnails
    } 
    // Center the active thumbnail for other cases
    else {
        startIndex = Math.max(0, currentIndex - Math.floor(visibleThumbnails / 2));
    }

    // Calculate offset for the `translateX` value
    let offset = -startIndex * thumbnailWidth;

    // Clamp offset to prevent over-translation
    offset = Math.max(Math.min(offset, 0), -maxOffset);

    // Apply the translation
    thumbnailsContainer.style.transform = `translateX(${offset}px)`;

    // Update active thumbnail class
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.className = index === currentIndex ? "thumbnail active" : "thumbnail";
    });
}


function shiftThumbnails(direction) {
    const totalThumbnails = images.length;
    const newIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        totalThumbnails - 1
    );

    updateMainImage(newIndex); // Update the main image and thumbnails
}

function getThumbnailWidth() {
    const firstThumbnail = document.querySelector(".thumbnails img");
    return firstThumbnail ? firstThumbnail.offsetWidth: 90; // Include gap/margin
}

// Initialize the gallery on page load
document.addEventListener("DOMContentLoaded", initializeGallery);

// -------------------------------------------------------------------------------------------------\


const visibleThumbnailsphone = 3; // Number of thumbnails visible at a time
let currentIndexphone = 0; // Current active image index
let sliderImagephone; // Main image element
let thumbnailsContainerphone; // Thumbnail container element


function initializeGalleryphone() {
    sliderImagephone = document.getElementById("sliderImagephone");
    thumbnailsContainerphone = document.getElementById("thumbnailsphone");

    // Add all images to the thumbnails container
    images.forEach((image, index) => {
        const thumbnailphone = createThumbnailphone(image, index);
        thumbnailsContainerphone.appendChild(thumbnailphone);
    });

    // Set the initial main image
    sliderImagephone.src = images[currentIndexphone];
    sliderImagephone.classList.add("visible"); // Ensure initial visibility
    updateMainImage(currentIndexphone);
}


function createThumbnailphone(image, index) {
    const thumbnailphone = document.createElement("img");
    thumbnailphone.src = image;
    thumbnailphone.alt = `Thumbnail ${index + 1}`;
    thumbnailphone.className = index === currentIndexphone ? "thumbnailphone active" : "thumbnailphone";

    // Add click event to show clicked image and adjust transformX
    thumbnailphone.onclick = () => {
        updateMainImagephone(index);
    };

    return thumbnailphone;
}


function updateMainImagephone(index) {
    if (currentIndexphone === index) return; // Prevent unnecessary updates

    // Fade out current image
    sliderImagephone.classList.remove("visible");

    // Change the image after fade-out duration
    setTimeout(() => {
        currentIndexphone = index;
        sliderImagephone.src = images[currentIndexphone];

        // Fade in new image
        setTimeout(() => {
            sliderImagephone.classList.add("visible");
            updateThumbnailsphone();
        }, 100); // Slight delay for smooth fade-in
    }, 300); // Matches CSS fade-out duration
}


function updateThumbnailsphone() {
    const thumbnailsphone = document.querySelectorAll(".thumbnailsphone img");
    const thumbnailWidthphone = getThumbnailWidthphone();
    const totalThumbnailsphone = images.length;
    const maxOffsetphone = (totalThumbnailsphone - visibleThumbnailsphone) * thumbnailWidthphone;

    let startIndexphone;

    // Prevent shifting for the first three images
    if (currentIndexphone < 0) {
        startIndexphone = 0; // Always start with the first thumbnail
    } 
    // Prevent shifting for the last three images
    else if (currentIndexphone + Math.floor(visibleThumbnailsphone / 2) >= totalThumbnailsphone) {
        startIndexphone = Math.max(totalThumbnailsphone - visibleThumbnailsphone, 0); // Shift to show the last set of thumbnails
    } 
    // Center the active thumbnail for other cases
    else {
        startIndexphone = Math.max(0, currentIndexphone - Math.floor(visibleThumbnailsphone / 2));
    }

    // Calculate offset for the `translateX` value
    let offsetphone = -startIndexphone * thumbnailWidthphone;

    // Clamp offset to prevent over-translation
    offsetphone = Math.max(Math.min(offsetphone, 0), -maxOffsetphone);

    // Apply the translation
    thumbnailsContainerphone.style.transform = `translateX(${offsetphone}px)`;

    // Update active thumbnail class
    thumbnailsphone.forEach((thumbnailphone, index) => {
        thumbnailphone.className = index === currentIndexphone ? "thumbnailphone active" : "thumbnailphone";
    });
}


function shiftThumbnailsphone(direction) {
    const totalThumbnailsphone = images.length;
    const newIndex = Math.min(
        Math.max(currentIndexphone + direction, 0),
        totalThumbnailsphone - 1
    );

    updateMainImagephone(newIndex); // Update the main image and thumbnails
}

function getThumbnailWidthphone() {
    const firstThumbnailphone = document.querySelector(".thumbnailsphone img");
    return firstThumbnailphone ? firstThumbnailphone.offsetWidth: 90; // Include gap/margin
}

// Initialize the gallery on page load
document.addEventListener("DOMContentLoaded", initializeGalleryphone);
