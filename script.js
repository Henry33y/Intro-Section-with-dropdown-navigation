const hamburgerBtn=document.querySelector('.hamburger-menu');
const closeBtn=document.getElementById('closeBtn');
const mobileSideBar=document.querySelector('.mobile-nav-container');
const dropDownLinks=document.querySelectorAll('.mydropdown-link');
const dropDownMenu=document.querySelectorAll('.mydropdown-menu')
const arrow=document.querySelectorAll('.arrow');
const dropDownLinks2=document.querySelectorAll('.mydropdown-link2');
const dropDownMenu2=document.querySelectorAll('.mydropdown-menu');


let opened=false;
hamburgerBtn.addEventListener('click',()=>{
    if(!opened){
        mobileSideBar.classList.add('opened');
        opened=true;
    }
    else{
        mobileSideBar.classList.remove('opened');
        opened=false;
    }
})
closeBtn.addEventListener('click',()=>{
    if(opened){
        mobileSideBar.classList.remove('opened');
        opened=false;
    }
})
let i;
for(i=0;i<dropDownLinks.length;i++){
    dropDownLinks[i].addEventListener('click',function(){
        this.nextElementSibling.classList.toggle('opened');
        arrow[i].classList.toggle('arrowUp');
    })
}

let opened2=false;
for(let i=0;i<dropDownLinks2.length;i++){
    dropDownLinks2[i].addEventListener('click',function(){
        if(!opened2){
            this.nextElementSibling.classList.add('opened2');
            this.nextElementSibling.classList.remove('closed');
            arrow[i+2].classList.add('arrowUp');
            opened2=true;
        }
        else{
            arrow[i+2].classList.remove('arrowUp');
            this.nextElementSibling.classList.remove('opened2');
            this.nextElementSibling.classList.add('closed');
            opened2=false;
        }
    })
}