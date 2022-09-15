import React, { Component } from 'react';
import user from "./Server/data.json"
class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state={data1:user.table}
        setInterval(this.checkNew,1000);
    }
    checkNew(){
        if(user.table.length!=this.state.data1.length){
            this.setState({data1:user.table});
        }
    }
   
    render() { 
     
        return ( 
          
            <div style={{ display:'flex',flexFlow:'column',width:"94vw",boxShade:2,height:"70vh",marginTop:-15,border:'3px solid rgba(0, 0, 0,0.05)',backgroundColor:'whitesmoke',marginLeft:"3vw",alignItems:"center"}}>
        <h1>Admin Page</h1>
        <div style={{width:"94vw",height:"65vh",overflowY:'scroll'}}>
            <table style={{width:"90vw",textAlign:"center",background:"silver",marginLeft:'2vw'}}>
                <thead style={{width:"90vw",background:'blue'}}>
                <th style={{border:"1px solid black"}}>Name</th>
               <th style={{border:"1px solid black"}}>College</th>
               <th style={{border:"1px solid black"}}>E-Mail</th>
               <th style={{border:"1px solid black"}}>Phone</th>
               <th style={{border:"1px solid black"}}>Scores</th>
                    
                </thead>
            {this.state.data1.map((e)=><tr key={e.phone}  style={{height:5}} >
               <td  style={{border:"1px solid black",width:"10vw"}}> {e.name}</td>
               <td style={{border:"1px solid black",width:"30vw"}}>{e.college}</td>
               <td  style={{border:"1px solid black",width:"20vw"}}> {e.email}</td>
               <td style={{border:"1px solid black",width:"20vw"}}> {e.phone}</td>
               <td style={{border:"1px solid black",width:"8vw"}}> {e.score}</td>
            </tr>)
            }
            </table>
            </div>
        </div>
         );
    }
}
 
export default AdminPage;