(function (window){
	function Zeko() {
		this.initialize();
	}

	var ss = new createjs.SpriteSheet(zekoAnimation);
	Zeko.prototype = new createjs.BitmapAnimation(ss);

	Zeko.prototype.Animation_initialize = Zeko.prototype.initialize;

	Zeko.prototype.initialize = function (){
		this.gotoAndPlay("idle");
		this.x = 800;
		this.y = 306;
		//helping variable for starting animations
		this.zekoTest = false;
		this.zekoTest2 = false;
		//helping variable for sinus function during the jump
		this.hop = PI;
	};

	Zeko.prototype.tick = function() {
		//deciding when to stop during run and when to run to the end
		if (hero.x < 11300) {
			if (hero.currentAnimation === 'stand' || this.x < hero.x + 600){
				if (this.zekoTest === true){
					if (this.currentAnimationFrame < 11) { //to finish the animation
					} else {
						this.gotoAndPlay("idle");
						//reseting the variables when zeko stops
						this.zekoTest = false;
						this.hop = PI;
					}
				}
			}
		}

		if (this.currentAnimation === "idle") {
			if ((Math.random()*90 | 0) === 1) {
				this.gotoAndPlay("standup");
			}
		}

		//Zeko on the run
		if (this.x < hero.x + 40+Math.random()*320 && direction === "right") {
			if (this.zekoTest === false) {
					this.gotoAndPlay("jump");
			}
			this.zekoTest = true;
		}

		if (this.zekoTest === true) {
			if (this.zekoTest2 === false) {
				this.zekoTest2 = true;
				bubble.handleBubble(rabbitText[Math.random()*3 | 0]);
			}
			//calculating the velocity of zeko
			this.x = this.x + Math.abs(Math.sin(this.hop/4.15))*12 + 4;
			this.hop++;
		}
	};

	window.Zeko = Zeko;
}(window));