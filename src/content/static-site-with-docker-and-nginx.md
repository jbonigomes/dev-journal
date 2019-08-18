---
title: Static site with Docker and Nginx
date: 2019-08-18
path: /static-site-with-docker-and-nginx
---

If you need a quick way to serve static files, Nginx with Docker Compose is a
hassle free starting point:

```yaml
# docker-compose.yml
nginx:
  image: nginx
  volumes:
   - ./public:/usr/share/nginx/html
  ports:
   - "80:80"
```

Just need to create a `public` folder as a sibling to the `docker-compose.yml`
and create the `index.html` there.
