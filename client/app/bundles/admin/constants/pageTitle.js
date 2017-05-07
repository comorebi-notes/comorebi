const getTitle = (path) => {
  const pathArray = path.split("/")
  switch (pathArray[1]) {
    // /admin
    case 'admin':
      switch (pathArray[2]) {
        // /edit
        case 'edit':
          return "管理者情報の編集"
        default:
          return ""
      }
    default:
      return ""
  }
}

const pageTitle = path => {
  const title = getTitle(path)
  const baseTitle = "comorebi CMS"
  const separation = " | "

  return title === "" ? baseTitle : title + separation + baseTitle
}

export default pageTitle
