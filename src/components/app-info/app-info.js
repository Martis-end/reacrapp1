import "./app-info.css";
import { Component } from 'react';

class AppInfo extends Component {

    render() {

        const counterUsers = this.props.counterUsers
        const bigCachUsers = this.props.bigCachUsers
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: {counterUsers}</h2>
                <h2>Премию получат: {bigCachUsers}</h2>
            </div>
        )
    }
}

export default AppInfo;