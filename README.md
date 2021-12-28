<a href="https://whiterussian.studio/">
  <img src="https://whiterussian.studio/assets/wrs.png" alt="White Russian Studio" width="96">
</a>

# KAT Kit

Kirby CMS, Alpine and Tailwind starter kit for your next project.  
Works with the built-in PHP server. No need to install Valet/Vagrant/MAMP or other tools that complicate the development workflow.

## Tools
[Vite](https://vitejs.dev/) — for blazing fast frontend development (with live reloading)  
[Kirby CMS](https://getkirby.com/) — simple but powerful flat-file CMS  
[Alpine.js](https://alpinejs.dev/) — lightweight JavaScript framework for extending markup behaviour  
[Tailwind CSS](https://tailwindcss.com/) — the most popular utility-first CSS framework

Features [public folder structure](https://getkirby.com/docs/guide/configuration#custom-folder-setup) and `media` folder aliasing, extra ["SEO" and "Code injection"](./www/app/blueprints/tabs) tabs. Includes a fully configured HTML [`<head>`](www/app/snippets/site).


## Installation
> ℹ︎ For the project to work correctly, you need to install and configure [Composer](https://getcomposer.org/download/) (PHP package manager), [Node.js](https://nodejs.org/en/) (>= 12.0.0), and meet [Kirby CMS requirements](https://getkirby.com/docs/guide/quickstart#requirements).

Install JavaScript dependencies and Kirby CMS:

```bash
  npm install
  npm run setup
```


## Usage
### Development

Start both built-in and Vite dev servers:

```bash
  npm run dev
```

and open `localhost:8080` in the browser.

### Build

To build the project run:

```bash
  npm run build
```

### Preview

To preview the built project run:

```bash
  npm run build
  npm run kirby
```

The preview will be available at `localhost:8080`.

### Production

After completing the build step, copy content from the `www` folder to a web server and set `public` as the root directory.

---


White Russian Studio, 2021
