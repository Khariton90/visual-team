import './index.css'

const headerMenu = document.querySelector('.header__menu')
const headerBurger = document.querySelector('.header__burger')

function toggleMobileMenu(evt) {
	evt.preventDefault()
	headerMenu.classList.toggle('active')
}

headerBurger.addEventListener('click', toggleMobileMenu)

new Swiper('.swiper', {
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			loopedSlides: 1,
		},
		768: {
			slidesPerView: 2,
			loopedSlides: 2,
		},
		1440: {
			slidesPerView: 3,
			loopedSlides: 3,
		},
	},
})
