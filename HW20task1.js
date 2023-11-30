const up = function () {
    this.step++
     return this
    
}

const down = function () {
    this.step--
    return this;
};
 
const showStep = function () { // показывает текущую ступеньку
    alert(this.step)
      return  this;
    }

let ladder = {
    step: 0,
    up: up,
    down: down,
    showStep: showStep
};
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep()

ladder.up().up().down().showStep();