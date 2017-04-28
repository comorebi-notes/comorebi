import React from 'react'
import classNames from 'classnames'

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

export const getId = (path) => parseInt(path.split('/')[3], 10)
export const findWork = (works, id) => works.filter(work => work.id === id)[0]

export const setupArticleForEdit = (articles, currentPath) => {
  const id = getId(currentPath)
  const article = articles ? findWork(articles, id) : {}
  if (article && Object.keys(article).length) {
    const date = parseDate(article.published_at)
    const yyyy = zeroPadding(date.getFullYear(),  4)
    const MM   = zeroPadding(date.getMonth() + 1, 2)
    const dd   = zeroPadding(date.getDate(),      2)
    const hh   = zeroPadding(date.getHours(),     2)
    const mm   = zeroPadding(date.getMinutes(),   2)
    // const ss   = zeroPadding(date.getSeconds(),   2)
    article.published_date = `${yyyy}-${MM}-${dd}`
    article.published_time = `${hh}:${mm}`
  }
  return article
}

export const workIcon = (type) => {
  const icons = {
    musics: "music"
  }
  return (
    <span style={{ marginRight: '.4em' }}>
      <i className={classNames("fa", `fa-${icons[type]}`)} />
    </span>
  )
}

export const unselectedWorks = (works, ids) => (
  works.map((work) => {
    const targetWorkIds = ids[work.title] || []
    return {
      title: work.title,
      items: work.items.filter((item) => (!targetWorkIds.includes(item.id)))
    }
  })
)
export const targetSection = (works, type) => (
  works.filter((items) => items.title === type)[0]
)
export const selectedWork = (works, type, id) => (
  targetSection(works, type).items.filter((item) => item.id === id)[0]
)
