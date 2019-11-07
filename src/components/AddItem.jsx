import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            priority: '1',
            item: '',           
        }
        this.add = this.add.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    add() {
        this.setState({
            id: Math.random(),
        });
        this.props.addItem(this.state)
            
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <button onClick={this.add}>add</button>
                <textarea className='create-todo-text' name='item' value={this.state.item} placeholder='input task here' onChange={this.handleChange}></textarea>
                <select className='create-todo-priority' name='priority' value={this.state.priority} onChange={this.handleChange}>
                    <option value= '1' >Low</option>
                    <option value= '2' >Med</option>
                    <option value= '3' >High</option>
                </select>
            </div>
        );
    }
}

export default AddItem
            