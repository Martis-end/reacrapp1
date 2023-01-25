import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classli: false,
            like: false
        }
    }
    changeClassLi = () => {this.setState(({classli}) => ({classli: !classli}))}

    changeClassLike = () => {
        this.setState((state) => {
            return { like: !this.state.like };
        })
    }

    changerClassLi = (classli, classLi, newClass) => {
        if (classli) {
            classLi += newClass;
            return classLi;
        } else {return classLi}
    }

    render() {
        const { name, salary, onDelete } = this.props;

        const { classli, like } = this.state;

        let classLi = "list-group-item d-flex justify-content-between";

        classLi = this.changerClassLi(classli, classLi, ' increase')
        classLi = this.changerClassLi(like, classLi, ' like')

        return (
            <li className={classLi}>
                <span className="list-group-item-label"
                    onClick={this.changeClassLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.changeClassLi}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;