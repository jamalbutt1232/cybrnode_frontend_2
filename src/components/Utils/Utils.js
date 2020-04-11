
import axios from 'axios'

import Alert from "sweetalert2";

axios.defaults.headers.common = {'Authorization': 'bearer '+localStorage.getItem('token')}

let deployed=false;

const getIpaddress = async()=>{


    if (!deployed){
        
            let resp = await axios.get("http://127.0.0.1:4202/getip")
        
            console.log(resp)

            return resp.data.ip +":4202"
    }

    else{
        return "35.226.22.56" +":4202"
    
    }

}

let api = "/api/"
let media = 'medias/'
let upload= 'upload/'
let playlist = 'playlists/'
let scheduledplaylist = 'schedules/'
let device = 'devices/'
let channels = 'channels/'
let users = 'user/'
let signup = 'register'
let login = 'login'


const getServiceData = async (url,data=undefined) => {

    console.log("get requests to: "+url)
        
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

    console.log("post requests to: "+url)

    
    try {
        return await axios.post(url,params)
        }         
    
    catch (error) {
     
        console.error(error)
        return null;
  
    }
    
};

const deleteServiceData = async(url) => {

    console.log("delete requests to: "+url)

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

    console.log("put requests to: "+url)

    try {
        return await axios.put(url,params)
      
        }         
    
    catch (error) {
     
        console.error(error)
        return null;
  
    }
    
};



const displayMessageOnNewEntry = (data)=>{

    if (data!==null){

        if(data.statusText=="OK"){
    
            Alert.fire({
                icon: 'success',
                title: 'New Entry',
                text: 'New Device Added',
              })

              setTimeout(()=>{ 

                window.location.reload();

             }, 
             
             1000);


            }

            else{

                Alert.fire({
                    icon: 'error',
                    title: 'Something went wrong...',
                    text: 'Try again',
                  })

            }

    }


    else {
        Alert.fire({
            icon: 'error',
            title: 'Looks like we ran into a problem...',
            text: 'Try again',
          })

    }


};

const addPlaylist = async (data)=>{

    let url =  "http://"+ await getIpaddress()+"/api/" + playlist
    return postServiceData(url,data)
}


const deletePlaylist = async(id)=>{

    let url =  "http://"+ await getIpaddress()+"/api/" + playlist+id
    return deleteServiceData(url)


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


const getDeviceStatus = async(key)=>{

    let url =  "http://"+ await getIpaddress()+"/api/" + device +"key/"+key

    return getServiceData(url)

}

const addNewDevice = async(data)=>{
    
    let url =  "http://"+ await getIpaddress()+"/api/" + device

    return postServiceData(url,data)

}


const assignChannelToDevice = async(data,key)=>{

    let url = "http://"+ await getIpaddress()+"/api/" +device + key



    return putServiceData(url,data)

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



const SignUpNewUser = async (data)=> {

    let url =  "http://"+ await getIpaddress()+"/api/" +users + signup
    return postServiceData(url,data)

}

const Login = async(data)=> {
    let url =  "http://"+ await getIpaddress()+"/api/" +users + login


    return postServiceData(url,data)

}





export  { 

        uploadFile,getAllMedia,deleteMedia,

        addPlaylist,getAllPlaylists,deletePlaylist,
          
        addScheduledEvent,getScehdaulsForChannel,getScehdauls,updateSchedule,deleteSchedule,
         
        getAllDevices,addNewDevice,getDeviceStatus,assignChannelToDevice,
        
        getAllChannels,addNewChannel,updateChannel,deleteChannel,

        displayMessageOnNewEntry,

        SignUpNewUser,Login
    

        };
