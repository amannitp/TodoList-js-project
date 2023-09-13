const userTask=document.querySelector("#input-box")
const addTask=document.querySelector('button')
const addtaskList= document.querySelector('#list-container')
 

addTask.addEventListener('click',function(e){
    console.log('button clicked')

if(userTask.value!==''){
   
   const list=document.createElement('li')
   list.innerHTML=userTask.value
   addtaskList.appendChild(list)

   let span=document.createElement('span')
   span.innerHTML='\u00d7';
   list.appendChild(span)
   //console.log(addtaskList.children)
}else{
    alert('You must write somethings')
}
userTask.value='' 
saveData()
  
})

addtaskList.addEventListener('click',function(e){

    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem('data',addtaskList.innerHTML)

}
function showTask(){
    addtaskList.innerHTML=localStorage.getItem("data")
}
showTask()
