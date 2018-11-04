import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};
/* обьявления переменных */
var game;
var logo;
var landscape;
var barrier;
var player;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
    this.load.image('grass', 'assets/Tiles/Grass/land_grass04.png');
    this.load.image('barrier', 'assets/Objects/barrier_white_race.png');
    this.load.image('playersCar', 'assets/Cars/car_blue_1.png');
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
        this.add.image(768, 512, 'grass').setOrigin(0, 0)
    ];

    /* создаю преграды на поле для того чтобы машина влеплялась и не вылетала за пределы дороги */
    var barrier = this.physics.add.staticGroup();
    barrier.create(140, 400, 'barrier').setScale(.5).refreshBody();
    barrier.create(240, 400, 'barrier').setScale(.5).refreshBody();
    barrier.create(340, 400, 'barrier').setScale(.5).refreshBody();
    barrier.create(440, 400, 'barrier').setScale(.5).refreshBody();
    barrier.create(540, 400, 'barrier').setScale(.5).refreshBody();
    barrier.create(640, 400, 'barrier').setScale(.5).refreshBody();

    /* создаю машинку и возможность отталкиваться от края карты с определенной силой */
    player = this.physics.add.image(100, 200, 'playersCar');
    player.setBounce(0.5);
    player.setCollideWorldBounds(true);

    /* анимированный логотипчик из стандартного бандла */
    var logo = this.add.image(700, 500, 'logo').setScale(.2);

    this.tweens.add({
        targets: logo,
        y: 550,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}
