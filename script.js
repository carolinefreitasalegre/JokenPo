let drawn;
let pointMachine = 0;
let pointPerson = 0;
let pointTie = 0;

function drawRandom() {
  let playedMachine = document.getElementById("playedMachine");

  let options = ["pedra", "papel", "tesoura"];

  drawn = options[Math.floor(Math.random() * options.length)];

  playedMachine.innerHTML = drawn;
  console.log(playedMachine + "cdcadc");
}

function choiceHuman(option) {
  let playedPerson = document.getElementById("playedPerson");

  let human = document.getElementById("human");
  let machine = document.getElementById("machine");
  let tie = document.getElementById("tie");

  playedPerson.innerHTML = option;
  drawRandom();

  console.log("peaple: " + option);

  if (drawn === option) {
    pointTie++;
    console.log(pointTie);
    tie.innerText = pointTie;
  } else if (drawn === "pedra" && option === "tesoura") {
    pointMachine++;
    machine.innerText = pointMachine;

    console.log("maquina ganhou" + pointMachine);
  } else if (drawn === "tesoura" && option === "papel") {
    pointMachine++;
    machine.innerText = pointMachine;

    console.log("maquina ganhou" + pointMachine);
  } else if (drawn === "papel" && option === "pedra") {
    pointMachine++;
    machine.innerText = pointMachine;

    console.log("maquina ganhou" + pointMachine);
  } else {
    pointPerson++;
    console.log("peaple ganhou!!!" + pointPerson);
    human.innerText = pointPerson;
  }
}
