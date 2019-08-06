import React, {Component} from 'react';

export default class SearchPanel extends Component {
   render() {
    return (
        <div>
            <input type="text" placeholder='search'/>
            <button>All</button>
            <button>Active</button>
            <button>Done</button>
        </div>
    );
   }
}

