import React, { Component } from 'react';
import Students from "./data.json";
import axios from "axios";

let key1=0;

const n=Students.students.length;
class Questions extends Component {
    constructor(props) {
        super(props);
    
        this.state={qno:0,selected:"",finish:1,Score:0,min:45,sec:0,color1:"black",submitc:'royalblue',submitt:'Next'};
        setInterval(()=>{
            if(this.state.min<10)
            this.setState({color1:"red"})
            if(this.state.sec==0&&this.state.min==0){
                this.setState({finish:0})
                this.finalSubmit();
            }
            if(this.state.sec==0){
            this.setState({ min:this.state.min-1})
            this.setState({sec:60})}
            else this.setState({ sec:this.state.sec-1});

        },1000)
       
    }
    async finalSubmit(){
        const book = {
         "name":this.props.value[0],
         "college":this.props.value[1],
         "email":this.props.value[2],
         "phone":this.props.value[3],
         "score":this.state.Score
        };
    
        axios
          .post('http://localhost:4000/', book)
          .then(() => console.log('Book Created'))
          .catch(err => {
            console.error(err);
          });
    }
  
    onformSubmit=()=>{
    
    const {qno,Score}=this.state;
    if(Students.students[this.state.qno].Answered===Students.students[this.state.qno].Ans)
        this.setState({Score:Score+1});
      
    if(this.state.qno===28 )
        this.setState({submitc:'red',submitt:'Submit'});
    if(this.state.qno===29){
        if(window.confirm("Do you really want to Submit?")){
        this.setState({finish:0})
     
        this.finalSubmit();}}
    else
        this.setState({qno:qno+1,selected:Students.students[qno+1].Answered});
    }


    onPrevious=()=>{
        const {qno,Score}=this.state;
        if(this.state.qno>0){
        if(Students.students[this.state.qno-1].Answered===Students.students[this.state.qno-1].Ans){
        this.setState({Score:this.state.Score-1});
        }
        this.setState({qno:qno-1});
        
        this.setState({selected:Students.students[this.state.qno-1].Answered});
        }

    }
    changeTime=(i)=>{
        if(i<10)
            return "0"+i
        return i

    }
    render() { 
        const {min,sec}=this.state;
        if(this.state.finish===1){
        const s=Students.students[this.state.qno].question
        const o=Students.students[this.state.qno].option
        return( 
            <div style={{position:'relative'}}>
            <div style={{position:'absolute',right:'4vw',top:-40}}><p style={{color:this.state.color1}}>Time-Left:-{this.changeTime(min)}:{this.changeTime(sec)}</p></div>
            <div style={{ display:'flex',flexFlow:'column',width:"94vw",boxShade:2,height:"70vh",marginTop:-15,border:'3px solid rgba(0, 0, 0,0.05)',backgroundColor:'whitesmoke',marginLeft:"3vw",justifyContent:'center',alignItems:"center"}}>
             <div style={{height:"39vh",width:"94vw",display:'flex',flexFlow:'column',alignItems:"center",background:'silver',overflowY:'scroll',justifyContent:'start'}}>{s.map((num)=><p  style={{marginTop:0}}    key={num+(key1++)} >{num}</p>)}</div>
             <div style={{height:"39vh",width:"94vw",display:'flex',flexFlow:'column' ,marginLeft:50}}>
                {o.map((num)=><div key={num+(key1++)} style={{margin:10}} ><input type="radio" value={num}   checked={this.state.selected===num} onChange={(e)=>{this.setState({selected:num}); Students.students[this.state.qno].Answered=num}}/><span>{num}</span><br></br></div>)}
                </div>
            <div style={{display:'flex'}}>
            <button style={{textAlign:'center',width:100,height:25,margin:5,background:'royalblue',outline:0,border:"0",color:'white'}} onClick={this.onPrevious}>Previous</button>  
            <button style={{textAlign:'center',width:100,height:25,margin:5,background:this.state.submitc,outline:0,border:"0",color:'white'}} onClick={this.onformSubmit}>{this.state.submitt}</button>  
           </div>
           
           </div>
           </div>
        );}
        return(
            <div style={{ display:'flex',flexFlow:'column',width:"94vw",boxShade:2,height:"vh",marginTop:-15,border:'3px solid rgba(0, 0, 0,0.05)',backgroundColor:'whitesmoke',marginLeft:"3vw",justifyContent:'center',alignItems:"center"}}>
        <h1>Your Test Finished</h1>
        <h2>Your Scores={this.state.Score}</h2>
        </div>);
    }
    
}
 
export default  Questions;