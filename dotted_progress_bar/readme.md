## Html

Add css to 'head' section.

```<link rel="stylesheet" href="/path.../dotted_progress_bar.css">```

Add plugin js to your html before the 'body' tag.

```<script src="/path.../jquery.dotted_progress_bar.js"></script>```

Add an empty div in your html where you want the progress bar to be displayed.

```<div id="progressBar"></div>```

## Javascript
```
$(document).ready(function () {
	var progressBar = $("#progressBar").dottedProgressBar({
		numOfLines: 10,
		showPercent: true,
		lineColor: "#82f7ff",
		completeColor: "#0094cc",
	});
	
	progressBar.update(55);
});
```
## Options
- **numOfDots:** number of dots used.
- **dotHeight:** height of the progress bar dots.
- **dotColor:** color of dots.
- **completeColor:** color of completed dots.
- **showPercent:** if 'true', persentage value will be shown over the last completed dot.

## Demo
[http://jquery.progfargo.com/dotted_progress_bar](http://jquery.progfargo.com/dotted_progress_bar){:target="_blank"}