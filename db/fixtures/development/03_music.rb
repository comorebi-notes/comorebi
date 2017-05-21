dummy_file = Rails.root.join("spec/fixtures/sound_file/sample.mp3").open

Music.seed(:id,
  { id: 1, title: "comorebi", lyrics: "青い空 響き渡る 掠れそうなメロディ  遮る日々 透かすように 鮮やかに彩った", sound_file: dummy_file },
  { id: 2, title: "paellero", lyrics: "ありふれた言葉も 傷ついた記憶も かき混ぜてしまえば 色とりどりの星空模様",  sound_file: dummy_file },
  { id: 3, title: "夜鷹様", sound_file: dummy_file }
)
