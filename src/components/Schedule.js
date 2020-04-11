import '../css/TabsNav.css'
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { getAllPlaylists,addScheduledEvent,getScehdaulsForChannel,updateSchedule,deleteSchedule} from  './Utils/Utils.js'
import './CalenderStyles.css'
import '../css/TabsNav.css'



class Calendar extends Component {

  calendarComponentRef = React.createRef();

  constructor(props){
    super(props)
    
      this.state = {
        calendarEvents: [],
        events: [],
        scheduledEvents: [],
        updatedEvents: [],
        channelId:""
      };
  }


  getLastSunday(d){
    var t = new Date(d);
    var lastSunday = t.setDate(t.getDate() - t.getDay());

    console.log(lastSunday)

    return t;
  }


  getNextSunday(d){

    var t = this.getLastSunday(d)
    var nextSunday = new Date(t.getTime()+ + 7 * 24 * 60 * 60 * 1000)
    console.log(nextSunday)

    return nextSunday;
  }


  populateCalendar(date){

    getScehdaulsForChannel(this.props.location.state._id)
    .then(
      data=>{

        console.log("OK",data)

        let obj = {id:"",title:"",start:null,end:null,playlist:""};

        let schedule = []

        for(let i = 0; i <data.data.length; i++){

          obj.id = data.data[i]._id
          obj.playlist=data.data[i].playlist._id
          obj.title = data.data[i].playlist.name
          obj.start = data.data[i].start_time
          obj.end = data.data[i].end_time

          schedule.push(obj)

          obj = {id:"",title:"",start:null,end:null};
        }
        this.setState({calendarEvents : schedule})


      })
  }

  componentDidMount() {

    this.setState({channelId:this.props.location.state._id})

    console.log(this.props.location.state._id)

    let CalendarState = this.calendarComponentRef.current.getApi().state;
    
    CalendarState.currentDate = new Date();
    
    let date  =CalendarState.currentDate  

    console.log(date)


    this.populateCalendar(date)

    getAllPlaylists().then(data=>{

        //TODO make this into a funtion

        let obj = {id:"",title:"",color:""};

        let playlists = [];

        for(let i=0; i<data.data.length; i++){

            obj.id  = data.data[i]._id;
            obj.title =data.data[i].name;
            obj.color = data.data[i].color;

            playlists.push(obj)
            obj = {id:"",title:"",color:""};
          }


        //-------------------------

        this.setState((prevState) => ({
          
          events: playlists
            
          }), 
          
          () => {
          
              console.log('After Element added', this.state);
          
              }); 
      })

    let draggableEl = document.getElementById("external-events");
    
    new Draggable(draggableEl, {
 
      itemSelector: ".fc-event",
      eventData: function(eventEl) {

        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
    
        return {
 
          title: title,
          id: id
 
        };
 
      }
 
    });

  }

  eventClick = eventClick => {
    
    Alert.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close"
    })
    .then(result => {
        if (result.value) {
    
          let id = eventClick.event._def.publicId

          deleteSchedule(id).then(data => {


            if(data !==null) {

            
            if(data.status === 200){
              eventClick.event.remove(); // It will remove event from the calendar
              Alert.fire("Deleted!", "Your Event has been deleted.", "success");
            }
            else{
              Alert.fire("Could not delete!", "Check Internet connection and try again.", "failed"); 
            }

          }

          else{
            Alert.fire("Could not delete!", "Something went wrong try reloading the page.", "failed"); 
            
          }
          })

        }
      });
    };


  appendToScheduledEvent(event,arg) {
    let obj =  arg;

    this.setState((prevState) => ({
      scheduledEvents: prevState.scheduledEvents.concat(event)

    }), 
    
    () => {
        console.log('After scheduledPlayList added', this.state);
        this.onSave(event,obj)
      }); 
    
  }


  appendToUpdateEvent(objUpdate){

    this.setState((prevState) => ({
      updatedEvents: prevState.updatedEvents.concat(objUpdate)

    }), 
    
    () => {
        console.log('After scheduledPlayList added', this.state);
        this.onUpdate(objUpdate)
      }); 

  }
  
  eventReceive = (arg) => { // bind with an arrow function
    
    console.log("eventRecived Called", arg);

     let test=arg.event
     let start=(test._instance.range.start).toUTCString()+"+0500";
     let end=(test._instance.range.end).toUTCString()+"+0500";


     let scheduledPlayList = {
       start_time: start,
       end_time: end,
       playlist: test._def.publicId,
     }    
    this.appendToScheduledEvent(scheduledPlayList,arg)
  }

  drop = (arg) => { // bind with an arrow function
    console.log("dropped called",arg)
    console.log("Delta Date: ",arg.endDelta)
    console.log("ID: ",arg.event._def.publicId)

    console.log(arg)

    let start =  arg.event._instance.range.start.toUTCString()+"+0500"
    let end =  arg.event._instance.range.end.toUTCString()+"+0500"
    let id = arg.event._def.sourceId

    if(id=="1"){
      id = arg.event._def.publicId;
    }

    let scheduledPlayList = {
      start_time: start,
      end_time: end,
      _id: id
    }    
   this.appendToUpdateEvent(scheduledPlayList)
    
  }

   


  eventResized = (arg) => {
    console.log("eventResized called",arg)
    console.log("Delta Date: ",arg.endDelta)
    console.log("ID: ",arg.event._def.publicId)
    console.log("new Range: ", arg.event._instance.range)

    let start =  arg.event._instance.range.start.toUTCString()+"+0500"
    let end =  arg.event._instance.range.end.toUTCString()+"+0500"
    let id = arg.event._def.sourceId

    console.log(arg)


    if(id=="1"){
      id = arg.event._def.publicId;
    }

    let scheduledPlayList = {
      start_time: start,
      end_time: end,
      _id: id
    }    
    this.appendToUpdateEvent(scheduledPlayList)
  }

  onSave = async (event,obj) => {
      
        console.log(event)

        let dataObj = await addScheduledEvent(this.props.location.state._id,event)

            obj.event._def.sourceId =   dataObj.data.saved._id ;

        console.log("ID AFTER", obj.event._def.sourceId)      
        
  }  



  onUpdate= (req) =>{

    console.log("ON UPDATE  ",req)
    let update = {
      start_time:req.start_time,  
      end_time:req.end_time,
    }

    console.log("UPDATED: ", req)

    updateSchedule(req._id,update).then(data=>{
      console.log(data)
    })


  }

  render() {
    return (
      <div className="animated fadeIn p-4 demo-app jackass" >
        <Row>

        <Col>
          
          <button id="SaveButton" >Save</button>
          
        </Col>



        </Row>


        <Row>



          <Col >
            <div
              id="external-events"
            >
              <p align="center">
                <strong> Playlists</strong>
              </p>
              {this.state.events.map(event => (
                <div
                  className="fc-event"
                  title={event.title}
                  data={event.id}
                  key={event.id}
                  id={event.id+" playlist"}
                >
                  {event.title}
                </div>
              ))}
            </div>
          </Col>



          <Col>
            <div className="demo-app-calendar" id="mycalendartest">
              <FullCalendar
                defaultView="timeGridWeek"
                header={{
                  left: "prev,next today",
                  center: "title",
                  right: "timeGridWeek,timeGridDay,listWeek"
                }}
               
                ignoreTimezone={true}
                rerenderDelay={0}
                eventDurationEditable={true}
                editable={true}
                droppable={true}
                defaultDate={new Date()}
                eventResizableFromStart = {true}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                ref={this.calendarComponentRef}
                weekends={this.state.calendarWeekends}
                events={this.state.calendarEvents}
                eventDrop={this.drop}
                eventDragStop =  {this.eventChanged}
                eventResize = {this.eventResized}
                eventReceive={this.eventReceive}
                eventClick={this.eventClick}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Calendar;