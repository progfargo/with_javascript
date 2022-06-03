## Html

Add css to 'head' section.

```<link rel="stylesheet" href="/path/line_progress_bar.css">```

Add plugin js to your html before the 'body' tag.

```<script src="/path/jquery.line_progress_bar.js"></script>```

Add an empty div in your html where you want the progress bar to be displayed.

```<div id="progressBar"></div>```

## Javascript
```
$(document).ready(function () {
	var progressBar = $("#progressBar").lineProgressBar({
		showPercent: true,
		lineColor: "#82f7ff",
		completeColor: "#0094cc",
	});
	
	progressBar.update(55);
});
```
## Options
- **lineHeight:** height of the progress bar.
- **lineColor:** background color of progress bar.
- **completeColor:** color of the completed section of progress bar.
- **showPercent:** if true persentage value will be shown over the progress bar.

## Demo
[http://jquery.progfargo.com/line_progress_bar](http://jquery.progfargo.com/line_progress_bar)