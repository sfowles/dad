source "https://rubygems.org"
ruby RUBY_VERSION

gem "jekyll", "3.7.4"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
   gem "jekyll-feed", "~> 0.6"
end

group :jekyll_plugins do
    gem "jekyll-menus"
 end

# rb-fsevent > 0.9.4 no longer supports OS X 10.6 through 10.8.\
# Please add the following to your Gemfile to avoid polling for changes:
require 'rbconfig'
if RbConfig::CONFIG['target_os'] =~ /darwin(1[0-3])/i
gem 'rb-fsevent', '<= 0.9.4'
end
