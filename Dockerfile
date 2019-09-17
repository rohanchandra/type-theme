# Stage 1
FROM jekyll/jekyll as jekyll

WORKDIR /app

COPY . .

RUN chown -R jekyll:jekyll /app
RUN jekyll build --trace

# Stage 2
FROM nginx

COPY --from=jekyll /app/_site /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
