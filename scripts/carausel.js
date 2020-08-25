function makeCarausel(itemClassName, dotClassName, arrowNextClassName, arrowPrevClassName, toggleClassName) {

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
			current = items.length - 1
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
}

makeCarausel(".special-offers__item", ".nav-dots__item", ".special-offers__arrow_next", ".special-offers__arrow_prev", "nav-dots__item_select")

