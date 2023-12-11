(function ($) {
	$.fn.adaptiveBgColor = function (options) {
		var defaults = {
			opacity: 0.85,
		};

		var settings = $.extend({}, defaults, options);

		// private variables
		var $img;

		// private methods

		function init(self) {
			$(self).css("opacity", settings.opacity);
			$img = $(settings.img);

			$img.on("load", function () {
				adjust(self);
			}).attr("src", $img.attr("src"));

			return self
		}

		function adjust(self) {
			var vibrant = new Vibrant($img.get(0));
			var swatches = vibrant.swatches()

			$(self).css("background-color", swatches.Vibrant.getHex());

		}

		return init(this);
	}

})(jQuery);