$(document).ready(function () {
	let $popularCategories = $("#popular-categories");
	var restrictionWidth = 1000;
	$popularCategories.on('initialized.owl.carousel', function () {
		if (screen.width < restrictionWidth) {
			$popularCategories.addClass("first-item-margin-left_popularCategories");
		}
	});

	$popularCategories.on('translated.owl.carousel', function () {
		if (screen.width > restrictionWidth) {
			return;
		}
		if ($firstItemPopularCategories.hasClass("active")) {
			$popularCategories.addClass("first-item-margin-left_popularCategories");
			$popularCategories.removeClass("popular-categories-invisibleBefore");
		} else {
			$popularCategories.removeClass("first-item-margin-left_popularCategories");
			$popularCategories.addClass("popular-categories-invisibleBefore");
		};

		if ($lastItemPopularCategories.hasClass("active")) {
			$popularCategories.addClass("popular-categories-invisibleAfter");
		} else {
			$popularCategories.removeClass("popular-categories-invisibleAfter")
		}
	});

	$popularCategories.owlCarousel(
		{
			responsive: {
				0: {
					dots: false,
					items: 3,
					margin: 10
				},
				768: {
					items: 4,
					margin: 15,
					nav: false
				},
				1000: {
					items: 4,
					margin: 24,
					nav: true
				}
			},
		}
	);

	var $firstItemPopularCategories = $("#popular-categories .owl-item:first-child");
	var $lastItemPopularCategories = $("#popular-categories .owl-item:last-child");




	// !----------------------------------------------

	let popularProducts = $("#popular-products")
	popularProducts.owlCarousel(
		{
			nav: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 2,
					margin: 10
				},
				768: {
					items: 3,
					margin: 15
				},
				1000: {
					items: 4,
					margin: 24,
				}
			}
		}
	);

	// скролл колёсиком мыши
	// popularProducts.on('mousewheel', '.owl-stage', function (e) {
	// 	if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
	// 		popularProducts.trigger('next.owl');
	// 	} else {
	// 		popularProducts.trigger('prev.owl');
	// 	}
	// 	e.preventDefault();
	// });

	// !-----------------------------------------------

	let $typesInstrument = $("#types-instrument");

	$typesInstrument.on('initialized.owl.carousel', function () {
		if (screen.width <= restrictionWidth) {
			$typesInstrument.addClass("first-item-margin-left_typesInstrument");
		}
	});

	$typesInstrument.on('translated.owl.carousel', function () {
		if (screen.width > restrictionWidth) {
			return;
		}
		if ($firstItemTypesInstrument.hasClass("active")) {
			$typesInstrument.addClass("first-item-margin-left_typesInstrument");
			$typesInstrument.removeClass("types-instrument-invisibleBefore");
		} else {
			$typesInstrument.removeClass("first-item-margin-left_typesInstrument");
			$typesInstrument.addClass("types-instrument-invisibleBefore");
		};

		if ($lastItemTypesInstrument.hasClass("active")) {
			$typesInstrument.addClass("types-instrument-invisibleAfter");
		} else {
			$typesInstrument.removeClass("types-instrument-invisibleAfter")
		}
	});

	$typesInstrument.owlCarousel(
		{
			responsive: {
				0: {
					dots: false,
					items: 4,
					margin: 8,
					nav: false
				},
				768: {
					items: 4,
					margin: 15,

				},
				1025: {
					items: 4,
					nav: true

				},
				1225: {
					items: 5,
					margin: 24,
					nav: true
				}
			},
		}
	);

	var $firstItemTypesInstrument = $("#types-instrument .owl-item:first-child");
	var $lastItemTypesInstrument = $("#types-instrument .owl-item:last-child");
});