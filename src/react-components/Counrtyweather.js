

import React from 'react';
import {WeatherR} from './weather';
import axios from 'axios';

import MUIDataTable from "mui-datatables";
import { Button, Paper } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';



class MainData extends React.Component{
  getMuiTheme = () => createMuiTheme({
    overrides: {

      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "lightslategray"
        }
      },

    }
  })
  constructor(){
    super()
    this.state={
      isButtonclicked:false,
      Countryname:'',
      Data:[],
      dailogOpen:false,


    }
  }

  componentDidMount(){
    axios.get("https://restcountries.eu/rest/v2/")
    .then(res=>{console.log(res);
      this.setState({Data:res.data})
    })
    .catch(responce=>{console.log(responce);})
  }


 

  Close =() => {
    this.setState({isButtonclicked:false,dailogOpen:false})
  }

  WeatherBUtton = (e)=>{
    console.log("comming")
    console.log(e,'comming')

    this.setState({isButtonclicked:true,Countryname:e,dailogOpen:true})
  }


  render() {
    const {Data}=this.state
    const filterCountry = Data.filter(count =>{
      return count.name.toLowerCase().includes(this.props.SearchItem.toLowerCase());
    })
    console.log(filterCountry,"filterdata")

    const columns = [
      {
       name: "name",
       label: "Name",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "capital",
       label: "Capital",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
       name: "population",
       label: "Population",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
       name: "region",
       label: "Region",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
        name: "latlng",
        label: "Lattitude-langitude",
        options: {
         filter: true,
         sort: false,
        }
       },
      {
        name: "flag",
        label: "National flag",
        options: {
         filter: true,
         sort: false,
         customBodyRender: (value) => {
          return (
            <img style={{ with: 40, height: 40 }}
            src={value}
            alt="NAtional Flag"
            />
            )
          }
        }
       },
       {
        name: "capital",
        label: "capital weather info button",
        options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          return (
            <Button color="primary" variant="contained" onClick={()=>this.WeatherBUtton(value)}
          >{value}</Button>
            )
          }
      }
      }
     ];
    const options = {
      selectableRows: false,
      filter: false,
      search: false,
      download: false,
      viewColumns: false,
      print: false,
     };
    return(
      <div>
      <div className="fix">
      <Paper elevation={3} style={{marginBottom:90}}>
      <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable 
                title={"List of countries"} 
                data={filterCountry} 
                columns={columns} 
                options={options} 
              />
     </MuiThemeProvider>
     </Paper>

      </div>
                <div>
                    {this.state.isButtonclicked ? <WeatherR Countrysearch={this.state.Countryname} dailogOpen={this.state.dailogOpen} handleClose={this.Close}/>:null}
                </div>

      </div>

    );
  }
}

export {MainData};
