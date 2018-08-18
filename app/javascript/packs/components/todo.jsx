import React from 'react'

export default class Todo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { todo: props.todo, isEdit: false }
  }
  // 状態
  editMode() {
    this.setState({ isEdit: true }) 
  }
  // 更新
  updateTodo(todo) {
    this.setState({ todo })
  }
  // 保存
  save() {
    const { handleUpdateTodo } = this.props
    const { todo } = this.state
    this.setState({ isEdit: false }) //保存時に状態をfalseに変更
    handleUpdateTodo(todo)
  }
  render() {
    const { todo, isEdit } = this.state
    return (
      <li
        className="list-group-item"
        onClick={() => this.editMode()} //タスククリック時にTrue
      >
        {isEdit
          ?
          <div className="input-group">
            <input
              type="text"
              defaultValue={todo}
              onChange={e => this.updateTodo(e.target.value)} //フォームが切り替わる時に値を更新
              className="form-control"
              autoFocus
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => this.save()}
              >
                保存
              </button>
            </div>
          </div>
          : todo}
      </li>
    )
  }
}