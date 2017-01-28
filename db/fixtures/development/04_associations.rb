WorkMusic.seed(:id,
  {
    id: 1,
    work: Work.find_by(id: 1),
    music: Music.find_by(id: 1)
  },
  {
    id: 2,
    work: Work.find_by(id: 1),
    music: Music.find_by(id: 2)
  },
  {
    id: 3,
    work: Work.find_by(id: 2),
    music: Music.find_by(id: 3)
  },
  {
    id: 4,
    work: Work.find_by(id: 2),
    music: Music.find_by(id: 4)
  },
  {
    id: 5,
    work: Work.find_by(id: 3),
    music: Music.find_by(id: 5)
  }
)
