const tableColumns = {
  works: [
    { name: "thumbnail",    label: "",         className: "thumbnail" },
    { name: "id",           label: "ID",       className: "id" },
    { name: "title",        label: "タイトル", className: "works-title" },
    { name: "categories",   label: "カテゴリ", className: "category is-hidden-mobile" },
    { name: "status",       label: "状態",     className: "status is-hidden-mobile" },
    { name: "published_at", label: "公開日",   className: "published_at" }
  ],
  musics: [
    { name: "id",     label: "ID",         className: "id" },
    { name: "title",  label: "タイトル",   className: "works-title" },
    { name: "lyrics", label: "歌詞",       className: "lyrics" },
    { name: "credit", label: "クレジット", className: "credit" }
  ]
}

export default tableColumns
