# Vue TinyTyper  
  
This is a smallest WYSIWYG-library for Vue 3 you can find. 
  
  
## Installation  
This package is not available on npmjs.org, but you can add this link `git+ssh://git@github.com/ivkoandrv/vut-tinytyper.git` as a dependency named vue-tinytyper in your package.json file.  
  
## Usage  
  
Import it to your component or register it globally:  
  
`import TinyTyper from "vue-tinytyper`  
  
and import styles from packages:   
`import "vue-tinytyper/dist/tiny-typer.css""`  
  
then place `<tiny-typer></tiny-typer>`  
  
Voi la!  
  
## Supported props and events
### Props
| Props |  Value| Usage |
|--|--|---|
|debugMode  | boolean | Turn on debug mode |

### Events
| Event | Data | Usage
|--|--|--|
| onInput | string| Return formatted text when you write it |
|onFocusOut|string| Return formatted text when you click outside the text editor|
 
### Roadmap
1. Add loading media
2. Add fonts from the Google.Fonts
3. Interaction with the element properties (a.k.a. font size, color, background color, etc.)
4. Add tables
5. And so on..

I forgot. This is my first Open Source project, so you're welcome to conduct experiments or study based on this project. 
Also, when I'm ready with the main functionalities, I will start adding support for TypeScript (I mean, zero-dependency package), React (based, I think), and Svelte (Hello, my lil' brother).

<img width="597" alt="image" src="https://github.com/ivkoandrv/vue-tinytyper/assets/110159355/ae4222dd-0e46-464a-92e3-b02e813444e5">

NB: If I plan to upload this library to NPM, I'll rewrite the text above because it's cringe 🤡
