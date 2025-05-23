import { FastAverageColor } from "https://esm.sh/fast-average-color";

const fac = new FastAverageColor();

const figures = document.querySelectorAll("figure");

for (const figure of figures) {
	const image = figure.querySelector("img");

	if (!image) continue;

	fac
		.getColorAsync(image)
		.then((color) => {
			image.style.filter = `drop-shadow(0 0px 40px ${color.rgba})`;
		})
		.catch((e) => {
			console.error("Color extraction failed:", e);
		});
}
