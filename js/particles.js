const options = {
    background: {
      color: "#000", // the canvas background color
    },
    particles: {
      move: {
        direction: "bottom",
        enable: true,
        outModes: "out",
        speed: 0.5
      },
      opacity: {
        value: { min: 0.3, max: 0.7 }, // this sets the opacity of the particles
      },
      size: {
        value: { min: 1, max: 3 }, // this sets the size of the particles
      },
    },
  };
  
  // tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
  tsParticles.load("tsparticles", options);