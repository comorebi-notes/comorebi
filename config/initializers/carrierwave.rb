CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id:     ENV["AWS_ACCESS_KEY_ID"]     || "AWS_ACCESS_KEY_ID",
    aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"] || "AWS_SECRET_ACCESS_KEY",
    region: 'ap-northeast-1'
  }

  if Rails.env.development? || Rails.env.test?
    config.fog_directory = 'comorebi-sandbox'
  else
    config.fog_directory = 'comorebi-sandbox'
    # そのうち production 用に差し替える
  end
end
