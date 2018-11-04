import "phaser";

var config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    physics: {
        default: "matter",
        matter: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: "rgba(144,255,248,0.5)"
};

var game = new Phaser.Game(config);
var logo;
var usersCar;
var barrier__stable;
var directions;
var grass;
var landscape;

function preload ()
{
    this.load.image("logo", "assets/logo.png");
    this.load.image("barrier__stable", "assets/Objects/rock2.png");
    this.load.image("usersCar", "assets/Cars/car_blue_1.png");
    this.load.image("grass", "assets/Tiles/Grass/land_grass04.png");
}

function create ()
{
    /* Травянной фон на поле */
    var landscape = [
        this.add.image(0, 0, "grass").setOrigin(0, 0),
        this.add.image(128, 0, "grass").setOrigin(0, 0),
        this.add.image(256, 0, "grass").setOrigin(0, 0),
        this.add.image(384, 0, "grass").setOrigin(0, 0),
        this.add.image(512, 0, "grass").setOrigin(0, 0),
        this.add.image(640, 0, "grass").setOrigin(0, 0),
        this.add.image(768, 0, "grass").setOrigin(0, 0),
        this.add.image(0, 128, "grass").setOrigin(0, 0),
        this.add.image(128, 128, "grass").setOrigin(0, 0),
        this.add.image(256, 128, "grass").setOrigin(0, 0),
        this.add.image(384, 128, "grass").setOrigin(0, 0),
        this.add.image(512, 128, "grass").setOrigin(0, 0),
        this.add.image(640, 128, "grass").setOrigin(0, 0),
        this.add.image(768, 128, "grass").setOrigin(0, 0),
        this.add.image(0, 256, "grass").setOrigin(0, 0),
        this.add.image(128, 256, "grass").setOrigin(0, 0),
        this.add.image(256, 256, "grass").setOrigin(0, 0),
        this.add.image(384, 256, "grass").setOrigin(0, 0),
        this.add.image(512, 256, "grass").setOrigin(0, 0),
        this.add.image(640, 256, "grass").setOrigin(0, 0),
        this.add.image(768, 256, "grass").setOrigin(0, 0),
        this.add.image(0, 384, "grass").setOrigin(0, 0),
        this.add.image(128, 384, "grass").setOrigin(0, 0),
        this.add.image(256, 384, "grass").setOrigin(0, 0),
        this.add.image(384, 384, "grass").setOrigin(0, 0),
        this.add.image(512, 384, "grass").setOrigin(0, 0),
        this.add.image(640, 384, "grass").setOrigin(0, 0),
        this.add.image(768, 384, "grass").setOrigin(0, 0),
        this.add.image(0, 512, "grass").setOrigin(0, 0),
        this.add.image(128, 512, "grass").setOrigin(0, 0),
        this.add.image(256, 512, "grass").setOrigin(0, 0),
        this.add.image(384, 512, "grass").setOrigin(0, 0),
        this.add.image(512, 512, "grass").setOrigin(0, 0),
        this.add.image(640, 512, "grass").setOrigin(0, 0),
        this.add.image(768, 512, "grass").setOrigin(0, 0)
    ];
    
    /* Машинка пользователя */
    this.matter.world.setBounds(0, 0, 800, 600);
    usersCar = this.matter.add.image(400, 300, "usersCar").setScale(.5);
    usersCar.setFrictionAir(0.15);
    usersCar.setMass(30);
    directions = this.input.keyboard.createCursorKeys();

    /* Анимированный логотипчик из стандартного бандла */
    var logo = this.add.image(700, 500, "logo").setScale(.2);

    this.tweens.add({
        targets: logo,
        y: 550,
        duration: 2000,
        ease: "Power2",
        yoyo: true,
        loop: -1
    });
}

function update ()
{
    /* Движение машинки игрока */
    if (directions.up.isDown)
    {
        usersCar.thrust(0.08);
    }
    if (directions.down.isDown)
    {
        usersCar.thrust(-0.04);
    }

    /* Повороты машинки игрока */
    if (directions.left.isDown)
    {
        (directions.up.isDown || directions.down.isDown ? usersCar.setAngularVelocity(-0.07) : null)
    }
    if (directions.right.isDown)
    {
        (directions.up.isDown || directions.down.isDown ? usersCar.setAngularVelocity(0.07) : null)
    }
}
