import React from 'react'


export const CustomDropdown2 = (props) => (
  <div className="form-group">
    <h4>Destination airport</h4>
    <select
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


export default class CustomListDropDown2 extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }

  getDestinations() {
    fetch('http://localhost:8080/api/destinations')
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }))
  }

 

  componentDidMount() {
    this.getDestinations()
  }

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  
  render() {
    return (
      <div className="container mt-4">
        <CustomDropdown2
          name={this.state.username}
          options={this.state.collection}
          onChange={this.onChange}
        />
      </div>
    )
  }
}