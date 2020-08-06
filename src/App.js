import React ,{Component} from 'react';
import './App.css';

import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      mode: "read",
      select_content_id : 0,
      subject : {title:"WEB", subtitle:"World Wide Web!"},
      welcome : {title:"Welcome!", desc:"Hi React.js!"},
      contents : [
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language.'},
        {id:2, title:'CSS', desc:'CSS is Cascading Style Sheets.'},
        {id:3, title:'JavaScript', desc:'JavaScript is an essential part of web applications!!'}
      ]
    }
    this.max_id = this.state.contents.length;
  }

  pickData(){
    for (let i = 0; i < this.state.contents.length; i++) {
      if(this.state.contents[i].id === this.state.select_content_id){
        return this.state.contents[i];
      }
    }
    return null;
  }

  selectContents() {
    var _title, _desc = null;
    var contents = this.state.contents;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      return(<ReadContent title={_title} desc={_desc}> </ReadContent>);
    }
    else if (this.state.mode === "read"){
      for (let i = 0; i < contents.length; i++) {
        if (this.state.select_content_id === contents[i].id) {
          _title = contents[i].title;
          _desc = contents[i].desc;
          break;
        }
        else{
          _title = null;
          _desc = null;
        }
      }
      return(<ReadContent title={_title} desc={_desc}> </ReadContent>);
    }
    else if (this.state.mode === 'create'){
      return(
      <CreateContent
        onChangePage={function(cTitle,cDesc){
          this.max_id = this.max_id + 1;
          var ary = Array.from(this.state.contents);
          ary.push({id:this.max_id, title:cTitle, desc:cDesc});
          this.setState({
            contents : ary,
            mode : "read",
            select_content_id : this.max_id
          })
        }.bind(this)}>
      </CreateContent>
      );
    }
    else if (this.state.mode === 'update'){
        return(
          <UpdateContent
            _data = {this.pickData()}
            onChangePage={function(newdata){
              var ary = Array.from(this.state.contents);
              ary.splice(this.state.select_content_id-1, 1, newdata);
              this.setState({
                contents: ary, 
                mode:"read"});
              alert("Update complete!");
            }.bind(this)}>
          </UpdateContent>  
        );
    }
  }
  
  render(){
    console.log("=======================")
    console.log("App rendering!");
    console.log("(by sC()) max_id value: ",this.max_id);

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.subtitle}
          onChangePage = {function(){
            this.setState({mode : "welcome"})
          }.bind(this)}>
        </Subject>
        <TOC
          data={this.state.contents}
          onChangePage = {function(idnum){
            this.setState({
              mode : "read",
              select_content_id : Number(idnum)
            })
          }.bind(this)}>
        </TOC>
        <hr/>
        <Control 
          _data = {this.pickData()}
          onChangeMode={function(_mode){
            if(_mode==="update" && this.pickData()===null){
              alert("Choose data!")
              this.setState({mode:"read"})
            }
            else{
              this.setState({mode:_mode});
            }
          }.bind(this)}
          onChangePage={function(){
            this.max_id = this.max_id -1;
            var ary = Array.from(this.state.contents);
            ary.splice(this.state.select_content_id-1, 1)
            for (let i = 0; i < ary.length; i++) {
              ary[i].id = i+1;
            }
            this.setState({contents: ary, select_content_id: 0});
          }.bind(this)}>
        </Control>
        {this.selectContents()}
      </div>
    );
  }
}

export default App;