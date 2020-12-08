import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Container,Button, Modal, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn,Table } from 'semantic-ui-react';
import { uptime } from 'os';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { thisTypeAnnotation } from '@babel/types';
import TopMenu from './TopMenu'
import { Link } from 'react-router-dom';
import App from '../App'
var w = 0;
var hold = [];
var holding = '';
var sourceOption;
var source;
var sResult = ''
var manu = ''
var desc = ''
var docCreate = ''
var Lab = ''
var createDa = ''
var reportNum = ''
var catNum = ''
var spect = '';
var z;
var historia = [];
var refreshed;
var type = '';
var tech = '';


var place;
var holdurl;
//window.onpopstate = checkState;



/* function checkState(e){
  // page reload 
 holdurl = e.replace(/%/g, ' ')
 holdurl = holdurl.replace(/20/g, '') 
 holdurl = holdurl.replace("http://localhost:3000/tab-", " ")
 showContent(holdurl);
  
}

function showContent(id){
  
}  */

/*  Filter option*/
const applicationTypeOptions = [
  {
    key: 'Choose any application',
    text: 'Choose any application',
    value: 'Choose any application'
  },

  {
    key: 'A-Type',
    text: 'A-Type',
    value: 'A-Type'
  },
  {
    key: 'Decorative',
    text: 'Decorative',
    value: 'Decorative'
  },
  {
    key: 'Directional',
    text: 'Directional',
    value: 'Directional'
  },
  {
    key: 'Small Directional',
    text: 'Small Directional',
    value: 'Small Directional'
  },
  {
    key: 'Downlighting',
    text: 'Downlighting',
    value: 'Downlighting'
  },
  {
    key: 'Linear Fixture',
    text: 'Linear Fixture',
    value: 'Linear Fixture'
  },
  {
    key: 'Low/High Bay',
    text: 'Low/High Bay',
    value: 'Low/High Bay'
  },
  {
    key: 'Indoor other',
    text: 'Indoor other',
    value: 'Indoor other'
  },
  {
    key: 'Parking Lot',
    text: 'Parking Lot',
    value: 'Parking Lot'
  },
  {
    key: 'Parking Garage',
    text: 'Parking Garage',
    value: 'Parking Garage'
  },
  {
    key: 'Street/Roadway',
    text: 'Street/Roadway',
    value: 'Street/Roadway'
  },
  {
    key: 'Building Exterior',
    text: 'Building Exterior',
    value: 'Building Exterior'
  },
  {
    key: 'Outdoor Other',
    text: 'Outdoor Other',
    value: 'Outdoor Other'
  },
  {
    key: 'Connected',
    text: 'Connected',
    value: 'Connected'
  },

  {
    key: 'Spiral',
    text: 'Spiral',
    value: 'Sprial'
  },
  {
    key: 'Medical',
    text: 'Medical',
    value: 'Medical'
  }
]

const typeOptions = [
  {
    key: 'Choose any type',
    text: 'Choose any type',
    value: 'Choose any type'
  },
  {
    key: 'Broadband',
    text: 'Broadband',
    value: 'Broadband'
  },
  {
    key: 'CM',
    text: 'CM',
    value: 'CM'
  },
  {
    key: 'Filtered',
    text: 'Filtered',
    value: 'Filtered'
  },
  {
    key: 'Halogen',
    text: 'Halogen',
    value: 'Halogen'
  },
  {
    key: 'HPS',
    text: 'HPS',
    value: 'HPS'
  },
  {
    key: 'HY',
    text: 'HY',
    value: 'HY'
  },
  {
    key: 'Krypton',
    text: 'Krypton',
    value: 'Krypton'
  },
  {
    key: 'Mercury',
    text: 'Mercury',
    value: 'Mercury'
  },
  {
    key: 'MH',
    text: 'MH',
    value: 'MH'
  },
  {
    key: 'Narrowband',
    text: 'Narrowband',
    value: 'Narrowband'
  },
  {
    key: 'Neodymium',
    text: 'Neodymium',
    value: 'Neodymium'
  },
  {
    key: 'PC',
    text: 'PC',
    value: 'PC'
  },
  {
    key: 'PC-Filter',
    text: 'PC-Filter',
    value: 'PC-Filter'
  },
  {
    key: 'PC-NR',
    text: 'PC-NR',
    value: 'PC-NR'
  },
  {
    key: 'Standard',
    text: 'Standard',
    value: 'Standard'
  },
  {
    key: 'UN',
    text: 'UN',
    value: 'UN'
  },
  {
    key: 'Lamp',
    text: 'Lamp',
    value: 'Lamp'
  },
  {
    key: 'Luminaire',
    text: 'Luminaire',
    value: 'Luminaire'
  },
  {
    key: 'Retrofit Kit',
    text: 'Retrofit Kit',
    value: 'Retrofit Kit'
  },
  {
    key: 'No Distinction',
    text: 'No Distinction',
    value: 'No Distinction'
  },
  {
    key: 'Other',
    text: 'Other',
    value: 'Other'
  }

]

const technologyOptions = [
  {
    key: 'Choose any technology',
    text: 'Choose any technology',
    value: 'Choose any technology'
  },
  {
    key: 'Fluorescent',
    text: 'Fluorescent',
    value: 'Fluorescent'
  },
  {
    key: 'HID',
    text: 'HID',
    value: 'HID'
  },
  {
    key: 'Incandescent',
    text: 'Incandescent',
    value: 'Incandescent'
  },
  {
    key: 'Laser Diode',
    text: 'Laser Diode',
    value: 'Laser Diode'
  },
  {
    key: 'LED',
    text: 'LED',
    value: 'LED'
  },
  {
    key: 'OLED',
    text: 'OLED',
    value: 'OLED'
  },
  {
    key: 'Other',
    text: 'Other',
    value: 'Other'
  },
  {
    key: 'Plasma',
    text: 'Plasma',
    value: 'Plasma'
  }

]
/*------------------------------*/

const initialState = { activeItem: 'home', serverName: 'temp', fastArray: [], isLoading: false, results: [], results_for_table: [], value: '', there: false }
const resultRenderer = ({ title }) => <Label content={title} />

export default class Searching extends Component {

  constructor(props) {
    super(props);
    this.state = { activeItem: '' }
    this.state = { serverName: 'temp' }
    this.state = { search: '' }
    this.state = { lighting: [] }
    this.state = { ligtingInstClicked: false }
    this.state = { fastArray: [] }
    this.state = { there: false }
    /*variables for filter feature 11/20/2020 */
    this.state = {results_for_table:[]}
    this.check_app=false;
    this.re_app = '';
    this.check_type=false;
    this.re_type = '';
    this.check_tech=false;
    this.re_tech = '';
    /*----------------------------*/
  }

  handle_search = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  }
  state = initialState

  componentDidMount() {
    this.getProducts();

  }

  componentWillUnmount = () => {
    this.setState({ lightingInstClicked: false })
  }


  handleResultSelect = (e, { result }) => {
    refreshed = result;
    this.setState({ value: result.title })
    historia.push((result.title));
    sResult = (result.title);
    manu = (result.manufacturer)
    desc = (result.Description)
    docCreate = (result.DocumentCreator)
    Lab = (result.Labratory)
    createDa = (result.CreationDate)
    reportNum = (result.ReportNumber)
    catNum = (result.CatalogNumber)
    spect = (result.SpectraSearchID)
    type = (result.type)
    tech = (result.technology)
    console.log(refreshed)
    this.setState({ lightingInstClicked: true });
    //this.TabClicked(sResult)
  }




  handleSearchChange = (e, { value }) => {
    document.getElementById("pic").classList.add("playing");
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      /*if (this.state.value.length < 1) return this.setState(initialState)*/ 
      /*don't know why put this code, 
      this code will erase whole data from database once serch bar be clear.
      uncertain functionality. 
      maybe potantial bugs. 11/20/2020 */

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)
      console.log(_.filter(source, isMatch))
      console.log(value)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }
/********************* filter feature 11/20/2020 ********/
  handleFilterChange = (v) => {
    console.log("filter input:"+v)
    const isInOptions = (currentOption) => currentOption['value'] === v;
    setTimeout(() => {
      
      if (applicationTypeOptions.some(isInOptions) && v !== "Choose any application"){
        this.check_app = true
        this.re_app = new RegExp(_.escapeRegExp(v), 'i')
        
      } else if (v === "Choose any application"){
        this.check_app=false
      }

      if (typeOptions.some(isInOptions) && v !== "Choose any type"){
        this.check_type=true
        this.re_type = new RegExp(_.escapeRegExp(v), 'i')
        
      } else if (v === "Choose any type"){
        this.check_type=false
      }

      if (technologyOptions.some(isInOptions) && v !== "Choose any technology"){
        this.check_tech=true
        this.re_tech = new RegExp(_.escapeRegExp(v), 'i')
        
      } else if (v === "Choose any technology"){
        this.check_tech=false
      }
      /*--------------------------------------------------*/
      this.setState({results_for_table:this.state.fastArray})
      console.log(this.state.results_for_table)
      if (this.check_app){
        var isMatch_app = (result) => this.re_app.test(result.application)
        this.setState({results_for_table:_.filter(this.state.results_for_table, isMatch_app)})
        console.log("re_app:"+this.re_app)
        console.log("check_app:"+this.check_app)
        console.log("application results:")
        console.log(this.state.results_for_table)
      }

      if (this.check_type){
        var isMatch_type = (result) => this.re_type.test(result.type)
        this.setState({results_for_table:_.filter(this.state.results_for_table, isMatch_type)})
        console.log("re_type:"+this.re_type)
        console.log("check_type:"+this.check_type)
        console.log("type results:")
        console.log(this.state.results_for_table)
      }

      if (this.check_tech){
        var isMatch_tech = (result) => this.re_tech.test(result.technology)
        this.setState({results_for_table:_.filter(this.state.results_for_table, isMatch_tech)})
        console.log("re_tech:"+this.re_tech)
        console.log("check_tech:"+this.check_tech)
        console.log("tech results:")
        console.log(this.state.results_for_table)
      }
      
      

      this.setState({
        isLoading: false,
      })
      
    }, 500)
  }

  handleResultSelect_filter = (result) => {
    refreshed = result;
    this.setState({ value: result.title })
    historia.push((result.title));
    sResult = (result.title);
    manu = (result.manufacturer)
    desc = (result.Description)
    docCreate = (result.DocumentCreator)
    Lab = (result.Labratory)
    createDa = (result.CreationDate)
    reportNum = (result.ReportNumber)
    catNum = (result.CatalogNumber)
    spect = (result.SpectraSearchID)
    type = (result.type)
    tech = (result.technology)
    console.log(refreshed)
    this.setState({ lightingInstClicked: true });
    //this.TabClicked(sResult)
  }

/*********************/
  handleItemClick = () => {
    window.location.href = '';
    alert("you clicked login");
  }

  handleUploadClick = () => {
    window.open("uploadpage.jsx")
  }
  holding = '/instrument' + spect;
  getProducts = _ => {
    fetch('http://localhost:4000/lighting')
      .then(response => response.json())
      .then(_ = (response) => {
        this.setState({ lighting: response.data, serverName: Object.values(response.data) })
        for (z = 0; z < this.state.serverName.length; z++) {
          sourceOption =
          {
            "title": this.state.serverName[z].Name,
            "manufacturer": this.state.serverName[z].Manufacturer,
            "Description": this.state.serverName[z].Description,
            "DocumentCreator": this.state.serverName[z].DocumentCreator,
            "Labratory": this.state.serverName[z].Laboratory,
            "CreationDate": this.state.serverName[z].ReportDate,
            "ReportNumber": this.state.serverName[z].ReportNumber,
            "CatalogNumber": this.state.serverName[z].CatalogNumber,
            "SpectraSearchID": this.state.serverName[z].SpectraSearchID,
            "application":this.state.serverName[z].Application,
            "type": this.state.serverName[z].Type,
            "technology": this.state.serverName[z].Technology
          }
          if (hold.length < this.state.serverName.length) {
            hold.push(sourceOption);
          }
        }

        this.setState({ fastArray: hold , results_for_table: hold});
      })
      .catch(err => console.error(err))
  }

  creator = this.state.serverName

  columns () {
    return [
      {key: 'title', label: 'title'},
        {key: 'application', label: 'application'},
        {key:'type', lable:'type'},
        {key:'technology', label:'technology'},
        {key: 'color', label: 'Color', cell: (obj, key) => {
            return <span>{ obj[key] }</span>;
        }}
    ];
  }
  


  render() {

    holding = '/instrument' + spect;
    //this.componentDidMount();
    const { activeItem } = this.state

    source = this.state.fastArray
    var { lighting, lightingInstClicked, serverName, isLoading, value, results, results_for_table } = this.state

    return (
      <Segment.Group>

        {(this.state.lightingInstClicked) ? <InstProf s00={spect} s0={catNum} s1={sResult} s2={manu} s3={desc} s4={docCreate} s5={Lab} s6={createDa} s7={reportNum} /> :
          <span>

            {/* ------------------------------------------------------------------------------------------------------------------------------- */}

            <Header as='h2' id="header-id"><Icon.Group size='large'><Icon id="pic" name='lightbulb' /></Icon.Group> SpectraSearch
            </Header>


            <Header>Search for Lighting Instruments</Header>
            <Search
              fluid
              input={{ fluid: true }}
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              value={value}
              {...this.props}
              id="grand-search"
              size='small'
              placeholder='Enter lighting search here'
            />
            <br />
            <br />
            <Dropdown
                    placeholder='Select application'
                    fluid
                    selection
                    options={applicationTypeOptions}
                    onChange = {_ = (event, value) => {this.handleFilterChange(event.target.textContent)}}
                  />
            <Dropdown
                    placeholder='Select type'
                    fluid
                    selection
                    options={typeOptions}
                    onChange={_ = (event, value) => {this.handleFilterChange(event.target.textContent)}}
                  />
            <Dropdown
                    placeholder='Select technology'
                    fluid
                    selection
                    options={technologyOptions}
                    onChange={_ = (event, value) => {this.handleFilterChange(event.target.textContent)}}
                  />
            <Container>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>
                        Title
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        Application
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        Type
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        Technology
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        Link
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.state.results_for_table.map(el=>(
                      <Table.Row key={el.SpectraSearchID}>
                        <Table.Cell>{el.title}</Table.Cell>
                        <Table.Cell>{el.application}</Table.Cell>
                        <Table.Cell>{el.type}</Table.Cell>
                        <Table.Cell>{el.technology}</Table.Cell>
                        <Table.Cell>
                          <button  onClick = {()=>{
                            console.log(el.title);
                            this.handleResultSelect_filter(el);
                            }} >
                            Click me
                            </button>
                          </Table.Cell>
                      </Table.Row>
                        
                    ))}
                  </Table.Body>
                </Table>
                  {/* <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <Header>Filtered Results</Header>
                        <List>
                          {results_for_table.map(el => {
                            return (
                              <List.Item  key={el.SpectraSearchID}>
                                
                                <List.Content>{'Title: '}{el.title}{'| application: '}{el.application}{ '| type: '}{el.type}{'| technology: '}{el.technology}
                                {'| link:'}<button  onClick = {()=>{console.log(el.title);this.handleResultSelect_filter(el);}} >Click me</button></List.Content>
                              </List.Item>
                            );
                          })}
                        </List>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid> */}
            </Container>

            
            <Header as='h4'>About SpectraSearch Open Source Site</Header>
            <div id="aboutUs">
              <p id="about1">SpectraSearch is a spectral database with accompanying lighting metric functions to help lighting professionals evaluate lighting products
              against industry and project requirements.</p>
              <p id="about2">SpectraSearch was developed by student
              developers at American University in partnership with the Department of Energy's Building Technologies Office's Lighting program.</p>

            </div>

          </span>}


      </Segment.Group>


    )
  }
}


