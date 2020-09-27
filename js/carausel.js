function makeCarausel(config) {

	const itemClassName = config.itemSelector;
	const dotClassName = config.navDotsSelector;
	const arrowNextClassName = config.arrowNextSelector;
	const arrowPrevClassName = config.arrowPrevSelector;
	const toggleClassName = config.navDotActiveClass;
	const disableWidth = config.disableWidth;

	let items = document.querySelectorAll(itemClassName)
	let prev = document.querySelector(arrowPrevClassName)
	let next = document.querySelector(arrowNextClassName)
	let navDots = document.querySelectorAll(dotClassName)
	let current = 0

	function hideItem(indexItem) {
		items[indexItem].style.display = "none";
	}

	function showItem(indexItem) {
		items[indexItem].style.display = "block";
	}

	function setDotAsCurrent(indexDot) {
		if (!navDots[indexDot]) {
			return
		}
		navDots[indexDot].classList.add(toggleClassName);
	}

	function unsetDotAsCurrent(indexDot) {
		if (!navDots[indexDot]) {
			return
		}
		navDots[indexDot].classList.remove(toggleClassName);
	}

	function isCurrentDot(indexDot) {
		return navDots[current].classList.contains(toggleClassName);
	}

	function unsetCurrent() {
		hideItem(current);
		unsetDotAsCurrent(current);
	}

	function setCurrent() {
		showItem(current);
		setDotAsCurrent(current);
	}

	for (let i = 0; i < items.length; i++) {
		hideItem(i);
	}

	setCurrent();

	next.addEventListener("click", function () {
		unsetCurrent();
		if (current === items.length - 1) {
			current = 0
		} else {
			current++
		}
		setCurrent();
	})

	prev.addEventListener("click", function () {
		unsetCurrent();
		if (current === 0) {
			current = items.length - 1;
		} else {
			current--;
		}
		setCurrent();
	})

	for (let j = 0; j < navDots.length; j++) {
		navDots[j].addEventListener("click", function () {
			unsetCurrent();
			current = j;
			setCurrent();
		})
	}

	function checkDisableWidth() {
		if (disableWidth !== undefined) {
			if (screen.width > disableWidth) {
				for (let i = 0; i < items.length; i++) {
					items[i].style.display = "block";
				}
			}
		}
	}

	checkDisableWidth();

	window.addEventListener("resize", function () {
		checkDisableWidth();
	})


}

// function makeCarausel(itemClassName, dotClassName, arrowNextClassName, arrowPrevClassName, toggleClassName)

makeCarausel({
	itemSelector: ".special-offers__item",
	navDotsSelector: ".special-offers__nav-dots-item",
	arrowNextSelector: ".special-offers__arrow_next",
	arrowPrevSelector: ".special-offers__arrow_prev",
	navDotActiveClass: "nav-dots__item_select"
});

makeCarausel({
	itemSelector: ".premium-offers__item",
	navDotsSelector: ".premium-offers__nav-dots-item",
	arrowNextSelector: ".premium-offers__arrow_next",
	arrowPrevSelector: ".premium-offers__arrow_prev",
	navDotActiveClass: "nav-dots__item_select",
	disableWidth: 1024
});

