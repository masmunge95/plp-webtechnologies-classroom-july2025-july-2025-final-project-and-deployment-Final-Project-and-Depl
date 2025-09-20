/// === Testimonials Carousel ===
const track = document.querySelector('.testimonials-track');
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;
let direction = 1; // 1 for forward, -1 for backward

function showTestimonial() {
  // Check if we've reached the end of the forward cycle
  if (index === testimonials.length - 1 && direction === 1) {
    direction = -1; // Change direction to backward
  } 
  // Check if we've reached the end of the backward cycle (the beginning)
  else if (index === 0 && direction === -1) {
    direction = 1; // Change direction back to forward
  }

  // Update the index based on the current direction
  index += direction;

  // Apply the transform
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showTestimonial, 5000);
