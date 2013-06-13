//keycodes for keys used
var KEYCODE_LEFT = 37, KEYCODE_RIGHT = 39, KEYCODE_UP = 38, KEYCODE_DOWN = 40, KEYCODE_SPACE = 32, KEYCODE_ENTER = 13, KEYCODE_DOT = 190,
	KEYCODE_CTRL = 17, KEYCODE_A = 65, KEYCODE_W = 87, KEYCODE_B = 66, KEYCODE_I = 73, KEYCODE_RSHIFT = 16,
	KEYCODE_1 = 49, KEYCODE_2 = 50;

//variables globaly visible
var numberOfImagesLoaded = 0;

//creating the image objects
var imgSplash = new Image();
var imgEnding = new Image();
var imgLayer0Background = new Image();
var imgLayer1TreesBack = new Image();
var imgLayer1TreesBack2 = new Image();
var imgLayer2Fog = new Image();
var imgLayer3Godrays = new Image();
var imgLayer4TreesMid = new Image();
var imgLayer5Fog = new Image();
var imgLayer6GroundBack = new Image();
var imgLayer7Soraki = new Image();
var imgLayer8GroundFront = new Image();
var imgLayer9TreesFront = new Image();
var imgLayer10Stuff = new Image();
var imgLayer11Vignette = new Image();
var imgStecak = new Image();
var imgStecak_2 = new Image();
var imgStecak2 = new Image();
var imgStecak2_2 = new Image();
var imgSpider = new Image();
var imgBubble = new Image();
var imgZeko = new Image();
var imgPostolje = new Image();
var imgPostoljeSpirale = new Image();
var imgPostoljeCiko = new Image();
var imgLandmark1 = new Image();
var imgLandmark2 = new Image();
var imgLandmark3 = new Image();
var imgLandmark4 = new Image();
var imgLandmark5 = new Image();
var imgSpiral = new Image();
var imgCiko = new Image();

//most images
var imgMostBackground = new Image();
var imgMostTreesMid = new Image();
var imgMostTreesFront = new Image();
var imgMostGround = new Image();
var imgMostGroundFront = new Image();
var imgMostStijeneFront = new Image();
var imgMost = new Image();
var imgMostDark = new Image();
var imgMostStijeneMid = new Image();
var imgMostStijeneBack = new Image();
var imgMostStijeneFar = new Image();
var imgMostGodrays = new Image();
var imgMostHighlights = new Image();

var canvas, stage, hero, spider1, spider2, world, fogContainer1, fogContainer1_1, fogContainer1_2, fogContainer2, fogContainer2_1, fogContainer2_2,
	bubbleContainer, direction = "right", lfHeld = false, rtHeld = false, keyDn = false;
//variables for width and height of canvas
var width, height;
//layer variables
var layer0Background, layer1TreesBack, layer1TreesBack_1, layer1TreesBack2, layer1TreesBack2_1, layer2Fog, layer2Fog_1, layer2Fog_2,
	layer3Godrays, layer3Godrays_1, layer4TreesMid, layer4TreesMid_1, layer5Fog, layer5Fog_1, layer5Fog_2, layer6GroundBack, layer6GroundBack_1,
	layer8GroundFront, layer8GroundFront_1, layer9TreesFront, layer9TreesFront_1, layer10Stuff, layer10Stuff_1, layer11Vignette,
	layer11Vignette_1;
//most variables
var mostBackground;

var fpsLabel, loadPrecentage, splash, square, square2, square3, particles = [], dummy, dummy2;

//bridge lights
var lights1 = false;
var lights2 = false;
var all_lights = false;
var helperLight = 0;

var PI = Math.PI;


var jumpText = ["  Want me to jump?", "      Jump? No.", "  Why do I talk to\n  myself anyway?", " I like it when you\n    play with me.",
							"      Try harder!", "  Why jump when\n   you can walk?!", "   No, this is not\n  a jumping game!",
							"     What is that\nsupposed to mean?", "OPPAN GANGNAM\n        STYLE!!!", "    I don't think so.",
							"    Do that thing\n        again.", "  Hit me baby one\n       more time.", " Stop pushing my\n        buttons!",
							" Quiet, you mortal\n     part of me!", "  Where is the end\n    of this forest?", "4, 8, 15, 16, 23, 42",
							"   An unexpected\n   journey indeed.", "   If I'm slow use\n  Google Chrome!"];

var darkEndText = ["   Hm, two circles,\n    two symbols?", "  I'm scared of the\n		       dark!", "    Light my way!"];

var rabbitText = ["   A white rabbit!\nI guess I'm Alice now.", " Let's see how deep\n the rabbit hole goes.", "     A white rabbit!\nWhere's the blue pill?" ];

var stecakText = ["Hmm, a stećak. Let's\n have a closer look."];

var Pauk, Bubble;

var titleLabel;

//register key functions
document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;


function init() {
	//initialize the stage
	canvas = document.getElementById("canvas1");
	// read the width and height of the canvas
	width = canvas.width;
	height = canvas.height;
	//create stage
	stage = new createjs.Stage(canvas);
	stage.snapToPixelsEnabled = true;

	stageContainer = new createjs.Container();
	stage.addChild(stageContainer);

	//helper for clicking to start the game
	square = new createjs.Shape();
	square.graphics.beginFill("black").drawRect(0, 0, 970, 413);
	square.x = 0;
	square.y = 0;
	stage.addChild(square);

	splash = new createjs.Bitmap(imgSplash);
	splash.x = 0;
	splash.y = 0;
	stage.addChild(splash);

	loadPrecentage = new createjs.Text("-- % Loaded","28px Estrangelo Edessa","black");
	stage.addChild(loadPrecentage);
	loadPrecentage.x = 670;
	loadPrecentage.y = 290;


	//loading images
	imgSplash.onload = handleImageLoad;
	imgSplash.src = "art/splash.jpg";

	imgEnding.onload = handleImageLoad;
	imgEnding.src = "art/ending.jpg";

	imgLayer0Background.onload = handleImageLoad;
	imgLayer0Background.src = "art/background.jpg";

	imgLayer1TreesBack.onload = handleImageLoad;
	imgLayer1TreesBack.src = "art/layerneg3_drva.png";

	imgLayer1TreesBack2.onload = handleImageLoad;
	imgLayer1TreesBack2.src = "art/layerneg3_drva2.png";

	imgLayer2Fog.onload = handleImageLoad;
	imgLayer2Fog.src = "art/layerneg2_fog.png";

	imgLayer3Godrays.onload = handleImageLoad;
	imgLayer3Godrays.src = "art/layerneg2_godrays.png";

	imgLayer4TreesMid.onload = handleImageLoad;
	imgLayer4TreesMid.src = "art/layerneg1_drva.png";

	imgLandmark1.onload = handleImageLoad;
	imgLandmark1.src = "art/landmark1.png";

	imgLandmark2.onload = handleImageLoad;
	imgLandmark2.src = "art/landmark2.png";

	imgLandmark3.onload = handleImageLoad;
	imgLandmark3.src = "art/landmark3.png";

	imgLandmark4.onload = handleImageLoad;
	imgLandmark4.src = "art/landmark4.png";

	imgLandmark5.onload = handleImageLoad;
	imgLandmark5.src = "art/landmark5.png";

	imgLayer5Fog.onload = handleImageLoad;
	imgLayer5Fog.src = "art/layerneg2_fog2.png";

	imgLayer6GroundBack.onload = handleImageLoad;
	imgLayer6GroundBack.src = "art/layer0_ground.png";

	imgLayer7Soraki.onload = handleImageLoad;
	imgLayer7Soraki.src = "art/Soraki.png";

	imgLayer8GroundFront.onload = handleImageLoad;
	imgLayer8GroundFront.src = "art/layer0_ground2.png";

	imgLayer9TreesFront.onload = handleImageLoad;
	imgLayer9TreesFront.src = "art/layer1_drva.png";

	imgLayer10Stuff.onload = handleImageLoad;
	imgLayer10Stuff.src = "art/layer2_stuff.png";

	imgLayer11Vignette.onload = handleImageLoad;
	imgLayer11Vignette.src = "art/layer3_vignette.png";

	imgStecak.onload = handleImageLoad;
	imgStecak.src = "art/stecak_0.png";

	imgStecak_2.onload = handleImageLoad;
	imgStecak_2.src = "art/stecak_1.png";

	imgStecak2.onload = handleImageLoad;
	imgStecak2.src = "art/stecak2_0.png";

	imgStecak2_2.onload = handleImageLoad;
	imgStecak2_2.src = "art/stecak2_1.png";

	imgPostolje.onload = handleImageLoad;
	imgPostolje.src = "art/postolje.png";

	imgPostoljeSpirale.onload = handleImageLoad;
	imgPostoljeSpirale.src = "art/postolje_spirale.png";

	imgPostoljeCiko.onload = handleImageLoad;
	imgPostoljeCiko.src = "art/postolje_ciko.png";

	imgSpider.onload = handleImageLoad;
	imgSpider.src = "art/spider.png";

	imgBubble.onload = handleImageLoad;
	imgBubble.src = "art/bubble.png";

	imgZeko.onload = handleImageLoad;
	imgZeko.src = "art/zeko.png";

	imgSpiral.onload = handleImageLoad;
	imgSpiral.src = "art/most_spirala.png";

	imgCiko.onload = handleImageLoad;
	imgCiko.src = "art/most_ciko.png";

	imgMostBackground.onload = handleImageLoad;
	imgMostBackground.src = "art/most_background.jpg";

	imgMostTreesMid.onload = handleImageLoad;
	imgMostTreesMid.src = "art/most_trees_mid.png";

	imgMostTreesFront.onload = handleImageLoad;
	imgMostTreesFront.src = "art/most_trees_front.png";

	imgMostGround.onload = handleImageLoad;
	imgMostGround.src = "art/most_ground.png";

	imgMostGroundFront.onload = handleImageLoad;
	imgMostGroundFront.src = "art/most_ground_front.png";

	imgMostStijeneFront.onload = handleImageLoad;
	imgMostStijeneFront.src = "art/most_stijene_front.png";

	imgMost.onload = handleImageLoad;
	imgMost.src = "art/most.png";

	imgMostDark.onload = handleImageLoad;
	imgMostDark.src = "art/most_dark.png";

	imgMostStijeneMid.onload = handleImageLoad;
	imgMostStijeneMid.src = "art/most_stijene_mid.png";

	imgMostStijeneBack.onload = handleImageLoad;
	imgMostStijeneBack.src = "art/most_stijene_back.png";

	imgMostStijeneFar.onload = handleImageLoad;
	imgMostStijeneFar.src = "art/most_stijene_far.png";

	imgMostGodrays.onload = handleImageLoad;
	imgMostGodrays.src = "art/most_godrays.png";

	imgMostHighlights.onload = handleImageLoad;
	imgMostHighlights.src = "art/most_highlights.png";
}

//checking if images are loaded and starting the game
function handleImageLoad(e) {
	numberOfImagesLoaded++;
	loadPrecentage.text = Math.round(numberOfImagesLoaded*100/45) +" % Loaded";
	stage.update();

	if (numberOfImagesLoaded === 45) {
		numberOfImagesLoaded = 0;
		//when loaded display intro text
		loadPrecentage.x = 670;
		loadPrecentage.y = 290;
		loadPrecentage.text = "Click to start";

		//start on click
		square.onClick = function() {
			start();
		};
		stage.update();
	}
}

function start() {
	//removing unneeded objects
	stage.removeChild(square);
	stage.removeChild(splash);
	stage.removeChild(loadPrecentage);

	//loading background image
	layer0Background = new createjs.Bitmap(imgLayer0Background);
	stageContainer.addChild(layer0Background);
	layer0Background.cache(0, 0, 970, 413);

	mostBackground = new createjs.Bitmap(imgMostBackground);
	stageContainer.addChild(mostBackground);
	mostBackground.x = 970;
	mostBackground.y = -140;

	layer1TreesBack = new createjs.Bitmap(imgLayer1TreesBack);
	stageContainer.addChild(layer1TreesBack);
	layer1TreesBack.cache(0, 0, 970, 413);

	layer1TreesBack_1 = new createjs.Bitmap(imgLayer1TreesBack);
	stageContainer.addChild(layer1TreesBack_1);
	layer1TreesBack_1.x = 970;
	layer1TreesBack_1.cache(0, 0, 970, 413);

	layer1TreesBack2 = new createjs.Bitmap(imgLayer1TreesBack2);
	stageContainer.addChild(layer1TreesBack2);
	layer1TreesBack2.cache(0, 0, 970, 413);

	layer1TreesBack2_1 = new createjs.Bitmap(imgLayer1TreesBack2);
	stageContainer.addChild(layer1TreesBack2_1);
	layer1TreesBack2_1.x = 970;
	layer1TreesBack2_1.cache(0, 0, 970, 413);

	mostStijeneFar = new createjs.Bitmap(imgMostStijeneFar);
	stageContainer.addChild(mostStijeneFar);
	mostStijeneFar.x = 16560;
	mostStijeneFar.y = -140;

	fogContainer1 = new createjs.Container();
	stageContainer.addChild(fogContainer1);
	fogContainer1.y = 0;
	fogContainer1.x = 0;

	layer2Fog = new createjs.Bitmap(imgLayer2Fog);
	fogContainer1.addChild(layer2Fog);

	fogContainer1.cache(0, 0, 970, 413);

	fogContainer1_1 = new createjs.Container();
	stageContainer.addChild(fogContainer1_1);
	fogContainer1_1.x = 0;
	fogContainer1_1.y = 0;

	layer2Fog_1 = new createjs.Bitmap(imgLayer2Fog);
	fogContainer1_1.addChild(layer2Fog_1);

	fogContainer1_1.cache(0, 0, 970, 413);

	fogContainer1_2 = new createjs.Container();
	stageContainer.addChild(fogContainer1_2);
	fogContainer1_2.x = 0;
	fogContainer1_2.y = 0;

	layer2Fog_2 = new createjs.Bitmap(imgLayer2Fog);
	fogContainer1_2.addChild(layer2Fog_2);

	fogContainer1_2.cache(0, 0, 970, 413);

	layer3Godrays = new createjs.Bitmap(imgLayer3Godrays);
	stageContainer.addChild(layer3Godrays);
	layer3Godrays.cache(0, 0, 970, 413);

	layer3Godrays_1 = new createjs.Bitmap(imgLayer3Godrays);
	stageContainer.addChild(layer3Godrays_1);
	layer3Godrays_1.x = 970;
	layer3Godrays_1.cache(0, 0, 970, 413);

	layer4TreesMid = new createjs.Bitmap(imgLayer4TreesMid);
	stageContainer.addChild(layer4TreesMid);
	layer4TreesMid.cache(0, 0, 970, 413);

	layer4TreesMid_1 = new createjs.Bitmap(imgLayer4TreesMid);
	stageContainer.addChild(layer4TreesMid_1);
	layer4TreesMid_1.x = 970;
	layer4TreesMid_1.cache(0, 0, 970, 413);

	mostTreesMid = new createjs.Bitmap(imgMostTreesMid);
	stageContainer.addChild(mostTreesMid);
	mostTreesMid.x = 1970;
	mostTreesMid.y = -140;

	landmark1 = new createjs.Bitmap(imgLandmark1);
	stageContainer.addChild(landmark1);
	landmark1.cache(0, 0, 970, 413);
	landmark1.x = 3000;

	landmark2 = new createjs.Bitmap(imgLandmark2);
	stageContainer.addChild(landmark2);
	landmark2.cache(0, 0, 970, 413);
	landmark2.x = 3000;

	landmark3 = new createjs.Bitmap(imgLandmark3);
	stageContainer.addChild(landmark3);
	landmark3.cache(0, 0, 970, 413);
	landmark3.x = 3000;
	landmark3.y = 36;

	landmark4 = new createjs.Bitmap(imgLandmark4);
	stageContainer.addChild(landmark4);
	landmark4.cache(0, 0, 970, 413);
	landmark4.x = 3000;

	landmark5 = new createjs.Bitmap(imgLandmark5);
	stageContainer.addChild(landmark5);
	landmark5.cache(0, 0, 970, 413);
	landmark5.x = 4400;
	landmark5.y = 230;

	mostStijeneBack = new createjs.Bitmap(imgMostStijeneBack);
	stageContainer.addChild(mostStijeneBack);
	mostStijeneBack.x = 16560;
	mostStijeneBack.y = -140;

	//fog front
	fogContainer2 = new createjs.Container();
	stageContainer.addChild(fogContainer2);
	fogContainer2.y = 0;
	fogContainer2.x = 0;

	layer5Fog = new createjs.Bitmap(imgLayer5Fog);
	fogContainer2.addChild(layer5Fog);

	fogContainer2.cache(0, 0, 970, 413);

	fogContainer2_1 = new createjs.Container();
	stageContainer.addChild(fogContainer2_1);
	fogContainer2_1.y = 0;
	fogContainer2_1.x = 0;

	layer5Fog_1 = new createjs.Bitmap(imgLayer5Fog);
	fogContainer2_1.addChild(layer5Fog_1);

	fogContainer2_1.cache(0, 0, 970, 413);

	fogContainer2_2 = new createjs.Container();
	stageContainer.addChild(fogContainer2_2);
	fogContainer2_2.y = 0;
	fogContainer2_2.x = 0;

	layer5Fog_2 = new createjs.Bitmap(imgLayer5Fog);
	fogContainer2_2.addChild(layer5Fog_2);

	fogContainer2_2.cache(0, 0, 970, 413);

	mostStijeneMid = new createjs.Bitmap(imgMostStijeneMid);
	stageContainer.addChild(mostStijeneMid);
	mostStijeneMid.x = 16500;
	mostStijeneMid.y = -140;

	layer6GroundBack = new createjs.Bitmap(imgLayer6GroundBack);
	stageContainer.addChild(layer6GroundBack);
	layer6GroundBack.y = 329;
	layer6GroundBack.cache(0, 0, 990, 413);

	layer6GroundBack_1 = new createjs.Bitmap(imgLayer6GroundBack);
	stageContainer.addChild(layer6GroundBack_1);
	layer6GroundBack_1.x = 970;
	layer6GroundBack_1.y = 329;
	layer6GroundBack_1.cache(0, 0, 990, 413);

	layer6GroundBack_2 = new createjs.Bitmap(imgLayer6GroundBack);
	stageContainer.addChild(layer6GroundBack_2);
	layer6GroundBack_2.x = -970;
	layer6GroundBack_2.y = 329;
	layer6GroundBack_2.cache(0, 0, 972, 413);

	world = new createjs.Container();
	stageContainer.addChild(world);
	world.y = 0;
	world.x = 0;

	mostGround = new createjs.Bitmap(imgMostGround);
	world.addChild(mostGround);
	mostGround.x = 15560;
	mostGround.y = 220;

	titleLabel = new createjs.Text("-----"," 150px Josefin Slab","#eab08b");
	titleLabel.text = "                      Dragon";
	world.addChild(titleLabel);
	titleLabel.x = (width  / 2) -300;
	titleLabel.y = (height / 2) -190;

	titleLabel = new createjs.Text("-----"," 44px Josefin Slab","#eab08b");
	titleLabel.text = "                        of Bosnia";
	world.addChild(titleLabel);
	titleLabel.x = (width  / 2) +520;
	titleLabel.y = (height / 2) -30;

	titleLabel2 = new createjs.Text("-----"," 18px Josefin Slab","#eab08b");
	titleLabel2.text = "                        based on a movie";
	world.addChild(titleLabel2);
	titleLabel2.x = (width  / 2) +728;
	titleLabel2.y = (height / 2) + 20;

	titleLabel4 = new createjs.Text("-----","bold 16px Josefin Slab","#452c47");
	titleLabel4.text ="            Art: Ivan Ramadan\n    Programming: Amar Zubcevic";
	world.addChild(titleLabel4);
	titleLabel4.x = (width  / 2) +772;
	titleLabel4.y = (height / 2) +60;

	postolje = new createjs.Bitmap(imgPostolje);
	world.addChild(postolje);
	postolje.x = 5572;
	postolje.y = 340;

	postoljeSpirale2 = new createjs.Bitmap(imgPostoljeSpirale);
	world.addChild(postoljeSpirale2);
	postoljeSpirale2.x = 8304;
	postoljeSpirale2.y = 339;

	postolje2 = new createjs.Bitmap(imgPostolje);
	world.addChild(postolje2);
	postolje2.x = 6672;
	postolje2.y = 340;

	postoljeSpirale = new createjs.Bitmap(imgPostoljeSpirale);
	world.addChild(postoljeSpirale);
	postoljeSpirale.x = 6114;
	postoljeSpirale.y = 339;

	postolje3 = new createjs.Bitmap(imgPostolje);
	world.addChild(postolje3);
	postolje3.x = 8792;
	postolje3.y = 340;

	postoljeCiko = new createjs.Bitmap(imgPostoljeCiko);
	world.addChild(postoljeCiko);
	postoljeCiko.x = 9374;
	postoljeCiko.y = 339;

	postolje4 = new createjs.Bitmap(imgPostolje);
	world.addChild(postolje4);
	postolje4.x = 9902;
	postolje4.y = 340;

	postoljeSpirale = new createjs.Bitmap(imgPostoljeSpirale);
	world.addChild(postoljeSpirale);
	postoljeSpirale.x = 10724;
	postoljeSpirale.y = 339;

	postolje5 = new createjs.Bitmap(imgPostolje);
	world.addChild(postolje5);
	postolje5.x = 11492;
	postolje5.y = 340;

	stecak = new Stecak();
	stecak.x = 3330;
	world.addChild(stecak);

	stecak2 = new Stecak2();
	stecak2.x = 8940;
	stecak2.y = 258;
	world.addChild(stecak2);

	dummy = new createjs.Shape();
	dummy.graphics.beginFill("white").drawRect(0, 0, 100, 92);
	dummy.x = 0;
	dummy.y = 0;
	dummy.alpha = 0;
	world.addChild(dummy);

	dummy2 = new createjs.Shape();
	dummy2.graphics.beginFill("white").drawRect(0, 0, 100, 92);
	dummy2.x = 0;
	dummy2.y = 0;
	dummy2.alpha = 0;
	world.addChild(dummy2);

	//creating the player from the Player object and positioning him at the start location
	hero = new Player();
	hero.x = 170;
	hero.y = 260;
	hero.regX = -112;

	//creating zeko
	zeko = new Zeko();
	zeko.x = 4700;
	world.addChild(zeko);

	//creating container for speechbubble
	bubbleContainer = new createjs.Container();
	world.addChild(bubbleContainer);
	bubbleContainer.y = 0;
	bubbleContainer.x = 0;

	bubble = new Bubble();

	//creating particle fountains
	parFonLight1 = new ParticlesFountain();
	parFonLight1.x = 5700;
	parFonLight1.y = 358;
	parFonLight1.color = "rgba(242,194,154,1)";
	parFonLight1.charge = 2;

	parFon = new ParticlesFountain();
	parFon.x = 6230;
	parFon.y = 358;
	parFon.color = "black";

	parFonLight2 = new ParticlesFountain();
	parFonLight2.x = 6800;
	parFonLight2.y = 358;
	parFonLight2.color = "rgba(242,194,154,1)";
	parFonLight2.charge = 0;

	parFon2 = new ParticlesFountain();
	parFon2.x = 8420;
	parFon2.y = 358;
	parFon2.color = "black";

	parFonLight3 = new ParticlesFountain();
	parFonLight3.x = 8920;
	parFonLight3.y = 358;
	parFonLight3.color = "rgba(242,194,154,1)";
	parFonLight3.charge = 0;

	parFon3 = new ParticlesFountain();
	parFon3.x = 9490;
	parFon3.y = 358;
	parFon3.color = "black";

	parFonLight4 = new ParticlesFountain();
	parFonLight4.x = 10030;
	parFonLight4.y = 358;
	parFonLight4.color = "rgba(242,194,154,1)";
	parFonLight4.charge = 2;

	parFon4 = new ParticlesFountain();
	parFon4.x = 10840;
	parFon4.y = 358;
	parFon4.color = "black";

	parFonLight5 = new ParticlesFountain();
	parFonLight5.x = 11620;
	parFonLight5.y = 358;
	parFonLight5.color = "rgba(242,194,154,1)";
	parFonLight5.charge = 0;

	//creating the particles
	createParticles();

	//creating the spider
	spider1 = new Spider();
	world.addChild(spider1);

	spider2 = new Spider();
	spider2.x+=3000;
	world.addChild(spider2);

	mostGroundFront = new createjs.Bitmap(imgMostGroundFront);
	stageContainer.addChild(mostGroundFront);
	mostGroundFront.x = 18100;
	mostGroundFront.y = 286;

	var ss5 = new createjs.SpriteSheet(spiralAnimation);
	spiral = new createjs.BitmapAnimation(ss5);
	spiral.x = 17725;
	spiral.y = 128;

	var ss6 = new createjs.SpriteSheet(cikoAnimation);
	ciko = new createjs.BitmapAnimation(ss6);
	ciko.x = 16924;
	ciko.y = 222;

	most = new createjs.Bitmap(imgMost);
	most.x = 16560;
	most.y = -130;

	mostGodrays = new createjs.Bitmap(imgMostGodrays);
	mostGodrays.x = 16560;
	mostGodrays.y = -140;
	mostGodrays.alpha = 0.01;

	mostHighlights = new createjs.Bitmap(imgMostHighlights);
	mostHighlights.x = 16540;
	mostHighlights.y = -100;
	mostHighlights.alpha = 0.01;

	mostDark = new createjs.Bitmap(imgMostDark);
	mostDark.x = 16560;
	mostDark.y = -130;

	mostStijeneFront = new createjs.Bitmap(imgMostStijeneFront);
	stageContainer.addChild(mostStijeneFront);
	mostStijeneFront.x = 15560;
	mostStijeneFront.y = -140;

	//front grass
	layer8GroundFront = new createjs.Bitmap(imgLayer8GroundFront);
	stageContainer.addChild(layer8GroundFront);
	layer8GroundFront.y = 278;
	layer8GroundFront.cache(0, 0, 970, 413);

	layer8GroundFront_1 = new createjs.Bitmap(imgLayer8GroundFront);
	stageContainer.addChild(layer8GroundFront_1);
	layer8GroundFront_1.x = 970;
	layer8GroundFront_1.y = 278;
	layer8GroundFront_1.cache(0, 0, 970, 413);

	layer9TreesFront = new createjs.Bitmap(imgLayer9TreesFront);
	stageContainer.addChild(layer9TreesFront);
	layer9TreesFront.cache(0, 0, 970, 413);

	layer9TreesFront_1 = new createjs.Bitmap(imgLayer9TreesFront);
	stageContainer.addChild(layer9TreesFront_1);
	layer9TreesFront_1.x = 970;
	layer9TreesFront_1.cache(0, 0, 970, 413);

	mostTreesFront = new createjs.Bitmap(imgMostTreesFront);
	stageContainer.addChild(mostTreesFront);
	mostTreesFront.x = 1970;
	mostTreesFront.y = -140;

	layer10Stuff = new createjs.Bitmap(imgLayer10Stuff);
	stageContainer.addChild(layer10Stuff);
	layer10Stuff.cache(0, 0, 970, 413);

	layer10Stuff_1 = new createjs.Bitmap(imgLayer10Stuff);
	stageContainer.addChild(layer10Stuff_1);
	layer10Stuff_1.x = 970;
	layer10Stuff_1.cache(0, 0, 970, 413);

	//vignetta
	layer11Vignette = new createjs.Bitmap(imgLayer11Vignette);
	stage.addChild(layer11Vignette);
	layer11Vignette.cache(0, 0, 970, 413);

	layer11Vignette_1 = new createjs.Bitmap(imgLayer11Vignette);
	stage.addChild(layer11Vignette_1);
	layer11Vignette_1.cache(0,0, 970, 413);

	fpsLabel = new createjs.Text("-- fps","bold 14px Arial","#FFF");
	stage.addChild(fpsLabel);
	fpsLabel.x = 10;
	fpsLabel.y = 20;

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addListener(window);

	//black square used for fade in
	square2 = new createjs.Shape();
	square2.graphics.beginFill("black").drawRect(0, 0, 970, 413);
	square2.x = 0;
	square2.y = 0;
	square2.alpha = 1;
	stage.addChild(square2);

	square3 = new createjs.Shape();
	square3.graphics.beginFill("black").drawRect(0, 0, 970, 413);
	square3.x = 0;
	square3.y = 0;
	square3.alpha = 0;
	stage.addChild(square3);

	ending = new createjs.Bitmap(imgEnding);
	ending.x = 0;
	ending.y = 0;
	ending.alpha = 0;
	stage.addChild(ending);

	stage.update();
}

var ticks = 0;
var stecakSeen = false;

function tick() {
	ticks++;
	//fading in removing black square
	if (square2.alpha > 0.05) {
		square2.alpha -= 0.05;
	} else {
		stage.removeChild(square2);
		world.addChild(hero);
		world.addChild(spiral);
		world.addChild(ciko);
		world.addChild(most);
		world.addChild(mostGodrays);
		world.addChild(mostHighlights);
		world.addChild(mostDark);
	}


	hero.tick();
	zeko.tick();

	//bubble tick only if bubble exists
	if (!bubbleDead) {
		bubble.tick();
	}

	if (stecakSeen === false && hero.x + 210 > stecak.x && hero.x - 210 < stecak.x) {
		bubble.handleBubble(stecakText[Math.random()*1 | 0]);
		stecakSeen = true;
	}
	//stecak tick if stecak is hovering
	if (stecak.hover) {
		stecak.tick();
	}
	if (stecak2.hover) {
		stecak2.tick();
	}

	//dummy for stecak tick
	dummy.x = stecak.x - 50;
	if (stecak.hover === true && dummy.y > 210) {
		dummy.y -= 3;
	}
	else if (stecak.hover === false && dummy.y < stecak.y) {
		dummy.y += 8;
	}

	dummy.rotation = stecak.rotation;

	//dummy2 for stecak2 tick
	dummy2.x = stecak2.x - 50;
	if (stecak2.hover === true && dummy2.y > 210) {
		dummy2.y -= 3;
	}
	else if (stecak2.hover === false && dummy2.y < stecak2.y) {
		dummy2.y += 8;
	}

	dummy2.rotation = stecak2.rotation;


	//spider ticks
	spider1.tick();
	spider2.tick();

	//particles ticks
	particleTick();

	parFon.tick();
	parFon2.tick();
	parFon3.tick();
	parFon4.tick();

	parFonLight1.tick();
	parFonLight2.tick();
	parFonLight3.tick();
	parFonLight4.tick();
	parFonLight5.tick();

	//handeling the fog movement
	if (hero.x < width*0.3 + 138 && direction === "left" || hero.x > 16960) {}
	else if (hero.x > width*0.3 && ((hero.currentAnimation === "start" && hero.currentAnimationFrame > 5) ||
		hero.currentAnimation === "run1" || hero.currentAnimation === "run2" || hero.currentAnimation === "stop")) {

		fogContainer1.x = (fogContainer1.x - hero.velocity.x*0.2) % 970;
		fogContainer1_1.x = fogContainer1.x + 970;
		fogContainer1_2.x = fogContainer1.x - 970;

		fogContainer2.x =(fogContainer2.x - hero.velocity.x*0.6) % 970;
		fogContainer2_1.x = fogContainer2.x + 970;
		fogContainer2_2.x = fogContainer2.x - 970;
	}
	//fog movement without player
	fogContainer1.x = (fogContainer1.x - 0.25) % 970;
	fogContainer1_1.x = fogContainer1.x + 970;
	fogContainer1_2.x = fogContainer1.x - 970;

	fogContainer2.x = (fogContainer2.x - 0.5) % 970;
	fogContainer2_1.x = fogContainer2.x + 970;
	fogContainer2_2.x = fogContainer2.x - 970;
	//end of fog movement handling

	// if the hero "leaves" it's bounds of
	// screenWidth * 0.3(to both ends)
	// we will reposition the "world-container", so our hero
	// is allways visible
	if (direction === "right" && hero.velocity.x !== 0) {

		if (hero.x > width*0.3) {
			if (hero.x < 16960) {
				world.x = -hero.x + width*0.3;
			}
			//stijene most
			mostStijeneFar.x = 9900 + world.x*0.6;
			mostStijeneBack.x = 10800 + world.x*0.65;
			mostStijeneMid.x = 11500 + world.x*0.7;

			layer1TreesBack.x = world.x*0.15;
			layer1TreesBack_1.x = layer1TreesBack.x + 970;
			mostBackground.x = layer1TreesBack_1.x + 600;

			//landmarks
			landmark1.x = world.x*0.55 +5500;
			landmark2.x = world.x*0.55 +3780;
			landmark3.x = world.x*0.55 +8000;
			landmark4.x = world.x*0.55 +8550;
			landmark5.x = world.x*0.55 +7400;

			if (hero.x < 11500) {
				layer1TreesBack2.x = world.x*0.2;
				layer1TreesBack2_1.x = layer1TreesBack2.x + 970;

				layer3Godrays.x = world.x*0.2 % 970;
				layer3Godrays_1.x = layer3Godrays.x + 970;
				godraysHelp = -world.x*0.2+layer3Godrays.x;

				layer4TreesMid.x = world.x*0.5 % 970;
				layer4TreesMid_1.x = layer4TreesMid.x + 970;
				layer4TreesMidHelp = -world.x*0.5+layer4TreesMid.x;
			} else {
				layer3Godrays.x = godraysHelp + world.x*0.2;
				layer3Godrays_1.y = 1970;

				layer4TreesMid.x = layer4TreesMidHelp + world.x*0.5;
				layer4TreesMid_1.x = layer4TreesMid.x + 970;
				mostTreesMid.x = layer4TreesMid_1.x + 970;
			}

			if (hero.x < 15500) {
				layer6GroundBack.x = world.x % 990;
				layer6GroundBack_1.x = layer6GroundBack.x + 989;
				layer6GroundBackHelp = -world.x+layer6GroundBack.x;
			} else {
				layer6GroundBack.x = layer6GroundBackHelp + world.x;
				layer6GroundBack_1.x = layer6GroundBack.x + 989;
			}

			if (hero.x < 15000) {
				layer8GroundFront.x = world.x*1.1 % 970;
				layer8GroundFront_1.x = layer8GroundFront.x + 970;
				layer8GroundFrontHelp = -world.x*1.1+layer8GroundFront.x;
			} else {
				layer8GroundFront.x = layer8GroundFrontHelp + world.x*1.1;
				layer8GroundFront_1.x = layer8GroundFront.x + 970;
				mostGroundFront.x = layer8GroundFront_1.x + 570;
				mostStijeneFront.x = layer8GroundFront_1.x + 1540;
			}

			if (hero.x < 14500) {
				layer9TreesFront.x = world.x*1.2 % 970;
				layer9TreesFront_1.x = layer9TreesFront.x + 970;
				Layer9TreesFrontHelp = -world.x*1.2+layer9TreesFront.x;

				layer10Stuff.x = world.x*1.25 % 970;
				layer10Stuff_1.x = layer10Stuff.x + 970;
				layer10StuffHelp = -world.x*1.25+layer10Stuff.x;
			} else {
				layer9TreesFront.x = Layer9TreesFrontHelp + world.x*1.2;
				layer9TreesFront_1.x = layer9TreesFront.x + 970;
				mostTreesFront.x = layer9TreesFront_1.x + 1100;

				layer10Stuff.x = layer10StuffHelp + world.x*1.25;
				layer10Stuff_1.x = layer10Stuff.x + 970;
			}
		}

		//most logic
		if (hero.x > 15900 && hero.x < 16350) {
			if (hero.currentAnimation === "stop") {
				hero.velocity.y = -0.2;
			} else {
				hero.velocity.y = -1.5;
			}
		}
		if (hero.x > 16350 && hero.x < 17180) {
			if (hero.currentAnimation === "stop") {
				hero.velocity.y = -0.3;
			} else {
				hero.velocity.y = -2;
			}
			if (hero.y < 30) {
				hero.velocity.y = 0;
			}
		}
		if (hero.x > 17180) {
			if (hero.currentAnimation === "stop") {
				hero.velocity.y = -0.4;
			} else {
				hero.velocity.y = -0.7;
			}
			if (hero.y < -6) {
				hero.velocity.y = 0;
			}
		}
	}

	if (direction === "left" && hero.velocity.x !== 0) {
		if (hero.x > 433) {
			if (hero.x > width*0.3 && hero.x < 17106) {
				world.x = -hero.x + width*0.3 + 146;
			}
			//stijene most
			mostStijeneFar.x = 9900 + world.x*0.6;
			mostStijeneBack.x = 10800 + world.x*0.65;
			mostStijeneMid.x = 11500 + world.x*0.7;

			layer1TreesBack.x = world.x*0.15;
			layer1TreesBack_1.x = layer1TreesBack.x + 970;
			mostBackground.x = layer1TreesBack_1.x + 600;

			//landmarks
			landmark1.x = world.x*0.55 +5500;
			landmark2.x = world.x*0.55 +3780;
			landmark3.x = world.x*0.55 +8000;
			landmark4.x = world.x*0.55 +8550;
			landmark5.x = world.x*0.55 +7400;

			if (hero.x < 11500) {
				layer1TreesBack2.x = world.x*0.2;
				layer1TreesBack2_1.x = layer1TreesBack2.x + 970;

				layer3Godrays.x = world.x*0.2 % 970;
				layer3Godrays_1.x = layer3Godrays.x + 970;
				godraysHelp = -world.x*0.2+layer3Godrays.x;

				layer4TreesMid.x = world.x*0.5 % 970;
				layer4TreesMid_1.x = layer4TreesMid.x + 970;
				layer4TreesMidHelp = -world.x*0.5+layer4TreesMid.x;
			} else {
				layer3Godrays.x = godraysHelp + world.x*0.2;
				layer3Godrays_1.y = 1970;

				layer4TreesMid.x = layer4TreesMidHelp + world.x*0.5;
				layer4TreesMid_1.x = layer4TreesMid.x + 970;
				mostTreesMid.x = layer4TreesMid_1.x + 970;
			}

			if (hero.x < 15500) {
				layer6GroundBack.x = world.x % 990;
				layer6GroundBack_1.x = layer6GroundBack.x + 989;
				layer6GroundBackHelp = -world.x+layer6GroundBack.x;
			} else {
				layer6GroundBack.x = layer6GroundBackHelp + world.x;
				layer6GroundBack_1.x = layer6GroundBack.x + 989;
			}

			if (hero.x < 15000) {
				layer8GroundFront.x = world.x*1.1 % 970;
				layer8GroundFront_1.x = layer8GroundFront.x + 970;
				layer8GroundFrontHelp = -world.x*1.1+layer8GroundFront.x;
			} else {
				layer8GroundFront.x = layer8GroundFrontHelp + world.x*1.1;
				layer8GroundFront_1.x = layer8GroundFront.x + 970;
				mostGroundFront.x = layer8GroundFront_1.x + 570;
				mostStijeneFront.x = layer8GroundFront_1.x + 1540;
			}

			if (hero.x < 14500) {
				layer9TreesFront.x = world.x*1.2 % 970;
				layer9TreesFront_1.x = layer9TreesFront.x + 970;
				Layer9TreesFrontHelp = -world.x*1.2+layer9TreesFront.x;

				layer10Stuff.x = world.x*1.25 % 970;
				layer10Stuff_1.x = layer10Stuff.x + 970;
				layer10StuffHelp = -world.x*1.25+layer10Stuff.x;
			} else {
				layer9TreesFront.x = Layer9TreesFrontHelp + world.x*1.2;
				layer9TreesFront_1.x = layer9TreesFront.x + 970;
				mostTreesFront.x = layer9TreesFront_1.x + 1100;

				layer10Stuff.x = layer10StuffHelp + world.x*1.25;
				layer10Stuff_1.x = layer10Stuff.x + 970;
			}
		}

		//most logic
		if (hero.x-146 < 16350) {
			if (hero.currentAnimation === "stop") {
				hero.velocity.y = 0.2;
			} else {
				hero.velocity.y = 1.5;
			}
			if ( hero.y > 260) {
				hero.velocity.y = 0;
			}
		}
		if (hero.x-146 > 16350 && hero.x-146 < 17180) {
			if (hero.currentAnimation === "stop") {
				hero.velocity.y = 0.2;
			} else {
				hero.velocity.y = 2.1;
			}
		}
		if (hero.x-146 > 17180) {
			if (hero.currentAnimation === "stop") {
				hero.velocity.y = 0.2;
			} else {
				hero.velocity.y = 0.7;
			}
		}
		if (hero.x-146 > 17600) {
			hero.velocity.y = 0;
		}
	}

	//most lights
	if (stecak2.x > 17060 && stecak2.x < 17460 && stecak2.hover === false) {
			if (stecak2.light === true) {
				stecak2.y += 40;
				if (stecak2.y > 470) {
					lights2 = true;
					ciko.gotoAndPlay("birth");
					stecak2.x = 30000;
				}
			}
	}

	if (stecak.x > 17060 && stecak.x < 17460 && stecak.hover === false && stecak.dropping === true) {
		if (stecak.light === true) {
			stecak.y += 40;
			if (stecak.y > 470) {
				lights1 = true;
				spiral.gotoAndPlay("birth");
				stecak.x = 30000;
				}
			}
		}

	if (lights1 === true) {
		spiral.x = spiral.x + (Math.cos(ticks/5) * 0.2);
		spiral.y = spiral.y + (Math.sin(ticks/5) *  0.4);
	}
	if (lights2 === true) {
		ciko.x = ciko.x - (Math.cos(ticks/5) * 0.2);
		ciko.y = ciko.y - (Math.sin(ticks/5) *  0.4);
	}
	if (lights1 === true && lights2 === true) {
		if (mostGodrays.alpha > 1) {
			all_lights = true;
		}
		if (all_lights === false) {
			mostGodrays.alpha += 0.02;
			mostHighlights.alpha += 0.02;
			mostDark.alpha -= 0.02;
			layer11Vignette_1.alpha -= 0.02;
		} else {
			mostGodrays.alpha = 0.1 + (Math.cos(helperLight/(30))+1)/2;
			mostHighlights.alpha = mostGodrays.alpha;
			helperLight++;
		}
	}

	//ZOOM
	if (hero.x > 16250 && stageContainer.scaleX > 0.78 ) {
		stageContainer.scaleX -= 0.004;
		stageContainer.y += 1.9;
		stageContainer.scaleY -= 0.004;
	}
	if (hero.x < 16250 && stageContainer.scaleX < 1 ) {
		stageContainer.scaleX += 0.004;
		stageContainer.y -= 1.9;
		stageContainer.scaleY += 0.004;
	}

	//finish
	if (hero.x > 17810 && lights1 === true && lights2 === true) {
		square3.alpha += 0.1;
		if (square3.alpha > 0.95) {
			ending.alpha += 0.03;
		}
	}

	//fps label
	fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS())+" fps";

	stage.update();

}

//keydown handler
function handleKeyDown(e) {
	if(!e){ var e = window.event; }
	switch(e.keyCode) {
		case KEYCODE_LEFT:	lfHeld = true;  break;
		case KEYCODE_RIGHT: rtHeld = true; break;
		case KEYCODE_UP: bubble.handleBubble(jumpText[Math.random()*18 | 0]); break;
		case KEYCODE_SPACE: bubble.handleBubble(jumpText[Math.random()*18 | 0]); break;
		case KEYCODE_ENTER: bubble.handleBubble(jumpText[Math.random()*18 | 0]); break;
		case KEYCODE_A: bubble.handleBubble("            A?"); break;
		case KEYCODE_CTRL: if (stecak.hover === false && lights1 === false && stecak2.hover === false) {stecak.handleStecakUp();}
							else if (stecak.hover === true && stecak.currentAnimation !== "rip2" && stecak.currentAnimation !== "rip") {stecak.handleStecakDown();}
							if (stecak.hover === false && lights2 === false && stecak2.hover === false) {stecak2.handleStecakUp();}
							else if (stecak2.hover === true && stecak.currentAnimation !== "rip2" && stecak.currentAnimation !== "rip") {stecak2.handleStecakDown();} break;
		case KEYCODE_W: bubble.handleBubble("             W??"); break;
		case KEYCODE_B: bubble.handleBubble("           Ƹ̵̡Ӝ̵̨̄Ʒ"); break;
		case KEYCODE_DOT: bubble.handleBubble("         ♥ . ♥"); break;
		case KEYCODE_RSHIFT: bubble.handleBubble("       Right shift!\n   Or maybe left?"); break;
	}
}

//keyup handler
function handleKeyUp(e) {
	if(!e){ var e = window.event; }
	switch(e.keyCode) {
		case KEYCODE_LEFT:	lfHeld = false; keyDn=false; hero.handleStop(); break;
		case KEYCODE_RIGHT: rtHeld = false; keyDn=false; hero.handleStop(); break;
	}
}
