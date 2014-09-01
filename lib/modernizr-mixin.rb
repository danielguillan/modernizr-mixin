require 'compass'
extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('modernizr-mixin', :path => extension_path)

module ModernizrMixin
  VERSION = "3.0.0"
  DATE = "2014-08-31"
end
