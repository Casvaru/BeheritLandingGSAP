import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import uxCursor from 'ux-cursor'
import './behelitHandlerMouse'

uxCursor({
  size: 60
})

gsap.registerPlugin(ScrollTrigger)

// Configurar ScrollTrigger para anclar cada panel
gsap.utils.toArray('.panel').forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    pin: true,
    start: 'top top',
    end: '+=100%'
    // markers: true
  })
})

const tl = gsap.timeline({
  scrollTrigger: {
    // id: 'behelit',
    // start: 'top',
    end: 'top -90%',
    // markers: true,
    scrub: 2,
    pin: true
  }
})

gsap.to('#textContainerTop', {
  scrollTrigger: {
    scrub: 2
    // markers: true,
  },
  x: 500
})

gsap.to('#textContainerBottom', {
  scrollTrigger: {
    scrub: 2
    // markers: true,
  },
  x: -500,
  duration: 3
})

tl.to('#beherit', {
  y: '-20vh',
  x: '-20vw',
  scale: 2,
  duration: '1.3'
})
gsap.to('#beherit', {
  scrollTrigger: {
    trigger: '.gifBeherit',
    start: 'top 90%',
    toggleActions: 'play pause resume reverse'
  },
  opacity: 0
})
gsap.to('.textBeherit', {
  scrollTrigger: {
    start: 'top top',
    end: 'center top',
    scrub: true
  },
  opacity: 0,
  y: 400,
  scale: 1.7
})

gsap.to('.containerArticles', {
  scrollTrigger: {
    trigger: '.containerArticles',
    scrub: true
  },
  opacity: 1
})

gsap.to('.gifBeherit', {
  scrollTrigger: {
    trigger: '.gifBeherit',
    toggleActions: 'play pause resume reverse',
    // start: 'top 90%'
    scrub: 1
  },
  width: '100%'
})
gsap.to('.panel1', {
  scrollTrigger: {
    trigger: '.panel1',
    toggleActions: 'play pause resume reverse'
  },
  y: '0',
  opacity: 1
})
gsap.to('.panel2', {
  scrollTrigger: {
    trigger: '.panel2',
    toggleActions: 'play pause resume reverse'
  },
  y: '0',
  opacity: 1
})
gsap.to('.panel3', {
  scrollTrigger: {
    // start: 'top',
    trigger: '.panel3',
    toggleActions: 'play pause resume reverse'
  },
  y: 0,
  opacity: 1
})
gsap.to('.panel4', {
  scrollTrigger: {
    // start: 'top',
    trigger: '.panel3',
    toggleActions: 'play pause resume reverse'
  },
  x: 0,
  y: 0,
  delay: '1',
  opacity: 1
})
gsap.to('.panel5', {
  scrollTrigger: {
    start: 'top center',
    trigger: '.panel5',
    toggleActions: 'play pause resume reverse'
  },
  scale: 1,
  opacity: 1
})
gsap.to('.panel6', {
  scrollTrigger: {
    start: 'top center',
    trigger: '.panel6',
    toggleActions: 'play pause resume reverse'
  },
  x: 0,
  opacity: 1
})
gsap.to('.panel7', {
  scrollTrigger: {
    // start: 'top',
    trigger: '.panel7',
    toggleActions: 'play pause resume reverse'
  },
  y: 0,
  delay: '.5',
  opacity: 1
})
