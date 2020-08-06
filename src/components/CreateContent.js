import React ,{Component} from 'react';

class CreateContent extends Component {
    render(){
      console.log("CreateContent rendering!");
      
      return(
        <article>
          <h3>Create</h3>
          <form onSubmit={function(e){
            e.preventDefault();
            if(e.target.iTitle.value==="" || e.target.iDesc.value==="")
              alert("type it!");
            else
              this.props.onChangePage(e.target.iTitle.value,e.target.iDesc.value);
            }.bind(this)}>
            <p>
              <input type="text" name="iTitle" placeholder="Title"></input>
            </p>
            <p>
              <textarea name="iDesc" placeholder="description&#13;&#10;type here"></textarea>
            </p>
            <p>
              <input type="submit" value="submit"></input>
            </p>
          </form>
        </article> 
      );
    }
  }

export default CreateContent;