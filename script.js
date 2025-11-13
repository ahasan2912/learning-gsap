gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%"
})

gsap.from("#box2", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 180,
    backgroundColor: "blue",
    repeat: -1,
    yoyo: true,
})

gsap.to("h1", {
    color: "red",
    duration: 2,
    delay: 1,
    opacity: 0,
    y: 30,
    stagger: -1,
    repeat: -1,
    yoyo: true,
})

// -------------------------------------------two day-------------------------------------
gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
})

gsap.from("#page2 #box", {
    scale: 0,
    delay: 2,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body"
    },
})

/* gsap.from("#page3 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
}) */