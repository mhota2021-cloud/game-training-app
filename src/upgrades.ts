import { decreseRequiredClicks } from "./clickcount";
import { spendTokens } from "./tokens";

export const CLICK_UPGRADE_COST = 100;
const CLICK_REDUCTION = 2;

let clickUpgradePurchased = false;

export function isClickUpgradePurchased(): boolean {
  return clickUpgradePurchased;
}

export function buyClickUpgrade(): boolean {
  if (clickUpgradePurchased) {
    return false;
  }

  const success = spendTokens(CLICK_UPGRADE_COST);
  if (!success) {
    return false;
  }

  decreseRequiredClicks(CLICK_REDUCTION);
  clickUpgradePurchased = true;
  return true;
}
