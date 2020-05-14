FROM node:12.16.3-alpine

ENV APP_HOME /app
WORKDIR $APP_HOME

ENV NODE_ENV development
# copy repo files into docker
COPY . $APP_HOME

# IMPORTANT!: specify host
ENV HOST 0.0.0.0
EXPOSE 3000

RUN yarn install

# this command is execed after building container
CMD ["yarn", "start"]