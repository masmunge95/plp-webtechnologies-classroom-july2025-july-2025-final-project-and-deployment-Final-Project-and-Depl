/// === Vehicle Image Randomizer ===
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.vehicle-gallery');
  if (!gallery) return;

  const vehicleCards = document.querySelectorAll('.vehicle-card');

  // Verified direct Unsplash links
  const carImages = {
    compact: [
      "https://images.pexels.com/photos/13609595/pexels-photo-13609595.jpeg",
      "https://images.pexels.com/photos/16475131/pexels-photo-16475131.jpeg",
      "https://images.pexels.com/photos/16021636/pexels-photo-16021636.jpeg"
    ],
    suv: [
      "https://images.pexels.com/photos/1005617/pexels-photo-1005617.jpeg",
      "https://images.unsplash.com/photo-1700884520248-92092bd21e63?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1612563893490-d86ed296e5e6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    luxury: [
      "https://images.pexels.com/photos/5046305/pexels-photo-5046305.jpeg",
      "https://images.unsplash.com/photo-1627454820903-9646d6ca61f5?q=80&w=437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.pexels.com/photos/30092954/pexels-photo-30092954.jpeg"
    ],
    sport: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
      "https://images.pexels.com/photos/10550012/pexels-photo-10550012.jpeg",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80"
    ]
  };

  const lastImageIndex = { compact: -1, suv: -1, luxury: -1 };

  function randomizeImages() {
    vehicleCards.forEach(card => {
      const category = card.dataset.category;
      const img = card.querySelector('img');
      if (!img || !carImages[category]) return;

      const images = carImages[category];
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * images.length);
      } while (newIndex === lastImageIndex[category]);

      img.src = images[newIndex];
      lastImageIndex[category] = newIndex;
    });
  }

  // Initial load
  randomizeImages();

  // Change every 5s with fade effect
  setInterval(() => {
    vehicleCards.forEach(c => c.classList.add('is-hidden'));
    setTimeout(() => {
      randomizeImages();
      vehicleCards.forEach(c => c.classList.remove('is-hidden'));
    }, 500);
  }, 5000);
});