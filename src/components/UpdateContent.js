import React ,{Component} from 'react';

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : this.props._data
        }
    }

    render(){
        console.log("UpdateContent rendering!");
        return(
            <article>
                <h3>Update</h3>
                <form onSubmit={function(e){
                    e.preventDefault();
                    if(window.confirm("Are you sure to Update?")){
                        this.props.onChangePage(this.state.data);
                    }
                }.bind(this)}>
                    <p>
                        <input
                            type="text" 
                            value={this.state.data.title}
                            onChange={function(e){
                                var newdata={id: this.state.data.id, 
                                             title: e.target.value, 
                                             desc: this.state.data.desc}
                                this.setState({data:newdata})
                            }.bind(this)}
                        />
                    </p>
                    <p>
                        <textarea 
                            rows="7"
                            value={this.state.data.desc}
                            onChange={function(e){
                                var newdata={id: this.state.data.id,
                                             title: this.state.data.title,
                                             desc: e.target.value}
                                this.setState({data: newdata})
                            }.bind(this)}
                        />
                    </p>
                    <p>
                        <input type="submit" value="submit" />
                    </p>
                </form>
            </article> 
        );
    }
  }

export default UpdateContent;