gsap.registerPlugin(ScrollTrigger);

const tituloHero = document.querySelector(".hero h1");
const buttonHero = document.querySelector(".main-info-button a");
const tlHero = gsap.timeline();

// Sua primeira animação começa aqui!

tlHero.from(".hero-label", {
  y: 60,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
});

tlHero.from(
  tituloHero,
  {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  },
  "-=0.3",
);

tlHero.from(
  ".hero-description",
  {
    y: 60,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  },
  "-=0.3",
);

tlHero.from(
  buttonHero,
  {
    y: 60,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  },
  "-=0.3",
);

tlHero.from(
  ".main-img",
  {
    x: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  },
  "-=0.3",
);

// Section 01

const tituloS1 = document.querySelector(".info-section-1 h2");
const descricaoS1 = document.querySelector(".info-section-1 .subtitulo");
const img = document.querySelector(".img-section-1 img");

const tlS1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-1",
    start: "top 80%",
    markers: true,
    toggleActions: "restart none none none",
  },
});

tlS1.from(
  ".img-section-1",
  {
    x: -60,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  },
  "-=0.3",
);

tlS1.from(
  tituloS1,
  {
    y: 60,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out",
  },
  "-=0.3",
);

tlS1.from(
  descricaoS1,
  {
    y: 60,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  },
  "-=0.3",
);

tlS1.from(
  ".hr-section-1",
  {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  },
  "-=0.3",
);

tlS1.from(
  ".frase-section-1",
  {
    y: 60,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  },
  "-=0.3",
);

// SECTION 02 — Produtos
const tlS2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    start: "top 80%",
    markers: true,
    toggleActions: "restart none none none",
  },
});

tlS2.from(".title-section-2", {
  y: 70,
  opacity: 0,
  duration: 1,
});

const produtos = gsap.utils.toArray(".produto");

produtos.forEach((produto) => {
  const tlProduto = gsap.timeline({
    scrollTrigger: {
      trigger: produto,
      start: "top 80%",
      markers: true,
    },
  });

  const titulo = produto.querySelector(".info-produto h3");
  const subtitulo = produto.querySelector(".subtitulo-produto");
  const descricao = produto.querySelector(".descricao-produto");
  const image = produto.querySelector(".img-produto img");

  tlProduto.from(titulo, {
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  });

  tlProduto.from(subtitulo, {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });

  tlProduto.from(descricao, {
    y: 25,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  });

  tlProduto.from(
    image,
    {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.45",
  );
  // Adicione aqui as animações
  // dos elementos do produto atual.
});
