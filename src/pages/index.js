import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer/footer'
import '../styles/styles.css'
import Particles from 'react-particles-js'
import Typed from 'react-typed'


const videoStyle = {
  // position: 'fixed',
  // right: 0,
  // bottom: 0,
  // maxWidth: '100%',
  // minHeight: '100%',
  // zIndex: '-100',
  // objectFit: 'cover',
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '100%',
  minHeight: '100%',
  width: '100%',
  height: '100%',
  zIndex: '-100',
  objectFit: 'cover',
}

const IndexPage = () => (
  <div>
    <main id="main-desc">
      <h1 id="introStyle">I am Anjani Kumar Joshi</h1>
      <h3 id="small-heading">
        <Typed
          strings={[
            'I make excellent Android Applications',
            'I make excellent, modern Android Applications',
          ]}
          backspeed={100}
          typeSpeed={30}
          startDelay={100}
        />
      </h3>
    </main>

    <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: { enable: true, value_area: 968.0624057955 },
          },
          color: { value: '#fff' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#fff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: false, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
    <Footer />
  </div>
)

export default IndexPage
// export { Footer }
