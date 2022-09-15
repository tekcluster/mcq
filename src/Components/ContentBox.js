import React from "react";
import Questions from "./Questions";
class ContentBox extends React.Component{
    constructor(props){
        super(props);
        this.state={change:0};
    }
    render(){
        if(this.state.change===0){
        return(
            <div style={{ display:'flex',flexFlow:'column',width:"94vw",boxShade:2,height:"70vh",marginTop:-15,border:'3px solid rgba(0, 0, 0,0.05)',backgroundColor:'whitesmoke',marginLeft:"3vw",justifyContent:'center',alignItems:"center"}}>
             <h1 style={{textAlign:'center'}}>Welcome {this.props.value[0]}!!!</h1> 
             <button style={{textAlign:'center',width:100,height:25,background:'green',border:'0',color:'white',borderRadius:20}} onClick={()=>{this.setState({change:1})}}>Start Test</button>  
            </div>
        );}
        return (<Questions  value={this.props.value}/>);
    }

}
export default ContentBox;
