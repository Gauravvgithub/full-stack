

async function getdata(){

    let data = await fetch('https://randomuser.me/api/')

    let actualdata = await data.json()

    console.log(actualdata.results[0])
    

    
}
getdata();
