# kat-footer [![Circle CI](https://circleci.com/gh/Financial-Times/kat-footer.svg?style=svg)](https://circleci.com/gh/Financial-Times/kat-footer)

Handlebars footer template for KAT apps.

## Usage

If using `n-internal-tool` you'll have to add the path to your `node-modules/@financial-times` directory as the `partialsDirectory` option to `n-internal-tool` so that it can resolve the partial location.

### HTML
```sh
npm install --save @financial-times/kat-footer
```
or
```sh
bower install --save kat-footer
```

Use handlebars template
```hbs
{{> kat-footer/footer }}
```

It will display a licence switcher form if a `licenceList` property exists in the template. See the [demo](./demos/app.js) for example usage. /* You should provide a route for the core form to fallback to, this ideally would be a route that directs the user to the same page but for the licence selected via the form */

### Styles
Include the styles for the footer by adding the following to your SCSS
```scss
@import 'kat-footer/main';
```

## Local Development

### Demos

Run the demos using
```sh
make build run
```
And view the demos on `http://local.ft.com:5005/`
