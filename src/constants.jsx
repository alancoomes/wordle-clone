import wordleBank from "./assets/wordle-bank.txt";

export const COLORS = {
  white: "0deg 0% 100%",
  black: "0deg 0% 0%",
  gray: {
    300: "0deg 0% 61%",
    500: "240deg 5% 15%",
    700: "0deg 0% 12%",
    900: "0deg 0% 10%",
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

export const generateWordSet = async () => {
  let wordSet;

  await fetch(wordleBank)
    .then((response) => response.text())
    .then((result) => {
      let wordArr = result.split("\n");
      wordSet = new Set(wordArr);
    });
  return { wordSet };
};
