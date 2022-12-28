import React from 'react'

export default function AddPostForm() {

    const submit = (event) => {
        event.preventDefault();
        const { title, text } = event.target;
        console.log({
            title: title.value,
            text: text.value
        })
    }

  return (
    <form onSubmit={submit}>
        <input type="text" placeholder='Title' name='title'/>
        <input type="text" placeholder='Your text' name='text'/>
        <button>Add post</button>
    </form>
  )
}
