<template>
  <div class="particles-container">
  <!-- particles.js container --> 
    <div id="particles-js"></div>
    <div id="particles-min"></div>
  </div>
</template>

<script>
import postscribe from 'postscribe'

export default {  
  name: 'particles-min',
  mounted: function () {
    postscribe('#particles-min', `<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"><\/script>`)
  },
  methods: {
   window:onload = () =>
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 355,
            density: {
              enable: true,
              value_area: 1000.1476416322727
            }
          },
          color: {
            value: "#DE5A91"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.48927153781200905,
            random: false,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#BD7CF9",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 83,
              size: 7,
              duration: 3,
              opacity: 1,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      })
    
  }
}
</script>

<style lang="scss">
/* ---- reset ---- */
.particles-container {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5;
}

body {
  margin: 0;
  background-color: #fff;
  height: 100px;
}

canvas {
  position: relative;
  z-index: 2;
  display: block;
  vertical-align: bottom;
}


/* ---- particles.js container ---- */

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>