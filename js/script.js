
document.addEventListener("DOMContentLoaded", function() {
    // Select all image containers
    let imageContainers = document.querySelectorAll(".img-container");

    imageContainers.forEach(container => {
        container.addEventListener("click", function() {
            // Remove glow from all images first
            imageContainers.forEach(img => img.classList.remove("glow-effect"));

            // Add glow effect to the clicked image
            this.classList.add("glow-effect");

            // Remove glow after 2 seconds
            setTimeout(() => {
                this.classList.remove("glow-effect");
            }, 2000);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const brandElement = document.getElementById("brand-name");
    const brands = ["Samsung", "LG", "Whirlpool", "Bosch", "Panasonic", "Haier"];
    let brandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        let currentBrand = brands[brandIndex];
        if (!isDeleting) {
            brandElement.innerHTML = currentBrand.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentBrand.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500); // Pause before deleting
                return;
            }
        } else {
            brandElement.innerHTML = currentBrand.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                brandIndex = (brandIndex + 1) % brands.length;
            }
        }
        setTimeout(typeEffect, isDeleting ? 100 : 150); // Typing speed
    }

    typeEffect(); // Start typing effect
});