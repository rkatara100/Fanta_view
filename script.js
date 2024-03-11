var tl = gsap.timeline({
      scrollTrigger: {
            trigger: ".two",
            start: "0% 95%",
            end: "50% 50%",
            scrub: true,

      }
});

tl.to("#fanta", {
      top: "115%",
      left: "1%"

}, 'a')

tl.to("#orange2", {
      top: "160%",
      left: "25%"
}, 'a')

tl.to("#orange", {
      width: "14%",
      top: "168%",
      right: "2%"
}, 'a')


tl.to("#leaf1", {

      top: "110%",
      rotate: "120deg",
      left: "85%"
}, 'a')

tl.to("#leaf2", {
      width: "10%",
      top: "100%",
      left: "%"
}, 'a')


var tl2 = gsap.timeline({
      scrollTrigger: {
            trigger: ".three",
            start: "0% 95%",
            end: "50% 50%",
            scrub: true,
      }
});

// tl2.from(".lemon1", {
//       left: "100%",
//       top: "110%"
// }, 'ca')

tl2.from("#cocacola", {
      rotate: "10deg",
      left: "100%",
      top: "110%",
}, 'ca')

// tl2.from(".lemon2", {
//       rotate: "10deg",
//       left: "100%",
//       top: "110%"
// }, 'ca')



// tl2.from("#pepsi", {
//       rotate: "10deg",
//       left: "100%",
//       top: "110%"
// }, 'ca')


tl2.to("#orange2", {
      width: "42vh",
      left: "41%",
      top: "210%"

}, 'ca')

tl2.to("#fanta", {
      width: "30%",
      top: "220%",
      left: "35%",
}, 'ca')


