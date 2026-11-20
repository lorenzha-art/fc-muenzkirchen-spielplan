/* Stop the legacy repeated auto-scroll and replace it with one stable jump. */
clearInterval(window.__todayJumpTimer);
clearTimeout(window.__todayJumpTimer);
window.scheduleTodayJump = function scheduleTodayJump() {
  clearTimeout(window.__todayJumpTimer);
  requestAnimationFrame(window.jumpToToday);
  window.__todayJumpTimer = setTimeout(window.jumpToToday, 180);
};
window.scheduleTodayJump();
window.addEventListener("pageshow", window.scheduleTodayJump);
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) window.scheduleTodayJump();
});
setTimeout(window.scheduleTodayJump, 450);
setTimeout(window.scheduleTodayJump, 1200);
