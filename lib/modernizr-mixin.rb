require 'compass'
extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('modernizr-mixin', :path => extension_path)

module ModernizrMixin
  VERSION = "3.0.7"
  DATE = "2015-06-12"
end
