var level1State = {
	preload: function(){
		game.load.spritesheet('hero', 'assets/hero.png', 47, 40);
	},
	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.bg = game.add.sprite(0, 0, "level1bg");

		this.floor = game.add.sprite(0, 378, "floor");

		this.box1 = game.add.sprite(300, 300, "box");
		this.box1.scale.setTo(0.8, 0.8);

		this.box2 = game.add.sprite(200, 350, "box");
		this.box2.scale.setTo(0.8, 0.8);

		this.hero = game.add.sprite(100,300, 'hero');
		this.hero.scale.setTo(1.2, 1.2);
		//console.log(this.hero);
		//this.hero.animations.add('left', [0, 1, 2, 3], 10, true);
		this.hero.frame = 4;

		game.physics.arcade.enableBody(this.floor);

	    this.floor.body.allowGravity = false;
	    this.floor.body.immovable = true;


	    game.physics.arcade.enableBody(this.box2);

	    this.box2.body.allowGravity = false;
	    this.box2.body.immovable = true;

	    game.physics.arcade.enableBody(this.box1);

	    this.box1.body.allowGravity = false;
	    this.box1.body.immovable = true;


	    this.game.physics.arcade.enable(this.hero);

	    this.hero.body.bounce.y = 0.2;

	    this.hero.body.gravity.y = 400;

      	this.hero.body.collideWorldBounds = true;
	    game.physics.enable(this.hero);
		this.hero.body.allowGravity = true;
		this.moveLeft = false;
		this.moveRight = false;
		//add cursors
		this.cursors = this.game.input.keyboard.createCursorKeys();
		

	},

	update: function(){
		game.physics.arcade.collide(this.hero, this.floor);
		game.physics.arcade.collide(this.hero, this.box1);
		game.physics.arcade.collide(this.hero, this.box2);
		this.movePlayer();
	},

	movePlayer: function(){
		this.hero.body.velocity.x = 0;
		if(this.cursors.left.isDown || this.moveLeft){
            this.hero.body.velocity.x = -150;
            //this.player.animations.play('left');
          }
          else if(this.cursors.right.isDown || this.moveRight){
            this.hero.body.velocity.x = 150;
            //this.player.animations.play('right');
          }
          else{
            //this.player.animations.stop();
            this.hero.frame = 4;
          }

          if(this.cursors.up.isDown && this.hero.body.touching.down){
            this.hero.body.velocity.y = -250;
          }
	}
}