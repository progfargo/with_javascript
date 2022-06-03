## Html

Add css to 'head' section.

```<link rel="stylesheet" href="/path/dashed_progress_bar.css">```

Add plugin js to your html before the 'body' tag.

```<script src="/path/jquery.dashed_progress_bar.js"></script>```

Add an empty div in your html where you want the progress bar to be displayed.

```<div id="progressBar"></div>```

## Javascript
```
$(document).ready(function () {
	var progressBar = $("#progressBar").dashedProgressBar({
		numOfLines: 10,
		showPercent: true,
		lineColor: "#82f7ff",
		completeColor: "#0094cc",
	});
	
	progressBar.update(55);
});
```
## Options
- **numOfLines:** number of dashes used.
- **lineHeight:** height of the progress bar dashes.
- **lineColor:** color of dashes.
- **completeColor:** color of completed dashes.
- **showPercent:** if true persentage value will be shown over the last completed dash.

## Demo
[http://jquery.progfargo.com/dashed_progress_bar](http://jquery.progfargo.com/dashed_progress_bar)
