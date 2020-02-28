let $doc = document.documentElement;
let $title = document.querySelector('.title');
let $barDiv = document.createElement("div");
let $titleCopyDiv = document.createElement("div");
let $progressDiv = document.createElement("div");

////////////////////////////////
// CREATE THE DIV DYNAMICALLY // 
////////////////////////////////

// BAR DIV
$barDiv.setAttribute('class', 'bar');
document.body.appendChild($barDiv);

let $barClass = document.querySelector('.bar');
$barClass.style.position = 'fixed';
$barClass.style.top = '0';
$barClass.style.left = '0';
$barClass.style.backgroundColor = 'rgba(211, 125, 12, 0.7)';
$barClass.style.width = '100%'
$barClass.style.height = '100%'
$barClass.style.maxHeight = '2em';

// hover on div
$barDiv.addEventListener('mouseover', event => {
  event.target.style.backgroundColor = 'rgb(211, 125, 12)';
})
$barDiv.addEventListener('mouseout', event => {
  event.target.style.backgroundColor = 'rgba(211, 125, 12, 0.7)';
})



// TITLE DIV 
$titleCopyDiv.setAttribute('class', 'inner title-copy')
$barDiv.appendChild($titleCopyDiv);

let $titleCopyClass = document.querySelector('.title-copy');
$titleCopyClass.style.color = 'white';
$titleCopyClass.style.fontFamily = 'Arial, Helvetica, sans-serif';
$titleCopyClass.style.paddingLeft = '1em';
$titleCopyClass.style.position = 'absolute';
$titleCopyClass.style.lineHeight = '2';
$titleCopyClass.style.fontWeight = '600';
$titleCopyClass.style.fontSize = '1em';
$titleCopyClass.style.opacity = '0';
$titleCopyClass.style.zIndex = '9999';

// mouseover/mouseout on individual title div
// $titleCopyDiv.addEventListener('mouseover', event => {
//   $barClass.style.backgroundColor = 'rgb(211, 125, 12)';
//   event.stopPropagation();
// })
// $titleCopyDiv.addEventListener('mouseout', event => {
//   $barClass.style.backgroundColor = 'rgba(211, 125, 12, 0.7)';
//   event.stopPropagation();
// })



// PROGRESS BAR DIV
$progressDiv.setAttribute('class', 'inner progress');
$barDiv.appendChild($progressDiv);

let $progressClass = document.querySelector('.progress');
$progressClass.style.backgroundColor = 'rgb(0, 95, 139)';
$progressClass.style.width = '0%';
$progressClass.style.height = '100%';

// mouseover/mouseout on individual progress div
// $progressDiv.addEventListener('mouseover', event => {
//   $barClass.style.backgroundColor = 'rgb(211, 125, 12)';
//   event.stopPropagation();
// })
// $progressDiv.addEventListener('mouseout', event => {
//   $barClass.style.backgroundColor = 'rgba(211, 125, 12, 0.7)';
//   event.stopPropagation();
// })


////////////////////////////////
// MAKE THE PROGRESS BAR WORK // 
////////////////////////////////

// SCROLL LISTENER
window.addEventListener('scroll', event => {   
  let windowH = $doc.clientHeight // height of BROWSER WINDOW minus the scroll bar 
  let documentH = $doc.scrollHeight // min height (of the page) to not have to scroll 
  let scrolledPxY = window.scrollY // shows scroll position, changes every time you scroll


  
  // COPY THE TITLE INTO THE PROGRESS BAR
  $titleCopyDiv.textContent = `${title.textContent}`;



  // MAKE THE BAR EQUAL THE AMOUNT SCROLLED
  let hasBeenScrolled = Math.round((scrolledPxY / (documentH - windowH)) * 100)
  // scrolled position relative to the scrollable amount
  // let hasBeenScrolled = (scrolledPxY / (documentH - windowH) * 100)
  // console.log(`Scroll position is ${scrolledPxY}`)
  // console.log(`You've scrolled through ${hasBeenScrolled}% of the page.`)

  $progressClass.style.width = `${hasBeenScrolled}%`



  // SHOWING PAGE TITLE IF IT ISN'T VISIBLE
  // distance from bottom of title to top of page/document 
  let titleBottom = $title.getBoundingClientRect().bottom + scrolledPxY ;
  // console.log(`top of the title to the top of the document: ${titleBottom}px`)
    
  let titleHeight = ((titleBottom) / documentH) * 100;  
  // console.log(titleHeight) // title is __ percent of the doc

  // if you scrolled more than the distance between top of the page to the bottom of the details, show the text in the .bar
  if (hasBeenScrolled > titleHeight)  {
    $titleCopyClass.style.opacity = `1`;
  } else {
    $titleCopyClass.style.opacity = `0`;
  }



  // HOVER ON BAR(S) TO MAKE IT OPAQUE
  let $innerDivs = document.querySelectorAll('.inner');
  $innerDivs.forEach(div => {
    div.addEventListener('mouseover', event => {
      $barClass.style.backgroundColor = 'rgb(211, 125, 12)';
      event.stopPropagation();
    })
    div.addEventListener('mouseout', event => {
      $barClass.style.backgroundColor = 'rgba(211, 125, 12, 0.7)';
      event.stopPropagation();
    })
  })


})


//////////////////////////
// WORD COUNT/READ TIME //
//////////////////////////

var $fullText = document.body.textContent
// var $spaces = ($fullText.split(" ").length);
var $totalWords = ($fullText.match(/([\s]+)/g).length);
// should add + 1 to length but it's still wrong(?)
// https://regex101.com/
// \s = any whitespace character
// /g = g modifier, global --> all modifiers
// + = 1+ times
console.log($totalWords)

let $wpm = 300
let $time = Math.round($totalWords / $wpm) 
console.log($time)

let $readTime = document.querySelector('.read-time')
$readTime.innerText = `Read time: ${$time} minutes`






////////////////////////
// SCROLL TO SECTIONS // 
////////////////////////

// Steps


// 1. get all of the anchors
  // add .slide-from class to each of the anchors
  // querySelectorAll for the classes to get all of them
  // forEach on each of the anchors --> check if it's clicked???

// 2. Scroll heading into view
  // Get heading
  // Scroll heading into view on click

// 3. Find the top of the heading relative to top of document
// use getBoundingClientRect().top + window.scrollY ???? check MDN
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

let $a = document.querySelector('nav a')
let $links = document.querySelectorAll('.scroll-to')
let $barHeight = $barDiv.getBoundingClientRect().height

  // var $headings = document.querySelectorAll('.scene-title')
    // $headings.forEach(h2 => {
    //   $headingTop = h2.getBoundingClientRect().top
    //   // + window.scrollY
    //   console.log($headingTop)
    // })

    // let $scene1 = document.querySelector('#scene1')
    // let $scene2 = document.querySelector('#scene2')
    // let $scene3 = document.querySelector('#scene3')
    // let $scene4 = document.querySelector('#scene4')



$links.forEach($a => {
  $a.addEventListener('click', event => {
    // Stops the default 'jumping' to id
    // allows you to put the smooth scroll in
    event.preventDefault();

    // listens for a click
    console.log('clicked')

    // Which link are you clicking
    let $clickedLink = $a.getAttribute('href') 
    console.log(`Scroll to ${$clickedLink}`)

    // $scene1.scrollIntoView({ behavior:'smooth' })
    // $scene2.scrollIntoView({ behavior:'smooth' })
    // $scene3.scrollIntoView({ behavior:'smooth' })
    // $scene4.scrollIntoView({ behavior:'smooth' })
    // $whichScene.scrollIntoView({behavior: 'smooth'})

    // variable for scene/link you clicked/are trying to go to
    // querySelector to take you to that clicked link
    let $clickedScene = document.querySelector($clickedLink)
    console.log($clickedScene) // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IT WORKS

    // get height of scene title - progress bar height + window.scrollY
    // when you add pixels, you increase scroll position
    // so content moves further up the page
    // which is why you have to subtract the bar height rather than add
    // to push the section down into view
    // then add window.scrollY to give you the scrolled position relative to the top of the doc
    // so scroll position will always be the same and go to the same position
    // no matter where you are in the page
    // since getBoundigClientRect() gives you the position relative to the window
    let $scenePosition = ($clickedScene.getBoundingClientRect().top - $barHeight) + window.scrollY
    // console.log(`progress bar is ${$barHeight}px`)
    console.log(`Scene top scroll position is ${$scenePosition}px`)

    // $scenePosition.scrollIntoView( {behavior: 'smooth'} )

    // scroll to the position of the scene 
    window.scrollTo({
      left:0, 
      top: $scenePosition, 
      behavior:'smooth'
    })

  })

})



// // - Can I select an element by id?
// let $section = document.querySelector('#javascript')
// ​
// // - Can I confirm an element exists?
// if ($section) {
//   // Yes, an element was found
//   console.log('found')
// } else {
//   // No, an element was NOT found
//   console.log('not found')
// }
// ​
// // - How far from the top of the document is an element?
// $section.offsetTop
// ​
// // - How far from the top of the viewport is an element?
// $section.getBoundingClientRect().top
// ​
// // - How tall is the document?
// document.documentElement.scrollHeight
// ​
// // - How tall is the window?
// document.documentElement.clientHeight
// ​
// // - How much has the window currently been scrolled?
// window.scrollY
// ​
// // - Can I scroll to a particular element?
// $section.scrollIntoView({ behavior:'smooth' })
// ​
// // - Can I scroll to a particular px position?
// window.scrollTo({left:0, top:0, behavior:'smooth'})
// ​
// // - What is the height(s) of any obstruction(s)?
// $section.getBoundingClientRect().height
// ​
// // - Can I capture when an element has triggered a `click` event?
// let $link = document.querySelector('.scroll-to')
// $link.addEventListener('click', event => { console.log('click') })
// ​
// // - Where is the anchor pointing?
// $link.getAttribute('href')
// ​
// ​
// // - Can I capture window events, like: `scroll`, `resize`, `hashchange`?
// window.addEventListener('scroll', event => { console.log('scroll') })
// window.addEventListener('resize', event => { console.log('resize') })
// window.addEventListener('hashchange', event => { console.log('hashchange') })