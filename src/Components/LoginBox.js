import React from "react";
import AdminPage from "./AdminPage";
import ContentBox from "./ContentBox";
class LoginBox extends React.Component{
   
    constructor(){
        super();
        this.state={
            user:"",
            college:"",
            mail:"",
            phone:"",
            count:0,
        }
    
    }
    ChangeCount=()=>{
       if(this.state.user==="ADMIN@KONGUNADU"){
        this.setState({count:1})
       }
       else{
        this.setState({count:2})
       }
    }

    render(){
        const {count}=this.state;
        if(count===0){
        return(
            <div style={{ display:'flex',width:"94vw",boxShade:2,height:"70vh",marginTop:-15,border:'3px solid rgba(0, 0, 0,0.05)',backgroundColor:'whitesmoke',marginLeft:"3vw",justifyContent:'center',alignItems:'center',flexFlow:'column'}}>
                <h2>Student Details</h2>
                <input   type="text" style={{marginTop:15,borderRadius:30,border:'0',textAlign:'center', width:200,height:25}} placeholder="Name" required value={this.state.user} onChange={(e)=>{this.setState({user:e.target.value})}}></input>
                <input   type="text" style={{marginTop:15,borderRadius:30,border:'0',textAlign:'center', width:200,height:25}} placeholder="College Name"   required value={this.state.college} onChange={(e)=>{this.setState({college:e.target.value})}}></input>
                <input   type="email" style={{marginTop:15,borderRadius:30,border:'0',textAlign:'center', width:200,height:25}} placeholder="E-Mail Id"   required value={this.state.mail} onChange={(e)=>{this.setState({mail:e.target.value})}}></input>
                <input   type="text" style={{marginTop:15,borderRadius:30,border:'0',textAlign:'center', width:200,height:25}} placeholder="Mobile Number" required value={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}}></input>
                <button onClick={this.ChangeCount} style={{marginTop:25,background:'green',color:'white',border:'0',borderRadius:10,width:100,height:20}}>Submit</button>
            </div>
        );}
        else if(count===1){
        return(<AdminPage/>);}
        else{
            return(<ContentBox value={[this.state.user,this.state.college,this.state.mail,this.state.phone]} />);
        }
    }

}
export default LoginBox;
