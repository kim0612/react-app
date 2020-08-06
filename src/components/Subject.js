import React ,{Component} from 'react';

class Subject extends Component {
  
  shouldComponentUpdate(newProps, newState){
    return false;
  }

  render(){
      console.log("Subject rendering!");
      return(
        <header>
          <h1>  
            <a href="/" 
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}>
              {this.props.title}
            </a>
          </h1>
          {this.props.sub}
        </header>
      );
    }
  }

export default Subject;