import React, { Component } from "react"

import Navigation from "./navigation"

class Main extends Component{
  constructor(props){
    super(props)
    this.navItems = [
      {name: "V.F.W. Admin Application", link: null},
      {name: "Members", link: "members"},
      {name: "Transactions", link: "transactions"}
    ]
  }

  componentDidMount(){
    //this.props.sampleAction()
  }

  render(){
    return(
      <div>
        <Navigation navItems={this.navItems} />
        {this.props.children}
      </div>
    )
  }
}

export default Main