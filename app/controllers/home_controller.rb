class HomeController < ApplicationController
  def index
  end

  def feed

    require 'rss'
    require 'open-uri'

    url = 'http://feeds.feedburner.com/naoouvo'
    open(url) do |rss|
      feed = RSS::Parser.parse(rss, false)
      sample = feed.items.sample
      @url = sample.enclosure.url
      @title = sample.title
    end

    render json: { url: @url, title: @title }

  end

end
