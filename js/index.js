const hover_nav_items = document.getElementsByClassName("hover-nav-item");
Array.from(hover_nav_items).forEach((element) => {
	element.addEventListener("mouseover", (e) => {
		const id = e.target.dataset.id;
		const navname = e.target.dataset.navname;

		const nav_associated_div_id =
			"hover-nav-item-" + navname + "-" + id + "-content";
		const ele = document.getElementById(nav_associated_div_id);
		console.log(ele);
		ele.style.display = "block";
	});

	element.addEventListener("mouseleave", (e) => {
		const id = e.target.dataset.id;
		const navname = e.target.dataset.navname;

		const nav_associated_div_id =
			"hover-nav-item-" + navname + "-" + id + "-content";
		const ele = document.getElementById(nav_associated_div_id);
		console.log(ele);
		ele.style.display = "none";
	});
});
