/* AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

*//*delete *//*

// Magnific Popup for YouTube, Vimeo, Google Maps if needed
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});

*//*// Open Modal function (generalized for any project)
function openModal(projectId) {
	document.getElementById(projectId + "-modal").style.display = "block";
}

// Close Modal function (generalized for any project)
function closeModal(projectId) {
	document.getElementById(projectId + "-modal").style.display = "none";
}

// Close modal when clicking outside the modal-content
window.onclick = function (event) {
	var modals = document.getElementsByClassName("modal");
	for (var i = 0; i < modals.length; i++) {
		if (event.target == modals[i]) {
			modals[i].style.display = "none";
		}
	}
};

// JavaScript to handle card click and modal open
document.querySelectorAll('.blog-entry').forEach(card => {
	card.addEventListener('click', function () {
		const projectId = card.querySelector('.see-work').getAttribute('onclick').match(/'([^']+)'/)[1];
		openModal(projectId);
	});
});

// Image array for Project 2 (Credit Card Analysis)
var images2 = [
	'images/p2/proj_2_2.jpg',
	'images/p2/proj_2_3.jpg',
	'images/p2/proj_2_4.jpg',
	'images/p2/proj_2_5.jpg',
	'images/p2/proj_2_6.jpg',
	'images/p2/proj_2_7.jpg',
	'images/p2/proj_2_8.jpg',
	'images/p2/proj_2_9.jpg',
	'images/p2/proj_2_10.jpg',
	'images/p2/proj_2_11.jpg'
];

// Function to show the previous image in the slider
function prevImage(slideId, images) {
	var imgElem = document.getElementById(slideId);
	var currentIndex = images.indexOf(imgElem.src);
	var prevIndex = (currentIndex - 1 + images.length) % images.length; // Circular navigation
	imgElem.src = images[prevIndex];
}

// Function to show the next image in the slider
function nextImage(slideId, images) {
	var imgElem = document.getElementById(slideId);
	var currentIndex = images.indexOf(imgElem.src);
	var nextIndex = (currentIndex + 1) % images.length; // Circular navigation
	imgElem.src = images[nextIndex];
}*//*


// deleted due to duplicacy 

// Open Modal function (generalized for any project)
function openModal(projectId) {
	document.getElementById(projectId + "-modal").style.display = "block";
}

// Close Modal function (generalized for any project)
function closeModal(projectId) {
	document.getElementById(projectId + "-modal").style.display = "none";
}

// Close modal when clicking outside the modal-content
window.onclick = function (event) {
	var modals = document.getElementsByClassName("modal");
	for (var i = 0; i < modals.length; i++) {
		if (event.target == modals[i]) {
			modals[i].style.display = "none";
		}
	}
};

// JavaScript to handle card click and modal open
document.querySelectorAll('.blog-entry').forEach(card => {
	card.addEventListener('click', function () {
		const projectId = card.querySelector('.see-work').getAttribute('onclick').match(/'([^']+)'/)[1];
		openModal(projectId);
	});
});

// Image array for Project 2 (Credit Card Analysis)
var images2 = [
	'images/p2/proj_2_2.jpg',
	'images/p2/proj_2_3.jpg',
	'images/p2/proj_2_4.jpg',
	'images/p2/proj_2_5.jpg',
	'images/p2/proj_2_6.jpg',
	'images/p2/proj_2_7.jpg',
	'images/p2/proj_2_8.jpg',
	'images/p2/proj_2_9.jpg',
	'images/p2/proj_2_10.jpg',
	'images/p2/proj_2_11.jpg'
];

// Function to show the previous image in the slider
function prevImage(slideId, images) {
	var imgElem = document.getElementById(slideId);
	var currentIndex = images.indexOf(imgElem.src);
	var prevIndex = (currentIndex - 1 + images.length) % images.length; // Circular navigation
	imgElem.src = images[prevIndex];
}

// Function to show the next image in the slider
function nextImage(slideId, images) {
	var imgElem = document.getElementById(slideId);
	var currentIndex = images.indexOf(imgElem.src);
	var nextIndex = (currentIndex + 1) % images.length; // Circular navigation
	imgElem.src = images[nextIndex];
}
*/

AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {
	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});

	// Function to open a modal
	function openModal(modalId) {
		document.getElementById(modalId).style.display = "block";
	}

	// Function to close a modal
	function closeModal(modalId) {
		document.getElementById(modalId).style.display = "none";
	}

	// Close modal when clicking outside the modal-content
	window.onclick = function (event) {
		var modals = document.getElementsByClassName("modal");
		for (var i = 0; i < modals.length; i++) {
			if (event.target == modals[i]) {
				closeModal(modals[i].id);
			}
		}
	};

	// Event listener for card clicks to open modals
	document.querySelectorAll('.blog-entry').forEach(card => {
		card.addEventListener('click', function () {
			const modalId = card.querySelector('.see-work')?.getAttribute('onclick')?.match(/'([^']+)'/)[1] || null;
			if (modalId) {
				openModal(modalId);
			}
		});
	});

	var fullHeight = function () {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	// Loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	// Burger Menu
	var burgerMenu = function () {
		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {
			event.preventDefault();
			$(this).toggleClass('active');
		});
	};
	burgerMenu();

	var onePageClick = function () {
		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			event.preventDefault();
			var href = $.attr(this, 'href');
			$('html, body').animate({
				scrollTop: $(href).offset().top - 70
			}, 500);
		});
	};
	onePageClick();

	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: { items: 1 },
				600: { items: 1 },
				1000: { items: 1 }
			}
		});
	};
	carousel();

	// Scroll handling and animations
	var scrollWindow = function () {
		$(window).scroll(function () {
			var st = $(this).scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				navbar.addClass('scrolled');
			}
			if (st < 150) {
				navbar.removeClass('scrolled sleep');
			}
			if (st > 350) {
				navbar.addClass('awake');
				sd.length > 0 && sd.addClass('sleep');
			}
			if (st < 350) {
				navbar.removeClass('awake').addClass('sleep');
				sd.length > 0 && sd.removeClass('sleep');
			}
		});
	};
	scrollWindow();

	var counter = function () {
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber({
						number: num,
						numberStep: $.animateNumber.numberStepFactories.separator(',')
					}, 7000);
				});
			}
		}, { offset: '95%' });
	};
	counter();

	var contentWayPoint = function () {
		$('.ftco-animate').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
				$(this.element).addClass('item-animate');
				setTimeout(function () {
					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							el.addClass(effect === 'fadeIn' ? 'fadeIn ftco-animated' : effect === 'fadeInLeft' ? 'fadeInLeft ftco-animated' : effect === 'fadeInRight' ? 'fadeInRight ftco-animated' : 'fadeInUp ftco-animated');
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});
				}, 100);
			}
		}, { offset: '95%' });
	};
	contentWayPoint();
})(jQuery);


function openVideoPopup() {
	var videoUrl = 'https://www.youtube.com/embed/0hd5I18rpuw?autoplay=1&rel=0&showinfo=0';
	var videoWindow = window.open(videoUrl, 'Video', 'width=800,height=450');
	var closeCheckInterval = setInterval(function () {
		if (videoWindow.closed) {
			clearInterval(closeCheckInterval);
		}
	}, 1000);
}

function downloadCV() {
	window.location.href = 'path/to/your/CV.pdf'; // Update to your actual CV file path
}
