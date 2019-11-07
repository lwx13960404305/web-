import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  
  state = {
    users: []
  }

 componentWillMount(){

axios.get('http://mock-api.com/jzpddjzX.mock/test')
.then((res)=>{ 
  let {data} = res
console.log(data)

this.setState({
  users: data
})

})
     
    
  }
   
  render() {
    let {users} =this.state
   
    return (
      
      <div>
        <div className="a"></div>
        {
          users.map((item) => (
            <div className="ab"> <li >{item.name}</li>
            <li >{item.price}</li>
            <li >{item.created_at}</li></div>
          
          ))
        }
      </div>
    )

  }
}

export default App;
