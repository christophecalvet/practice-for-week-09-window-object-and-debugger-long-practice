export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`


//Search breadth-first traversal maybe overkill when no "loop" in the nodes
//Tree traversal correct solution but not binary

function searchTree(element, matchingId){
    if(element.id == matchingId){
         return element;
    }else if (element.children != null){
         var i;
         var result = null;
         for(i=0; result == null && i < element.children.length; i++){
              result = searchTree(element.children[i], matchingId);
         }
         return result;
    }
    return null;
}

return searchTree(document.body, id).cloneNode().outerHTML
//Close end up with <div id="header"></div> instead of <div id="header">
//There is probably a property to get only the left part.


    // Your code here
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    // Your code here
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here
}


function binaryTreeSearch(root, target) {

    // Base case: If the tree is null, return false
    if (root === null) return false;

    // If the current node's value equals the target, return true
    if (root.value === target) return true;

    // Otherwise, search the left subtree for the target
    if (binaryTreeSearch(root.left, target)) return true;

    // If the value isn't in the left subtree, try the right subtree
    return binaryTreeSearch(root.right, target);
}
