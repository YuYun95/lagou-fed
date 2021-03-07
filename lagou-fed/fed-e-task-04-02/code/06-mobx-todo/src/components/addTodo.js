import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class AddTodo extends Component {

    // 添加任务
    addTodo(event) {
        const { todoAdd } = this.props.todo
        // 判断用户敲击的是回车
        if (event.key === 'Enter') {
            // 获取用户在文本框中输入的内容
            const taskName = event.target.value
            // 判断用户在文本框是否输入内容
            if (taskName.trim().length === 0) return
            // 将任务添加到任务列表
            todoAdd(taskName)
            // 清空文本框的内容
            event.target.value = ''
        }
    }

    render() {
        return (<header className="header">
            <h1>todos</h1>
            <input onKeyUp={this.addTodo.bind(this)} className="new-todo" placeholder="What needs to be done?" />
        </header>)
    }
}

export default AddTodo