import React ,{Component} from 'react';

class TOC extends Component {

  shouldComponentUpdate(newProps, newState){
    if(this.props.data === newProps.data){
      return false;
    }
    else{
      return true;
    }
  }

    render(){
      console.log("TOC rendering!");
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a 
              href="/" 
              onClick = {function(content_id, e){ 
                e.preventDefault();
                this.props.onChangePage(content_id);
              }.bind(this, data[i].id)}>
                {data[i].title}
            </a>
          </li>);
        i = i + 1;
      }

      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

export default TOC;