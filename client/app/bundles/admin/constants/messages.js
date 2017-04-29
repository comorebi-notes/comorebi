const targets = {
  admin: () => "管理者アカウント",
  article: (title) => `作品記事<strong>「${title}」</strong>`,
  music: (title) => `音楽作品<strong>「${title}」</strong>`,
}

const actions = {
  update:  "更新",
  create:  "作成",
  destroy: "消去"
}

const levels = {
  success: "成功",
  error:   "失敗"
}

const messages = (actionType, target, level, data) => ({
  message: `${targets[target](data)}の${actions[actionType]}に${levels[level]}しました。`,
  level
})

export default messages
