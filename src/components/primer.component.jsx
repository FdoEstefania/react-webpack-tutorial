import React from 'react';

class PrimerComponent extends React.Component{
    
    constructor() {
        super();
        this.state = {
            age: 20,
            username: 'PMKLAB'
        };
    }

    render(){
        return(
            <div>
                <h3>Primer component</h3>
                <div>
                    Age: {this.state.age}
                    <br/>
                    Username: {this.state.username}
                </div>
            </div>
        );
    }
}

export default PrimerComponent;