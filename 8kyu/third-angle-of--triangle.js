//DESCRIPTION
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.


//SOLUTION
function otherAngle(a, b) {
    let c = 0;
    c = 180 - a - b;
    if (c < 0) {
        c *= -1
    }
    return c;
}