function getTitle (pathArray) {
  switch (pathArray[1]) {
  // /admin
  case "admin":
    switch (pathArray[2]) {
    // /edit
    case "edit":
      return "管理者情報の編集"
    default:
      return ""
    }
  default:
    return ""
  }
}

const pageTitle = path => {
  let title = getTitle(path.split("/"))
  if (title !== "") title += " | comorebi CMS"
  return title
}

export default pageTitle
