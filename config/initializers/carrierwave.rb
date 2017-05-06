CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: 'AKIAJVRXCZNVMCTCE77A',
    aws_secret_access_key: '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',
    region: 'ap-northeast-1'
  }

  if Rails.env.development? || Rails.env.test?
    config.fog_directory = 'comorebi-sandbox'
  else
    config.fog_directory = 'comorebi-sandbox'
  end
end
