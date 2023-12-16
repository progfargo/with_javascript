## Html

Add plugin js to your html before the 'body' tag.

```<script src="/path.../jquery.halftone.js"></script>```

## Javascript
```
$(document).ready(function () {
	$("#baseImage").halftone({
		canvasSelector: "#baseCanvas",
		color: $("div.curColor").text(),
	});
});
```
## Options
- **canvasSelector:** selector text of canvas element.
- **color:** color of dots in the image.

## Demo
[http://jquery.progfargo.com/halftone](http://jquery.progfargo.com/halftone)