// Menu data structure



var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//step 1
const mainEl = document.querySelector('main');
console.log(mainEl);
//step 2
mainEl.style.backgroundColor = 'var(--main-bg)'
//let backGroundColor = 'var(--main-bg)'
//step 3 
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
//step 4 
mainEl.classList = 'flex-ctr';

// Creating a menu bar 
//step 1
const topmenuEl = document.getElementById('top-menu')
console.log(topmenuEl);
// step 2
topmenuEl.style.height = ('100%')
// step 3
topmenuEl.style.backgroundColor = 'var(--top-menu-bg)'
//step 4 
topmenuEl.classList = 'flex-around';

//Adding Menu Buttons
//step 1 
menuLinks.forEach(function(link) {
  
  //step 2
  let linkEl = document.createElement('a')
  //step 3
  linkEl.setAttribute('href', link.href)
  //step 4 
  linkEl.textContent = link.text
  //step 5 
  topmenuEl.appendChild(linkEl)

  
})


// Part 2 

// Creating the Submenu 
//step 1 
const subMenuEl = document.getElementById ("sub-menu")
console.log("sub-menu element: ",subMenuEl)
//step 2
subMenuEl.style.height = "100%"
//step 3 
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
//step 4
subMenuEl.classList.add = ("flex-around")
//submenu 
//step 1 
subMenuEl.style.position = "absolute";
//step 2
subMenuEl.style.top = "0";



//Select and cache the all of the <a> elements 
//inside of topMenuEl in a variable named topMenuLinks.
 //step one 
const topmenuLinks = topmenuEl.querySelectorAll ("a")
const submenuStates = {};
 topmenuEL.addEventListener("click", function(event) {
 event.preventDefault();
  if(!event.target.matches("a")) {
    return;
  }
 const clickLink = event.target;
 topmenuLinks.forEach((link) => {
  link.classList.remove("active");
 })

 const clickedLinkedObject = menuLinks.find((linkObject).text === clickedLink.textContent);
clickedLink.classList.toggle("active");

if(clickLinkObject && clickLinkObject.subLinks) {
  if (submenuStates[clickedLinkedObject.text]) {
    subMenuEl.style.top = "0";
    subMenuEl.innerHTML ='';
    submenuStates[clickedLinkedObject.text] = false;
    } else {
      subMenuEl.style.top = "100%";
      buildSubmenu(clickedLinkedObject.subLinks);
      submenuStates[clickedLinkedObject.text] = true;
    }

} else {
  subMenuEl.computedStyleMap.top = "0";
  subMenuEl.innerHTML = '';
}

if (event.target.textContent === "about") {
  mainEl.innerHTML = "<h1>About</h1>";
} else {
  mainEl.innerHTML =`<h1>${event.target.textContent}</h1>`;

}

console.log("clicked link text: ", event.target.textContent);
 })

 function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = '';
  for (let link of subLinks) {
    letsubLinkElement = document.createElement("a");
    subLinkElement.setAttribute ("href" , link.href);
    subLinkElement.textContent = link.text;
    subMenuEl.appendChild(subLinkElement);
  }
 }

 subMenuEl.addEventListener("click",(event) => {
  event.preventDefault();
if(!event.target.matches("a")){
  return;
}

  subMenuEl.style.top = "0";
  topmenuLinks.forEach((link) => {
  link.classList.remove("active");
 });

mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  
// Log the content of the <a> to verify the handler is working
console.log("Clicked link text: ",event.target.textContent);
 })