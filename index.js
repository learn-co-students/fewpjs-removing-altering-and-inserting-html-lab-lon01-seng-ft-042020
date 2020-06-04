
// No longer has DOM node 'main#main'
document.querySelector("main#main").remove() ;

//Has a 'newHeader' variable that points to node 'h1#victory'
//With "YOUR-NAME is the champion" inside
const newHeader = document.createElement("h1") ;
newHeader.setAttribute("id", "victory") ;
newHeader.innerHTML = "YOUR-NAME is the champion" ; 

