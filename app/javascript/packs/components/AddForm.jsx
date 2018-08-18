import React from 'react'
import { changeName } from '../src/actions'

const AddForm = ({ store }) => {
  const { name } = store.getState().form  // storeからフォームの内容を取得

  return (
    <div>
      <form>
        <label>
          名前:
          <input value={name} onChange={e => store.dispatch(changeName(e.target.value))} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default AddForm