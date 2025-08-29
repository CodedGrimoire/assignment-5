

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
The Selectors API provides methods that make it quick and easy to retrieve Element nodes from the DOM by matching against a set of selectors. This is much faster than past techniques, wherein it was necessary to, for example, use a loop in JavaScript code to locate the specific items you needed to find.
This specification adds two new methods to any objects implementing the Document, DocumentFragment, or Element interfaces:

querySelector()
Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.

querySelectorAll()
Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.
1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
	•	getElementById("id") selects a single element with the given id. It returns only one element (or null if none is found).
	•	getElementsByClassName("class") returns a live HTMLCollection of all elements with that class. “Live” means if new elements with that class are added to the DOM, the collection updates automatically.
	•	querySelector("selector") returns the first element that matches a CSS selector (like .class, #id, div > p).
	•	querySelectorAll("selector") returns a static NodeList of all matching elements. “Static” means it does not update when new elements are added.
	•	In short: use getElementById for unique IDs, getElementsByClassName for multiple elements by class, and querySelector/querySelectorAll when you want the flexibility of CSS selectors.
2. How do you **create and insert a new element into the DOM**?
	•	You can create a new element using document.createElement("tagName"). For example: let newDiv = document.createElement("div");.
	•	To add text inside it, you can use textContent or innerHTML. Example: newDiv.textContent = "Hello World!";.
	•	Once created, you insert it into the DOM using methods like appendChild(), prepend(), before(), after(), or append().
	•	For example: document.body.appendChild(newDiv); will add it to the end of the body.
	•	You can also attach classes, IDs, or attributes before inserting. Example: newDiv.classList.add("box");.
	•	This process lets you dynamically update the webpage content without reloading it.
3. What is **Event Bubbling** and how does it work?
Event Bubbling and how it works
	•	Event bubbling is a mechanism where an event starts from the target element and then “bubbles up” through its ancestors in the DOM tree.
	•	For example, if you click on a <button> inside a <div>, the click event first fires on the button, then on the div, then on the body, and so on until it reaches the root (document).
	•	This means multiple event handlers on parent elements can be triggered from a single child action.
	•	By default, most events in JavaScript bubble unless explicitly stopped.
	•	Bubbling makes it easier to handle events at a higher level (like attaching one listener to a container instead of many children).
	•	However, it can sometimes cause unwanted side effects, which is why we might need stopPropagation().
4. What is **Event Delegation** in JavaScript? Why is it useful?
 Event Delegation in JavaScript
	•	Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to each child.
	•	Because of event bubbling, the parent can “catch” events triggered by its children.
	•	For example, instead of adding a click listener to every list item <li>, you add it to the parent <ul> and check event.target to know which <li> was clicked.
	•	This makes the code more efficient since fewer listeners are attached.
	•	It also handles dynamically added elements without needing to reattach listeners.
	•	Event delegation is especially useful in large applications where many child elements may be created or destroyed dynamically.

⸻

5. What is the difference between **preventDefault() and stopPropagation()** methods?

5. Difference between preventDefault() and stopPropagation()
	•	preventDefault() is used to stop the default browser behavior of an element. For example, it prevents a form from submitting, a link from navigating, or a right-click from opening the context menu.
	•	stopPropagation() prevents the event from bubbling up the DOM tree. The event will still run on the target element but won’t trigger handlers on its parent elements.
	•	Example: On a link inside a <div>, preventDefault() will stop navigation, while stopPropagation() will stop the div’s click handler from firing.
	•	They are often used together but solve different problems: one stops browser defaults, the other stops event bubbling.
	•	If you want maximum control, you can also use stopImmediatePropagation(), which prevents bubbling and also stops other handlers on the same element.
