// ====================== Brand Slider Start =====================

const swiper_1 = new Swiper(".mySwiper-1", {
		slidesPerView: 6,
		spaceBetween: 30,
		loop: true,
		grabCursor: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			0: {
					slidesPerView: 2,
			},
			768: {
					slidesPerView: 4,
			},
			992: {
					slidesPerView: 6,
			}
	}
	});

// ====================== Brand Slider End =====================

const swiper_2 = new Swiper(".mySwiper-2", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	grabCursor: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
		},
	breakpoints: {
		0: {
				slidesPerView: 1,
		},
		768: {
				 slidesPerView: 2,
		},
		992: {
				slidesPerView: 3,
		}
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	}
});