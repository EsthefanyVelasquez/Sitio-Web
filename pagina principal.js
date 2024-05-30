document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesButton = document.getElementById('accept-cookies');
  const declineCookiesButton = document.getElementById('decline-cookies');

  // Check if cookies were previously accepted
  if (!localStorage.getItem('cookiesAccepted')) {
      cookieBanner.style.display = 'block';
  }

  acceptCookiesButton.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
  });

  declineCookiesButton.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'false');
      cookieBanner.style.display = 'none';
  });
});
