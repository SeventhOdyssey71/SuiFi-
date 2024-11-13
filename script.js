// JavaScript to control animations and background effects
document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll('.feature-item');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.classList.add('hovered');
        });
        feature.addEventListener('mouseleave', () => {
            feature.classList.remove('hovered');
        });
    });
});

const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const testimonials = Array.from(document.querySelectorAll('.testimonial'));

// Duplicate testimonials to make scrolling seamless
testimonialWrapper.innerHTML += testimonialWrapper.innerHTML; 
const totalWidth = testimonialWrapper.scrollWidth / 2; // Width of original testimonials only

let scrollPosition = 0;
const scrollSpeed = 1.2; // Adjust this value to control the scroll speed

function scrollTestimonials() {
    scrollPosition -= scrollSpeed;

    // Reset position to create an infinite loop
    if (Math.abs(scrollPosition) >= totalWidth) {
        scrollPosition = 1;
    }

    testimonialWrapper.style.transform = `translateX(${scrollPosition}px)`;
    requestAnimationFrame(scrollTestimonials);
}

scrollTestimonials(); // Start the scrolling

// JavaScript to handle the pop-up functionality
document.addEventListener("DOMContentLoaded", function () {
  const signIn = document.getElementById("signIn");
  const popupForm = document.getElementById("popupForm");
  const closeBtn = document.getElementById("closeBtn");

  // Show pop-up form
  signIn.addEventListener("click", () => {
    popupForm.style.display = "flex";
  });

  // Close pop-up form when 'X' is clicked
  closeBtn.addEventListener("click", () => {
    popupForm.style.display = "none";
  });

  // Close pop-up form when clicking outside of the form content
  window.addEventListener("click", (event) => {
    if (event.target === popupForm) {
      popupForm.style.display = "none";
    }
  });
});