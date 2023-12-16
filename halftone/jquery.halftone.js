(function ($) {
	$.fn.halftone = function (options) {
		var defaults = {
			color: "black",
			numberOfDots: 70
		};

		var settings = $.extend({}, defaults, options);

		// private variables
		var $canvas;
		var raster;

		// private method
		var init = function (self) {
			$(self).on("load", function () {
				console.log("image on load.");
				$canvas = $(settings.canvasSelector);
				$canvas.css("width", $(self).innerWidth());
				$canvas.css("height", $(self).innerHeight());

				paper.setup($canvas.get(0));

				raster = new paper.Raster(this);
				raster.position = raster.view.center;
				raster.visible = false;

				raster.on('load', function () {
					draw(self)
					$canvas.css("height", "auto");
					$canvas.css("max-width", "100%");
				});

			}).attr("src", $(self).attr("src"));

			return self;
		};

		var draw = function (self) {
			raster.size = new paper.Size($(self).innerWidth(), $(self).innerHeight());
			var step = Math.ceil($(self).width() / settings.numberOfDots);
			var spacing = 1;

			var nextPivot = nextPivotFunc(step);
			for (var p = nextPivot(); p !== null; p = nextPivot()) {
				var path = new paper.Path.Circle({
					center: p,
					radius: step / 2 / spacing,
					fillColor: settings.color
				});

				var color = raster.getAverageColor(path)
				if (color === null) {
					continue;
				}

				path.scale(1 - color.gray);
			}
		}

		var nextPivotFunc = function (step) {
			var curPivot;
			curPivot = new paper.Point(-step / 2, -step / 2)
			return function () {
				curPivot.x += step;
				if (curPivot.x > raster.width - step / 2) {
					curPivot.y += step;
					curPivot.x = -step / 2;

					if (curPivot.y > raster.height - step / 2) {
						return null;
					}
				}

				return curPivot.clone();
			}
		}

		return init(this);
	}

})(jQuery);