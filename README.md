# Modernizr mixin [![Build Status](https://travis-ci.org/danielguillan/modernizr-mixin.svg?branch=master)](https://travis-ci.org/danielguillan/modernizr-mixin) [![Bower version](https://badge.fury.io/bo/modernizr-mixin.svg)](http://badge.fury.io/bo/modernizr-mixin) [![Gem Version](https://badge.fury.io/rb/modernizr-mixin.svg)](http://badge.fury.io/rb/modernizr-mixin)

A simple way for DRYier, faster and cleaner Modernizr tests in Sass.

## Install

Requires Ruby Sass 3.4 or LibSass 3.2

**LIBSASS WARNING: There is a known bug in Libsass 3.2.3 and 3.2.4 that makes Modernizr mixin output incorrect selectors. The only workaround until the bug is patched is to stick to Libsass 3.2.2. https://github.com/sass/libsass/issues/1210**

There are 4 ways of installing the Modernizr mixin:

### Download

Download [_modernizr.scss](/stylesheets/_modernizr.scss) and place it in your Sass directory.

### Bower

Run the following command:

	bower install --save-dev modernizr-mixin

### Compass extension

1. `gem install modernizr-mixin`
2. Add `require 'modernizr-mixin'` to your `config.rb`

### npm / Eyeglass module

    npm install --save-dev modernizr-mixin

## Usage

Import it into your main stylesheet:

	@import 'modernizr';

Or if you are using `Eyeglass`:

	@import 'modernizr-mixin/_modernizr';

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
.no-js .my-selector,
.no-translate3d .my-selector,
.no-opacity .my-selector {
  top: 100px;
  display: none;
}
```

## Credits

Thanks [Hugo Giraudel](https://github.com/hugogiraudel) for the code review and tweaks.
