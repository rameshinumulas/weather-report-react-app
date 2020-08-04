import React, { Fragment } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';



class WeatherR extends React.Component{
  constructor(){
    super()
    this.state={
      Weatherdata:[],
    }
  }
  componentDidMount(){
    const {Countrysearch} = this.props;
    console.log(`https://api.weatherstack.com/current?access_key=cc4d37ded5d706e23d86647a0ed4f816&query=${Countrysearch}`);
    axios.get(`http://api.weatherstack.com/current?access_key=cc4d37ded5d706e23d86647a0ed4f816&query=${Countrysearch}`)
    .then(responce=>{console.log(responce.data.current,'weather data,');
    this.setState({Weatherdata:responce.data.current,dailogOpen:true})
    console.log("hello");

  })
  .catch(responce=>{console.log(responce);})

  }

  
  render(props) {

   
    return(
      <div className="main-weather">

            <Dialog open={this.props.dailogOpen} size="">
                  <Box>
                  <Typography  style={{ padding: 20, background: "green",fontColor:'white' }} >
                  <p style={{color:"rgb(204,229,225)"}}>  {this.props.Countrysearch} Weather Details</p>
                  </Typography>
                  </Box>

                  {this.state.Weatherdata ?
                  <Box style={{marginLeft:'10%',marginRight:"10%", border:'0.5px solid grey',borderRadius:'0px', marginTop:'5%', boxShadow:"30px 30px 10px grey",backgroundColor:"rgb(204,229,225)"}}>
                    <Grid container xs={12} component="main" maxWidth="xs">
                          <Grid style={{ padding: 10}} >
                              Temperature<br></br>{this.state.Weatherdata.temperature}{'\u00b0'}c
                          </Grid>
                          <Grid  style={{ padding: 10,borderLeft:'1px solid grey'}}>
                                Weather Icons<br></br>
                                    <img
                                        src={this.state.Weatherdata.weather_icons}
                                        style={{ height: 60, width:100 }}
                                        alt="weather icon"
                                    />
                          </Grid>
                          <Grid item xs={3} style={{ padding: 10,borderLeft:'1px solid grey',borderRught:'1px solid grey'}}>
                                  Wind Speed<br></br>{this.state.Weatherdata.wind_speed}
                          </Grid>
                          <Grid item xs={3} style={{ padding: 10,borderLeft:'1px solid grey'}}>
                                  Rain-Probability<br></br>{this.state.Weatherdata.precip}
                          </Grid>
                          <Grid item xs={3} style={{ padding: 10,borderLeft:'1px solid grey'}}>
                                  Humidity<br></br>{this.state.Weatherdata.humidity}
                          </Grid>
                          <Grid item xs={3} style={{ padding: 10,borderLeft:'1px solid grey'}}>
                                  Observation-time<br></br>{this.state.Weatherdata.observation_time}
                          </Grid>

                    </Grid>
                  </Box>:<Box >
                              <Typography style={{ color: "#0000FF", textAlign: "center", marginBottom: 250, fontSize: "x-large" }}>
                                      please wait Going to update
                              </Typography>
                          </Box>    
  }
                      <Box style={{marginBottom:"10px",marginTop:"10px", marginLeft:'40%'}}>
                      <Button variant="contained" color="primary" style={{width:'20px'}}
                      onClick={this.props.handleClose}>
                        close
                      </Button>
                      </Box>

                      
                  </Dialog>
        </div>
    )
  }
}

export {WeatherR};
