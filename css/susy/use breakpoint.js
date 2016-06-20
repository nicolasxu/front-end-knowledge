/* 1. In config.rb, add:
		require 'breakpoint'

*/

/* 2. In _layout.scss, add:
		@import 'breakpoint';

*/

/*
	3. in _layout.scss, add:
		breakpoint(500px) {
			// for screen width bigger than 500px
			// add css code here
		}
*/

// normal breakpoint

/* Custom, iPhone Retina */ 
@include breakpoint(320px) {
	aside {
		&:after {
			content: '320px';
		}
	}
}

/* Extra Small Devices, Phones */
@include breakpoint(480px) {
	aside {
		&:after {
			content: '480px';
		}
	}
}

/* Small Devices, Tablets */
@include breakpoint(768px) {
	aside {
		&:after {
			content: '768px';
		}
	}
}

/* Medium Devices, Desktops */
@include breakpoint(992px) {
	aside {
		&:after {
			content: '992px';
		}
	}
}

/* Large Devices, Wide Screens */
@include breakpoint(1200px) {
	aside {
		&:after {
			content: '1200px';
		}
	}
}