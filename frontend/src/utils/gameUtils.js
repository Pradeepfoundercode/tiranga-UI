export const getNumberColors = (num) => {
  const number = Number(num);

  if (number === 0) return ["red", "violet"];
  if (number === 5) return ["green", "violet"];
  if ([1, 3, 7, 9].includes(number)) return ["green"];
  if ([2, 4, 6, 8].includes(number)) return ["red"];

  return [];
};

export const getGameName = (active) => {
  const names = {
    WinGo: "WinGo 30 Sec",
    "WinGo 1": "WinGo 1 Min",
    "WinGo 3": "WinGo 3 Min",
    "WinGo 5": "WinGo 5 Min",
  };

  return names[active] || active;
};

export const getGameKey = (active) => {
  const keys = {
    WinGo: "wingo30s",
    "WinGo 1": "wingo1m",
    "WinGo 3": "wingo3m",
    "WinGo 5": "wingo5m",
  };

  return keys[active] || "wingo5m";
};

export const colorMap = {
  green: { main: "#18b866", dark: "#0db65e" },
  violet: { main: "#a044dc", dark: "#9b42dc" },
  red: { main: "#ff4b52", dark: "#df3735" },
  big: { main: "#e89b2e", dark: "#e89b2e" },
  small: { main: "#5790da", dark: "#5790da" },
};