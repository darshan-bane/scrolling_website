var tl = gsap.timeline({scrollTrigger:{
    trigger: ".sectwo",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#leaf",{
    top: "120%",
    left: "200%"
}, 'orange')

