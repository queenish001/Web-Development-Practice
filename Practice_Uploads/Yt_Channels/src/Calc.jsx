function add(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}
function mult(a, b){
    return a*b;
}
function div(a, b){
    let div = a/b;
    div = div.toFixed(5);
    return div;
}
export { add, sub, mult, div };