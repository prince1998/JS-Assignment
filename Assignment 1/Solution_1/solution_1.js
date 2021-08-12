const battles = require("./battles");

const attackerKing = battles.map((value) => value.attacker_king);
const defenderKing = battles.map((value) => value.defender_king);
const region = battles.map((value) => value.region);
const name = battles.map((value) => value.name);

const maxValue = (arr) =>
  arr.reduce((prv, cur, i, arr) =>
    arr.filter((value) => value === prv).length >
    arr.filter((value) => value === cur).length
      ? prv
      : cur
  );

const win = battles.filter((value) => value.attacker_outcome == "win").length;
const loss = battles.filter((value) => value.attacker_outcome == "loss").length;

const battleType = battles.map((value) => value.battle_type);
const defenderSize = battles
  .map((value) => value.defender_size)
  .filter((value) => value != null);

var min = Math.min(...defenderSize),
  max = Math.max(...defenderSize);

const sum = defenderSize.reduce((a, b) => a + b, 0);
const avg = sum / defenderSize.length;

const result = {
  most_active: {
    attacker_king: maxValue(attackerKing),
    defender_king: maxValue(defenderKing),
    region: maxValue(region),
    name: maxValue(name),
  },

  attacker_outcome: {
    win: win,
    loss: loss,
  },

  battle_type: [...new Set(battleType)],
  defender_size: {
    average: avg,
    min: min,
    max: max,
  },
};

console.log(result);
