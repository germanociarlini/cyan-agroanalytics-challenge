# Cyan Agroanalytics - Front-end Developer Challenge

This is a development repository for Cyan Agroanalytics' front-end developer challenge. The main objetive was to implement a geographic feature drawing tool and integrate it to a Postgres database. The application should store the drawn data in GeoJSON format (alongside properties such as feature color), and recreate it from that data.

A demonstration of this repository can be found [here](https://cyan-agroanalytics-challenge.herokuapp.com/).

# Technologies

- Javascript
- React
- React-Leaflet
- React-Leaflet-Draw
- Node.js
- Sequelize
- Postgres
- Postgis
- Heroku

# Running Locally

To execute this repo in your local machine, follow these steps.

## Install docker and docker-compose

A docker-compose.yml file is included in the repo to easily get a Postgres (with the Postgis extension installed) up and running quickly.

Installation steps can be found at [Docker documentation](https://docs.docker.com/engine/install/):

- [docker](https://docs.docker.com/engine/install/)
- [docker-compose](https://docs.docker.com/compose/install/)

## Install node.js and npm

You must also have node installed in your machine to run the back-end server application. You can download Node [here](https://nodejs.org/en/download/) and install it afterwards.

## Install application dependecies

To install server dependencies, go to the repository root folder and run:

```
npm install
```

Afterwards, head to the client folder and also install it's dependencies:

```
cd client
npm install
cd ..
```

## Up the Postgres docker container

In a separate terminal, run:

```
docker-compose up
```

That should download a Postgres with Postgis image and run it in a Docker container on your local machine. You can make sure it is running by executing `docker ps`, and seeing a container with a _kartoza/postgis_ image running.

## Build database tables

We will now use the [Sequelize ORM](https://sequelize.org/) to build the entire Postgres database structure. `sequelize-cli` should've been installed amongst the server dependencies.

To do that, simply run:

```
sequelize db:migrate
```

You will se an output like so:

```
~ $ sequelize db:migrate

Sequelize CLI [Node: 14.17.0, CLI: 6.2.0, ORM: 6.6.2]

Loaded configuration file "config/config.json".
Using environment "development".
== 20210523151958-create-collection: migrating =======
== 20210523151958-create-collection: migrated (0.033s)

== 20210523152037-create-feature: migrating =======
== 20210523152037-create-feature: migrated (0.036s)
```

Indicating that two migrations were successfully deployed to your dockerized database.

## Run the application

To execute the application, you must serve both client and server.

To run the server app, execute on a separate terminal:

```
npm start
```

A message like so should print to the console: `Running server on port 3001`.

Finally, to serve the client application in development mode:

```
cd client
npm start
```

A new tab on your browser should open on `localhost:3000`, with the full application running.

# Implementation details

Several techniques and packages were used to develop this challenge. This section will enter in more detail on how some of them were used.

## react-leaflet

The main map features were integrated using [react-leaflet](https://react-leaflet.js.org/). Exact implementation details can be found on the _client/src/components/Map_ folder. What's worth mentioning is that the [OpenStreetMap API](http://osm.org) was used to build the application interactive map and layers.

## react-leaflet-draw

The drawing features were developed using the [react-leaflet-draw](https://github.com/alex3165/react-leaflet-draw) extension package for react-leaflet. It exposes several layer drawing controls and bindable events with map information and utility methods, many of which were used to build the application drawing and state control logic. Specific implementation details can be found at _client/src/components/Map/LayersController_.

Another great side effect is that both react-leaflet and react-leaflet-draw are supported for mobile controls (even though there are still some hiccups, but works great noneless), and as such I took this as an opportunity to also focus on some responsive design philosophies.

## react-color

A simple color-picker component called [react-color](https://casesandberg.github.io/react-color/) was also used to integrate the functionality to the application. However, some state control logic had to be used to update the selected layer with the selected color. react-leaflet's _MapEvents_ and _Popups_ were really helpful to accomplish this.

As for the color picker itself, I chose _TwitterPicker_ simply because it was simpler (while also offering full color choice if needed) and it is much more mobile friendly than typical gradient pickers.

## react-modal

Another react component package used was [react-modal](https://github.com/reactjs/react-modal), especifically to build the Save and Load UI/UX. It's usage can be found under the _client/src/components/CollectionController_ folder. One important detail is that the same modal component is used for both save and load - the only thing that changes is the modal content (which can also be found in their own subfolders).

## Axios

Communication with the server api was done through [Axios](https://github.com/axios/axios). There are no particularly notable use cases in this project, besides setting it's BaseURL to use either localhost:3001 for development mode or the remotely set url (provided by Heroku in it's DATABASE_URL environment variable), when in production mode. Axios' declaration can be found under _client/src/services/api.js_.

## Nock

Some unit tests for the client application can be found under the naming convention \*_.test.js_. Since this project involves a ton of database interaction and state control, I used [nock](https://github.com/nock/nock) to mock some APIs and their response data.

## Sequelize

The [Sequelize ORM](https://sequelize.org/) was used to build the entire database schema, including models, controllers and migrations. Sequelize also fully supports geometric data types when using a Postgis-ready database, which were used to store the drawn GeoJSON data. Feature properties (such as colors) were stored as common Json data, which Sequelize also supports.

[This guide, by Tom Kadwill, was a great resource for setting up the remote environment.](https://stackabuse.com/adding-a-postgresql-database-to-a-node-js-app-on-heroku/)

Another great side effect of using Sequelize migrations was for defining the remote Heroku database schema. Even though I had some trouble setting it up, all that was missing were some configurations in Sequelize's _config.json_ file for when using production mode. With the Heroku database set up, all I had to do then was simply run a `sequelize db:migrate` on the Heroku bash:

```
heroku run bash
sequelize db:migrate
```

And voilà, the database is fully configured and ready to roll.

# Closing Thoughts

I'll dedicate this section to elaborate on some of my experiences and development obstacles I faced while implementing this challenge.

## Full Stack

I never really had dabbled with full stack development before, so a lot of time was spent in figuring out what and how to use. Thankfully, I already had some relational database architecting experience beforehand, and Sequelize proved to be really helpful by abstracting a lot of the Postgres schema modeling. Node development was also something that I didn't really have any experience with, but it was easy enough to figure it out for what I needed.

## GIS

Another territory that I had the opportunity to discover with this challenge was the world of GIS. To my surprise, I really enjoyed all the concepts and mathematical principles (coordinate systems and whatnots), probably due to my passion for geometry and arithmetic in general.

Before I discovered react-leaflet-draw, I was developing my own map drawing tool, and this was when I learned the most about all this.

## Deploying to a Cloud service

Finally, another topic which I didn't have much experience with was deploying an applicatiion (and a full stack one no less) to a cloud service. After some research, I started dabbling with DigitalOcean, but later I decided to use Heroku for simplicity's sake.

To my surprise, it was way easier than I thought it would be, besides one nasty issue with running sequelize on the Heroku bash to set up the remote database schema. I spent a lot of time on this, tried many approaches (even trying to Dockerize the entire application, but that just led to more issues), but in the end all that I was missing were some Sequelize configuration flags:

```
"production": {
  "dialect": "postgres",
  "protocol": "postgres",
  "use_env_variable": "DATABASE_URL",
  "dialectOptions": {
    "ssl": {
      "require": true,
      "rejectUnauthorized": false
    }
  }
}
```
Again, I'd like to also highlight [this guide, by Tom Kadwill](https://stackabuse.com/adding-a-postgresql-database-to-a-node-js-app-on-heroku/).

#

### Germano Pessoa Ciarlini Teixeira

germano.ciarlini@gmail.com - [@germanociarlini](https://github.com/germanociarlini)