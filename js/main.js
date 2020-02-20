let $doc = document.documentElement;
let $title = document.querySelector('.title');
let $barDiv = document.createElement("div");
let $titleCopyDiv = document.createElement("div");
let $progressDiv = document.createElement("div");

// CREATE THE DIV DYNAMICALLY

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

// $progressDiv.addEventListener('mouseover', event => {
//   $barClass.style.backgroundColor = 'rgb(211, 125, 12)';
//   event.stopPropagation();
// })
// $progressDiv.addEventListener('mouseout', event => {
//   $barClass.style.backgroundColor = 'rgba(211, 125, 12, 0.7)';
//   event.stopPropagation();
// })




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
  console.log(`Scroll position is ${scrolledPxY}`)
  console.log(`You've scrolled through ${hasBeenScrolled}% of the page.`)

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





