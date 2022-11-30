const vowels = [
  "AA",
  "AE",
  "AH",
  "AO",
  "AW",
  "AY",
  "EH",
  "ER",
  "EY",
  "IH",
  "IY",
  "OW",
  "OY",
  "UH",
  "UW",
];
const consonants = [
  "B",
  "CH",
  "D",
  "DH",
  "F",
  "G",
  "HH",
  "JH",
  "K",
  "L",
  "M",
  "N",
  "NG",
  "P",
  "R",
  "S",
  "SH",
  "T",
  "TH",
  "V",
  "W",
  "Y",
  "Z",
  "ZH",
];

const vowelColors = [
  "#580000",
  "#792205",
  "#af5618",
  "#db8327",
  "#e9b573",
  "#f2dbac",
  "#faf5d1",
  "#ffffe0",
  "#f1f7db",
  "#d2e5d1",
  "#a2cbbe",
  "#57ada8",
  "#2d8282",
  "#134f4f",
  "#003233",
];

const consonantColors = [
  "#1f77b4",
  "#3a75be",
  "#4e73c7",
  "#5f71cd",
  "#6e6fd3",
  "#7c6cd7",
  "#8a69da",
  "#9766db",
  "#a463da",
  "#af60d7",
  "#bb5ed2",
  "#c55ccb",
  "#cf5ac1",
  "#d959b6",
  "#e158a9",
  "#e9599c",
  "#ef5a8d",
  "#f55c7e",
  "#fa606e",
  "#fd645e",
  "#ff694e",
  "#ff6f3c",
  "#ff7729",
  "#ff7f0e",
];

let vowelColorMap = {};
vowels.forEach((key, i) => vowelColorMap[key] = vowelColors[i]);
// console.log(vowelColorMap);

let consonantColorMap = {};
consonants.forEach((key, i) => consonantColorMap[key] = consonantColors[i]);
// console.log(consonantColorMap);

export default { vowelColorMap, consonantColorMap }