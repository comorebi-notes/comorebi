task :build_client do
  sh "yarn install"
  sh "yarn run build"
end

Rake::Task["assets:precompile"].enhance(%i(build_client))
