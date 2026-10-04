(function () {
  'use strict';
  var C = window.PDAAC_CONFIG || {};
  var configured = C.OWNER && C.REPO && !/YOUR-GITHUB-NAME/i.test(C.OWNER);
  var repo = 'https://github.com/' + C.OWNER + '/' + C.REPO;
  var fileUrl = repo + '/releases/latest/download/' + encodeURIComponent(C.FILE);

  document.querySelectorAll('.js-download').forEach(function (a) {
    if (configured) {
      a.href = fileUrl;
      a.setAttribute('download', '');
    } else {
      a.href = '#download';
      a.addEventListener('click', function () {
        var n = document.querySelector('.js-dl-note');
        n.hidden = false;
        n.textContent = '網站管理者還沒設定下載連結：請在 assets/config.js 填入 GitHub 帳號與倉庫名稱（見 README.md）。';
      });
    }
  });

  if (configured) {
    var n = document.querySelector('.js-dl-note');
    n.hidden = false;
    n.innerHTML = '下載沒有開始？<a href="' + repo + '/releases/latest" rel="noopener">到 GitHub 下載頁面</a>手動下載。';
  }

  document.querySelectorAll('.js-meta').forEach(function (el) {
    el.textContent = 'Windows 10 / 11 · 版本 ' + C.VERSION + ' · ' + C.SIZE;
  });
  document.querySelectorAll('.js-meta-long').forEach(function (el) {
    el.textContent = '版本 ' + C.VERSION + ' · ' + C.SIZE + ' · Windows 10 / 11（64 位元）';
  });
  document.querySelectorAll('.js-file').forEach(function (el) { el.textContent = C.FILE; });
  document.querySelectorAll('.js-year').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
