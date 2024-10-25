

async function getMeSomeData() {
    let data = await fetch('https://randomuser.me/api/')
    let actuldata= await data.json()
    console.log(actuldata);
    
}
getMeSomeData()