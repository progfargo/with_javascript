## Html

Add plugin js to your html before the 'body' tag.

```<script src="/path.../jquery.scratchtone.js"></script>```

## Javascript
```
$(document).ready(function () {
	$("#baseImage").scratchtone({
		canvasSelector: "#baseCanvas",
		color: $("div.curColor").text(),
	});
});
```
## Options
- **canvasSelector:** selector text of canvas element.
- **color:** color of dots in the image.

## Demo
[demo](http://js.progfargo.com/scratchtone)