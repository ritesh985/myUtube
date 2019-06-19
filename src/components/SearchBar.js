import React from 'react';

class SearchBar extends React.Component{

   
    state = {searchInput:''};

    onFormSubmit = (event)=>{
        event.preventDefault();
        //console.log(this.state.searchInput);
        this.props.onSubmit(this.state.searchInput)
        // this.setState({searchInput:''})

    }


    render(){
        return(
            <div className="ui segment" style={{backgroundColor:'#F08080'}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <label>Video Search</label>
                        <div className="ui action input">
                            <input
                                placeholder="Search" 
                                type="text" 
                                value={this.state.searchInput} 
                                onChange={(e) => this.setState({searchInput:e.target.value})} />
                            <button onClick={this.onFormSubmit} className="ui button"><i className="search icon"/></button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;