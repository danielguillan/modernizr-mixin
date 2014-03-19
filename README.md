# Modernizr helper mixin

## Installation

Include the `_modernizr.scss` file in your Sass directory and import it into your main stylesheet:

	@import 'modernizr';

### Install with bower

You can install the package using Bower. Simply run the following comand:

	bower install --save-dev modernizr-mixin

### Usage

The Modernizr helper includes two mixins: `yep` and `nope`. Simply pass a `list` of features as argument and the rules you need to print.

#### yep

Prints classes for supported features.

	@include yep($features) { ... }

#### nope

Prints classes for unsupported features and unavailable Javascript.
	
	@include nope($features) { ... }
	
#### Example

Sass input:

	.my-selector {
		@include yep(translate3d opacity) {
			transform: translate3d(0,100px,0);
			opacity: 0;
		}
		@include nope(translate3d opacity) {
			top: 100px;
			display: none;
		}
	}	

CSS output:

	.translate3d.opacity .my-selector {
			transform: translate3d(0,100px,0);
			opacity: 0;
	}
	
	.no-js my-selector,
	.no-translate3d .selector,
	.no-opacity .selector {
			top: 100px;
			display: none;
	}
	
## Thanks

Thanks to [Hugo Giraudel](https://github.com/hugogiraudel) for reviewing and tweaking the original code.