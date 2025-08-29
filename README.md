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

