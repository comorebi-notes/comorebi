const subMenuItems = {
  musics: [
    { label: "VOCALOIDs", url: "/vocaloids" },
    { label: "Songs", url: "/songs" },
    { label: "Instrumentals", url: "/instrumentals" },
    { label: "Albums", url: "/albums" }
  ],
  images: [
    { label: "Illustrations", url: "/illustrations" },
    { label: "Roughs", url: "/roughs" },
    { label: "Comics", url: "/comics" }
  ],
  movies: [
    { label: "Music Videos", url: "/mvs" },
    { label: "Other Movies", url: "/other_movies" }
  ]
}

const menuItems = [
  { label: "All Works", url: "" },
  { label: "Musics", url: "/musics", subMenuItems: subMenuItems.musics },
  { label: "Images", url: "/images", subMenuItems: subMenuItems.images },
  { label: "Movies", url: "/movies", subMenuItems: subMenuItems.movies },
  { label: "Web Sites", url: "/web_sites" },
  { label: "Others", url: "/others" }
]

export default menuItems
