<a href="https://whiterussian.studio/">
  <img src="/cover_rounded.png" alt="White Russian Studio">
</a>

# KAT Kit

Kirby CMS, Alpine.js and Tailwind CSS starter kit for your next project.  
Works with the built-in PHP server. No need to install Valet/Vagrant/MAMP or other tools that complicate the development workflow.

## Tools
[Vite](https://vitejs.dev/) — for blazing fast frontend development (with live reloading)  
[Kirby CMS](https://getkirby.com/) — simple but powerful flat-file CMS  
[Alpine.js](https://alpinejs.dev/) — lightweight JavaScript framework for extending markup behaviour  
[Tailwind CSS](https://tailwindcss.com/) — the most popular utility-first CSS framework


Features [refactoring folder structure](https://getkirby.com/docs/guide/configuration#custom-folder-setup) and `media` folder aliasing, extra ["SEO" and "Code injection"](./www/app/blueprints/tabs) tabs. Includes a fully configured HTML [`<head>`](www/app/snippets/site). Highly performant Kirby [Cache Driver](https://github.com/bnomei/kirby3-php-cachedriver) for pages.

JS folder [aliasing](https://vitejs.dev/config/#resolve-alias) to avoid nasty looking imports `../../js/utils/lerp`:

```javascript
{
  '@utils': 'src/js/utils',
  '@components': 'src/js/components',
  '@vendors': 'src/js/vendors'
}
```


## Installation
> ℹ︎ For the kit to work correctly, install and configure [Composer](https://getcomposer.org/download/) (PHP package manager), [Node.js](https://nodejs.org/en/) (>= 12.0.0), and meet [Kirby CMS requirements](https://getkirby.com/docs/guide/quickstart#requirements).

Install JavaScript dependencies and Kirby CMS:   
<sub>We recommend using [pnpm](https://pnpm.io/) to free up hard drive space</sub>

```bash
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
  npm run serve
```

The preview will be available at `localhost:8080`.

### Production

After completing the [build step](#build), copy content from project root to a web server.

---


White Russian, 2022
