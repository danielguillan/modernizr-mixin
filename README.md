# Modernizr mixin

A simple way for DRYier, faster and cleaner Modernizr tests in Sass.


## Install

Requires Sass 3.3

There are 3 ways of installing the Modernizr mixin:

### Download

Download `_modernizr.scss` which is located in the `stylesheets` folder and place it in your Sass directory.

### Bower

Alternatively, install the package using Bower. Simply run the following comand:

	bower install --save-dev modernizr-mixin

### Compass extension

Modernizr is also available as a Compass extension:

	`gem install modernizr-mixin`

Then add the following line to your `config.rb`:

	require 'modernizr-mixin'

## Usage

Import it into your main stylesheet:

	@import 'modernizr';

The Modernizr helper includes two mixins: `yep` and `nope`. Simply pass a comma-separeted list (`argList`) of features as argument and the rules you need to print.

### yep

Prints classes for supported features.

	@include yep($features...) { ... }

### nope

Prints classes for unsupported features and unavailable Javascript.

	@include nope($features...) { ... }

### Example

Sass input:

```scss
.my-selector {
	@include yep(translate3d, opacity) {
		transform: translate3d(0, 100px, 0);
		opacity: 0;
	}
	@include nope(translate3d, opacity) {
		top: 100px;
		display: none;
	}
}
```

CSS output:

```css
.translate3d.opacity .my-selector {
	transform: translate3d(0, 100px, 0);
	opacity: 0;
}

.no-js my-selector,
.no-translate3d .selector,
.no-opacity .selector {
	top: 100px;
	display: none;
}
```

## Acknowledgements

Thanks to [Hugo Giraudel](https://github.com/hugogiraudel) for reviewing and tweaking the original code.
