

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

	Ans: querySelector() and querySelectorAll() are selector API's that provides methods to retrieve element nodes from the DOM by matching against a set of selectors.But they differ in the sense that querySelector() returns only the first matching element node within the subtree whereas querySelectorAll() returns the first matching element node withing a subtree.On the other hand,getElementById("id") selects a single element with a given id and returns only one element rather than entire node and querySelectorAll("selector") returns a static NodeList of all matching elements. “Static” means it does not update when new elements are added.All of these API's return null if no matching node is not found.So in short,getElementById is used for unique IDs, getElementsByClassName for multiple elements by class,querySelector/querySelectorAll when we want the flexibility of CSS selectors.

2. How do you **create and insert a new element into the DOM**?
	
	 Ans: We can create a new element using document.createElement("tagName").
	 For example: let newDiv = document.createElement("div");.Then after creating we have to append it nto the existing DOM using methods like appendChild(),append(),prepend(). Based on the method structures we can append the new elements before,after, inside any elements.For example,
	 document.body.appendChild(newDiv); will add it to the end of the body.
	
3. What is **Event Bubbling** and how does it work?
	
	Ans: Event bubbling is a mechanism where an event starts from the target element and then “bubbles up” through its ancestors in the DOM tree,which means multiple event handlers on parent element can be triggered from a single child action,which may sometime unwanted side effects.Event bubbling essentially means if an event happens in a leaf element or node it would hierarchically grow upwards to the root node,like if we click on a <button> inside a <div> then the click event is first fired on the button,then on the div,hen on to the body until it reaches the root.

4. What is **Event Delegation** in JavaScript? Why is it useful?

	Ans: Event delegation is a mechanism where we attach a single event listener to a parent element instead of multiple listeners to each child so that when event bubbling happens the parents can catch events. triggered by its children.It reduces redundant event listeners in child elements.For example: if we add listener in <ul> rather than adding it in every list item in the <ul> then it would serve the same purpose while making the code more efficient.
	

5. What is the difference between **preventDefault() and stopPropagation()** methods?

	Ans:Difference between preventDefault() and stopPropagation() is that preventDefault() is used to stop the default browser behavior of an element. For example, it prevents a form from submitting, a link from navigating etc. whereas stopPropagation() prevents the event from bubbling up the DOM tree meaning, the event will still run on the target element but won’t trigger handlers on its parent elements.So, one stops browser defaults, the other stops event bubbling.
	
