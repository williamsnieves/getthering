var level1State = {
	preload: function(){
		game.load.spritesheet('hero', 'assets/hero.png', 47, 40);
	},
	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);



		this.bg = game.add.sprite(0, 0, "level1bg");

		this.floor = game.add.sprite(0, 1900, "floor");
		this.chest = game.add.sprite(550, 0, "chest");
		this.chest.scale.setTo(0.1, 0.1);


		game.physics.arcade.enableBody(this.chest);
		this.chest.body.allowGravity = true;
		this.chest.body.bounce.y = 0.2;

	    this.chest.body.gravity.y = 400;
		


		game.world.setBounds(0, 0, 640, 2000);
		/*this.box1 = game.add.sprite(300, 300, "box");
		this.box1.scale.setTo(0.8, 0.8);

		this.box2 = game.add.sprite(200, 350, "box");
		this.box2.scale.setTo(0.8, 0.8);*/

		this.hero = game.add.sprite(500,300, 'hero');
		this.hero.scale.setTo(1.2, 1.2);
		//console.log(this.hero);
		//this.hero.animations.add('left', [0, 1, 2, 3], 10, true);
		this.hero.frame = 4;

		game.physics.arcade.enableBody(this.floor);

	    this.floor.body.allowGravity = false;
	    this.floor.body.immovable = true;


	    /*game.physics.arcade.enableBody(this.box2);

	    this.box2.body.allowGravity = false;
	    this.box2.body.immovable = true;

	    game.physics.arcade.enableBody(this.box1);

	    this.box1.body.allowGravity = false;
	    this.box1.body.immovable = true;*/




	    this.boxes = game.add.physicsGroup();
	    //this.boxes.body.immovable = true;
	    this.initialHeight = 1920;
	    
	    //game.physics.arcade.enableBody(this.boxes);

	    for(var i=0; i<22; i++){
	    	this.initialHeight -= 80;
	    	console.log(this.initialHeight);
	    	this.boxes.create(100 + (i*20), this.initialHeight, 'box');
	    }

	    this.boxes.forEach(function(box){
	    	box.body.immovable = true;
	    	//box.body.gravity.y = 2;
	    	//box.body.allowGravity = true;
	    	//box.body.mass = 100;
	    	//box.body.gravity.x = 0;

	    })


	    this.game.physics.arcade.enable(this.hero);

	    this.hero.body.bounce.y = 0.2;

	    this.hero.body.gravity.y = 400;

      	//this.hero.body.collideWorldBounds = true;
	    game.physics.enable(this.hero);
		this.hero.body.allowGravity = true;
		this.moveLeft = false;
		this.moveRight = false;
		//add cursors
		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		game.camera.follow(this.hero);

		this.emitter = this.game.add.emitter(this.chest.position.x - 500 , this.chest.position.y + 30, 200);

        this.emitter.makeParticles('star');
        this.emitter.scale.setTo(2.5, 2.5);
        this.emitter.start(false, 1000, 50);
        this.chest.addChild(this.emitter);

	},

	update: function(){
		game.physics.arcade.collide(this.hero, this.floor);
		game.physics.arcade.collide(this.hero, this.boxes);
		game.physics.arcade.collide(this.chest, this.boxes);
		game.physics.arcade.overlap(this.chest, this.hero, this.showRing, null, this);
		this.movePlayer();
	},

	showRing: function(){
		console.log(this.chest);
		this.chest.destroy();
		this.emitter.on = false;
		this.showMessage();
	},

	showMessage: function(){
		
		var graphicOverlay = new Phaser.Graphics(game, 0 , 0);
		graphicOverlay.beginFill(0x000000, 0.7);
		graphicOverlay.drawRect(0,0, 720, 520);
		graphicOverlay.endFill();
		this.overlay = this.game.add.image(-10,-10,graphicOverlay.generateTexture());
		this.overlay.inputEnabled = true;
		this.ring = game.add.sprite(300, 150, 'ring');

		this.emitter = this.game.add.emitter(this.ring.position.x + 50, this.ring.position.y , 200);
		this.emitter.makeParticles('smallheart');
        //this.emitter.scale.setTo(2.5, 2.5);
        this.emitter.start(false, 1000, 50);
        //this.chest.addChild(this.emitter);


        this.yesBtn = game.add.button(game.world.centerX - 50, 350, "yes", this.showPositiveAnim,this);
		this.yesBtn.anchor.setTo(0.5, 0.5);
		this.yesBtn.scale.setTo(0.5, 0.5);

		this.noBtn = game.add.button(game.world.centerX + 150, 350, "no", this.showNegativeAnim,this);
		this.noBtn.anchor.setTo(0.5, 0.5);
		this.noBtn.scale.setTo(0.5, 0.5);

		this.titleGame = game.add.text(150 , 50, 'Will you marry me?', {font : '48px Parisienne', fill: '#FEF160', stroke: '#000', strokeThickness: 4});
		this.hero.destroy();



	},

	showPositiveAnim: function(){
		game.state.start('positive');
	},

	showNegativeAnim: function(){
		game.state.start('negative');
	},

	movePlayer: function(){
		if(!this.hero.alive){
			return;
		}else{
			this.hero.body.velocity.x = 0;	
		}
		
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
            this.hero.body.velocity.y = -270;
          }
	}
}