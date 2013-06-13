var bubbleDead = true;

(function (window){
	function Bubble() {
		this.initialize();
	}

	var ss3 = new createjs.SpriteSheet(bubbleAnimation);
	Bubble.prototype = new createjs.BitmapAnimation(ss3);

	Bubble.prototype.Animation_initialize = Bubble.prototype.initialize;

	Bubble.prototype.initialize = function (){
		this.x = hero.x - 125;
		this.y = hero.y - 160;
		this.alpha = 0.8;
		this.gotoAndPlay("birth");
		this.bubbleText = new createjs.Text("","bold 15px Unkempt","black");
	};

	Bubble.prototype.tick = function() {
			//destroying bubble and bubble text
			if (this.currentAnimation === "death") {
				bubbleContainer.removeChild(this.bubbleText);
				this.onAnimationEnd = function() {
					bubbleContainer.removeChild(this);
					bubbleDead = true;
				};
			}
			//displaying bubble text at the right time
			if (this.currentAnimation === "birth") {
				this.onAnimationEnd = function() {
					bubbleContainer.addChild(this.bubbleText);
				};
			}

			if (direction === "left") {
				this.x = hero.x - 271;
				this.bubbleText.x = this.x + 38;
			}
			if (direction === "right") {
				this.x = hero.x - 125;
				this.bubbleText.x = this.x + 38;
			}
			this.y = hero.y - 160;
			this.bubbleText.y = this.y + 40;
	};

	Bubble.prototype.handleBubble = function(bubtxt) {
		if (bubbleDead === true) {
			this.initialize();
			this.bubbleText.text = bubtxt;
			bubbleContainer.addChild(this);
			this.bubbleText.x = this.x + 38;
			this.bubbleText.y = this.y + 40;
			bubbleDead = false;
		}
	};

	window.Bubble = Bubble;
}(window));
