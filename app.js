var myName = prompt('guess my name: Ali,Ahmed')
var myAge = prompt('guess my name: 25,24')
while(myName =='Ali' || myAge == 25 )
{if(myName =='Ali' && myAge == 25){
  alert('will done')
  break
}else
  alert('you should put Ali,25')
  alert('try again')
  myName = prompt('now change the name')
  myAge = prompt('now change the age ')
 if(myName =='Ali' && myAge == 25){
   alert('will done')
  break
}else

 alert('Iam sorry') 
}


  
  


var brother = prompt('How many sbiling do you have from 0 to 5')
for(i=0 ;i <brother ;i++){
  document.write('<img src="https://www.cancer.net/sites/cancer.net/files/styles/blog_media/public/siblings-blog.jpg?itok=3hlQFNDI"> ', i)
}