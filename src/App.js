import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state =
      {
        tableValuesForm: '',
        startTimeForm: '00:00',
        endTimeForm: '00:00',
        noPeopleForm: '',
        tables: [],
        tablesFormSubmitted: false,
        showReservationForm: false,
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleNoPeopleChange = this.handleNoPeopleChange.bind(this);
    this.handleReservation = this.handleReservation.bind(this);
  }

  handleChange(event) {
    this.setState({tableValuesForm: event.target.value});
  }
  handleStartChange(event) {
    this.setState({startTimeForm: event.target.value});
  }
  handleEndChange(event) {
    this.setState({endTimeForm: event.target.value});
  }
  handleNoPeopleChange(event) {
    this.setState({noPeopleForm: event.target.value});
  }

  handleSubmit(event) {
    var inputText = this.state.tableValuesForm.replace(/\s/g, "");
    var splitText = inputText.split(",");
    var tablesArray = [];
    var y = 1;
    for (var x=0; x<splitText.length; x++)
    {
      var tab = "tab" + y;
      tablesArray.push([splitText[x], []]);
      document.getElementById(tab).innerHTML = tablesArray[y-1];  
      y = y + 1;   
    }
    this.setState({
      tables: tablesArray,
      tablesFormSubmitted: true,
      showReservationForm: true
    });
    event.preventDefault();
  }

  overlap(currentReso, newReso)
  {
    return currentReso[0] < newReso[1] && currentReso[1] > newReso[0];
  }

  handleReservation(event){
    var reso = [this.state.startTimeForm, this.state.endTimeForm, Number(this.state.noPeopleForm)];
    var tables = this.state.tables.length;
    var smallestAvailableTable = [];
    for (var i=0; i<tables; i++)
    {
      var tableSize = this.state.tables[i][0];
      if ((smallestAvailableTable.length == 0 || smallestAvailableTable[1] > tableSize) && tableSize >= reso[2])
      {
        var tableResos = this.state.tables[i][1];
        var overlap = false;
        for (var x=0; x<tableResos.length; x++)
        {
          if (this.overlap(tableResos[x], reso))
          {
            overlap = true;
          }
        }
        if (!overlap)
        {
          smallestAvailableTable = [i, tableSize];
        }
      }
    }
    if (smallestAvailableTable.length == 0)
    {
      alert('No tables available. Please try different time or a smaller group.');
    }
    else
    {  
      this.state.tables[smallestAvailableTable[0]][1].push(reso); 
      var ya = 1;  
      var suena = document.getElementById('suna').value; 
      var d1 = document.getElementById(`tab${smallestAvailableTable[1] - ya}`);
      d1.insertAdjacentHTML(`beforeend`, `<br>${reso} ${suena}`);        
      alert('Table successfully added. ');
      this.setState(
        {
          startTimeForm: '00:00',
          endTimeForm: '00:00',
          noPeopleForm: ''
        }
      )
    }
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <div id="intro">
          <h1> Welcome to Reso </h1>
          <h4> Please input the tables you have. </h4>
          <p> Do this by inputting the number of people in each table seperated by commas in ascending order (e.g. 2, 3, 4) </p>
        </div>
        <form id="table_form" className={this.state.tablesFormSubmitted ? "hidden" : ""} onSubmit={this.handleSubmit}>
          <label>Table sizes: <input type="text" pattern="^[0-9]+(,( )?[0-9]+( )?)+$" value={this.state.tableValuesForm} onChange={this.handleChange}/></label>
          <input type="submit" value="Submit" />
        </form>
        <form id="reservation_form" className={this.state.showReservationForm ? "" : "hidden"} onSubmit={this.handleReservation}>
          <label>Reservation start time: <input type="time" value={this.state.startTimeForm} onChange={this.handleStartChange}/> </label>
          <label>Reservation end time: <input type="time" value={this.state.endTimeForm} onChange={this.handleEndChange}/> </label>
          <label>Number of people: <input type="text" value={this.state.noPeopleForm} onChange={this.handleNoPeopleChange}/> </label>
          <label>Surname: <input id="suna" type="text"/> </label>    
          <input type="submit" value="Submit" />
        </form>
        <div id="tab1" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab2" class="tables">
          <p>         
          </p>  
        </div>  
        <div id="tab3" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab4" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab5" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab6" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab7" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab8" class="tables">
          <p>         
          </p>  
        </div>  
        <div id="tab9" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab10" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab11" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab12" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab13" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab14" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab15" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab16" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab17" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab18" class="tables">
          <p>         
          </p>  
        </div>  
        <div id="tab19" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab20" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab21" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab22" class="tables">
          <p>         
          </p>  
        </div> 
        <div id="tab23" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab24" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab25" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab26" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab27" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab28" class="tables">
          <p>         
          </p>  
        </div>  
        <div id="tab29" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab30" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab31" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab32" class="tables">
          <p>         
          </p>  
        </div>  
        <div id="tab33" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab34" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab35" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab36" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab37" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab38" class="tables">
          <p>         
          </p>  
        </div>  
        <div id="tab39" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab40" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab41" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab42" class="tables">
          <p>         
          </p>  
        </div>  
        <div id="tab43" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab44" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab45" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab46" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab47" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab48" class="tables">
          <p>         
          </p>  
        </div>  
        <div id="tab49" class="tables">
          <p>         
          </p>  
        </div>
        <div id="tab50" class="tables">
          <p>         
          </p>  
        </div>
        <div id="footer">
          <p>IB Computer Science Internal Assessment Solution</p> 
        </div>
      </div>
    );
  }
}

export default App;
