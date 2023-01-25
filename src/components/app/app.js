import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { Component } from 'react';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Johnf C.', salary: 8000, id: 1 },
        { name: 'Alexx M.', salary: 3000, id: 2 },
        { name: 'Alexx M.', salary: 3000, id: 3 },
        { name: 'Carl W.', salary: 5000, id: 4 }
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }







  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} 
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
