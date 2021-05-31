// var myName = prompt('guess my name: Ali,Ahmed')
// var myAge = prompt('guess my name: 25,24')
// while(myName =='Ali' || myAge == 25 )
// {if(myName =='Ali' && myAge == 25){
//   alert('will done')
//   break
// }else
//   alert('you should put Ali,25')
//   alert('try again')
//   myName = prompt('now change the name')
//   myAge = prompt('now change the age ')
//  if(myName =='Ali' && myAge == 25){
//    alert('will done')
//   break
// }else
//   alert('Iam sorry') 
// }


  
  


// var brother = prompt('How many sbiling do you have from 1 to 5')
// for(i=0 ;i <brother.length ;i++){
//   if(brother==1){document.write('<img src="https://i.pinimg.com/originals/10/b8/53/10b85361849501524864939f08620c6f.jpg">')}
//   if(brother==2){document.write('<img src="https://as1.ftcdn.net/jpg/03/08/22/46/500_F_308224689_kKRW06JLpsCg40CRkmET6SNlvuGcargA.jpg">')}
//   if(brother==3){document.write('<img src="https://image.shutterstock.com/image-vector/vector-siblings-silhouette-on-white-260nw-323075252.jpg">')}
//   if(brother==4){document.write('<img src="https://previews.123rf.com/images/majivecka/majivecka1510/majivecka151000170/45715979-vector-siblings-silhouette-on-a-white-background-.jpg">')}
//   if(brother==5){document.write('<img src="https://thumbs.dreamstime.com/b/vector-siblings-silhouette-white-background-60328877.jpg">')}

// }


let myName = prompt('guess my name: Ali,Ahmed')
let myAge = prompt('guess my name: 25,24')

while(myName !='Ali' || myAge != 25 ){
 myName = prompt('you should choice between: Ali,Ahmed')
 myAge = prompt('you should choice between: 25,24')
}
alert('will done')


function inf(firstName, age){
  console.log(firstName ,age)
  document.write('My name is:', firstName )
  document.write('My age is:', age , 'welcome to my page' )
}

inf (myName, myAge)
