// Public link configuration. Set email to an address when contact is available.
const LINKS = {
  paypal: "https://paypal.me/NegentropicEngines",
  email: null
};

document.getElementById('year').textContent = new Date().getFullYear();

const footerLinks = document.getElementById('external-links');
for (const [name, value] of Object.entries(LINKS)) {
  if (typeof value !== 'string' || !value.trim()) continue;
  const isEmail = name === 'email';
  const address = value.trim();
  if (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) continue;
  if (!isEmail) {
    try {
      if (new URL(address).protocol !== 'https:') continue;
    } catch {
      continue;
    }
  }
  const link = document.createElement('a');
  link.href = isEmail ? `mailto:${address}` : address;
  link.textContent = isEmail ? 'Contact' : 'Support';
  if (!isEmail) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${link.textContent} (opens in a new tab)`);
  }
  footerLinks.append(link);
}
document.getElementById('links-area').hidden = footerLinks.childElementCount === 0;
