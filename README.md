# kat-footer v2 [![Circle CI](https://circleci.com/gh/Financial-Times/kat-footer/tree/v2.svg?style=svg)](https://circleci.com/gh/Financial-Times/kat-footer)

Footer component for KAT.

KAT (Knowledge & administration tools) is an ft.com application created for Financial Times B2B clients.

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```
$ git clone git@github.com:Financial-Times/kat-footer.git
$ npm install
$ bower install
```
Then you can run `$ npm start` and go to `http://local.ft.com:5000/` in your browser to see the footer module running locally on your machine.

#### Troubleshooting installation
If you see an error like `Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime` you will probably need to run `$ npm rebuild node-sass` to overcome this. In addition you might need to update `origami-build-tools`.

## Testing

We are using [Jest](https://facebook.github.io/jest/) for testing React components, and [Enzyme](http://airbnb.io/enzyme/) for rendering components inside our tests.

Tests for React components should be saved as `test.js` inside the folder for that component.

### Running the tests

- To run a one-time test: `$ npm test`;
- To run tests and watch for changes: `$ npm run testWatch`;
- `$ npm test -- --coverage` to see the coverage of tested files.

## Deployment
This component has been created to be included throughout other KAT components.

### How to update a repo that uses the component to the new footer version
If you want to update connected components with the latest footer version, you need to follow the following steps:
1. Create a new repository release on GitHub. Please follow naming convention of previous releases.
2. Go to `bower.json` file of the component you want to update, and change `"kat-footer"` dependency version to the [newly released one](https://github.com/Financial-Times/kat-footer/releases).
3. Run `$ bower install` in the component repository.

### How to use the component

#### Installation
```
$ bower install --S kat-footer
```
#### Usage

For the footer to sit at the bottom of the page/viewport (whichever is tallest), please make sure that the main `<div>` that wraps your page has a class of `kat-root`.

##### Load the CSS:
```scss
@import '../bower_components/kat-footer/main';
```

##### Load the JS:
**Inside** React Redux app
```js
// first add the footer reducers to the parent app reducers
import { KatFooterNs } from "kat-footer/main";
//...
combineReducers(Object.assign({}, parentAppReducers, { KatFooterNs }));
```
Normal standalone use
```js
// Include and use in a component/container
import KatFooterContainer from "kat-footer";
//...
<KatFooterContainer />;
```

## Other important information

### If you need add / modify component
All dev files are saved in `/src` folder.
Key information that you will need to use in your addition (including text labels and links) is first announced in `/src/reducers` folder in the file corresponding to component with self-explanatory name, and then being added to `/src/reducers/index.js`, to be passed through Redux storage to the components.
Redux store is assigned to the main kat-footer container in `/src/containers/kat-footer`.

This is the data structure:

[Schema](https://www.draw.io/?lightbox=1&highlight=FFFFFF&edit=_blank&layers=1&nav=1&title=KAT-footer#R5VrRcuMmFP0aP7ojgUDSY9bJbme6O9NpdqbtI5GQzEQWGoxju19fZIEsBE68qZyk3mQmERcE4pxzL1ykGVysdl8EaZbfeE6rGQjy3QzezgBIUaD%2BtoZ9Z4jSsDOUguWdaWC4Z%2F9QbdT3lRuW07XVUHJeSdbYxozXNc2kZSNC8K3drOCVPWpDSuoY7jNSudY%2FWS6XnTUB%2BGj%2FlbJyaUYOcdrVrIhprGeyXpKcbwcmeDeDC8G57K5WuwWtWuwMLt19n0%2FU9g8maC3PuSHOEY1BCgBJQBIX2Vz38ESqjZ6sflC5N7PfLpmk9w3J2vJWETyDn5ZyValSqC4LVlULXnFxaA2LguIsU%2Fa1FPyRDmryOH0IAlWjh6RC0t3JeYQ9OkpVlK%2BoFHvVxNyQakC1ogCCXXl75CcyslsOuEEIaV1oTZR930fY1IVG7kwUoQdFXMkWKDUPXLZXv918n39WRFNh6tQwx2pjbAYGsmqx1qXgkch5Me5g0HxEmwJX2kzZjNS8piP6tGmtuGZ1qQzoWPrO1bPczkFLoE8RXPFZVAdtL1me01rZSMVK9f82U6yqp56EeRgmNvNx6DDfq2PIfBRcgHj0svsol2%2Fay46OnG8eDjXhCRwHfDnwOa5WgBOuhh8wwtMAntiehiIX7gS6cJsQPync2IH7cSXnrfSeGN1O6AIO9C2ETK0IN7pipTTeDuPlsOC11KtYi%2BwULMSxxYIh5SXRw0uIPr5%2B0UNzy0dQfeJV%2FWpfyGtW%2FDjQv6vk0%2BuXPIrhx5G82fmPNL9Zq632XNCGi6vWPortRfddtR%2BekSPQOr9pE60WxIqs1ywbJQkjjBQOYv%2BXKgW%2FIFP8W7elOyYHVarU1gQ9nyYFgx5PQe2vz1Pw4adnh%2BZOxjfiRk2Pb0RGT4HStZFElFQ%2BFzRcjgckejMUbRO0IpI92Y%2FpI1aP8DtnagK9hDAcZUhgpI1uevquYco47mi0AQzjUUcdBk5HB531036l9HyJ1QWl97YCe1Y88XuKJwrttaDv90fFM15U3lQ80c8Zt56VFfpYskKvkxXGyJZVhC4lK%2FXQJMxinIcFgRGJpjgxG4nqY%2Bz%2FALT32xC4mw7oE8cUBysOymcE%2FqlRPtcH%2FxvK2HYB6NnaARi7KPeH4ZPC7AuR3dniuiG1OVvsji0XvNmLwwMdjx%2BHra7FDSKLIJz63CBxCTLuMyk%2Fnr23IaOWJJO3VBJWrR3orygXgunIY6BLSOQJS%2BP97jR8gBN8%2FMGv%2BvgRYmCT4PGKtyPhR6LWJ0Hq%2FKeKWDE6M2JdZOEO3dPKr7Qk1VdWP7px6n%2B5hqPA3ilhz04pNCK9OOBm8DPTHB1hnKBkZSfeAPJy7vFueUWc2oTAV%2BYVCNgdoeTt8gpwaqn%2FRqRgu8ldR%2FBNndNcNx8vMLJ93TtJdErsN1cRiF1n8Z1lhgG8hLe4icXdTgFSdxHqwihfAE8UuV8%2B%2BM%2BGJzind%2BF0l%2BJOrl%2FUxBsHTRuNiYN%2FTmhSeFdbnCX0oZjqtZS9E4piz3uSCEwS%2FFXx%2BGlQF2OO31fBu38B)

### Circle CI

All commits are being automatically checked by Circle CI, that is used during Heroku production build.
Make sure you monitor that all the Circle CI tests pass, and that you have all the necessary linter helpers installed
