function viewportToPixels(value) {
  var parts = value.match(/([0-9\.]+)(vh|vw)/)
  var q = Number(parts[1])
  var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
  return side * (q/100)
}

jQuery(function($) {
	$(window).scroll(function(){
		if($(this).scrollTop()>viewportToPixels('100vh')){
			$('#fix').addClass('fixed');
		}
		else if ($(this).scrollTop()<viewportToPixels('100vh')){
			$('#fix').removeClass('fixed');
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
	function Visible(targeted, count, animName) {
		let target = document.getElementsByClassName(targeted)[count];
  		let targetPosition = {
      		top: window.pageYOffset + target.getBoundingClientRect().top
    	},
    	windowPosition = {
      		bottom: window.pageYOffset + document.documentElement.clientHeight
    	};
  		if ( targetPosition.top < (windowPosition.bottom) ) {
  			target.classList.add("animate__animated", animName);
  		} else {
  			target.classList.remove(animName);
  		};
	};

	let stop = true;

	function stopAnimate() {
		if(document.body.clientWidth >= 1440) {
			stop = true;
		} else if (document.body.clientWidth < 1440) {
			stop = false;
			let collapse = document.getElementsByClassName('navbar-collapse')[0];
			if (collapse.classList.contains('animate__animated')) {
				collapse.classList.remove('animate__animated', 'animate__fadeInDown');
			}
		}
	}

	if(document.body.clientWidth >= 1440) {
		animateBlocks();
		stop = true;
	} else if (document.body.clientWidth < 1440) {
		stop = false;
		let collapse = document.getElementsByClassName('navbar-collapse')[0];
		if (collapse.classList.contains('animate__animated')) {
			collapse.classList.remove('animate__animated', 'animate__fadeInDown');
		}
	}

	function animateBlocks() {
		let fadeLeft = document.getElementsByClassName("fadeLeft");
		let fadeRight = document.getElementsByClassName("fadeRight");
		let fadeDown = document.getElementsByClassName("fadeDown");
		let fadeUp = document.getElementsByClassName("fadeUp");
		let fade = document.getElementsByClassName("fade");
		let slideRight = document.getElementsByClassName("slideRight");
		for (let i = 0; i <= fadeLeft.length - 1; i++) {
			Visible("fadeLeft", i, "animate__fadeInLeft");
		}
		for (let i = 0; i <= fadeRight.length - 1; i++) {
			Visible("fadeRight", i, "animate__fadeInRight");
		}
		for (let i = 0; i <= fadeDown.length - 1; i++) {
			Visible("fadeDown", i, "animate__fadeInDown");
		}
		for (let i = 0; i <= fadeUp.length - 1; i++) {
			Visible("fadeUp", i, "animate__fadeInUp");
		}
		for (let i = 0; i <= fade.length - 1; i++) {
			Visible("fade", i, "animate__fadeIn");
		}
		for (let i = 0; i <= slideRight.length - 1; i++) {
			Visible("slideRight", i, "animate__slideInRight");
		}
	}

	window.addEventListener('scroll', function() {
		stopAnimate();
		if (stop === true) {
			animateBlocks();
		}
	});		
}, false);
