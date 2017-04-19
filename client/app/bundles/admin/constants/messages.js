const messages = {
  editAdmin: {
    success: () => ({
      message: "管理者アカウントが更新されました。",
      level: "success"
    }),
    error: () => ({
      message: "管理者アカウントの更新に失敗しました。",
      level: "error"
    })
  },
  editWork: {
    success: (title) => ({
      message: `作品<strong>「${title}」</strong>が更新されました。`,
      level: "success"
    }),
    error: (title) => ({
      message: `作品<strong>「${title}」</strong>の更新に失敗しました。`,
      level: "error"
    })
  }
}

export default messages
