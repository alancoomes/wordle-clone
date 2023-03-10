import wordleBank from "./assets/wordle-bank.txt";
import validGuesses from "./assets/valid-guesses.txt";

export const COLORS = {
  white: "0deg 0% 100%",
  black: "0deg 0% 0%",
  gray: {
    300: "0deg 0% 61%",
    500: "240deg 5% 15%",
    700: "0deg 0% 12%",
    900: "240deg 3% 7%",
  },
  primary: "126deg 26% 45%",
  secondary: "54deg 70% 40%",
};

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordle = async () => {
  let wordSet;

  await fetch(wordleBank)
    .then((response) => response.text())
    .then((result) => {
      let wordArr = result.split("\n");
      wordSet = new Set(wordArr);
    });
  return { wordSet };
};

export const generateWordSet = async () => {
  let guessSet;

  await fetch(validGuesses)
    .then((response) => response.text())
    .then((result) => {
      let wordArr = result.split("\n");
      guessSet = new Set(wordArr);
    });
  return { guessSet };
};
