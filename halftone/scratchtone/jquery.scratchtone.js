(function ($) {
	$.fn.scratchtone = function (options) {
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
			var spacing = 1.2;

			var point = new paper.Point();
			var p1 = new paper.Point();
			var p2 = new paper.Point();


			for (var x = step / 2; x < raster.width; x += step) {
				var path = new paper.Path();
				path.strokeColor = settings.color;
				path.fillColor = settings.color;
				path.closed = true;

				for (var y = step / 2; y < raster.height; y += step) {

					point = new paper.Point(x, y);

					var circle = new paper.Path.Circle({
						center: point,
						radius: step / 2 / spacing,
						fillColor: "gray",
						visible: false
					});

					var color = raster.getAverageColor(circle)
					if (color === null) {
						continue;
					}

					t = (step / 2 / spacing) * (1 - color.gray);

					p1.x = point.x - t;
					p1.y = point.y;

					p2.x = point.x + t;
					p2.y = point.y;

					path.insert(0, p1.clone());
					path.add(p2.clone());
				}
			}

			path.smooth();
		}

		return init(this);
	}

})(jQuery);