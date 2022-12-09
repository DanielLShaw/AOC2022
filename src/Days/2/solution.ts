/**
 * Rock = 1
 * Paper = 2
 * Scissors = 3
 *
 * Loss = 0
 * Draw = 3
 * Win = 6
 *
 * Round Score = Shape I selected + Outcome
 *
 */

const SCORES = {
  win: 6,
  draw: 3,
  loss: 0,
};

const MOVE_NAMES = {
  rock: "ROCK",
  paper: "PAPER",
  scissors: "SCISSORS",
};

interface MoveType {
  name: string;
  score: number;
  beats: string;
  lose: string;
}

interface RPSType {
  [key: string]: MoveType;
}
const RPS: RPSType = {
  [MOVE_NAMES.rock]: {
    name: MOVE_NAMES.rock,
    score: 1,
    beats: MOVE_NAMES.scissors,
    lose: MOVE_NAMES.paper,
  },
  [MOVE_NAMES.paper]: {
    name: MOVE_NAMES.paper,
    score: 2,
    beats: MOVE_NAMES.rock,
    lose: MOVE_NAMES.scissors,
  },
  [MOVE_NAMES.scissors]: {
    name: MOVE_NAMES.scissors,
    score: 3,
    beats: MOVE_NAMES.paper,
    lose: MOVE_NAMES.rock,
  },
};

interface RulesType {
  [key: string]: MoveType;
}

const THEIR_RULES: RulesType = {
  A: RPS[MOVE_NAMES.rock],
  B: RPS[MOVE_NAMES.paper],
  C: RPS[MOVE_NAMES.scissors],
};

const MY_RULES: RulesType = {
  X: RPS[MOVE_NAMES.rock],
  Y: RPS[MOVE_NAMES.paper],
  Z: RPS[MOVE_NAMES.scissors],
};

const OUTCOMES = {
  loss: "X",
  draw: "Y",
  win: "Z",
};

export function processInput(input: string): string[] {
  const list = input.split(/[\r\n]/);
  return list;
}

export function playRPS(me: string, opponent: string) {
  const { score: myScore, beats: myBeat, name: myMove } = MY_RULES?.[me] ?? {};
  const { beats: theirBeat, name: theirMove } = THEIR_RULES?.[opponent] ?? {};

  let roundScore = myScore;
  if (myBeat === theirMove) {
    roundScore += SCORES.win;
  } else if (theirBeat === myMove) {
    roundScore += SCORES.loss;
  } else {
    roundScore += SCORES.draw;
  }

  return roundScore;
}

export function playRPSTournament(moveList: string[]) {
  const scoreList = moveList.map((move) => {
    const [opponent, suggestion] = move.split(" ");
    const score = playRPS(suggestion, opponent);
    return score;
  });

  const totalScore = scoreList.reduce((cur, acc) => (acc += cur));

  return totalScore;
}

export function cheatAtRPS(outcome: string, opponent: string) {
  const { beats, name, lose } = THEIR_RULES?.[opponent] ?? {};

  // x = lose | y = draw | z = win

  let myMove;
  let outcomeScore;

  if (outcome === OUTCOMES.loss) {
    myMove = beats;
    outcomeScore = SCORES.loss;
  } else if (outcome === OUTCOMES.draw) {
    myMove = name;
    outcomeScore = SCORES.draw;
  } else if (outcome === OUTCOMES.win) {
    myMove = lose;
    outcomeScore = SCORES.win;
  } else {
    console.error("invalid outcome", outcome);
    return 0;
  }

  const { score: moveScore } = RPS[myMove];

  return outcomeScore + moveScore;
}

export function cheatAtRPSTournement(moveList: string[]) {
  const scoreList = moveList.map((move) => {
    const [opponent, outcome] = move.split(" ");
    const score = cheatAtRPS(outcome, opponent);
    return score;
  });

  const totalScore = scoreList.reduce((cur, acc) => (acc += cur));

  return totalScore;
}
