const tl = gsap.timeline();

// tl.from(
// 	'.imgContainer',
// 	{
// 		x: -1,
// 		opacity: 0,
// 		scale: 0,
// 	},
// 	{
// 		opacity: 1,
// 		duration: 3.5,
// 		scale: 1,
// 		ease: 'elastic.out(1,0.3)',
// 	}
// );
gsap.fromTo(
	'.imgContainer',
	{ x: -600, opacity: 0 },
	{ x: 20, opacity: 1, scale: 1, duration: 5, ease: 'elastic.out(1,0.13)' }
);
