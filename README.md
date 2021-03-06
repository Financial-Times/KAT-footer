# kat-footer [![Circle CI](https://circleci.com/gh/Financial-Times/kat-footer.svg?style=svg)](https://circleci.com/gh/Financial-Times/kat-footer)

Handlebars footer template for KAT apps.

## Usage

If using `n-internal-tool` you'll have to add the path to your `node-modules/@financial-times` directory as the `partialsDirectory` option to `n-internal-tool` so that it can resolve the partial location.

```sh
npm install --save @financial-times/kat-footer
```
or
```sh
bower install --save kat-footer
```

### HTML

Use handlebars template
```hbs
{{> kat-footer/footer }}
```

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
