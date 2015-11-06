var loadState = {

	 preload: function(){
	 	var loadText = game.add.text(game.world.centerX, 150, 'loading...', {font: '30px Arial', fill: '#ecf0f1'});

	 	loadText.anchor.setTo(0.5, 0.5);

	 	var progressBar = game.add.sprite(game.world.centerX, 200, "progressBar");

	 	progressBar.anchor.setTo(0.5, 0.5);
	 	game.load.setPreloadSprite(progressBar);

	 	game.load.image('clouds', 'assets/clouds.png');
	 	game.load.image('btnplay', 'assets/btnoption.png');
	 	game.load.image('chest', 'assets/chest.png');
	 	game.load.image('star','assets/star_particle.png');
	 	game.load.image('level1bg','assets/bglevel1big.png');
	 	game.load.image('floor','assets/floor.jpg');
	 	//game.load.image('hero','assets/hero.png');
	 	game.load.image('box','assets/box.png');
	 	/*game.load.image('balloon', 'assets/balloon.png');
	 	game.load.image('balloonbad', 'assets/balloonbad.png');
	 	game.load.image('heart', 'assets/heart.png');
	 	game.load.image('cats', 'assets/cats.gif');
	 	game.load.image('reload', 'assets/reload.png');

	 	game.load.image('scoreboard', 'assets/scoreboard.png');
	 	game.load.image('scoreboardwin', 'assets/scoreboardwin.png');
	 	game.load.audio('explode', 'assets/explode.mp3');
	 	game.load.audio('music', 'assets/music.ogg');*/
	 },

	 create: function(){
	 	if(!game.device.desktop){
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

			document.body.style.backgroundColor = '#3498db';

			game.scale.minWidth = 250;
			game.scale.minHeight = 170;
			game.scale.maxWidth = 1000;
			game.scale.maxHeight = 680;

			game.scale.pageAlignHorizontally = true;
			game.scale.pageAlignVertically = true;

			game.scale.setScreenSize(true)

		}

		game.state.start('menu');
	 }
}