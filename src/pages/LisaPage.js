import React, {Component} from 'react'

const CallMeBack = ({callMe}) => {
   return(
    <div>
       <div style={{width:50, height:50, background:'blue'}} onClick={callMe}/>
    </div>
   )
}


export class LisaPage extends Component {
    
    constructor(){
        super();
        this.state = {
            showLisa:false
        }
    }

    method(){
        console.log("Hey");
        this.setState({showLisa:!this.state.showLisa})
    }

    render(){ 
        return (
            <div className="page">
                <p>{this.props.title}</p>
                { this.state.showLisa ? 
                    <img src="http://www.stickpng.com/assets/images/5a0c40c15a997e1c2cea116f.png"/>
                    :''
                }
                <CallMeBack callMe={() => this.method()} />
            </div>
        );
    }
}