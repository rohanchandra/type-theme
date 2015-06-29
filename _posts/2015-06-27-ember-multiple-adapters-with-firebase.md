---
layout: post
title: Firebase and multiple adapters in Ember
excerpt: <p>How to use multiple data sources in Ember</p>
---
In this post I want to show you how you can add multiple data stores to your
Ember application, using Firebase with my demo Marvel API Ember app as an example.

You can see the source code for the full application here: https://github.com/dtt101/superhero
and view it online here: https://superhero-demo.firebaseapp.com

TODO: versions and prerequisites.

The first round of the app included hooking up a character search and showing
character details. What I want to do next is hookup some search tracking so I
can support some future feature plans, like showing the most popular searches.

First thing we'll do is install firebase into my ember-cli app.

TODO: insert code here

Then we'll create a firebase adapter which cen be extended to support any models
that will interact with firebase. We don't want to overwrite the existing application
adapter as that points to the Marvel API.

TODO: insert code

Next there are some security steps we should take to make sure everything is
working properly.

TODO: insert code and firebase security rules info

Ok brilliant - our application should now support Firebase.

To try things out we'll create a model. I'm going to call it LogEntry.

TODO: insert code

Next we create an adapter for that model to use:

TODO: insert code

We can test this out in the browser console, and then confirm the data is being
saved using the Forge data viewer provided by Firebase.

Fantastic!

Next we hook it up to the UI so that searches are saved.

TODO: insert code

TODO: create tests

So that shows us:

How to add multiple data sources in ember-cli
How Firebase can be a great auxiliary data source for apps that primarily read from other
APIs
