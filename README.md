## Run this application using docker.

## Please follow the below steps to continue

Make sure docker is installed in your system and login is done.

To check docker installed in system, open terminal and just enter below command

### `docker -v` // it should output docker version

Next step is to build image

Navigate to folder from terminal and execute below command

### `docker build -f Dockerfile -t eyewa-assessment

once above step is succeeded then image will be created with named (eyewa-assessment).

To verify execute below command

### `docker images` // this will list all the images

once we verify our image with named eyewa-assessment execute below command to start application

docker run -p 3000:3000 eyewa-assessment

the above will start application

## Follow below if no Docker installed

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Happy Using !!

## Screenshots:

## 1. Search Results by input

![Search Results by input](https://github.com/nmanikumar5/deezer-eyewa/blob/main/public/screenshots/search-results.png)

## 2. Album list by Artist Selection

![Album list by Artist Selection](https://github.com/nmanikumar5/deezer-eyewa/blob/main/public/screenshots/artist-album-list.png)

## 3. Tracks by Album Selection

![Tracks by Album Selection](https://github.com/nmanikumar5/deezer-eyewa/blob/main/public/screenshots/tracks-by-album.png)
