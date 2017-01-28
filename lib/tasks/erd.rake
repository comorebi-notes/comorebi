Rake::Task['db:migrate'].enhance do
  Rake::Task['erd'].invoke
end
