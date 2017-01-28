Rake::Task['db:migrate'].enhance do
  Rake::Task['erd'].invoke if Rails.env.development?
end
