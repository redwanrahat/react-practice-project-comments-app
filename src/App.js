import React, {Component} from 'react';
import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'
import faker from "faker"

class App extends Component {
  render(){
    const style={margin: "auto", padding: "50px 0 50px 0", width: "25%"}
    return(
      <div className="ui comment container" style={style}>
        <h3 className="ui dividing header">Comments</h3>
        <ApprovalCard>
          <CommentDetail
            avatar= {faker.image.avatar()} 
            author="Sam" 
            timeAgo="Today at 4:00PM" 
            text="How is everyone?"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            avatar= {faker.image.avatar()}
            author="Jane" 
            timeAgo="Today at 4:30PM" 
            text="I'm good Sam, How are you?"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            avatar= {faker.image.avatar()}
            author="Joe" 
            timeAgo="Today at 4:45PM" 
            text="Good to hear from you Sam."
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            avatar= {faker.image.avatar()}
            author="Ron" 
            timeAgo="Today at 5:00PM" 
            text="Yeah I am also doing great here."
          />
        </ApprovalCard>
      </div>
    )
  }
}

export default App;
