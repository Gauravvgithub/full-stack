import axios from 'axios';


async function getdata(url){
    console.log("vikas")
    let response = await axios.get(url);

    console.log(response.data)

    console.log("chaudhary")

}

getdata( 'https://randomuser.me/api/')