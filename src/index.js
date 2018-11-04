import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
    this.load.image('grass', 'assets/Tiles/Grass/land_grass04.png');
}

function create ()
{
    /* создаю травянной фон на поле */
    var landscape = [
        this.add.image(0, 0, 'grass').setOrigin(0, 0),
        this.add.image(128, 0, 'grass').setOrigin(0, 0),
        this.add.image(256, 0, 'grass').setOrigin(0, 0),
        this.add.image(384, 0, 'grass').setOrigin(0, 0),
        this.add.image(512, 0, 'grass').setOrigin(0, 0),
        this.add.image(640, 0, 'grass').setOrigin(0, 0),
        this.add.image(768, 0, 'grass').setOrigin(0, 0),
        this.add.image(0, 128, 'grass').setOrigin(0, 0),
        this.add.image(128, 128, 'grass').setOrigin(0, 0),
        this.add.image(256, 128, 'grass').setOrigin(0, 0),
        this.add.image(384, 128, 'grass').setOrigin(0, 0),
        this.add.image(512, 128, 'grass').setOrigin(0, 0),
        this.add.image(640, 128, 'grass').setOrigin(0, 0),
        this.add.image(768, 128, 'grass').setOrigin(0, 0),
        this.add.image(0, 256, 'grass').setOrigin(0, 0),
        this.add.image(128, 256, 'grass').setOrigin(0, 0),
        this.add.image(256, 256, 'grass').setOrigin(0, 0),
        this.add.image(384, 256, 'grass').setOrigin(0, 0),
        this.add.image(512, 256, 'grass').setOrigin(0, 0),
        this.add.image(640, 256, 'grass').setOrigin(0, 0),
        this.add.image(768, 256, 'grass').setOrigin(0, 0),
        this.add.image(0, 384, 'grass').setOrigin(0, 0),
        this.add.image(128, 384, 'grass').setOrigin(0, 0),
        this.add.image(256, 384, 'grass').setOrigin(0, 0),
        this.add.image(384, 384, 'grass').setOrigin(0, 0),
        this.add.image(512, 384, 'grass').setOrigin(0, 0),
        this.add.image(640, 384, 'grass').setOrigin(0, 0),
        this.add.image(768, 384, 'grass').setOrigin(0, 0),
        this.add.image(0, 512, 'grass').setOrigin(0, 0),
        this.add.image(128, 512, 'grass').setOrigin(0, 0),
        this.add.image(256, 512, 'grass').setOrigin(0, 0),
        this.add.image(384, 512, 'grass').setOrigin(0, 0),
        this.add.image(512, 512, 'grass').setOrigin(0, 0),
        this.add.image(640, 512, 'grass').setOrigin(0, 0),
        this.add.image(768, 512, 'grass').setOrigin(0, 0),
    ];

    var logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}
