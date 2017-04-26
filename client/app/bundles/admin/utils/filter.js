import perPage from '../constants/perPage'

export const splitFilteringWords = (words) => words.trim().split(/\s+/)

const filterItemsByWord = (items, word, attributes) => (
  items.filter((item) => attributes.some((attr) => item[attr].includes(word)))
)
const filterItemsByStatus = (items, status) => (
  items.filter((item) => item.status === status)
)
const filterItemsByCategory = (items, category) => (
  items.filter((item) => item.categories.includes(category))
)

const targetAttributes = {
  works:  ["title", "description"],
  musics: ["title", "lyrics"]
}

export const filteredItems = (originalItems, filters, type) => {
  if (Object.keys(filters).length === 0) return originalItems
  const { words, status, categories } = filters
  if (!words.length && !status.length && !categories.length) return originalItems

  let items = originalItems

  if (words.length) {
    splitFilteringWords(words).map((word) => (items = filterItemsByWord(items, word, targetAttributes[type])))
  }

  if (type === "works") {
    if (status.length) {
      items = filterItemsByStatus(items, status)
    }
    if (categories.length) {
      categories.map((category) => (items = filterItemsByCategory(items, category)))
    }
  }
  return items
}

export const pagedItems = (items, page) => items.slice((page - 1) * perPage, page * perPage)
