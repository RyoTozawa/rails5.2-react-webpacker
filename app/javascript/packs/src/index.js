import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import ToDoOther from '../components/TodoOther'
import rootReducer from './reducers'

const store = createStore(rootReducer)

const render = () => {
  ReactDOM.render(
    <ToDoOther store={store} />,
    document.getElementById('root')
  )
}

store.subscribe(() => {
  render()
  console.log(store.getState().form)   // 動作確認のためコンソール出力
})
render()