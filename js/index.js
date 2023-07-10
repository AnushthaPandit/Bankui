const hover_nav_items = document.getElementsByClassName("hover-nav-item");
const hover_nav_items_parent_nav_items = document.getElementsByClassName(
	"hover-nav-item-parent-nav-item"
);
Array.from(hover_nav_items).forEach((element, i) => {
	element.addEventListener("mouseover", (e) => {
		const id = e.target.dataset.id;
		const navname = e.target.dataset.navname;

		e.target.classList.add("active-hover-nav-child-item");

		const nav_associated_div_id =
			"hover-nav-item-" + navname + "-" + id + "-content";
		const ele = document.getElementById(nav_associated_div_id);

		ele.style.display = "block";

		const hover_nav_items_arr = Array.from(hover_nav_items);

		//make other active div invisible
		for (let index = 0; index < hover_nav_items_arr.length; index++) {
			const ele = hover_nav_items_arr[index];
			if (ele.dataset.id === id && ele.dataset.navname === navname) {
				continue;
			}

			ele.classList.remove("active-hover-nav-child-item");

			const nav_associated_div_id =
				"hover-nav-item-" +
				ele.dataset.navname +
				"-" +
				ele.dataset.id +
				"-content";
			const nav_associated_div = document.getElementById(nav_associated_div_id);

			nav_associated_div.style.display = "none";
		}
	});
});

//parnet nav hover
Array.from(hover_nav_items_parent_nav_items).forEach((element, i) => {
	element.addEventListener("mouseover", (e) => {
		const id = e.target.dataset.id;
		const navname = e.target.dataset.navname;

		const target_tab_id = navname + "-" + id;

		const target_tab = document.getElementById(target_tab_id);

		target_tab.classList.add("active-hover-nav-child-item");

		const nav_associated_div_id =
			"hover-nav-item-" + navname + "-" + id + "-content";
		const ele = document.getElementById(nav_associated_div_id);

		ele.style.display = "block";

		const hover_nav_items_arr = Array.from(hover_nav_items);

		//remove any active div
		for (let index = 0; index < hover_nav_items_arr.length; index++) {
			const ele = hover_nav_items_arr[index];
			if (ele.dataset.id === id && ele.dataset.navname === navname) {
				continue;
			}

			ele.classList.remove("active-hover-nav-child-item");

			const nav_associated_div_id =
				"hover-nav-item-" +
				ele.dataset.navname +
				"-" +
				ele.dataset.id +
				"-content";
			const nav_associated_div = document.getElementById(nav_associated_div_id);

			nav_associated_div.style.display = "none";
		}
	});
});
