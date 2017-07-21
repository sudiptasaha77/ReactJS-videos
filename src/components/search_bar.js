import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term: ''}
    }
    render(){
        return (
            <div className="search-bar">
             <h1>FunX Player</h1>
            <h4 id="searchBarAtt">Seach</h4>
            <input  id="searchBarinput" value={this.state.term}
                onChange = {(event) => this.onInputChange(event.target.value)}/>
            <br/><br/>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onChangeSelect(term);
    }
}

export default SearchBar;
