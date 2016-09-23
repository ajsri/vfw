import React, { Component } from "react"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <div>
        <div className="container m-t-lg">
          <div className="row">
            <div className="col-md-12">
              <h2>VFW Homepage</h2>
              <h3>To Do</h3>
              <ul>
                <li>
                  Members
                  <ul>
                    <li>Register member</li>
                    <li>Update member</li>
                    <li>Remove member</li>
                  </ul>
                </li>
                <li>
                  Transactions
                  <ul>
                    <li>Add transactions</li>
                    <li>View transactions with filters</li>
                    <li>Link transactions to member</li>
                  </ul>
                </li>
                <li>
                  Infrastructure
                  <ul>
                    <li>RFID cards with readers</li>
                    <li>Arduino board to emit events</li>
                    <li>Events to check in/out members</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home