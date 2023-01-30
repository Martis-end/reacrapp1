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
        { name: 'Johnf C.', salary: 8000, increase: false, rise: true, id: 1 },
        { name: 'Alexx M.', salary: 900, increase: true, rise: false, id: 2 },
        { name: 'Alexx M.', salary: 3000, increase: false, rise: false, id: 3 }
      ],
      term: "",
      btnLight1: "btn btn-light",
      btnLight2: "btn btn-outline-light",
      btnLight3: "btn btn-outline-light"
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

  addItem = (name, salary) => {
    const newData = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }

    this.setState(({ data }) => {
      return {
        data: [...data, newData]
      }
    })

  }

  onToggleIncrease = (id) => {
    // this.setState(({ data }) => {
    //   // const index = data.findIndex (elem => elem.id === id);
    //   // const old = data[index];
    //   // const newItem = {...old, increase: !old.increase};
    //   // const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

    //   // return {
    //   //   data: newArr
    //   // }


    // })
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, increase: !item.increase }
        }
        return item;
      })
    }))
  }

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, rise: !item.rise }
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    let filtredItems = items;
    if (this.state.btnLight2 === "btn btn-light") {
      filtredItems = items.filter(item => item.increase);
    } else if (this.state.btnLight3 === "btn btn-light") {
      filtredItems = items.filter(item => item.salary >= 1000);
    }
    if (term.length === 0) {
      return filtredItems;
    }

    return filtredItems.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    // this.setState({ term });
    this.setState({ term: term });
  }

  onToggleFilter = (e) => {
    const dataAttr = e.currentTarget.getAttribute('data-filter')
    switch (dataAttr) {
      case 'allusers':
        this.setState({
          btnLight1: "btn btn-light",btnLight2: "btn btn-outline-light",btnLight3: "btn btn-outline-light"
        }); break;
      case 'usersupp':
        this.setState({
          btnLight1: "btn btn-outline-light",btnLight2: "btn btn-light",btnLight3: "btn btn-outline-light"
        }); break;
      default:
        this.setState({
          btnLight1: "btn btn-outline-light",btnLight2: "btn btn-outline-light",btnLight3: "btn btn-light"
        });
    }
  }


  render() {
    const { term, data, btnLight1, btnLight2, btnLight3 } = this.state
    const counterUsers = this.state.data.length
    const bigCachUsers = this.state.data.filter(item => item.increase).length
    const visibleData = this.searchEmp(data, term)

    return (
      <div className="app">
        <AppInfo
          counterUsers={counterUsers}
          bigCachUsers={bigCachUsers}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            onToggleFilter={this.onToggleFilter}
            btnLight1={btnLight1}
            btnLight2={btnLight2}
            btnLight3={btnLight3}
          />
        </div>

        <EmployeesList data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
export default App;
