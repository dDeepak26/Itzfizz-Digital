// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const mouseFollower = document.querySelector(".mouse-follower");
  const hero = document.querySelector(".hero");
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  // Show mouse follower when mouse enters hero section
  hero.addEventListener("mouseenter", () => {
    mouseFollower.style.opacity = "1";
  });

  // Hide mouse follower when mouse leaves hero section
  hero.addEventListener("mouseleave", () => {
    mouseFollower.style.opacity = "0";
  });

  // Update mouse follower position
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth mouse follower animation
  function animate() {
    // Lerp (Linear interpolation) for smooth movement
    const ease = 0.15;
    currentX += (mouseX - currentX) * ease;
    currentY += (mouseY - currentY) * ease;

    mouseFollower.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Parallax effect for hero content
  const heroContent = document.querySelector(".hero-content");
  document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // Text split animation (optional enhancement)
  const title = document.querySelector(".hero-title");
  title.innerHTML = title.textContent
    .split("")
    .map(
      (char) =>
        `<span style="display: inline-block; opacity: 0; transform: translateY(20px); animation: fadeIn 0.5s forwards var(--delay);">
            ${char === " " ? "&nbsp;" : char}
        </span>`
    )
    .join("");

  // Add sequential delay to each character
  document.querySelectorAll(".hero-title span").forEach((span, i) => {
    span.style.setProperty("--delay", `${i * 0.05}s`);
  });
});
