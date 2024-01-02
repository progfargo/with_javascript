A text on an image must be a text element. In other words, it mustn't be embedded into the image using an image editor. Search engines may not notice such captions.

It is necessary to give the text a background color that matches the average color of the image on which they are placed. This plugin automatically calculates the vibrant color with using [vigrant.js](https://jariz.github.io/vibrant.js/)
Thus, when the image changes, the background color of the text also changes to a suitable one.

## Html

Add css to 'head' section.

```<link rel="stylesheet" href="/asset/css/page/text_over_image.css">```

Add plugin js to your html before the 'body' tag.

```
<script src="/path.../jquery.js"></script>
<script src="/path.../vibrant.js"></script>
<script src="/path.../jquery.text_over_image.js"></script>
```

## Javascript

```
$(document).ready(function () {
	var text = $(".myText");
	var img = $(".myImage")
	
	text.AdjustBackgroundColor(img)
});
```

Select your text element and call adaptiveBgColor function with option object.

One of the options is a selector text for the image containing the text.

## Options
- **img:** image selector text.
- **opacity:** opacity of the text. (default: 0.85)

## Demo
[demo](http://js.progfargo.com/text_over_image)