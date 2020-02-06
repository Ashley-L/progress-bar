// const $ = (selector) => document.querySelector(selector)

let $progressBar = document.querySelector(`#progressBar`);

window.addEventListener('scroll', event => { 

    // height or width OF BROWSER WINDOW minus the scroll bar 
    // changes if you resize the window
    let $windowH = document.documentElement.clientHeight
    let $windowW = document.documentElement.clientWidth

    // min height or width (of the page) to not have to scroll 
    let $documentH = document.documentElement.scrollHeight
    let $documentW = document.documentElement.scrollWidth
    
    // shows position of the scroll, changes every time you scroll
    let $scrolledPxY = window.scrollY
    let $scrolledPxX = window.scrollX
    // console.log(`event`)
    // console.log(`window height ${$windowH}, doc height ${$documentH}, scroll position is ${$scrolledPxY}`)

    
    // you're trying to find the scrollable content
    // and you can't scroll what's on the screen already (what appears in browser window by default)
    // which is scrolled position divided by total SCROLLABLE content times 100 for a percentage
    // doc length minus window length gives you the actual scrollable height

    // let $barLength = Math.round(($scrolledPxY / ($documentH - $windowH)) * 100)
    let $barLength = ($scrolledPxY / ($documentH - $windowH) * 100)

    console.log(`${$scrolledPxY}`)
    // console.log(`You've scrolled through ${Math.round($barLength)}% of the page.`)

    $progressBar.style.width = `${$barLength}%`

  })


///////// WHAT ARE YOU TRYING TO DO /////////
// ex. if scroll position is 50% of windowH, bar length should be 50% of windowW
// SO - you want the width of the div to equal the percentage of the scroll in the window
 // 

// 1. get a variable for the length of the bar
// set the width to be the scroll



 // PUT THIS IN THE CONSOLE
/* window.addEventListener(`scroll`, event => { 
     console.log(event);
  });
*/




