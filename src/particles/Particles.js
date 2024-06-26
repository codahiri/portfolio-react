import React from 'react'
import Particles from 'react-tsparticles'


const Particle = () => {
  const particlesInit = (main) => {
    return main;

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    return container;
  };

  return ( <
    Particles id = "tsparticles"
    init = {
      particlesInit
    }
    loaded = {
      particlesLoaded
    }
    options = {
      {
        background: {
          color: {
            value: "#101010",
          },
        },
        fpsLimit: 60,
        backgroundMode: {
          zIndex: -999, // any value >= 0 is good
          /* if you want elements above particles 
             just set a bigger z-index in your css */
          enable: true
        },
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }
    }
    />
  );
}

export default Particle;