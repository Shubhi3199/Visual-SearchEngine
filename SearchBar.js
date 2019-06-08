import React from 'react';

class SearchBar extends React.Component{
    
    
    state={term:""};
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);

    }
        

    render(){
        return(
            <div>
                <form  onSubmit={this.onFormSubmit}>
                  
   
                  
                
                    <div className="ui icon input">
                    <input 
                   
                    type="text"  
                    placeholder="Search..." 
                    onChange={(e)=>this.setState({term:e.target.value})}
                    value={this.state.term}
                     /><br />
                  
                    <i className="inverted circular search link icon"></i>
                   
                 </div>
                    
                </form>    
            </div>    
        );
    }
}


export default SearchBar; 