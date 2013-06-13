(function (window){
	function Spider() {
		this.initialize();
	}

	var ss = new createjs.SpriteSheet(spiderAnimation);
	Spider.prototype = new createjs.BitmapAnimation(ss);

	Spider.prototype.Animation_initialize = Spider.prototype.initialize;

	Spider.prototype.initialize = function (){
		this.x = 1050 + Math.random()*3000 | 0;
		this.y = -130;
		this.name = "Spider";
		this.gotoAndStop([0]);
		this.spiderSeen = false;
	};

	Spider.prototype.tick = function() {
		if (hero.x > (this.x - 400) && this.spiderSeen === false) {
			this.gotoAndPlay("birth");
			this.spiderSeen = true;
		}
		if (this.currentAnimation === "idle" && ((Math.random()*25 | 0) === 22)) {
			this.gotoAndPlay("wiggle");
		}
	};

	window.Spider = Spider;
}(window));