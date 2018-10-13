import React, {Component} from 'react'

const CallMeBack = ({callMe}) => {
  console.log(callMe);
   return(

      <div style={{
        width:50,
        height:50,
        background:'blue',
        marginLeft:400,
        align:'center'
      }}
        onClick={callMe}>Libera Lisa
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
                <img alt="imagelisa" src="http://www.stickpng.com/assets/images/5a0c40c15a997e1c2cea116f.png"/>
              :'Lisa Está secuestrada'
              }
              <CallMeBack callMe={() => this.method()} />
            </div>
        );
    }
}
