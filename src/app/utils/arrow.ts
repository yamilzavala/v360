export class Arrow {
	constructor(w = 300, h = 150) {
			const pad = Math.round(w / 6);

		// container
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.style.width = `${w}px`;
		svg.style.height = `${h}px`;
		svg.classList.add("arrow");

		// line
		const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute(
			"d",
			`M 0 0 C ${pad} ${h}, ${w - pad - 10} ${h - 10}, ${w - 8} 5`
		);
		svg.appendChild(path);

		// arrowhead
		const polygon = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"polygon"
		);
		polygon.setAttribute("points", `${w - 3} 0, ${w - 13} 3, ${w - 3} 9`);
		svg.appendChild(polygon);

		return svg;
	}
}