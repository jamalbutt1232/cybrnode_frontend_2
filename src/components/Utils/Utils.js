
import axios from 'axios'

const getIpaddress = async()=>{

    //let resp = await axios.get("http://127.0.0.1:4202/getip")

    return "35.226.22.56" +":4202"

}

let api = "/api/"
let media = 'medias/'
let upload= 'upload/'
let playlist = 'playlists/'
let scheduledplaylist = 'schedules/'
let device = 'devices/'
let channels = 'channels/'



const getServiceData = async (url,data=undefined) => {
        
    try {
        
        let resp=null;
         if(data === undefined)resp=  await axios.get(url)
         else{
               resp=  await axios.get(url,data) 
                console.log(resp)
            }
        return resp
        
    
    }
                  
    catch (error) {

        console.error(error)
        return null;

    }
      
};

const postServiceData = async (url, params) => {
    
    try {
        return await axios.post(url,params)
        }         
    
    catch (error) {
     
        console.error(error)
        return null;
  
    }
    
};

const deleteServiceData = async(url) => {


    try {
        
        let resp=  await axios.delete(url)
        
        return resp
        
    
    }
                  
    catch (error) {

        console.error(error)
        return null;

    }

};

const putServiceData = async (url, params) => {
    
    try {
        return await axios.put(url,params)
      
        }         
    
    catch (error) {
     
        console.error(error)
        return null;
  
    }
    
};


const addPlaylist = async (data)=>{

    let url =  "http://"+ await getIpaddress()+"/api/" + playlist
    return postServiceData(url,data)
}




const getAllPlaylists = async (data)=>{
    let url =  "http://"+ await getIpaddress()+"/api/" + playlist

    let resp= getServiceData(url)
   
    return resp


}




const getAllMedia = async (data)=>{
    let url =  "http://"+ await getIpaddress()+"/api/" + media

    let resp= getServiceData(url)
   
    return resp


}

const deleteMedia = async(id)=>{
    
    let url =  "http://"+ await getIpaddress()+"/api/" + media+id
    console.log(url)

    return deleteServiceData(url)

}




const addScheduledEvent = async(id,data)=>{

    let url =  "http://"+ await getIpaddress()+"/api/"+channels+id+"/"+ scheduledplaylist
    let response = postServiceData(url,data);

    return response
}


const uploadFile = async (data)=>{
    
    let url = "http://"+ await getIpaddress()+"/api/" + media +upload

    console.log(url)

    let response = postServiceData(url,data);
    
    console.log(response)
    
    return response

}

const getScehdauls = async (date1,date2)=>{
    console.log("THIS BC URL: ",'http://'+await getIpaddress()+api+scheduledplaylist+'/from/'+date1+'/to/'+date2)

    return axios.get('http://'+await getIpaddress()+api+scheduledplaylist+'/from/'+date1+'/to/'+date2)
}

const getScehdaulsForChannel = async(id)=>{

    //"api/channels/channelId/shedule"
    
    console.log("THIS BC URL: ",'http://'+await getIpaddress()+api+channels+id+"/"+scheduledplaylist)


    return axios.get('http://'+await getIpaddress()+api+channels+id+"/"+scheduledplaylist)



}

const updateSchedule = async(id,data)=>{

    //"api/channels/channelId/shedule"


    let url =  'http://'+await getIpaddress()+api+channels+id+"/"+scheduledplaylist+id

    return putServiceData(url,data)
}


const deleteSchedule = async(id) => {

    let url =  'http://'+await getIpaddress()+api+channels+id+"/"+scheduledplaylist+id

    return deleteServiceData(url)
}


const getAllDevices = async()=>{
    
    let url =  "http://"+ await getIpaddress()+"/api/" + device

    return getServiceData(url)

}

const addNewDevice = async(data)=>{
    
    let url =  "http://"+ await getIpaddress()+"/api/" + device

    return postServiceData(url,data)

}



const getAllChannels = async()=>{
    
    let url = "http://"+ await getIpaddress()+"/api/" + channels

    return getServiceData(url)
}



const addNewChannel = async(data)=>{
    
    let url = "http://"+ await getIpaddress()+"/api/" + channels

    return postServiceData(url,data)

}

const updateChannel = async(id,data)=>{
    
    let url = "http://"+ await getIpaddress()+"/api/" + channels+id
    console.log(url)

    return putServiceData(url,data)

}

const deleteChannel = async(id)=>{
    
    let url = "http://"+ await getIpaddress()+"/api/" + channels+id
    console.log(url)

    return deleteServiceData(url)

}




export  { 


        uploadFile,getAllMedia,deleteMedia,

        addPlaylist,getAllPlaylists,
          
        addScheduledEvent,getScehdaulsForChannel,getScehdauls,updateSchedule,deleteSchedule,
         
        getAllDevices,addNewDevice,
        
        getAllChannels,addNewChannel,updateChannel,deleteChannel
    

        };
