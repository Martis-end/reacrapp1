import "./app-filter.css";
import { Component } from 'react';

class AppFilter extends Component {


    render() {


        return (
            <div className="btn-group">
                <button type="button"
                    className={this.props.btnLight1}
                    onClick={this.props.onToggleFilter}
                    data-filter="allusers">
                    Все сотрудники
                </button>
                <button type="button"
                    className={this.props.btnLight2}
                    onClick={this.props.onToggleFilter}
                    data-filter="usersupp">
                    На повышение
                </button>
                <button type="button"
                    className={this.props.btnLight3}
                    onClick={this.props.onToggleFilter}
                    data-filter="above1000">
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;