require 'compass'
extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('modernizr-mixin', :path => extension_path)

module ModernizrMixin
  VERSION = "2.0.0"
  DATE = "2014-05-06"
end
