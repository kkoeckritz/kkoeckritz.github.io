/**
* Initialize Materialize objects
*/
function initMaterialize() {
	$("#nav_float").pushpin({
		top: $("#nav_float").offset().top
	});
	
	$(".scrollspy").scrollSpy({
		scrollOffset: 0
	});
	
	$(".sidenav").sidenav();
	
	$("#portfolio_carousel").carousel({
		fullWidth: true,
		indicators: true,
		duration: 400
	});
	
	$('.modal').modal();
}

/**
* Contains custom funcs
*/
var custom = {
	
	carousel: {
		elem: {},
		inst: {},
		invl: {},
		slide: (c_id) => {
			
			// scroll through carousel every 10 seconds
			custom.carousel.elem[c_id] = document.getElementById(c_id);
			custom.carousel.inst[c_id] = M.Carousel.getInstance(custom.carousel.elem[c_id]);
			custom.carousel.invl[c_id] = setInterval(() => {
				
				// slide or cancel interval if touched
				if (c_id != "intro_carousel" && (custom.carousel.inst[c_id].pressed || custom.carousel.inst[c_id].dragged)) {
					clearInterval(custom.carousel.invl[c_id]);
					custom.carousel.inst[c_id].options.duration = 200;
				} else {
					custom.carousel.inst[c_id].next();
				}
			}, 10000);
		}
	},
	
	text: {
		invl: 0,
		choices: [
			"UNIQUE?",
			"BEAUTIFUL?",
			"DISTINCTIVE?",
			"ENGAGING?",
			"INCREDIBLE?",
			"BOLD?",
			"SPECTACULAR?",
			"OPEN?"
		],
		change: () => {
			custom.text.invl = setInterval(() => {
				$("#intro_change").fadeOut(500, () => {
					$("#intro_change")
					.text(custom.text.choices[Math.floor(Math.random() * custom.text.choices.length)])
					.fadeIn(500);
				})
			}, 10000);
		}
	},
	
	name: {
		flashBrand: () => {
			
			// store individual letters
			let b_letters = [
				'o',
				'e',
				'c'
			];
			let f_letters = [
				'K',
				'r',
				'i',
				's'
			];
			let l_letters = [
				'k',
				'r',
				'i',
				't',
				'z'
			];
			
			// replace name with site brand
			let f_name = $("#f_name");
			let l_name = $("#l_name");
			
			f_name.text("");
			l_name.text("K");
			$("#tld").hide().text(".io");
			
			// f_name.fadeIn(500);
			// l_name.fadeIn(500);
			
			// animate to brand
			let i = 0;
			let b_int = setInterval(() => {
				
				let cur_b = l_name.text();
				if (cur_b != "Koec") {
					l_name.text(cur_b + b_letters[i]);
				} else {
					clearInterval(b_int);
				}
				
				i++;
			}, 100);
			
			setTimeout(() => {
				$("#tld").fadeIn(500);
				setTimeout(() => {
					$("#tld").fadeOut(250);
				}, 1900);
			}, 500);
			
			// animate back to name
			setTimeout(() => {
				
				// add back letters to first name
				let j = 0;
				let f_int = setInterval(() => {
					let cur_f = f_name.text();
					if (cur_f != "Kris") {
						f_name.text(cur_f + f_letters[j]);
					} else {
						clearInterval(f_int);
					}
					
					j++;
				}, 25);
				
				setTimeout(() => {
					// ditto second name
					let k = 0;
					let l_int = setInterval(() => {
						
						let cur_l = l_name.text();
						if (cur_l != "Koeckritz") {
							l_name.text(cur_l + l_letters[k]);
						} else {
							clearInterval(l_int);
						}
						
						k++;
					}, 25);            
				}, 100);
			}, 2500);
		}
	},
	
	rings: {
		// draw svg rings over contact info
		drawRings: () => {
			let rings = "";
			
			for (let i = 0; i < 3; i++) {
				let rx = 21 + Math.floor(Math.random() * 5);
				let ry = 31 + Math.floor(Math.random() * 5);
				let st = 1 + Math.floor(Math.random() * 2);

				rings += (`<ellipse rx="${rx}%" ry="${ry}%" cx="50%" cy="50%" stroke-width="${st}" class="svg_ring ring_anim-${i}" />`);
			}

			$(`<svg class="svg_box">${rings}</svg>`).appendTo(".svg_wrapper");
		}
	}
}

/**
* Run it!
*/
$(document).ready(function(){
	initMaterialize();
	custom.name.flashBrand();
	custom.carousel.slide("portfolio_carousel");
	custom.text.change();
	custom.rings.drawRings();
});