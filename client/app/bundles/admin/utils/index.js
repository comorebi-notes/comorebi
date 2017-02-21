// import React from 'react'
// import { Link } from 'react-router'

export const isActivePath = (path, target) => (path === target ? 'is-active' : '')

export const parseDate = (dateString) => (
  // 2017-01-29T00:13:31.000+09:00
  new Date(Date.parse(dateString))
)

export const humanDate = (dateString) => {
  const date    = parseDate(dateString)
  const year    = date.getFullYear()
  const month   = date.getMonth() + 1
  const day     = date.getDate()
  const hours   = (`0${date.getHours()}`).slice(-2)
  const minutes = (`0${date.getMinutes()}`).slice(-2)
  const seconds = (`0${date.getSeconds()}`).slice(-2)
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
}
