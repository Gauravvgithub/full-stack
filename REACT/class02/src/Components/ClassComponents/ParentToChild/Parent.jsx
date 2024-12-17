// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//   render() {
//     let age=21;
//     return (
//       <div>Parent

//         <Child name="Gaurav" age={age}/>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import Child from '../../../../../class01/src/ComponentsWiseCommunications/FunctionalComponents/ParentToChild/Child'

export default class  Parent  extends Component{
  render() {
    let name = "rocky"
    return (
      <div>Parent

        <Child  name = {name} />
      </div>
    )
  }
}

