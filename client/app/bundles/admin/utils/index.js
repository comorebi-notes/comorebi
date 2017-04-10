import React from 'react'
import classNames from 'classnames'

export const zeroPadding = (num, length) => {
  const zeros = Array(length + 1).join('0')
  return (zeros + num).slice(-length);
}

export const isActivePath = (path, target, prefix) => {
  const url = prefix ? [prefix, target].join('/') : target
  return path === url ? 'is-active' : ''
}

export const parseDate = (dateString) => (
  // 2017-01-29T00:13:31.000+09:00
  new Date(Date.parse(dateString))
)

export const humanDateTime = (dateString, full) => {
  const date = parseDate(dateString)
  const yyyy = zeroPadding(date.getFullYear(),  4)
  const MM   = zeroPadding(date.getMonth() + 1, 2)
  const dd   = zeroPadding(date.getDate(),      2)
  const hh   = zeroPadding(date.getHours(),     2)
  const mm   = zeroPadding(date.getMinutes(),   2)
  const ss   = zeroPadding(date.getSeconds(),   2)
  const isFull  = full || false

  if (isFull) {
    return `${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}`
  } else {
    return `${yyyy}/${MM}/${dd}`
  }
}

const statuses = {
  published: { label: "公開",   icon: "check-circle" },
  drafted:   { label: "下書き", icon: "file-text-o" },
  deleted:   { label: "削除",   icon: "trash" }
}

export const publishStatusLabel = (status) => statuses[status].label
export const publishStatusIcon  = (status) => (
  <span className="icon">
    <i className={classNames("fa", `fa-${statuses[status].icon}`)} />
  </span>
)

export const getId = (path) => parseInt(path.split('/')[3], 10)
export const findWork = (works, id) => works.filter(work => work.id === id)[0]

export const setupWorkForEdit = (works, currentPath) => {
  const id = getId(currentPath)
  const work = works ? findWork(works, id) : {}
  if (work && Object.keys(work).length) {
    const date = parseDate(work.published_at)
    const yyyy = zeroPadding(date.getFullYear(),  4)
    const MM   = zeroPadding(date.getMonth() + 1, 2)
    const dd   = zeroPadding(date.getDate(),      2)
    const hh   = zeroPadding(date.getHours(),     2)
    const mm   = zeroPadding(date.getMinutes(),   2)
    const ss   = zeroPadding(date.getSeconds(),   2)
    work.published_date = `${yyyy}-${MM}-${dd}`
    work.published_time = `${hh}:${mm}:${ss}`
  }
  return work
}
