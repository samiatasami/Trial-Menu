// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Product modal
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".menu-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img").src;
    const title = card.querySelector("h4").innerText;
    const price = card.querySelector("p").innerText;
    modalImg.src = img;
    modalTitle.innerText = title;
    modalPrice.innerText = price;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
