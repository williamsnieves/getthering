var menuState = {
	preload: function(){

	},
	create: function(){
		this.bg = game.add.sprite(0, 0, "clouds");

		this.titleGame = game.add.text(game.world.centerX / 2 - 40, game.world.centerY / 2, 'Get The Ring', {font : '48px Shojumaru', fill: '#FEF160', stroke: '#000', strokeThickness: 4});
		//this.titleGame.scale.setTo(0.5, 0.5);
		this.chest = game.add.sprite(game.world.centerX, 250, "chest");
		this.chest.anchor.setTo(0.5, 0.5);
		this.chest.scale.setTo(0.5, 0.5);
		this.btn_play = game.add.button(game.world.centerX, 350, "btnplay", this.startGame,this);
		this.btn_play.anchor.setTo(0.5, 0.5);
		this.btn_play.scale.setTo(0.5, 0.5);

		this.emitter = this.game.add.emitter(this.chest.position.x , this.chest.position.y  + 10 , 200);

        this.emitter.makeParticles('star');

        this.emitter.start(false, 1000, 50);

	},

	startGame: function(){
		game.state.start("level1");
	}
}