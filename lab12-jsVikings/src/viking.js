// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }
    battleCry(){
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        const randomIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxon = this.saxonArmy[randomIndex];
        const viking = this.vikingArmy[randomIndex];

        const attack = saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0){
            this.saxonArmy.splice(randomIndex,1);
        }
        return attack;
    }
    saxonAttack(){
        const randomIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const saxon = this.saxonArmy[randomIndex];
        const viking = this.vikingArmy[randomIndex];

        const attack = viking.receiveDamage(saxon.strength);
        if (viking.health <= 0){
            this.vikingArmy.splice(randomIndex,1);
        }
        return attack;
    }

    // soldierAttack(soldier){
    //     const randomIndex = Math.floor(Math.random() * this.vikingArmy.length);
    //     let attacker, ennemy, ennemyArmy;
    //     if (soldier === "viking"){
    //         attacker = this.vikingArmy[randomIndex];
    //         ennemy = this.saxonArmy[randomIndex];
    //         ennemyArmy = this.saxonArmy;
    //     }else{
    //         attacker = this.saxonArmy[randomIndex];
    //         ennemy = this.vikingArmy[randomIndex];
    //         ennemyArmy = this.vikingArmy;
    //     }
    //     const attack = ennemy.receiveDamage(attacker.strength);
    //     if (ennemy.health <= 0){
    //         ennemyArmy.splice(randomIndex,1);
    //     }
    //     return attack;
    // }
    showStatus(){
        if(this.saxonArmy.length <= 0){
            return 'Vikings have won the war of the century!';
        }else if(this.vikingArmy.length <= 0){
            return 'Saxons have fought for their lives and survived another day...';
        }else{
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}



