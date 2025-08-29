<---- Ans of the Question No 1: ---->
Difference between getElementById, getElementsByClassName, querySelector and querySelectorAll

getElementById ---> by this we can select a single element with id. a id given only one time. i.e. one id for one elements. two or more elements cannot bear same id. So, getElementById select a single element and return a single element. 
getElementsByClassName ---> by this we can select all elements with similar class. same things that we want to do with an element then we use class name and to select those class we use getElementByClassName. it selects all elements of same class name and return a html collection with same classname.
querySelector ---> queryselector select only first element of css selector and return a single element. 
querySelectorAll ---> querySelectorAll selects all select all matches css selector like as classes. 




<----- Ans of the Question No 2: ----->
As how i create and insert new element into the DOM: 

to create a new element into the DOM i use document.createElement() and inside parenthesis i put what element i want to create. if i want to create a div then write document.createElement("div");
we also add text, class, id by .innerText, .className, .id
suppose: 
const newDiv = document.createElement("div");
newDiv.innerText = "Hi, this is Emran.";
newDiv.className = "header";
newDiv.id = "header"
this will add like: 
<div class="header" id="header">
  Hi, this is Emran.
</div>

to insert a new element into the DOM we can use appendChild(), prepend(), insertBefore() etc. 
const parent = document.getElementById("parentDiv");
const reference = document.getElementById("referenceDiv")
parent.appendChild(newDiv); 
parent.prepend(newDiv);
parent.insertBefore(newDiv, reference);
.appendChild insert at the end of elements, .prepend insert at the beginning and .insertBefore insert before reference elements. 



<----- Ans of the Question No 3: ----->
Event Bubbling and how it works: 

Event Bubbling is a process in JavaScript where an event triggered on a child element automatically “bubbles up” to its parent elements. when we click or interact with an element, the event first runs on that element and then moves upward through its parent, grandparent, and go upper. 
Event bubbling works when an event triggered on a child element it automatically move up through its parent elements. When an event like a click, mouseover, keyup or others occurs, it first runs on the element itself, then bubbles up to its parent, grandparent, and so on,


<---- Ans of the Question No 4: ------->
Event Delegation in js and its usefulness

Event Delegation in js is a technique to attach a single event listener to a parent element instead of using multiple event listener. it is useful because when we use this we have not use to multiple event listener. it reduce the number of event listeners which improves performance. by using this our code goes easy to maintable, clean and more efficient. 



<---- Ans of the Question No 5: ----->
difference between preventDefault() and stopPropagation()

preventDefault() stops the default action of an element from happening. for example, if a link clicked then it will normally navigate to another page or url what link href contains. but if preventDefault() use it stop its default behaviour. 

stopPropagation() stops the event from bubbling up the DOM. it prevents parent elements event listeners from being triggerd by this event, but it does not stop the defualt browser action. 
