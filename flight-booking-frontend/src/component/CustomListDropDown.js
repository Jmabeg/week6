import React from 'react'
import RoundTripSelect from './RoundTripSelect';


export const CustomDropdown = (props) => (
  <div className="form-group">
    <h4>Origin airport</h4>
    <select value="Sevilla" disabled
      className="form-control"
      name="{props.username}"
      onChange={props.onChange}
    >
      <option defaultValue>Select Origin</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item}
        </option>
      ))}
    </select>
  </div>
)


export default class CustomListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }

  getOrigins() {
    fetch('http://localhost:8080/api/origins')
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }))
  }

 

  componentDidMount() {
    this.getOrigins()
  }

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="container mt-4">
        <CustomDropdown
          name={this.state.username}
          options={this.state.collection}
          onChange={this.onChange}
        />
      </div>
    )
  }
}