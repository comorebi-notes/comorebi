const messages = {
  updateAdmin: {
    success: () => ({
      message: "管理者アカウントが更新されました。",
      level: "success"
    }),
    error: () => ({
      message: "管理者アカウントの更新に失敗しました。",
      level: "error"
    })
  },
  updateArticle: {
    success: (title) => ({
      message: `作品記事<strong>「${title}」</strong>が更新されました。`,
      level: "success"
    }),
    error: (title) => ({
      message: `作品記事<strong>「${title}」</strong>の更新に失敗しました。`,
      level: "error"
    })
  },
  createArticle: {
    success: (title) => ({
      message: `作品記事<strong>「${title}」</strong>を作成しました。`,
      level: "success"
    }),
    error: (title) => ({
      message: `作品記事<strong>「${title}」</strong>の作成に失敗しました。`,
      level: "error"
    })
  },
  destroyArticle: {
    success: (title) => ({
      message: `作品記事<strong>「${title}」</strong>を消去しました。`,
      level: "success"
    }),
    error: (title) => ({
      message: `作品記事<strong>「${title}」</strong>の消去に失敗しました。`,
      level: "error"
    })
  }
}

export default messages
