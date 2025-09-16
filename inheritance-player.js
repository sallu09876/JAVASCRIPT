// class player inherits from club
class Club {
    constructor(name, country, UCL) {
        this.name = name;
        this.country = country;
        this.UCL = UCL;
    }
}

class Player extends Club {
    constructor(name, country, UCL, position) {
        super(name, country, UCL);
        this.position = position;
    }
}
const player = new Player("Barcelona", "Spain", 4, "Forward");
console.log(player.name);
console.log(player.position);
console.log(player.UCL);