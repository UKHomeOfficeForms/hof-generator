# hof-generator
CLI to quickly generate the file and folder structure for a basic hof app

## Install

hof-generator should be installed globally to allow access to the `hof` command on `$PATH`

```
npm install -g hof-generator
```

## Usage

Create a brand new hof project in a directory:

```
$ hof init [dir] [--app <name>]
```

### Options

* `dir` - the root directory of your application - Default `.`
* `app` - the name of your first application - Default `default-app`

Create a new app in an existing hof project:

```
$ hof app <name>
```

### Options

* `name` - the name of the application to add - *Required*

## Running your app

Once you have created a new app, you can run it locally with `npm start` - *Note: this will need a local redis instance running*. You can then access your service in a browser at `http://localhost:8080`.

Alternatively, a basic docker-compose configuration is included, which will bundle redis and an nginx proxy. Run `docker-compose up` to start these services. You can then access your service in a browser at `https://localhost`.

Create a brand new hof behaviour in a directory:

```
$ hof behaviour [dir] [--name <name>]
```

### Options

* `dir` - the root directory of your application - Default `.`
* `name` - the name of your first hof behaviour - Default `default-behaviour`
