var death = true;
var played = true;
var vel = 0;
var vel2 = 0;
//hint tests
var tingle = false, death1 = false, death2 = false, death3 = false, hintMost = false, missHint = false, hover1Hint = false, hover2Hint = false;
var death3Text = ["    If only I could\n       lift rocks!", "  Are we gonna do\n     this forever?", "  That wasn't very\n         nice."];


(function (window){
	function Player() {
		this.initialize();
	}
	ss = new createjs.SpriteSheet(animacija);
	Player.prototype = new createjs.BitmapAnimation(ss);

	Player.prototype.Animation_initialize = Player.prototype.initialize;

	//initializing object
	Player.prototype.initialize = function (){
		//initiating the velocity of the player
		this.velocity = {x:0, y:0};

		//loading character with spritesheet and data from variable animacija in animacija.js
		this.name = "Player";
		this.gotoAndPlay("birth");
	};

	Player.prototype.tick = function() {
		//hints
		if (tingle === false && this.x > parFonLight1.x - 114) {
			bubble.handleBubble("     That tingles!");
			tingle = true;
		}
		if (hero.x > 14000 && hintMost === false) {
			bubble.handleBubble(" It's getting darker...");
			hintMost = true;
		}
		if (hero.x > 16900 && stecak.hover === false && stecak2.hover === false && missHint === false) {
			bubble.handleBubble("     I fell like I\n  miss something!");
			missHint = true;
		}
		if (hero.x > 17000 && stecak.hover === true && stecak.light === false && hover1Hint === false) {
			bubble.handleBubble("   I need it on fire!");
			hover1Hint = true;
		} else if (hero.x > 17000 && stecak2.hover === true && stecak2.light === false && hover2Hint === false) {
			bubble.handleBubble("    I need it on fire!");
			hover2Hint = true;
		}

		//death
		if ((((this.x > parFon.x - 90 && this.x < parFon.x - 70) && stecak.plugged === false && stecak2.plugged === false) ||
			((this.x > parFon2.x - 90 && this.x < parFon2.x - 70) && stecak.plugged2 === false && stecak2.plugged2 === false) ||
			((this.x > parFon3.x - 90 && this.x < parFon3.x - 70) && stecak.plugged3 === false && stecak2.plugged3 === false) ||
			((this.x > parFon4.x - 90 && this.x < parFon4.x - 70) && stecak.plugged4 === false && stecak2.plugged4 === false)) && direction === "right") {
			death = true;
			death1 = true;
			parFonLight1.charge = 1;
			parFonLight2.charge = 1;
			parFonLight3.charge = 1;
			parFonLight4.charge = 1;
			parFonLight5.charge = 1;
			vel = 5;
			vel2 = -12.6;
		}
		if ((((this.x > parFon.x + 70 && this.x < parFon.x + 90) && stecak.plugged === false && stecak2.plugged === false) ||
			((this.x > parFon2.x + 70 && this.x < parFon2.x + 90) && stecak.plugged2 === false && stecak2.plugged2 === false) ||
			((this.x > parFon3.x + 70 && this.x < parFon3.x + 90) && stecak.plugged3 === false && stecak2.plugged3 === false) ||
			((this.x > parFon4.x + 70 && this.x < parFon4.x + 90) && stecak.plugged4 === false && stecak2.plugged4 === false)) && direction === "left") {
			death = true;
			death1 = true;
			parFonLight1.charge = 1;
			parFonLight2.charge = 1;
			parFonLight3.charge = 1;
			parFonLight4.charge = 1;
			parFonLight5.charge = 1;
			vel = -5;
			vel2 = 12.6;
		}
		if (death === true && played === false) {
			played = true;
			this.gotoAndPlay("disperse");
		}
		if (this.currentAnimation === "disperse") {
			this.x += vel;
			played = true;
		}
		if (this.currentAnimation === "after") {
			this.alpha = 0;
			this.x += vel2;
			played = true;
		}
		if (this.currentAnimation === "birth") {
			this.alpha = 1;
			this.onAnimationEnd = function(){
				death = false;
				played = false;
				if (death1 === true && death2 === false && death3 === false) {
					bubble.handleBubble("     I can not pass.");
					death2 = true;
					death1 = false;
				}
				if (death1 === true && death2 === true && death3 === false) {
					bubble.handleBubble("		I must avoid the\n       darkness.");
					death2 = false;
					death1 = false;
					death3 = true;
				}
				if (death3 === true && death1 === true){
					bubble.handleBubble(death3Text[Math.random()*3 | 0]);
					death1 = false;
				}
			};
		}
		if (death === false) {
			//checkign for the end of screen
			if (this.x < 100 && lfHeld === true) {
				this.velocity.x = 0;
				this.gotoAndPlay("stand");
			}
			//coming to the end without the lights on
			else if ((lights1 === false || lights2 === false) && hero.x > 17400 && rtHeld === true) {
				bubble.handleBubble(darkEndText[Math.random()*3 | 0]);
				this.velocity.x = 0;
				this.gotoAndPlay("stand");
			}
			else if (rtHeld && lfHeld === false) {
				this.velocity.x = 10;
			}
			else if (lfHeld && rtHeld === false) {
				this.velocity.x = -10;
			}

			//checking if player is walking and playing the right animation
			if (rtHeld && keyDn === false) {
				if (direction === "left") {
					this.x -= 146;
					direction = "right";
				}
				this.scaleX = 1;
				this.gotoAndPlay("start");
				keyDn = true;

			}
			if (lfHeld && keyDn === false) {
				if (direction === "right") {
					this.x += 146;
					direction = "left";
				}
				this.scaleX = -1;
				this.gotoAndPlay("start");
				keyDn = true;
			}
			//checking witch animation is playing to start her with a delay
			if ( (this.currentAnimation === "start" && this.currentAnimationFrame > 5) || this.currentAnimation === "run1" || this.currentAnimation === "run2" || this.currentAnimation === "stop") {
				//moving the player
				this.x += this.velocity.x;
				this.y += this.velocity.y;
				this.velocity.x = this.velocity.x*0.9;
			}

			//function to handle the stoping and stoping animation
			Player.prototype.handleStop = function() {
				var s = this.currentAnimation;
				this.onAnimationEnd = function () {
					if ( (this.currentAnimation === "run1" || this.currentAnimation === "run2" || this.currentAnimation === "start") && keyDn === false) {
						this.gotoAndPlay("stop");
						if (this.currentAnimation != "stand") {
							if (direction === "right") {
								this.velocity.x = 5;
							}
							if (direction === "left") {
								this.velocity.x = -5;
							}
							this.x += this.velocity.x;
							this.velocity.x = this.velocity.x*0.9;
						}
					}
				};
			};
			if (this.currentAnimation === "stand") {
				this.velocity.x = 0;
			}

			if (this.currentAnimation === "run1" || this.currentAnimation === "run2") {
				if (direction === "right") {
					if (this.velocity.x < 11) {
						this.velocity.x++;
					}
				}

				if (direction === "left") {
					if (this.velocity.x > -10) {
						this.velocity.x--;
					}
				}
			}
		}
	};

	window.Player = Player;
}(window));