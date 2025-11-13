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
    rotate: 720,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
    },
})

/* gsap.from("#page3 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
}) */

gsap.from("#page3 h2", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",
        markers: true,
        start: "top 50%"
    }
});

gsap.from("#page3 h3", {
    opacity: 0,
    duration: 2,
    x: -500,
    scrollTrigger: {
        trigger: "#page3 h3",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
})


/* ----------------------------SVG------------------------------ */

var path = `M 10 80 Q 95 10 580 80`
var finalPath = `M 10 80 Q 95 10 580 80`
var string = document.querySelector("#string");
var body = document.querySelector("#body");

string.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q 500 ${dets.y} 900 100`

    gsap.to("svg path", {
        attr: { d: path }
    })
})

/* ----------------------------- project 01 ------------------------- */

var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image")

body.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
    })
})

imageDiv.addEventListener('mouseenter', function(){
    cursor.innerHTML = 'View More'
    gsap.to(cursor, {
        scale: 2,
    })
})
imageDiv.addEventListener('mouseleave', function(){
    cursor.innerHTML = ''
    gsap.to(cursor, {
        scale: 1,
    })
})

string.addEventListener('mouseenter', function(){
    cursor.innerHTML = 'View More'
    gsap.to(cursor, {
        scale: 2,
    })
})
string.addEventListener('mouseleave', function(){
    cursor.innerHTML = ''
    gsap.to(cursor, {
        scale: 1,
    })
})