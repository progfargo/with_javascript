(function ($) {
	$.fn.dashedProgressBar = function (options) {
		var defaults = {
			numOfLines: 10,
			lineHeight: "10px",
			lineColor: "#99caff",
			completeColor: "#007bff",
			showPercent: true,
		};

		var settings = $.extend({}, defaults, options);

		// private variables

		// private methods
		var drawLines = function (self) {
			var str = "<div class=\"lineBox\">";
			str += "<div class=\"line\"></div>";
			str += "</div>";

			for (let i = 0; i < settings.numOfLines; i++) {
				$(str).appendTo(self);
			}
		}

		var init = function (self) {
			drawLines(self);

			return self;
		};

		//public methods
		this.update = function (percent) {
			if (percent < 0) {
				percent = 0;
			} else if (percent > 100) {
				percent = 100;
			}

			var lineBox = this.find(".lineBox");

			lineBox.find(".percent").remove();
			lineBox.find(".line").css("background-color", settings.lineColor);

			var n = Math.ceil(settings.numOfLines * percent / 100);
			console.log("n: ", n);

			lineBox.each(function (i) {
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
			this.find(".lineBox").remove();
		};

		return init(this);
	}
})(jQuery);