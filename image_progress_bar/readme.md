## Html

Add css to 'head' section.

```<link rel="stylesheet" href="/path.../image_progress_bar.css">```

Add plugin js to your html before the 'body' tag.

```<script src="/path.../jquery.image_progress_bar.js"></script>```

Add an empty div in your html where you want the progress bar to be displayed.

```<div id="progressBar fish"></div>```

## Javascript
```
//replace the 'controls' with your code that changes the percent value of the progress bar.
$(document).ready(function () {
	var fishProgressBar = $(".progressBar.fish").imageProgressBar({
		showPercent: true,
		filter: "invert",
		src: "/path.../swordfish_2.jpeg",
		initValue: 0,
	});

	var fishPercent = 0;

	$(".controls.fish .increase").on("click", function () {
		fishPercent += 5;
		if (fishPercent > 100) {
			fishPercent = 100;
		}

		fishProgressBar.update(fishPercent);
		return false;
	});

	$(".controls.fish .decrease").on("click", function () {
		fishPercent -= 5;

		if (fishPercent < 0) {
			fishPercent = 0;
		}

		fishProgressBar.update(fishPercent);
		return false;
	});
});
```
## Options
- **showPercent:** if true persentage value will be shown over the progress bar.
- **filter:** 'grayscale' or 'inverted',
- **src:** image source like "/path.../image_name.jpeg",
- **initValue:** initial persentage value.",

## Demo
[http://jquery.progfargo.com/image_progress_bar](http://jquery.progfargo.com/image_progress_bar){:target="_blank"}

## Refs
[Image Filters with Canvas](https://www.html5rocks.com/en/tutorials/canvas/imagefilters/){:target="_blank"}
[HTML canvas getImageData() Method](https://www.w3schools.com/tags/canvas_getimagedata.asp){:target="_blank"}