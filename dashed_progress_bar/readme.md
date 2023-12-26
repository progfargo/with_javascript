## Html

Add css to 'head' section.

```<link rel="stylesheet" href="/path.../dashed_progress_bar.css">```

Add plugin js to your html before the 'body' tag.

```<script src="/path.../jquery.dashed_progress_bar.js"></script>```

Add an empty div in your html where you want the progress bar to be displayed.

```<div id="progressBar"></div>```

## Javascript
```
$(document).ready(function () {
	var progressBar = $("#progressBar").dashedProgressBar({
		numOfDashes: 10,
		dashHeight: 20,
		dashColor: "#99caff",
		completeColor: "#007bff",
		showPercent: true,
	});
	
	progressBar.update(50);
});
```
## Options
- **numOfDashes:** number of dashes used.
- **dashHeight:** height of the progress bar dashes.
- **dashColor:** color of dashes.
- **completeColor:** color of completed dashes.
- **showPercent:** if 'true', persentage value will be shown over the last completed dash.

## Demo
[http://js.progfargo.com/dashed_progress_bar](demo)