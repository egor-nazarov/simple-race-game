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
var landscape;
var grass;
var usersCar;
var directions;
var currentDate = new Date().getTime();
var raceStartTime;

function preload ()
{
    this.load.image("usersCar", "assets/Cars/car_blue_1.png");
    this.load.image("grass", "assets/Tiles/Grass/land_grass04.png");
    this.load.image("route__start", "assets/Tiles/Asphalt road/road_asphalt43.png");
    this.load.image("route__car-position", "assets/Tiles/Asphalt road/road_asphalt80.png");
    this.load.image("route__path_right", "assets/Tiles/Asphalt road/road_asphalt03.png");
    this.load.image("route__path_bottom", "assets/Tiles/Asphalt road/road_asphalt05.png");
    this.load.image("route__path_left", "assets/Tiles/Asphalt road/road_asphalt41.png");
    this.load.image("route__path_top", "assets/Tiles/Asphalt road/road_asphalt39.png");
    this.load.image("route__path_straight-horizontal", "assets/Tiles/Asphalt road/road_asphalt02.png");
    this.load.image("route__path_straight-vertical", "assets/Tiles/Asphalt road/road_asphalt01.png");
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

    /* Трасса */
    var route__path = this.add.container(50, 20).setScale(.9);
    var route__path_1 = this.add.sprite(3, 0, 'route__path_right').setOrigin(0, 0);
    var route__path_2 = this.add.sprite(128, 0, 'route__car-position').setOrigin(0, 0);
    var route__path_3 = this.add.sprite(256, 0, 'route__car-position').setOrigin(0, 0);
    var route__path_4 = this.add.sprite(384, 0, 'route__start').setOrigin(0, 0);
    var route__path_5 = this.add.sprite(512, 0, 'route__path_straight-horizontal').setOrigin(0, 0);
    var route__path_6 = this.add.sprite(640, 0, 'route__path_bottom').setOrigin(0, 0);
    var route__path_7 = this.add.sprite(640, 127, 'route__path_straight-vertical').setOrigin(0, 0);
    var route__path_8 = this.add.sprite(640, 254, 'route__path_left').setOrigin(0, 0);
    var route__path_9 = this.add.sprite(512, 254, 'route__path_straight-horizontal').setOrigin(0, 0);
    var route__path_10 = this.add.sprite(385, 254, 'route__path_top').setOrigin(0, 0);
    var route__path_11 = this.add.sprite(385, 127, 'route__path_bottom').setOrigin(0, 0);
    var route__path_12 = this.add.sprite(258, 127, 'route__path_straight-horizontal').setOrigin(0, 0);
    var route__path_13 = this.add.sprite(131, 127, 'route__path_right').setOrigin(0, 0);
    var route__path_14 = this.add.sprite(131, 254, 'route__path_straight-vertical').setOrigin(0, 0);
    var route__path_15 = this.add.sprite(131, 381, 'route__path_top').setOrigin(0, 0);
    var route__path_16 = this.add.sprite(259, 381, 'route__path_straight-horizontal').setOrigin(0, 0);
    var route__path_17 = this.add.sprite(386, 381, 'route__path_bottom').setOrigin(0, 0);
    var route__path_18 = this.add.sprite(386, 509, 'route__path_left').setOrigin(0, 0);
    var route__path_19 = this.add.sprite(259, 509, 'route__path_straight-horizontal').setOrigin(0, 0);
    var route__path_20 = this.add.sprite(131, 509, 'route__path_straight-horizontal').setOrigin(0, 0);
    var route__path_21 = this.add.sprite(3, 509, 'route__path_top').setOrigin(0, 0);
    var route__path_22 = this.add.sprite(3, 381, 'route__path_straight-vertical').setOrigin(0, 0);
    var route__path_23 = this.add.sprite(3, 253, 'route__path_straight-vertical').setOrigin(0, 0);
    var route__path_24 = this.add.sprite(3, 125, 'route__path_straight-vertical').setOrigin(0, 0);

    /* Обьединение кусочков трассы */
    route__path.add([ route__path_1, route__path_2, route__path_3, route__path_4, route__path_5, route__path_6, route__path_7, route__path_8, route__path_9, route__path_10, route__path_11, route__path_12, route__path_13, route__path_14, route__path_15, route__path_16, route__path_17, route__path_18, route__path_19, route__path_20, route__path_21, route__path_22, route__path_23, route__path_24 ]);

    /* Машинка пользователя */
    this.matter.world.setBounds(0, 0, 800, 600);
    usersCar = this.matter.add.image(335, 78, "usersCar").setScale(.4);
    usersCar.setFrictionAir(0.15);
    usersCar.setMass(30);
    directions = this.input.keyboard.createCursorKeys();

    /* Подсчет времени поездки */
    raceStartTime = this.add.text(530, 400, 'Время: 0:00.000', { font: '30px Arial', fill: '#30fff8' });
}

function update ()
{
    /* Выводим текущее время */
    var minutes = Math.floor((currentDate % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((currentDate % (1000 * 60)) / 1000);
    if(seconds < 10){
        seconds = '0'+seconds;
    }
    var tenthSeconds = new Date().getMilliseconds();
    if(tenthSeconds < 100){
        tenthSeconds = '0'+tenthSeconds;
    }
    raceStartTime.setText('Время: ' + minutes + ':' + seconds + '.' + tenthSeconds);

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
