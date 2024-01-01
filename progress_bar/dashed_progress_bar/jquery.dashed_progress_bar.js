(function ($) {
	$.fn.dashedProgressBar = function (options) {
		var defaults = {
			numOfDashes: 10,
			dashHeight: 20,
			dashColor: "#99caff",
			completeColor: "#007bff",
			showPercent: true,
		};

		var settings = $.extend({}, defaults, options);

		// private variables

		// private methods
		var drawLines = function (self) {
			var str = "<div class=\"dashBox\">";
			str += "<div class=\"line\"></div>";
			str += "</div>";

			for (let i = 0; i < settings.numOfDashes; i++) {
				$(str).appendTo(self);
			}
		}

		var init = function (self) {
			drawLines(self);

			var line = $(".line");
			line.css("height", settings.dashHeight);
			line.css("border-radius", settings.dashHeight / 2);

			return self;
		};

		//public methods
		this.update = function (percent) {
			if (percent < 0) {
				percent = 0;
			} else if (percent > 100) {
				percent = 100;
			}

			var dashBox = this.find(".dashBox");

			dashBox.find(".percent").remove();
			dashBox.find(".line").css("background-color", settings.dashColor);

			var n = Math.ceil(settings.numOfDashes * percent / 100);

			dashBox.each(function (i) {
				if (i >= n) {
					return false;
				}

				if (settings.showPercent && i == n - 1) {
					$(this).prepend(`<div class=\"percent\">${percent}%</div>`);
				}

				$(this).find(".line").css("background-color", settings.completeColor);
			});


		};

		this.clear = function () {
			this.find(".dashBox").remove();
		};

		return init(this);
	}
})(jQuery);