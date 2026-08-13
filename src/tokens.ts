import type { OmikujiResult } from "./omikuji";

const tokenValues: Record<OmikujiResult, number> = {
  大吉: 50,
  中吉: 30,
  小吉: 20,
  吉: 10,
  末吉: 5,
  凶: 0,
};

let tokenCount = 0;

export function addTokensForResult(result: OmikujiResult): number {
  tokenCount += tokenValues[result];
  return tokenCount;
}
