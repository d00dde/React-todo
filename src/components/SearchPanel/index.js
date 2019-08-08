import React, {Component} from 'react';
import StatusFilter from '../StatusFilter';
import './SearchPanel.css'

export default class SearchPanel extends Component {
   render() {
    return (
        <div className="search-panel">
            <input type="text" className="form-control"
            placeholder='search'/>
            <StatusFilter />
        </div>
    );
   }
}

