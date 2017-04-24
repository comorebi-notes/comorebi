import React from 'react'
import classNames from 'classnames'

import perPage from '../constants/perPage'

export const zeroPadding = (num, length) => {
  const zeros = Array(length + 1).join('0')
  return (zeros + num).slice(-length);
}

export const flatten = (array) => (
  array.reduce((p, c) => (
    Array.isArray(c) ? p.concat(flatten(c)) : p.concat(c)
  ), [])
)

export const isActivePath = (path, target, prefix) => {
  const url = prefix ? [prefix, target].join('/') : target
  return path.replace(/\/$/, '') === url.replace(/\/$/, '')
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
  deleted:   { label: "削除",   icon: "ban" }
}

export const publishStatusLabel = (status) => statuses[status].label
export const publishStatusIcon  = (status) => (
  <span className="icon">
    <i className={classNames("fa", `fa-${statuses[status].icon}`)} />
  </span>
)

export const splitFilteringWords = (words) => words.trim().split(/\s+/)

const filterWorksByWord = (works, word) => (
  works.filter((work) => (
    work.title.includes(word) || work.description.includes(word)
  ))
)
const filterWorksByStatus = (works, status) => (
  works.filter((work) => work.status === status)
)
const filterWorksByCategory = (works, category) => (
  works.filter((work) => work.categories.includes(category))
)

export const filterWorks = (works, filters) => {
  if (Object.keys(filters).length === 0) return works
  const { words, status, categories } = filters
  if (!words.length && !status.length && !categories.length) return works

  let filteredWorks = works
  if (words.length) {
    splitFilteringWords(words).map((word) => (filteredWorks = filterWorksByWord(filteredWorks, word)))
  }
  if (status.length) {
    filteredWorks = filterWorksByStatus(filteredWorks, status)
  }
  if (categories.length) {
    categories.map((category) => (filteredWorks = filterWorksByCategory(filteredWorks, category)))
  }
  return filteredWorks
}

export const pagingWorks = (works, page) => works.slice((page - 1) * perPage, page * perPage)

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
    // const ss   = zeroPadding(date.getSeconds(),   2)
    work.published_date = `${yyyy}-${MM}-${dd}`
    work.published_time = `${hh}:${mm}`
  }
  return work
}

export const workItemIcon = (type) => {
  const icons = {
    musics: "music"
  }
  return (
    <span style={{ marginRight: '.4em' }}>
      <i className={classNames("fa", `fa-${icons[type]}`)} />
    </span>
  )
}

export const unselectedWorkItems = (workItems, ids) => (
  workItems.map((workItem) => {
    const targetItemIds = ids[workItem.title] || []
    return {
      title: workItem.title,
      items: workItem.items.filter((item) => (!targetItemIds.includes(item.id)))
    }
  })
)
export const targetSection = (workItems, type) => (
  workItems.filter((items) => items.title === type)[0]
)
export const selectedItem = (workItems, type, id) => (
  targetSection(workItems, type).items.filter((item) => item.id === id)[0]
)
