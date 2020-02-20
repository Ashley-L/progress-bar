// const $ = (selector) => document.querySelector(selector)
let $doc = document.documentElement;

let progressBar = document.querySelector(`#progressBar`);
let bar = document.querySelector('.bar');


let title = document.querySelector('.title');
let titleCopy = document.querySelector('.title-copy');

//////////////////////////////////
// PART 1: ADVANCED, STEP 2, ii)//
//////////////////////////////////

// // Put the h1 name in the translucent .bar
// window.addEventListener('load', event => {
//   // let title = document.querySelector('.title');
//   // let titleCopy = document.querySelector('.title-copy');

//   // let $subtitle = document.querySelector('#subtitle');
//   // console.log(event);

//   titleCopy.textContent = `${title.textContent}`;
// })

window.addEventListener('scroll', event => { 
    titleCopy.textContent = `${title.textContent}`;

  // Window, including scrolls bars (window's outside perimeter)
  // you don't need this one
  // let windowHsc = window.innerHeight  // window height (px)
  // let windowWsc = window.innerWidth  // window width (px) 

  // height or width OF BROWSER WINDOW minus the scroll bar 
  // changes if you resize the window
  let windowH = $doc.clientHeight
  let windowW = $doc.clientWidth

  // min height or width (of the page) to not have to scroll 
  // so basically height or width
  let documentH = $doc.scrollHeight
  let documentW = $doc.scrollWidth
  
  // shows position of the scroll, changes every time you scroll
  let scrolledPxY = window.scrollY
  let scrolledPxX = window.scrollX 
  // console.log(`event`)
  // console.log(`window height ${windowH}, doc height ${documentH}, scroll position is ${scrolledPxY}`)

   
  // you're trying to find the scrollable content
  // and you can't scroll what's on the screen already (what appears in browser window by default)
  // which is scrolled position divided by total SCROLLABLE content times 100 for a percentage
  // doc length minus window length gives you the actual scrollable height

  let hasBeenScrolled = Math.round((scrolledPxY / (documentH - windowH)) * 100)
  // let hasBeenScrolled = (scrolledPxY / (documentH - windowH) * 100)
  console.log(`Scroll position is ${scrolledPxY}`)
  console.log(`You've scrolled through ${hasBeenScrolled}% of the page.`)

  progressBar.style.width = `${hasBeenScrolled}%`

  // this gives the top of the element
  // console.log(`The top of the the title is ${titleTop}`);

  // this gives height of the element
  // console.log(`title height is ${title.scrollHeight}px`)



  ///////////////////////////////////
  // PART 1: ADVANCED, STEP 2, iii)//
  ///////////////////////////////////

  // this is the position of the top of details
  // plus the current scroll position
  // to give you the distance from the top of the DOCUMENT
  // b/c getBoundingClientRect() gives you distance to the window
  // and you don't need that
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect



  // let title = document.querySelector('.title');
  // let titleCopy = document.querySelector('.title-copy');

  
  ///////////
  let titleTop = title.getBoundingClientRect().top + scrolledPxY ;
  console.log(`top of the title to the top of the document: ${titleTop}px`)

  ///////////

  // console.log(titleTop) // gives distance from top of details to top of page

  // so now you have
  // titleTop: distance from top of title to top of the doc
  // plus the bottom position of title (scrollHeight)
  // relative to the total height of the DOCUMENT
  
  ///////////
  let titleHeight = ((titleTop + title.scrollHeight) / documentH) * 100;
  ///////////

  // console.log(titleHeight) // title is __ percent of the doc

  // so now
  // if you scrolled more than the distance between top of the page to the bottom of the details, show the text in the .bar

  if (hasBeenScrolled > titleHeight)  {
    titleCopy.style.opacity = `1`;
  } else {
    titleCopy.style.opacity = `0`;
  }

})


    

//////////////////////////////////
// PART 1: ADVANCED, STEP 2, ii)//
//////////////////////////////////

// create the div dynamically

// let $plugin = document.createElement("div");
// $plugin.setAttribute('class', 'bar');


// document.body.appendChild($plugin);








