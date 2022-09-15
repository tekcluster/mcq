import React from "react";
import pic from "./images/logo.png"
export default function NavBar(){
    return(
        <div>
        <nav style={{paddingLeft:5, display:'flex',backgroundColor:'blue',alignItems:'center'}}>
            
            <img  style={{width:40,height:40}}   src={pic}></img>
            <h4 style={{color:'white',marginTop:35}}>Kongunadu College of Engineering and Technology</h4> 
        </nav>
        <h5 style={{textAlign:'center',marginTop:0,color:'green',fontSize:17,fontWeight:'bold',padding:0}}>Tek Cluster 2022</h5>
        <h5 style={{textAlign:'center',marginTop:0,color:'green',fontSize:16,fontWeight:'bold',marginTop:-20}}>Department of Computer Science and Engineering</h5>
        <h5 style={{textAlign:'center',marginTop:0,color:'green',fontSize:15,fontWeight:'bold',marginTop:-20}}>Code Cracker</h5>
        </div>
    );
}