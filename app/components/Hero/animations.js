import { gsap } from "gsap";

export const animateTitle = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 2,
    },
  });

  tl.to("[data-hero-line]", {
    scaleX: 1,
  })
    .fromTo(
      "[data-title-first]",
      {
        x: 100,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
      },
      "<15%"
    )
    .fromTo(
      "[data-title-last]",
      {
        x: -100,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
      },
      "<"
    );

  return tl;
};

export const animateImage = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 1.5,
    },
  });

  tl.from(
    "[data-image]",
    {
      y: "100%",
      opacity: 0,
      duration: 2,
    }
  ).from(
    "[data-image] img",
    {
      scale: 1.2,
      duration: 2.5,
      ease: "power3.out",
    },
    "<"
  );

  return tl;
};

export const revealMenu = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    "[data-menu-item]",
    {
      autoAlpha: 0,
      y: 32,
    },
    {
      autoAlpha: 1,
      y: 0,
      stagger: 0.2,
      ease: "expo.out",
      duration: 2,
    }
  );

  return tl;
};
