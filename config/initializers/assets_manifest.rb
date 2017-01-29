Rails.application.config.assets_manifest =
  if File.exist?(path = Rails.root.join('public', 'dist', 'manifest.json'))
    JSON.parse(File.read(path))
  end
