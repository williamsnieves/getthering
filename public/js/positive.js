var positiveState = {
	preload: function(){
		game.load.spritesheet('hero', 'assets/hero.png', 47, 40);
	},
	create: function(){
		var graphicOverlay = new Phaser.Graphics(game, 0 , 0);
		graphicOverlay.beginFill(0x000000, 0.7);
		graphicOverlay.drawRect(0,0, 720, 520);
		graphicOverlay.endFill();
		this.overlay = this.game.add.image(-10,-10,graphicOverlay.generateTexture());
		this.overlay.inputEnabled = true;

		this.heart = game.add.sprite(200, 100, 'heart');
		this.beatHeart = this.heart.animations.add('beat');

        this.heart.animations.play('beat', 2, true);

	}
}