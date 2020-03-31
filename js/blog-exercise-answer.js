/** 
 * JavaScript: Blog Exercise.
 * @author  TECHCareers by Manpower
 * @date    2020.03.31
 * @summary Iterates through blog articles and outputs an HTML representation of each.
 * 
 * Goals:
 * ======
 * 1 - Output into the DOM.  (html stuff) - done
 * 2 - Use a template literal. ${stuff} - done
 * 3 - Use a for...of loop. for blah() - done
 * 4 - Instantiate an object or object(s) of a class. - done
 * 5 - Add an element to an array. - done
 * 6 - Loop through (iterate through) an array.- done
 * 7 - If you are adding functions or using methods, use ES6 standard. =>
 */


class Article {
  constructor ( title = 'Blog Title', content = 'Lorem ipsum...' ) // sets the parameters
  {
    this.title = title; // your title above
    this.content = content; // your filler content
  }
  output (p, appendMe)
  {
    p.textContent += this.title;    // outputs your title section
    p.textContent += this.content;  // outputs your content section
    appendMe.appendChild(p); // 
  }
}

var keyword = "SASS";

const blogArticles = [
  new Article(
    'First Day of Class (C#)',
    'Oh! C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!'
  ),
  new Article(
    'How to Build Websites! (HTML)',
    'What a great day! We learned all about HTML, or, HyperText Markup Language. It is the content and skeleton of the website.'
  ),
  new Article(
    'Brand new Topic (CSS)',
    'Today we learned about CSS, or, Cascading StyleSheets - how cool! This language helps us make our sites look pretty, we get to define the styles.'
  ),
  new Article(  
        // * 2 - Use a template literal. ${stuff} - done
        // * 4 - Instantiate an object or object(s) of a class. - done
        // * 5 - Add an element to an array. - done
    `Brand new Topic (${keyword})`,
    `Another New Topic!? ${keyword} Some ${keyword} things to say about ${keyword} What a wonderful time to be learning and writting with ${keyword}`
    // only allows to two entries as per the constructer parameters
  ),
  new Article(
    'Another New Topic!? (JS)',
    'Wow! I thought the other languages were pretty neat, but this one takes the cake so far. JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpage.'
  ),
  new Article(
    'Adding on to our JS (TS)',
    'Who knew we could use something to check our code for errors and offer additional features to JavaScript!? TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!'
  ),
  new Article(
    'Time to React',
    'Our very first large JavaScript framework, how exciting! Now we can build web components and build more complex front-ends with ease... a bit of a learning curve but so useful now that we\'re getting the hang of it!'
  )
];

// TODO: Add a new article to the array (add "SASS" inbetween the "CSS" and "JS" articles.)

var appendMe = window.document.getElementById("append-me"); // inserts in your html element 

// At this point var appendMe = <section id="append-me">

for ( let article of blogArticles )
    // let defined within the loop is temp 
    // loops through each article in the const blogArticles
{
  var p = document.createElement('p'); 
    // p is the paragraph HTML element. it can be whatever you want. like a h1, h2, whatever
  article.output(p, appendMe); 
    // outputs the var p and var appendMe

  // TODO: Loop through articles and output each of them to the browser.
}

// console.log(article) //->> undefined
// console.log(article) // ->> blogArticle[last_ELEMENT]


/*
Keywords are tokens that have special meaning in JavaScript: break, case, catch, continue, debugger, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, and with.

Future reserved words are tokens that may become keywords in a future revision of ECMAScript: class, const, enum, export, extends, import, and super. Some future reserved words only apply in strict mode: implements, interface, let, package, private, protected, public, static, and yield.
*/