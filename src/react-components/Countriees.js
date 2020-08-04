import React from 'react';
import '../App.css';
import {MainData} from './Counrtyweather';
import Button from '@material-ui/core/Button';


class Countriees extends React.Component{
  constructor(props){
    super(props)
    this.state={
      search:'',
      disabled:true,
      ButtonCliked:false
    }
  }

  Showbutton = (e) =>{
    e.preventDefault();
    if(e.target.value.length>=1){
      this.setState({
        search:e.target.value,
        disabled:false,
        ButtonCliked:false
    })
  }else {
    this.setState({search:e.target.value,disabled:true,ButtonCliked:false})
  }
}

FunctionButton = ()=>{
  console.log('cliked');
  this.setState({ButtonCliked:true})
}



  render() {
    return(
      <div className="last-div">
      <div>
        <img  src="https://www.skymetweather.com/content/wp-content/uploads/2020/05/weather-forecast-fb-1.jpg" alt="weather report" style={{width:'500px',hieght:"50px"}} /> <br />
          <input type="text" name="country" style={{width:'500px',height:"50px",borderRadius:'5px',fontSize:"30px"}} value={this.state.search} onChange={(e) => this.Showbutton(e)} placeholder="search a country name"/> 
         <p>By Ramesh</p>
          <br /> <br /> 
         <p style={{color:"red"}}>you will able to see that capital weather report only...</p>
          {this.state.search ?
            <Button variant="contained" color="secondary" disabled={this.state.disabled}
            onClick={() => this.FunctionButton()} style={{marginBottom:"10px",marginTop:"0px"}}>
    search
  </Button>:null}
            <div>
            {this.state.ButtonCliked ? <MainData HandleButton={this.Searchfalse} SearchItem={this.state.search} />:null}
            </div>
        </div>
      </div>

    )
  }
}


export {Countriees};






















