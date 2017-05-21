const baseColumns = {
  articles: [
    { name: "thumbnail",    label: "",         className: "thumbnail" },
    { name: "id",           label: "ID",       className: "id" },
    { name: "title",        label: "タイトル", className: "works-title" },
    { name: "categories",   label: "カテゴリ", className: "category is-hidden-mobile" },
    { name: "published_at", label: "公開日",   className: "published_at" }
  ],
  musics: [
    { name: "id",     label: "ID",       className: "id" },
    { name: "title",  label: "タイトル", className: "works-title" },
    { name: "lyrics", label: "歌詞",     className: "lyrics" }
  ]
}
const controlColumn = { name: "control", label: "", className: "control" }

const tableColumns = (type) => baseColumns[type].concat(controlColumn)

export default tableColumns
