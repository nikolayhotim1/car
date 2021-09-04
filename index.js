'usestrict';
let chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021,
    maxSpeed: 193,
    horsesPower: 283,
    engineCapacity: 4.636,
    turnOn: true,
    bodyType: 'sedan',
    started: false,

    start: function () {
        this.started = true;
    },

    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            alert('Zoom zoom!');
        } else {
            alert('You need to start the engine first.');
        }
    }
};

var cadi = {
    make: 'GM',
    model: 'Cadillac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,

    start: function () {
        this.started = true;
    },

    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            alert('Zoom zoom!');
        } else {
            alert('You need to start the engine first.');
        }
    }
};

chevy.drive();
chevy.start();
chevy.drive();
chevy.stop();

cadi.drive();
cadi.start();
cadi.drive();
cadi.stop();