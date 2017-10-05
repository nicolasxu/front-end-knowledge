import React, { Component } from 'react';
import './uploader.css'

class Uploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: [],
      comments: []
    }
    this.inputChange = this.inputChange.bind(this)
  }
  inputChange(e) {
    console.log('this', this)
  }
  render() {
    return (
      <div className="imd-uploader">
        <form>

          <div className="form-group">
            <label htmlFor="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile" onChange={this.inputChange}/>
           
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>

        </form>
      </div>      
      )
  }
}

export default Uploader