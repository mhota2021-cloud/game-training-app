let requiredClicks = 10;
let clickCount = 0;

export function handleClickForDraw(): {
  count: number;
  requiredClicks: number;
  canDraw: boolean;
} {
  clickCount += 1;

  if (clickCount >= requiredClicks) {
    clickCount = 0;
    return { count: requiredClicks, requiredClicks, canDraw: true };
  }

  return { count: clickCount, requiredClicks, canDraw: false };
}
