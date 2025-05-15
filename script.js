// gsap.to("#box1", {
//   x: 500,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   repeat: 1, // lặp lại 1 lần
//   yoyo: true, // quay lại trạng thái ban đầu
// });

// gsap.from("#box2", {
//   x: 500,
//   duration: 2,
//   delay: 2,
// });

// gsap.to("#box3", {
//   x: 500,
//   duration: 2,
//   delay: 3,
//   scale: 0.3,
// });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   y: 30,
//   delay: 1,
//   color: "red",
//   stagger: 0.2, // mỗi h1 cách nhau 0.2s khi animate
// });

// var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 500,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   repeat: 1, // lặp lại 1 lần
//   yoyo: true, // quay lại trạng thái ban đầu
// });

// tl.to("#box2", {
//   x: 500,
//   duration: 2,
// });

var tl = gsap.timeline();
tl.from("h2", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  delay: 0.5,
});

tl.from("h4", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  delay: 0.5,
});

tl.from("h1", {
  y: -100,
  opacity: 0,
  scale: 0.2,
  duration: 0.5,
});
