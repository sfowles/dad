# Kyp Theme

Here are a few notes about this theme. It's mostly just a reference list for specific modules and classes that can be referenced to build out different types of pages.

## Colors:
Foreground colors are appended with 'fg', while background colors are appended with 'bg'.

Here are the default SASS color variables for the theme:

### Neutral colors:

	$white
	$black

### Foreground colors:

	$fgMainText // Deep gray
	$fgLightBlue // Light turqoise
	$fgLightBlue50 // Light turqoise @ 50% opacity
	$fgLighterBlue // Lighter turqoise
	$fgDarkBlue // Dark turqoise
	$fgDarkerBlue // Darker turqoise
	$fgDarkGreen // Dark green
	$fgLightGray // Light gray
	$fgMidGray // Medium gray
	$fgDarkGray // Dark gray

### Background colors:

	$bgMain // Light gray (bg)
	$bgThemeBlack // Theme black 
	$bgThemeBlack50 // Theme black @ 50% opacity
	$bgBlueGray // Dark bluish gray
	$bgLightGray // Light gray (bg)
	$bgMidGray // Medium gray (bg)
	$bgDarkGray // Dark gray (bg)

Note that it should be relatively simple to swap out the entire palette on a case-by-case basis. This can provide a whole lot more customized feel for users, and more unique looking implementations.

## Modules:
This theme is entirely modular, meaning that elements can be swapped between pages and different placements with ease. Modules that are intended to be used only once on a page leverage ID hashes (#) whereas modules that can be used multiple times on a single page leverage class dots (.).

Every module has a light and dark version. Colors for modules are inherited by their parent containers. For example, any module that is nested within the '.light-container' container module will inherit a palette suitable for a light background. That same module nested within the '.dark-container' container module will inherit an inversed palette, more suitable for use on a dark background.

### Main container modules:

	.light-container // Builds a container with a light background
	.dark-container // Builds a container with a dark background

### Single-use modules:

	#navigation // Adds the main nav to a page. I usually include this just before the footer module.
	#hero // Adds a full-screen hero graphic
	#footer // Adds the footer module to a page

### Multi-use modules:

	.gallery // Adds a gallery to the page
	.form // Adds a form to the page
	.full-hero // Adds a hero graphic that is full-width
	.partial-hero // Adds a hero graphic that is partial-width and centered
	.single-column // Adds a single-column article to a page
	.comments // Adds a comments section to a page
	.top-posts // Adds a 'top posts' or 'recent posts' section
	.archives // Adds an 'archives' or 'category' section


## Navigation:
Navigation uses unordered lists for each line item. An additional layer of nested list items can be included within any top-level list item to enable sub-nav foldouts.

Social media icons can also be included or removed from the main navigation at will. See social section below for details on how to reference specific icons.

If nested menus within the main navigation exceed the viewport height, the menu will become vertically scrollable so that users can easily access line items that are off screen.


## Forms & buttons:
All form elements have animated labels. The labels are made using standard HTML, so they can be treated much the same as placeholder-data would. They essentially function as both placeholders and labels. By default, field heights are set to normal, and they do not have set widths. To apply set widths, reference the following list. You can also specify heights other than the default.

Form fields come in the following shapes and sizes:

### width: 

	.small
	.medium
	.medium-select (used only for select menus)
	.large

### height:

	normal (default)
	.tall
	.taller

### attributes:

	.disabled

To access button styles, simply apply the corresponding classes to a button element. For instance,

	class="medium tall button"

The above will create a standard button with medium width and tall height attributes.

## Social Icons:
Social icons can be included in virtually any area of the theme. By default, they exist at the bottom of article modules, within the navigation module, and in the footer module.

Social icons are SVG fonts that are embedded as classes on any DIV element and make use of the :before pseudo-class. The following classes are currently available:

	.icon-twitter
	.icon-facebook
	.icon-g-plus
	.icon-instagram
	.icon-pinterest
	.icon-github
	.icon-dribbble
	.icon-youtube
	.icon-tumblr

There are also heart, comment, and quill icons available:

	.icon-heart
	.icon-comments
	.icon-quill
