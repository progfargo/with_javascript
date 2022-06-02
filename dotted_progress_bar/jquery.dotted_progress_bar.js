(function ($) {
	$.fn.dottedProgressBar = function (options) {
		var defaults = {
			numOfDots: 10,
			dotHeight: 30,
			dotColor: "#99caff",
			completeColor: "#007bff",
			showPercent: true,
		};

		var settings = $.extend({}, defaults, options);

		// private variables

		// private methods
		var drawDots = function (self) {
			var str = "<div class=\"dotBox\">";
			str += "<div class=\"dot\"></div>";
			str += "</div>";


			for (let i = 0; i < settings.numOfDots; i++) {
				$(str).appendTo(self);
			}
		}

		var init = function (self) {
			drawDots(self);

			var dot = $(".dot");
			dot.css("height", settings.dotHeight);
			dot.css("width", settings.dotHeight);
			dot.css("border-radius", settings.dotHeight / 2);

			return self;
		};

		//public methods
		this.update = function (percent) {
			if (percent < 0) {
				percent = 0;
			} else if (percent > 100) {
				percent = 100;
			}

			var dotBox = this.find(".dotBox");

			dotBox.find(".percent").remove();
			dotBox.find(".dot").css("background-color", settings.dotColor);

			var n = Math.ceil(settings.numOfLines * percent / 100);

			dotBox.each(function (i) {
				if (i >= n) {
					return false;
				}

				if (settings.showPercent && i == n - 1) {
					$(this).prepend(`<div class=\"percent\">${percent}%</div>`);
				}

				$(this).find(".dot").css("background-color", settings.completeColor);
			});


		};

		this.clear = function () {
			this.find(".dotBox").remove();
		};

		return init(this);
	}
})(jQuery);