# Negentropic Engines

A small static site for **negentropic.us**. It uses plain HTML, CSS, and a little JavaScript. There is no build step.

## Publish with GitHub Pages

1. Create a **public** GitHub repository (for example, `negen-site`). Leave the new repository empty.
2. From this folder, run:

   ```sh
   git init
   git add .
   git commit -m "Add Negentropic Engines site"
   git branch -M main
   git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. In **Settings → Pages**, enter `negentropic.us` under **Custom domain** and save. The root `CNAME` file also records this domain in the source.
5. At your domain registrar, add these four **A** records for the apex/root host (`@`):

   | Type | Host | Value |
   | --- | --- | --- |
   | A | @ | `185.199.108.153` |
   | A | @ | `185.199.109.153` |
   | A | @ | `185.199.110.153` |
   | A | @ | `185.199.111.153` |

   Remove conflicting apex A/AAAA/ALIAS/ANAME records. Optionally, add a `www` CNAME pointing to `YOUR-ACCOUNT.github.io` if you also want `www.negentropic.us` to redirect to the apex domain. Replace `YOUR-ACCOUNT` with your GitHub account name. Avoid wildcard DNS records.
6. After DNS and certificate provisioning finish, return to **Settings → Pages** and enable **Enforce HTTPS**. DNS changes and certificate issuance can take time.

GitHub's current [custom-domain and DNS guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and [HTTPS guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https) are the references for these settings.

## Edit the site

- Set PayPal and optional email in the `LINKS` object at the top of `script.js`. The small footer Links area shows only configured items. PayPal is labeled “Support” on the page. For email, enter an address without `mailto:`. For PayPal, enter a full `https://` URL.
- Update the text in `index.html` and styles in `style.css` as needed. The footer year updates automatically.
- Open `index.html` locally to preview. Relative asset paths also work when hosted from a GitHub Pages repository path.
