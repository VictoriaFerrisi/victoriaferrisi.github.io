# Website moment

Welcome to my website. 

## My Portfolio

 {% for post in site.posts %}
 - [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) ({{ post.date | date: "%B %d, %Y" }})
 {% endfor %}
