function createParticles() {
	for (i=0; i < 140; i++) {
		particle = new createjs.Graphics().beginFill("rgba(242,194,154,1)")
		.drawCircle( Math.random()*width*2 | 0, 180 + Math.random()*height/2 | 0, 0.6 + 0.6*Math.random());
		particles[i] = new createjs.Shape(particle);
		particles[i].velocityX = 0.5 * -Math.random();
		particles[i].velocityY = (Math.random() - Math.random())*0.5;
		particles[i].created = Date.now();
		particles[i].life = Math.random()*10;
		world.addChild(particles[i]);
	}
}

function createParticle() {
		var particle = new createjs.Graphics().beginFill("rgba(242,194,154,1)")
		.drawCircle( Math.random()*width*2 + hero.x - width*0.7 | 0, 180 + Math.random()*height/2 | 0, 0.6 + 0.6*Math.random());
		par = new createjs.Shape(particle);
		par.velocityX = 0.5 * -Math.random();
		par.velocityY = (Math.random() - Math.random())*0.5;
		par.created = Date.now();
		par.life = Math.random()*9;
		par.alpha = 0.2;
		particles.push(par);
		world.addChild(par);
}

function particleTick() {
	for (j = 0; j< particles.length; j++) {
		//the current time
		var now = Date.now();
		//particle movement
		particles[j].x += particles[j].velocityX;
		particles[j].y += particles[j].velocityY;
		//destroying particles
		if ((now - particles[j].created) / 1000 > particles[j].life) {
			particles[j].alpha = particles[j].alpha - 0.02;
		}
		if (particles[j].alpha < 0) {
			world.removeChild(particles[j]);
			particles.splice(j, 1);
			createParticle();
		}
		if ((particles[j].alpha < 1) && particles[j].life > (now - particles[j].created) / 1000) {
			particles[j].alpha += 0.02;
		}

	}
}



//fountain particles
(function (window){
	function ParticlesFountain() {
		this.initialize();
	}

	var particlesFountain = [];
	ParticlesFountain.prototype = particlesFountain;

	ParticlesFountain.prototype.Animation_initialize = ParticlesFountain.prototype.initialize;

	ParticlesFountain.prototype.initialize = function () {
		this.charge = 2;
		for (i=0; i < 150; i++) {
			var particle = new createjs.Graphics().beginFill(this.color)
			.drawCircle(0, 0, 0.7 + 0.6*Math.random());
			par = new createjs.Shape(particle);
			par.velocityX = (Math.random() - Math.random())*0.2;
			par.velocityY = -1+ (- Math.random())*1.5;
			par.created = Date.now();
			par.life = Math.random()*9;
			par.alpha = 0.2;
			this.push(par);
			world.addChild(par);
			par.x = this.x;
			par.y = this.y;
		}
	};

	ParticlesFountain.prototype.createParticleFountain = function () {
			var particle = new createjs.Graphics().beginFill(this.color)
			.drawCircle(0, 0, 0.7 + 0.6*Math.random());
			par = new createjs.Shape(particle);
			par.velocityX = (Math.random() - Math.random())*0.2;
			if (this.charge === 2) {
				par.velocityY = -1+ (- Math.random())*1.5;
			} else if (this.charge === 1) {
				par.velocityY = -0.4 + (-1+ (- Math.random())*1.5)/2;
			} else if (this.charge === 0) {
				par.y = 700;
			}
			par.created = Date.now();
			par.life = Math.random()*9;
			par.alpha = 0.2;
			this.push(par);
			world.addChild(par);
			par.x = this.x;
			par.y = this.y;
	};

	ParticlesFountain.prototype.tick = function () {
		if (hero.x + 1400 > this.x && hero.x - 1400 < this.x) {
			for (j = 0; j < 150; j++) {
				//the current time
				var now = Date.now();
				//particle movement
				this[j].x += this[j].velocityX;
				this[j].y += this[j].velocityY;
				//destroying particlesFountain
				if ((now - this[j].created) / 1000 > this[j].life) {
					this[j].alpha = this[j].alpha - 0.02;
				}
				if (this[j].alpha < 0) {
					world.removeChild(this[j]);
					this.splice(j, 1);
					this.createParticleFountain();
				}
				if ((this[j].alpha < 1) && this[j].life > (now - this[j].created) / 1000) {
					this[j].alpha += 0.02;
				}
				//gravity
				this[j].velocityY += 0.014;

				//interaction with stecak dummy
				if (direction === "right" && this[j].x < dummy.x + 100 && this[j].x > dummy.x && this[j].y < dummy.y + 100){
					this[j].velocityX = Math.random()*4;
					this[j].velocityY = Math.random()*2;
				}
				if (direction === "left" && this[j].x < dummy.x + 100 && this[j].x > dummy.x && this[j].y < dummy.y + 100){
					this[j].velocityX = -Math.random()*4;
					this[j].velocityY = Math.random()*2;
				}

					//interaction with stecak dummy2
				if (direction === "right" && this[j].x < dummy2.x + 100 && this[j].x > dummy2.x && this[j].y < dummy2.y + 100){
					this[j].velocityX = Math.random()*4;
					this[j].velocityY = Math.random()*2;
				}
				if (direction === "left" && this[j].x < dummy2.x + 100 && this[j].x > dummy2.x && this[j].y < dummy2.y + 100){
					this[j].velocityX = -Math.random()*4;
					this[j].velocityY = Math.random()*2;
				}

				//interaction with player
				if (direction === "right" && this[j].x < hero.x + 90 && this[j].x > hero.x + 80 && this[j].y > 250) {
					if (hero.currentAnimation === "run1" || hero.currentAnimation === "run2") {
						this[j].velocityX = Math.random()*8;
					} else if (hero.currentAnimation === "start" || hero.currentAnimation === "stop" && this[j].velocityX < 4) {
						this[j].velocityX = Math.random()*4;
					}
				}
				if (direction === "left" && this[j].x > hero.x - 90 && this[j].x < hero.x - 80 && this[j].y > 250) {
					if (hero.currentAnimation === "run1" || hero.currentAnimation === "run2") {
						this[j].velocityX = -Math.random()*8;
					} else if (hero.currentAnimation === "start" || hero.currentAnimation === "stop"  && this[j].velocityX < 4) {
						this[j].velocityX = -Math.random()*4;
					}

				}
				if (this[j].velocityX > 0.4) {
					this[j].velocityX -= Math.random()*0.2;
				}
				if (this[j].velocityX < -0.4) {
					this[j].velocityX += Math.random()*0.2;
				}

			}
		}
	};

	window.ParticlesFountain = ParticlesFountain;
}(window));