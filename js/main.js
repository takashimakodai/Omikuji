'use strict'
{
  const btn = document.getElementById('btn');
  const text = document.getElementById('text');

  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '吉', '凶', '大凶'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];

    const texts = ['verygood!!', 'good!', 'soso'];
    if (btn.textContent === results[0]) {
      text.textContent =　texts[0];
    } else if (btn.textContent === results[1]) {
      text.textContent = texts[1];
    } else {
      text.textContent = texts[2];
    }

  });
}