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
    success: () => ({
      message: "作品が更新されました。",
      level: "success"
    }),
    error: () => ({
      message: "作品の更新に失敗しました。",
      level: "error"
    })
  }
}

export default messages
