import React from 'react'
import s from './index.module.css'
import { CloseOutlined } from '@ant-design/icons'

export default function Post({id,title,text}) {
  return (
    <div className={s.post}>
        <CloseOutlined  className={s.cross_icon}/>
        <p>Title: {title} </p>
        <p>Text: {text}</p>
    </div>
  )
}
