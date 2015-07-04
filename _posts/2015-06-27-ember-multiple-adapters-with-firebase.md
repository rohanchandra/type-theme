---
layout: post
title: Firebase and multiple adapters in Ember
excerpt: <p>How to use multiple data sources in Ember</p>
---
In this post I want to show you how you can add multiple data stores to your
Ember application, using Firebase with my demo Marvel API Ember app as an example.

You can see the source code for the full application here: https://github.com/dtt101/superhero
and view it online here: https://superhero-demo.firebaseapp.com

## Pre-Requisites
As I am friend to our collective future here are links to the versions of software I
am using as I write, including ember-cli 0.2.7, Ember.js 1.12.1 and emberfire 1.4.7.

#### bower.json

 https://github.com/dtt101/superhero/blob/48ecb054012984c84f6f994879da073c77355317/bower.json

#### package.json

https://github.com/dtt101/superhero/blob/48ecb054012984c84f6f994879da073c77355317/package.json

## Using Firebase as an additional data store

The first round of the app included hooking up a character search and showing
character details. What I want to do next is hookup some search tracking so I
can support some future feature plans, like showing the most popular searches.

## Install firebase/emberfire

First thing we'll do is install firebase into my ember-cli app (using emberfire).

```
ember install emberfire
```

This will update your ```bower.json``` and ```package.json```.

You will also see a new line added to your ```config/environment.js```.

If given the opportunity don't overwrite your existing application adapter.

```
firebase: 'https://YOUR-FIREBASE-NAME.firebaseio.com/',
```

You should update this line to point to your firebase app.

### Add Firebase Adapter

Then we'll create a firebase adapter which can be extended to support any models
that will interact with firebase. We don't want to overwrite the existing application
adapter as that points to the Marvel API.

Create ```app/adapters/firebase.js``` with the following code:

```
import config from '../config/environment';
import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  firebase: new Firebase(config.firebase)
});
```

Next there are some security steps we should take to make sure everything will
working properly.

Ember needs to know that it is ok to talk to firebase, and firebase needs it's security roles updating.

First you should update your content security policy in ```config/environment.js``` to include the firebase service. Note the wildcard.

```
contentSecurityPolicy: {
  'connect-src': "'self' wss://*.firebaseio.com",
  'img-src': "'self'"
},
```

In addition you will need to update the default firebase security policy to support writing data for your application. See the guide here for more information: https://www.firebase.com/docs/security/guide/.

Ok brilliant - our application should now support Firebase.

## Adding a firebase model

To try things out we'll create a model. I'm going to call it LogEntry.

```
ember generate model log-entry body:string timestamp:number
```

Next we create an adapter for that model to use extending our firebase adapter. Create a file at ```app/adapters/log-entry.js```

```
import FirebaseAdapter from './firebase';

export default FirebaseAdapter.extend();
```

We can test this out in the browser console, and then confirm the data is being
saved using the Forge data viewer provided by Firebase.

In chrome, with the Ember Inspector installed grab an instance of a route, then run the following in the debug console of chrome developer tools.

```
var logEntry = $E.store.createRecord('log-entry', { body: 'test', timestamp: new Date().getTime() })
logEntry.save()
```

Then navigate to your firebase and checkout the forge data viewer - you should see your new log entry.

## Next steps

So now we have our log model created and hooked up to Firebase in my next post we'll work on saving the searches into firebase and using that data to pull out a live top ten character searches.

We have seen:

 * How to add multiple data sources in ember-cli
 * How Firebase can be a great auxiliary data source for apps that primarily read from other APIs
