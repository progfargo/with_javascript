(function ($) {
	$.fn.imageProgressBar = function (options) {
		var defaults = {
			showPercent: true,
			filter: "invert",
			initValue: 50,
		};

		var settings = $.extend({}, defaults, options);

		// private variables
		var originalImg;
		var canvas;
		var ctx;

		// private methods
		var draw = function (self) {
			if (settings.showPercent) {
				self.prepend(`<div class=\"percent\"></div>`);
			}

			var str = "<canvas class=\"progressCanvas\"></canvas>";
			str += "<img src=\"" + options.src + "\" alt=\"\">";

			$(str).appendTo(self);
		}

		var init = function (self) {
			draw(self);

			originalImg = $("img", self);
			canvas = $(".progressCanvas", self);

			ctx = canvas[0].getContext("2d");

			originalImg.on("load", function () {
				canvas[0].width = originalImg.width();
				canvas[0].height = originalImg.height();

				self.update(settings.initValue);
			}).attr("src", settings.src);

			return self;
		};

		var grayscale = function (pixels, percent) {
			var d = pixels.data;
			var width = originalImg.width() * 4;
			var completed = width * percent / 100;

			for (var i = 0; i < d.length; i += 4) {
				if (i % width < completed) {
					continue;
				}

				var r = d[i];
				var g = d[i + 1];
				var b = d[i + 2];

				// CIE luminance for the RGB
				// The human eye is bad at seeing red and blue, so we de-emphasize them.
				var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
				d[i] = d[i + 1] = d[i + 2] = v
			}
			return pixels;
		};

		var invert = function (pixels, percent) {
			var d = pixels.data;
			var width = originalImg.width() * 4;
			var completed = width * percent / 100;

			for (var i = 0; i < d.length; i += 4) {
				if (i % width < completed) {
					continue;
				}

				d[i] = 255 - d[i];
				d[i + 1] = 255 - d[i + 1];
				d[i + 2] = 255 - d[i + 2];
				d[i + 3] = 255;
			}

			return pixels;
		};

		//public methods
		this.update = function (percent, filter) {
			ctx.drawImage(originalImg[0], 0, 0);
			var imgData = ctx.getImageData(0, 0, canvas[0].width, canvas[0].height);

			var width = originalImg.width();
			var completed = width * percent / 100;

			var imgData;
			if (settings.filter === "grayscale") {
				imgData = grayscale(imgData, percent);
			} else if (settings.filter === "invert") {
				imgData = invert(imgData, percent);
			}

			if (settings.showPercent) {
				$(".percent", this).text(percent + "%");
			}
			ctx.putImageData(imgData, 0, 0);
		};


		return init(this);
	}
})(jQuery);