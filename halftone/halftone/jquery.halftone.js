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
					$canvas.css("height", "auto");
					draw(self)
					$canvas.css("max-width", "100%");
				});

			}).attr("src", $(self).attr("src"));

			return self;
		};

		var draw = function (self) {
			raster.size = new paper.Size($(self).innerWidth(), $(self).innerHeight());
			var step = Math.ceil($(self).width() / settings.numberOfDots);
			var spacing = 1;

			for (var x = step / 2; x < raster.width; x += step) {
				for (var y = step / 2; y < raster.height; y += step) {
					var path = new paper.Path.Circle({
						center: new paper.Point(x, y),
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
		}

		return init(this);
	}

})(jQuery);