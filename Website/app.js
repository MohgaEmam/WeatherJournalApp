const response = async

const url='api.openweathermap.org/data/2.5/weather?q=' 

const apiKey = "e290b09f9a8816e3568a9e40b1fb9ef3";

//get Entry from user
const getEntry = async(url+city+apiKey ) =>{    
    const res = await fetch(url) 
    try{
        const data = res.json();
        console.log("khushal is best "+ data);
   }catch{
        console.log("error");
    }
};


const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
             return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}
