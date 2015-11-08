---
layout: post
title:  "My first post!"
date:   2015-11-03 15:21:31
categories: jekyll update
comments: true
---

I'm right now trying to figure out how all of this works.
So all the .md docs I put into the _posts folder will show up on the happenings.

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}