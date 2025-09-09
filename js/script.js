;(function () {
  const btn = document.getElementById('goBackBtn')
  btn.addEventListener('click', function () {
    const fallback = btn.dataset.fallback || document.referrer || '/'
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = fallback
    }
  })
})()
