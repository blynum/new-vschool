1. What are some of the differences between getElementById and getElementsByClassName?
*id - returns a single element/object from the document, class name (tag name) returns an array-like object.
    *id - needs an id to find
    *class name - needs a class to find
     i.e. document.getElementByTagName("div")

2. What will `.getElementsByClassName` return if there are no elements with the matching class in the document?
Return an empty array

3. What will `.getElementById` return if there is no element with the matching id in the document?
returns the JavaScript value of "null"

Practice:
`.getElementById`
`.getElementByClassName`
`.getElementByTagName`
`.querySelector`
`.querySelectorAll`