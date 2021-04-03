# pull official base image
FROM node:15.9.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . ./
RUN yarn
RUN yarn add react-scripts@4.0.3 -g

# start app
CMD ["yarn", "dev"]