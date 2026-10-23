gsap.registerPlugin(ScrollTrigger);

const tituloHero = document.querySelector(".hero h1");

// Sua primeira animação começa aqui!
gsap.from(tituloHero, {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
