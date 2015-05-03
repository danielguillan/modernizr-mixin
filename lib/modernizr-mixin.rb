require 'compass'
extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('modernizr-mixin', :path => extension_path)

module ModernizrMixin
  VERSION = "3.0.5"
  DATE = "2015-05-04"
end
