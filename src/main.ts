// イベント層 (main.ts)
// クリックされた時の処理とボタンを結びつける。
// おみくじ箱を用意し、ボタンのクリックで reset / draw を呼び、結果を描画層に渡す。
// この層は完成済み（ステップ1で render.ts を実装すれば動く）。

import { resetOmikuji, drawOmikuji } from "./omikuji";
import { handleClickForDraw } from "./clickcount";
import { addTokensForResult } from "./tokens";
import { renderClickProgress, renderResult, renderTokens } from "./render";

function main(): void {
  // おみくじ箱を用意する（1回呼ぶと、くじが入った状態になる）。
  resetOmikuji();

  const drawButton = document.getElementById("draw-button");
  const resetButton = document.getElementById("reset-button");

  drawButton?.addEventListener("click", () => {
    const { count, requiredClicks, canDraw } = handleClickForDraw();
    renderClickProgress(count, requiredClicks);

    if (canDraw) {
      const result = drawOmikuji();
      renderResult(result);

      if (result !== null) {
        const tokenTotal = addTokensForResult(result);
        renderTokens(tokenTotal);
      }
    }
  });

  resetButton?.addEventListener("click", () => {
    resetOmikuji();
    // 表示を初期状態（結果なし）に戻す。
    renderResult(null);
  });
}

main();
