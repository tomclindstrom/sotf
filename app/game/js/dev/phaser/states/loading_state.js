"use strict";

var LoadingState = function(_game) {
	Phaser.State.call(this, _game);
	_game.state.add("Loading", this, false);
};

LoadingState.prototype = Object.create(Phaser.State.prototype);
LoadingState.prototype.constructor = LoadingState;

LoadingState.prototype.preload = function() {

	var loadingSpr = this.game.add.sprite(this.game.width-10,this.game.height -5,"loading");
	loadingSpr.animations.add("load", [ 0, 1 ]);
	loadingSpr.animations.play('load', 5, true);
	loadingSpr.anchor.setTo(1,1);

	this.game.load.image("start_bg", "assets/images/teeth_big.png");
	this.game.load.image("tuto", "assets/images/tuto.png");
	this.game.load.spritesheet("play", "assets/images/play.png",128,64,2);
	this.game.load.image("bg", "assets/images/background.png");

	this.game.load.spritesheet("shark","assets/images/shark.png",74,64,2);
	this.game.load.image("tooth","assets/images/tooth.png");
	this.game.load.image("tooth_grey","assets/images/tooth_grey.png");
	this.game.load.spritesheet("ship","assets/images/ship.png",115,115,4);
	this.game.load.spritesheet("touky","assets/images/bird1.png",48,48,3);
	this.game.load.image("grip","assets/images/grip.png");
	this.game.load.image("wave","assets/images/wave.png");
	this.game.load.image("feather","assets/images/feather.png");

	//sounds
	this.game.load.audio('bite',"assets/sounds/bite.wav");
	this.game.load.audio('bump',"assets/sounds/bump.ogg");
	this.game.load.audio('sea',"assets/sounds/seashore.mp3");
}

LoadingState.prototype.create = function() {
	this.game.state.start("Landing");
}

LoadingState.prototype.update = function() {
}

LoadingState.prototype.render = function() {
}
