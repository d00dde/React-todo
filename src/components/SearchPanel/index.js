import React, {Component} from 'react';
import StatusFilter from '../StatusFilter';
import './SearchPanel.css'

export default class SearchPanel extends Component {

    state =  {
        searchValue: '',
    };

    render() {
    return (
        <div className="search-panel">
            <input type="text" className="form-control"
            placeholder='search'
            onChange={this.searchChange}
            value={this.state.searchValue}/>
            <StatusFilter clickHandler = {this.props.filterHandler}
                            filter ={this.props.filter}/>
        </div>
    );
   }

   searchChange = (e) => {
       console.log(e.target.value);
        this.setState({
            searchValue: e.target.value
        });
        console.log(e.target.value);
   }

   clickHandler = (filter) => {
        this.setState((state) =>{
            return {
                filter: filter
            }
        });
       console.log(this.state.filter);
   }
}

