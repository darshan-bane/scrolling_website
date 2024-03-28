// var tl0 = gsap.timeline({scrollTrigger:{
//     trigger: ".sec1",
//     start: "0% 95%",
//     end: "70% 50%",
//     scrub: true,
//     // markers: true,
// }})
// tl0.to("#goli",{
//     left: "60%"
// }, 'dd')



var tl = gsap.timeline({scrollTrigger:{
    trigger: ".sectwo",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%",
    // zIndex:"5"
}, 'orange')

tl.to("#orange_slice",{
    top: "160%",
    left: "20%",
    width: "20%",
}, 'orange')

tl.to("#leaf",{
    top: "120%",
    left: "100%",
    rotate: "0deg"
}, 'orange')
tl.to("#goli",{
    top: "200%",
    left:"50%"
}, 'orange')



var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".sec3",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})
tl2.to("#fanta",{
    top: "220%",
    left: "58%",
    // zIndex:"5"
}, 'ca')
tl2.to("#leaf",{
    top: "269%",
    left: "30%",
    rotate: "50deg"
}, 'ca')

tl2.to("#orange_slice",{
    top: "266%",
    left: "52%",
    width: "20%"
}, 'ca')