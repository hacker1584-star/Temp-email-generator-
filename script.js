function generateEmail() {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let user = '';
  for (let i = 0; i < 10; i++) {
    user += chars[Math.floor(Math.random() * chars.length)];
  }
  const domains = ['tempmail.com', 'maildrop.cc', 'fakeinbox.com', 'guerrillamail.com'];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const email = `${user}@${domain}`;
  document.getElementById('emailBox').innerText = email;
}