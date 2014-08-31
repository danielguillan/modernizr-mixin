require './lib/modernizr-mixin'

Gem::Specification.new do |s|
  # Release Specific Information
  s.version = ModernizrMixin::VERSION
  s.date = ModernizrMixin::DATE

  # Gem Details
  s.name = "modernizr-mixin"
  s.rubyforge_project = "modernizr-mixin"
  s.description = %q{A simple way for DRYier, faster and cleaner Modernizr tests in Sass.}
  s.summary = %q{Simple and comprehensive mixin for Modernizr tests in Sass}
  s.authors = ["Daniel Guillan"]
  s.email = ["daniel.guillan@gmail.com"]
  s.homepage = "https://github.com/danielguillan/modernizr-mixin"

  # LICENSE file
  s.licenses = ['MIT']

  # README file
  s.files = ["README.md"]

  # CHANGELOG
  #s.files += ["CHANGELOG.md"]

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  s.files += Dir.glob("stylesheets/**/*.*")

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}

  # Gems Dependencies
  s.add_dependency("sass",      ["~> 3.4"])
  s.add_dependency("compass",   ["~> 1.0.0"])
end
