var popoverlay=document.querySelector('.overlay')
var pob=document.querySelector('.popbox')
var btn=document.getElementById('popbtn')

btn.addEventListener("click",function(){
    popoverlay.style.display="block"
    pob.style.display="block"
})


var cancelpopup=document.getElementById('cancel-popup')
cancelpopup.addEventListener("click",function(){
    popoverlay.style.display="none"
    pob.style.display="none"
})

var container=document.querySelector('.container')
var addbook=document.getElementById('add-book')
var booktitle=document.getElementById('book-title-input')
var bookauthor=document.getElementById('book-author-input')
var bookdesc=document.getElementById('book-description')

addbook.addEventListener("click",function(){
    var div=document.createElement('div')
    div.setAttribute("class","book-container")
    div.innerHTML= `<h1>${booktitle.value}</h1>
    <h3>${bookauthor.value}</h3>
    <p>${bookdesc.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    pob.style.display="none"
})

function del(event){
    event.target.parentElement.remove()
}