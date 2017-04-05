import React from 'react'
// import { Link } from 'react-router'

export const isActivePath = (path, target) => (path === target ? 'is-active' : '')

export const parseDate = (dateString) => (
  // 2017-01-29T00:13:31.000+09:00
  new Date(Date.parse(dateString))
)

export const humanDateTime = (dateString, full) => {
  const date    = parseDate(dateString)
  const year    = date.getFullYear()
  const month   = date.getMonth() + 1
  const day     = date.getDate()
  const hours   = (`0${date.getHours()}`).slice(-2)
  const minutes = (`0${date.getMinutes()}`).slice(-2)
  const seconds = (`0${date.getSeconds()}`).slice(-2)
  const isFull  = full || false

  if (isFull) {
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
  } else {
    return `${year}/${month}/${day}`
  }
}

export const humanPublishStatus = (status) => {
  switch (status) {
  case 'published': return '公開'
  case 'drafted':   return '下書き'
  case 'deleted':   return '削除'
  default: return ''
  }
}

export const renderHumanPublishStatus = (status) => {
  let icon = ''
  switch (status) {
  case 'published':
    icon = 'check-circle'
    break
  case 'drafted':
    icon = 'file-text-o'
    break
  case 'deleted':
    icon = 'trash'
    break
  }
  return (
    <span className="icon">
      <i className={`fa fa-${icon}`} />
    </span>
  )
}
