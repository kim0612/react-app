import React ,{Component} from 'react';

class Control extends Component {

    shouldComponentUpdate(newProps, newState){
        if(this.props._data === newProps._data){
            return false;
        }
        else{
            return true;
        }
    }

    render(){
      console.log("Control rendering!");
      return(
        <aside>
            <form>
                <ul>
                    <li>
                        <a href="/" onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode("create");
                        }.bind(this)}>create</a>
                    </li>
                    <li>
                        <a href="/" onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode("update");
                        }.bind(this)}>
                            update
                        </a>
                    </li>
                    <li>
                        <input type="button" value="delete" 
                            onClick={function(e){
                                e.preventDefault();
                                if(this.props._data === null){
                                    alert("choose content!");
                                }
                                else{
                                    var _title = this.props._data.title;
                                    if(window.confirm("Are you sure to delete ["+ _title + "] ??")){
                                        this.props.onChangePage();
                                    }
                                }
                            }.bind(this)} />
                    </li> 
                </ul>
            </form>
        </aside>
      );
    }
  }

export default Control;