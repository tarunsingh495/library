
let myLibrary = [];
const submit=document.querySelector(".btn");
const newbook=document.querySelector(".enter-book");
const form=document.querySelector(".form");
const body=document.querySelector("body");
const modal=document.querySelector(".modal");
const closeform=document.querySelector(".close-form");
const close=document.querySelectorAll(".close");
function Book(title,author,pages){
	this.title=title;
	this.author=author;
	this.pages=pages;
	this.info=function(){
		console.log(this.title,this.author,this.pages);
	}
}
function makeVisible(){
	modal.classList.add("pop-up");
}
function hideform(){
	modal.classList.remove("pop-up");
}
function addBookToLibrary() {
  let title=document.querySelector("input[name='book-name']").value;
  let author=document.querySelector("input[name='author']").value;
  let pages=document.querySelector("input[name='pages']").value;
  const book=new Book(title,author,pages);
  myLibrary.push(book);
  document.querySelector("input[name='book-name']").value="";
  document.querySelector("input[name='author']").value="";
  document.querySelector("input[name='pages']").value="";
  display(book);
  }

function remove(event){
	event.target.parentNode.remove();
}
function display(book){
	var div = document.createElement("div");
	div.classList.add("card");
	document.querySelector(".showcase").append(div);
	var close =document.createElement("BUTTON");
	close.addEventListener("click",remove);
	close.innerText="X";
	close.classList.add("close");
	div.append(close,"Book name : "+ book.title + "\n" +" Author name :" + book.author+"\n"+"Book Pages "+book.pages);
    }
submit.addEventListener("click",addBookToLibrary);
closeform.addEventListener("click",hideform);

 // sample card   
const Mybook = new Book("You dont know Js","Martin Luthur",3000);
myLibrary.push(Mybook);
display(Mybook);
newbook.addEventListener("click",makeVisible);  