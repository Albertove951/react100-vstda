import React, { Component } from 'react'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: this.props.todo.priority,
            item: this.props.todo.item,
            edit: false,
            newItem: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    handleEdit() {
        this.setState({
            edit: true
        })
    }

    handleSave() {
        this.setState({
            edit: false
        })
    }

    colorPrio() {
        switch (this.state.priority) {
            case '1':
                return 'success'
            case '2':
                return 'warning'
            case '3':
                return 'danger'
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const {edit, item, priority} = this.state;
        const { id, complete } = this.props.todo;

        return (
            <div>
                <ul>
                    <li className={`list-group-item-${this.colorPrio(priority)}`} style={{ textDecoration: complete ? 'line-through' : 'none', display: edit ? 'none' : 'block' }} >
                        <input type="checkbox" onClick={this.props.complete.bind(this, id)} />
                        {item}
                        <button className='edit-todo' onClick={this.handleEdit}> Edit </button>
                        <button className='delete-todo' onClick={this.props.delete.bind(this, id)}>X</button>
                    </li>
                </ul>
                {!edit ? (
                    <span></span>
                ) : (
                        <div>
                            <textarea className='update-todo-text' name='item' value={item} onChange={this.handleChange}></textarea>
                            <select className='update-todo-priority' name='priority' value={priority} onChange={this.handleChange}>
                                <option value='1'>Low</option>
                                <option value='2'>Med</option>
                                <option value='3'>High</option>
                            </select>
                            <button className='upate-todo' onClick={this.handleSave}>Save</button>
                        </div>
                    )}
            </div>
        )
    }
}

export default Item
