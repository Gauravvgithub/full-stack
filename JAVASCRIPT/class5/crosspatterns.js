



/*let nst=10;
let nsp=0;

for(let row=1; row<=5; row++){
    for( let sp=1; sp<=nsp;sp++){
        process.stdout.write(" ")
    }
    for(let st=1; st<=nst;st++){
        process.stdout.write("* ")
    }
    console.log();

  
}  
    */

//Hollow square pattern
function hollowsqpattern(){
  let number = 5;
let string =''; 
for(let i=1; i<=number; i++){
  for(let j=1; j<=number; j++){
    if(i===1 || i===number){
      string += '*';
    }else if(true){
      if(j===1 || j===number){
        string += '*';
      }else{
        string +=' ';
      }
    }
    if (i===1 || i===number){
        string +='*'

    }

  }
  string += '\n';
}
console.log(string);
}
hollowsqpattern();
  


