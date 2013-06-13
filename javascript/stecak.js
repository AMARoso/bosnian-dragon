var duration = 3*PI;
var duration2 = PI;


//Prvi stecak
(function (window){
	function Stecak() {
		this.initialize();
	}

	var ss3 = new createjs.SpriteSheet(stecakAnimation);
	Stecak.prototype = new createjs.BitmapAnimation(ss3);

	Stecak.prototype.Animation_initialize = Stecak.prototype.initialize;

	Stecak.prototype.initialize = function (){
		this.gotoAndStop([0]);
		this.y = 280;
		this.regX = 140;
		this.regY = 100;
		this.velocity = {x:0, y:0};

		this.fre = 2;
		this.fre2 = 2;
		this.freLeft = 2.2;
		this.fre2Left = 2;
		this.done = false;
		this.done2 = false;
		this.doneLeft = false;
		this.done2Left = false;

		this.plugged = false;
		this.plugged2 = false;
		this.plugged3 = false;
		this.plugged4 = false;
		this.pluggedLight = false;
		this.pluggedLight2 = false;
		this.pluggedLight3 = false;
		this.pluggedLight4 = false;
		this.pluggedLight5 = false;

		this.hover = false;
		this.light = false;
		this.dropping = false;
	};

	Stecak.prototype.handleStecakDown = function() {
		if (parFon.x < hero.x + 200 && parFon.x > hero.x - 200 && this.hover === true && stecak2.plugged === false && this.light === true){
			this.x = parFon.x + 20;
			this.gotoAndPlay("drop");
			this.y = 258;
			this.rotation = 0;
			this.hover = false;
			this.plugged = true;
			this.light = false;
		}
		else if (parFon2.x < hero.x + 200 && parFon2.x > hero.x - 200 && this.hover === true && stecak2.plugged2 === false && this.light === true) {
			this.x = parFon2.x + 20;
			this.gotoAndPlay("drop");
			this.y = 258;
			this.rotation = 0;
			this.hover = false;
			this.plugged2 = true;
			this.light = false;
		}
		else if (parFon4.x < hero.x + 200 && parFon4.x > hero.x - 200 && this.hover === true && stecak2.plugged4 === false && this.light === true) {
			this.x = parFon4.x + 20;
			this.gotoAndPlay("drop");
			this.y = 258;
			this.rotation = 0;
			this.hover = false;
			this.plugged4 = true;
			this.light = false;
		}
		else if (parFonLight1.x < hero.x + 200 && parFonLight1.x > hero.x - 200 && this.hover === true && stecak2.pluggedLight === false) {
			this.x = parFonLight1.x + 20;
			this.y = 258;
			this.gotoAndPlay("drop");
			this.rotation = 0;
			this.hover = false;
			this.pluggedLight = true;
			if (parFonLight1.charge === 2 && this.light === false) {
				parFonLight1.charge = 1;
				parFonLight2.charge = 1;
				this.light = true;
			} else if (parFonLight1.charge === 1 && this.light === false) {
				parFonLight1.charge = 0;
				parFonLight2.charge = 2;
				this.light = true;
			}
		}
		else if (parFonLight2.x < hero.x + 200 && parFonLight2.x > hero.x - 200 && this.hover === true && stecak2.pluggedLight2 === false) {
			this.x = parFonLight2.x + 20;
			this.y = 258;
			this.gotoAndPlay("drop");
			this.rotation = 0;
			this.hover = false;
			this.pluggedLight2 = true;
			if (parFonLight2.charge === 2 && this.light === false) {
				parFonLight2.charge = 1;
				parFonLight1.charge = 1;
				this.light = true;
			} else if (parFonLight2.charge === 1 && this.light === false) {
				parFonLight2.charge = 0;
				parFonLight1.charge = 2;
				this.light = true;
			}
		}
		else if (parFonLight3.x < hero.x + 200 && parFonLight3.x > hero.x - 200 && this.hover === true && stecak2.pluggedLight3 === false) {
			this.x = parFonLight3.x + 20;
			this.y = 258;
			this.gotoAndPlay("drop");
			this.rotation = 0;
			this.hover = false;
			this.pluggedLight3 = true;
			if (parFonLight3.charge === 2 && this.light === false) {
				parFonLight3.charge = 1;
				parFonLight4.charge = 1;
				this.light = true;
			} else if (parFonLight3.charge === 1 && this.light === false) {
				parFonLight3.charge = 0;
				parFonLight4.charge = 2;
				this.light = true;
			}
		}
		else if (parFonLight4.x < hero.x + 200 && parFonLight4.x > hero.x - 200 && this.hover === true && stecak2.pluggedLight4 === false) {
			this.x = parFonLight4.x + 20;
			this.y = 258;
			this.gotoAndPlay("drop");
			this.rotation = 0;
			this.hover = false;
			this.pluggedLight4 = true;
			if (parFonLight4.charge === 2 && this.light === false) {
				parFonLight4.charge = 1;
				parFonLight3.charge = 1;
				parFonLight5.charge = 1;
				this.light = true;
			} else if (parFonLight4.charge === 1 && this.light === false) {
				parFonLight4.charge = 0;
				parFonLight3.charge = 2;
				parFonLight5.charge = 2;
				this.light = true;
			}
		}
		else if (parFonLight5.x < hero.x + 200 && parFonLight5.x > hero.x - 200 && this.hover === true && stecak2.pluggedLight5 === false) {
			this.x = parFonLight5.x + 20;
			this.y = 258;
			this.gotoAndPlay("drop");
			this.rotation = 0;
			this.hover = false;
			this.pluggedLight5 = true;
			if (parFonLight5.charge === 2 && this.light === false) {
				parFonLight5.charge = 1;
				parFonLight4.charge = 1;
				this.light = true;
			} else if (parFonLight5.charge === 1 && this.light === false) {
				parFonLight5.charge = 0;
				parFonLight4.charge = 2;
				this.light = true;
			}
		}
		if (hero.x + 150 > this.x  &&  this.hover === true && (stecak.x + 100 < stecak2.x || stecak.x - 100 > stecak2.x)) {
			this.gotoAndPlay("drop");
			this.y = 20 + hero.y;
			this.hover = false;
			if (stecak.x > 17060 && stecak.x < 17460 && stecak.hover === false) {
				if (stecak.light === false) {
					bubble.handleBubble("  I need some light.");
				}
				if (stecak.light === true && lights2 === false) {
					bubble.handleBubble("  There needs to be\n     some order.");
				}
				if (stecak.light === true && lights2 === true) {
					this.dropping = true;
				}
			}
		}
	};

	Stecak.prototype.handleStecakUp = function() {
		if (hero.x + 210 > this.x && hero.x - 210 < this.x && this.hover === false && stecak2.hover === false) {
			if (this.light === true) {
				this.gotoAndPlay("rip");
			} else {this.gotoAndPlay("rip2");}
			this.hover = true;
			this.plugged = false;
			this.plugged2 = false;
			this.plugged3 = false;
			this.plugged4 = false;
			this.pluggedLight = false;
			this.pluggedLight2 = false;
			this.pluggedLight3 = false;
			this.pluggedLight4 = false;
			this.pluggedLight5 = false;
		}
	};


	Stecak.prototype.tick = function() {

		if (this.currentAnimation === "lightUp" || this.currentAnimation === "lightLoop" || this.currentAnimation === "lightDown") {
			this.y = hero.y + 20;
			//offset for hovering effect
			this.offsetX = ( Math.cos(ticks/8) * 0.5);
			this.offsetY = ( Math.sin(ticks/ 5) *  0.9);
			//stecak movement
			if (direction === "right") {
				this.x = this.x + (hero.x-74 - this.x+100) * 0.11 + this.offsetX;
			}
			if (direction === "left") {
				this.x = this.x + (hero.x-110 - this.x+100) * 0.11 + this.offsetX;
			}
			this.y = this.y + this.offsetY;


			if (direction === "right") {
				this.doneLeft = false;
				this.done2Left = false;
				this.fre2Left = 2;
				this.freLeft = 2.2;
				//stecak when accelarating
				if ((this.x -100 < hero.x -116)) {
					this.rotation +=  Math.cos(duration/5) *this.fre;
					duration++;
					if (this.fre > 0.5) {
						this.fre += -0.03;
					} else {this.fre = 0.49;}

					if (this.rotation > -14 && this.done === false) {
						this.rotation += -0.8;
					} else {this.done = true;}

					//initalizing variables for breakingS
					this.fre2 = 2;
					duration2 = PI;
					this.done2 = false;
				}

				//stecak when breaking
				if (this.x - 100 > hero.x - 116 && this.rotation !== 0 && this.rotation < 30){
					this.rotation += Math.sin(duration2/5) *this.fre2;
					duration2++;
					if (this.fre2 > 0.03) {
						this.fre2 += -0.03;
					} else {this.fre2 = 0.01;}

					if (this.rotation < 4 && this.done2 === false) {
						this.rotation += 0.5;
					} else {this.done2 = true;}

					//initializing variables for next accelaration
					this.fre = 2;
					this.done = false;
					duration = 3*PI;
				}
			}

			if (direction === "left") {
				this.done = false;
				this.done2 = false;
				this.fre = 2;
				this.fre2 = 2;
				//stecak when accelarating
				if ((this.x -100 > hero.x-56)) {
					this.rotation +=  -Math.cos(duration/5) *this.freLeft;
					duration++;
					if (this.freLeft > 0.5) {
						this.freLeft += -0.03;
					} else {this.freLeft = 0.49;}

					if (this.rotation < 14 && this.doneLeft === false) {
						this.rotation += 0.8;
					} else {this.doneLeft = true;}

					//initalizing variables for breakingS
					this.fre2Left = 2;
					duration2 = PI;
					this.done2Left = false;
				}

				//stecak when breaking
				if (this.x - 100 < hero.x-56 && this.rotation > -30){
					this.rotation += -Math.sin(duration2/5) *this.fre2Left;
					duration2++;
					if (this.fre2Left > 0.03) {
						this.fre2Left += -0.03;
					} else {this.fre2Left = 0.01;}

					if (this.rotation > -4 && this.done2Left === false) {
						this.rotation += -0.5;
					} else {this.done2Left = true;}

					//initializing variables for next accelaration
					this.freLeft = 2.2;
					this.doneLeft = false;
					duration = 3*PI;
				}
			}

		}
	};

	window.Stecak = Stecak;
}(window));


//Drugi stecak 
(function (window){
	function Stecak2() {
		this.initialize();
	}

	var ss3 = new createjs.SpriteSheet(stecak2Animation);
	Stecak2.prototype = new createjs.BitmapAnimation(ss3);

	Stecak2.prototype.Animation_initialize = Stecak2.prototype.initialize;

	Stecak2.prototype.initialize = function (){
		this.gotoAndStop([0]);
		this.y = 280;
		this.regX = 140;
		this.regY = 100;
		this.velocity = {x:0, y:0};

		this.fre = 2;
		this.fre2 = 2;
		this.freLeft = 2.2;
		this.fre2Left = 2;
		this.done = false;
		this.done2 = false;
		this.doneLeft = false;
		this.done2Left = false;

		this.plugged = false;
		this.plugged2 = false;
		this.plugged3 = false;
		this.plugged4 = false;
		this.pluggedLight = false;
		this.pluggedLight2 = false;
		this.pluggedLight3 = true;
		this.pluggedLight4 = true;
		this.pluggedLight5 = true;

		this.hover = false;
		this.light = true;
	};


	Stecak2.prototype.handleStecakDown = function() {

		if (parFon3.x < hero.x + 200 && parFon3.x > hero.x - 200 && this.hover === true && stecak.plugged3 === false && this.light === true) {
			this.x = parFon3.x + 20;
			this.gotoAndPlay("drop");
			this.y = 258;
			this.rotation = 0;
			this.hover = false;
			this.plugged3 = true;
			this.light = false;
		}
		else if (parFonLight1.x < hero.x + 200 && parFonLight1.x > hero.x - 200 && this.hover === true && stecak.pluggedLight === false) {
			this.x = parFonLight1.x + 20;
			this.y = 258;
			this.gotoAndPlay("drop");
			this.rotation = 0;
			this.hover = false;
			this.pluggedLight = true;
			if (parFonLight1.charge === 2 && this.light === false) {
				parFonLight1.charge = 1;
				parFonLight2.charge = 1;
				this.light = true;
			} else if (parFonLight1.charge === 1 && this.light === false) {
				parFonLight1.charge = 0;
				parFonLight2.charge = 2;
				this.light = true;
			}
		}
		else if (parFonLight2.x < hero.x + 200 && parFonLight2.x > hero.x - 200 && this.hover === true && stecak.pluggedLight2 === false) {
			this.x = parFonLight2.x + 20;
			this.y = 258;
			this.gotoAndPlay("drop");
			this.rotation = 0;
			this.hover = false;
			this.pluggedLight2 = true;
			if (parFonLight2.charge === 2 && this.light === false) {
				parFonLight2.charge = 1;
				parFonLight1.charge = 1;
				this.light = true;
			} else if (parFonLight2.charge === 1 && this.light === false) {
				parFonLight2.charge = 0;
				parFonLight1.charge = 2;
				this.light = true;
			}
		}
		else if (parFonLight3.x < hero.x + 200 && parFonLight3.x > hero.x - 200 && this.hover === true && stecak.pluggedLight3 === false) {
			this.x = parFonLight3.x + 20;
			this.y = 258;
			this.gotoAndPlay("drop");
			this.rotation = 0;
			this.hover = false;
			this.pluggedLight3 = true;
			if (parFonLight3.charge === 2 && this.light === false) {
				parFonLight3.charge = 1;
				parFonLight4.charge = 1;
				this.light = true;
			} else if (parFonLight3.charge === 1 && this.light === false) {
				parFonLight3.charge = 0;
				parFonLight4.charge = 2;
				this.light = true;
			}
		}
		else if (parFonLight4.x < hero.x + 200 && parFonLight4.x > hero.x - 200 && this.hover === true && stecak.pluggedLight4 === false) {
			this.x = parFonLight4.x + 20;
			this.y = 258;
			this.gotoAndPlay("drop");
			this.rotation = 0;
			this.hover = false;
			this.pluggedLight4 = true;
			if (parFonLight4.charge === 2 && this.light === false) {
				parFonLight4.charge = 1;
				parFonLight3.charge = 1;
				parFonLight5.charge = 1;
				this.light = true;
			} else if (parFonLight4.charge === 1 && this.light === false) {
				parFonLight4.charge = 0;
				parFonLight3.charge = 2;
				parFonLight5.charge = 2;
				this.light = true;
			}
		}
		else if (parFonLight5.x < hero.x + 200 && parFonLight5.x > hero.x - 200 && this.hover === true && stecak.pluggedLight5 === false) {
			this.x = parFonLight5.x + 20;
			this.y = 258;
			this.gotoAndPlay("drop");
			this.rotation = 0;
			this.hover = false;
			this.pluggedLight5 = true;
			if (parFonLight5.charge === 2 && this.light === false) {
				parFonLight5.charge = 1;
				parFonLight4.charge = 1;
				this.light = true;
			} else if (parFonLight5.charge === 1 && this.light === false) {
				parFonLight5.charge = 0;
				parFonLight4.charge = 2;
				this.light = true;
			}
		}
		if (hero.x + 150 > this.x  &&  this.hover === true && (stecak2.x + 100 < stecak.x || stecak2.x - 100 > stecak.x)) {
			this.gotoAndPlay("drop");
			this.y = 20 + hero.y;
			this.hover = false;
			if (this.x > 17060 && this.x < 17460 && stecak.hover === false) {
				if (this.light === false) {
					bubble.handleBubble("  I need some light.");
				}
			}
		}
	};

	Stecak2.prototype.handleStecakUp = function() {
		if (hero.x + 210 > this.x && hero.x - 210 < this.x && this.hover === false) {
			if (this.light === true) {
				this.gotoAndPlay("rip");
			} else {this.gotoAndPlay("rip2");}

			this.hover = true;
			this.plugged = false;
			this.plugged2 = false;
			this.plugged3 = false;
			this.plugged4 = false;
			this.pluggedLight = false;
			this.pluggedLight2 = false;
			this.pluggedLight3 = false;
			this.pluggedLight4 = false;
			this.pluggedLight5 = false;
		}
	};


	Stecak2.prototype.tick = function() {

		if (this.currentAnimation === "lightUp" || this.currentAnimation === "lightLoop" || this.currentAnimation === "lightDown") {
			this.y = hero.y + 20;
			//offset for hovering effect
			this.offsetX = ( Math.cos(ticks/8) * 0.5);
			this.offsetY = ( Math.sin(ticks/ 5) *  0.9);
			//stecak movement
			if (direction === "right") {
				this.x = this.x + (hero.x-74 - this.x+100) * 0.11 + this.offsetX;
			}
			if (direction === "left") {
				this.x = this.x + (hero.x-110 - this.x+100) * 0.11 + this.offsetX;
			}
			this.y = this.y + this.offsetY;


			if (direction === "right") {
				this.doneLeft = false;
				this.done2Left = false;
				this.fre2Left = 2;
				this.freLeft = 2.2;
				//stecak when accelarating
				if ((this.x -100 < hero.x -116)) {
					this.rotation +=  Math.cos(duration/5) *this.fre;
					duration++;
					if (this.fre > 0.5) {
						this.fre += -0.03;
					} else {this.fre = 0.49;}

					if (this.rotation > -14 && this.done === false) {
						this.rotation += -0.8;
					} else {this.done = true;}

					//initalizing variables for breakingS
					this.fre2 = 2;
					duration2 = PI;
					this.done2 = false;
				}

				//stecak when breaking
				if (this.x - 100 > hero.x - 116 && this.rotation !== 0 && this.rotation < 30){
					this.rotation += Math.sin(duration2/5) *this.fre2;
					duration2++;
					if (this.fre2 > 0.03) {
						this.fre2 += -0.03;
					} else {this.fre2 = 0.01;}

					if (this.rotation < 4 && this.done2 === false) {
						this.rotation += 0.5;
					} else {this.done2 = true;}

					//initializing variables for next accelaration
					this.fre = 2;
					this.done = false;
					duration = 3*PI;
				}
			}

			if (direction === "left") {
				this.done = false;
				this.done2 = false;
				this.fre = 2;
				this.fre2 = 2;
				//stecak when accelarating
				if ((this.x -100 > hero.x-56)) {
					this.rotation +=  -Math.cos(duration/5) *this.freLeft;
					duration++;
					if (this.freLeft > 0.5) {
						this.freLeft += -0.03;
					} else {this.freLeft = 0.49;}

					if (this.rotation < 14 && this.doneLeft === false) {
						this.rotation += 0.8;
					} else {this.doneLeft = true;}

					//initalizing variables for breakingS
					this.fre2Left = 2;
					duration2 = PI;
					this.done2Left = false;
				}

				//stecak when breaking
				if (this.x - 100 < hero.x-56 && this.rotation > -30){
					this.rotation += -Math.sin(duration2/5) *this.fre2Left;
					duration2++;
					if (this.fre2Left > 0.03) {
						this.fre2Left += -0.03;
					} else {this.fre2Left = 0.01;}

					if (this.rotation > -4 && this.done2Left === false) {
						this.rotation += -0.5;
					} else {this.done2Left = true;}

					//initializing variables for next accelaration
					this.freLeft = 2.2;
					this.doneLeft = false;
					duration = 3*PI;
				}
			}

		}
	};

	window.Stecak2 = Stecak2;
}(window));