(function ($) {
	$.fn.lineProgressBar = function (options) {
		var defaults = {
			lineHeight: "20px",
			lineColor: "#99caff",
			completeColor: "#007bff",
			showPercent: true,
		};

		var settings = $.extend({}, defaults, options);

		// private variables

		// private methods
		var drawLine = function (self) {
			var str = "<div class=\"lineBox\">";
			str += "<div class=\"line\"></div>";
			str += "<div class=\"complete\"></div>";
			str += "</div>";

			if (settings.showPercent) {
				self.prepend(`<div class=\"percent\"></div>`);
			}

			$(str).appendTo(self);
		}

		var init = function (self) {
			drawLine(self);

			self.find(".line").css({
				"background-color": settings.lineColor,
				"height": settings.lineHeight
			});

			self.find(".complete").css({
				"background-color": settings.completeColor,
				"height": settings.lineHeight
			});

			return self;
		};

		//public methods
		this.update = function (percent) {
			if (percent < 0) {
				percent = 0;
			} else if (percent > 100) {
				percent = 100;
			}

			if (settings.showPercent) {
				var p = this.find(".percent");
				p.text(percent + "%");

				p.css({
					"left": percent + "%",
					"transform": "translate(-50%, 0%)",
				});
			}

			this.find(".complete").css("width", percent + "%");
		};

		this.clear = function () {
			this.find(".lineBox").remove();
		};

		return init(this);
	}
})(jQuery);