---
layout: post
title:  "Web App Infrastructure"
tags: DevOps
---

After developing a few web apps to various stages of completion, I've experienced a number of mistakes which I present below in the form of "things you should definitely set up".

## Version Control (GitHub)
This is the most important, almost everything depends on it. My first app was developed by logging into our only server and editing the files. There was no way to "undo" or see what has been changed.

If something broke you'd have to hunt through the code to find and fix the issue. There was no good way to try out half-baked features without exposing them to users.

Using version control from the very beginning is key, learn git and github before doing anything else.

## Factories/Seeders
You want to be able to create dummy data easily. 
E.g. in one command spin up 10 "Lorem Ipsum" style blog posts with 20 comments each.

Using a web interface to create data to try out your app is slow, especially because the front end for doing that won't exist in the beginning.

## Automated Tests
While we're at it, don't use a web browser to test that things are working.
When I was starting out I would write some code, then fire up the server and test it manually using a browser, I'd have to do the same thing over and over (create a blog, edit the blog, check if the edits were stored, delete it, check that it was really deleted), after every code change I would do the same manual testing.

This is a drag and when you add more functionality it's really hard to remember to try all the combinations. 
Luckily, almost everything you could do yourself in a web browser you could automate and run using a single command.
It will tell you that everything in your code works as expexted or what you broke.

Automated testing is a very good investment of time, though an investment of struggle to learn. 

## Continuous Integration / Continuous Deployment (CI/CD)
Once you have version control and tests written, you can set up something like Travis or Jenkins to run your automated tests on each code commit, before the changes are approved in your version control.
This gives you better confidence that your code is always working. 

You can also use these tools to deploy your new code into production automatically if it passes the tests.

## Development Environment
Don't develop on your production servers. Develop on your local machine, then use version control and CI/CD to deploy to production. 

Try to make your development environment as similar to production as possible (e.g. use the same type of database).

## Log Capture
Add logging to your app and send it to a central location. Make sure the logs have relevant information not just "success" or something that doesn't make any sense if you're not looking at the code!

> E.g. "Info: user 23 created a new task with id 123". 

Sending these logs to a central location is important too. You don't want to have to sign into the individual servers to read the logs, so use something like papertrail or loggly (right now I'm digging papertrail's free plan).

When you scale out to many app servers this is even more important.

## Status Page
(I have yet to implement this but I think it's important.)

Have a status page on a completely seperate system (domain name, dns, server provider) that reports uptime and other KPIs to your users.

The more transparent you are about what's going on the more users will trust you. I haven't reached this level yet, but if a server goes down it would suck to have all your customers pinging you asking what's going on. Use a status page instead.

[Cachet](https://github.com/CachetHQ/Cachet) looks like a good open source project if you don't want to pay for a SaaS option.

## Seperate Database
Keep the database on a seperate server than your app, that way you can add more app servers (or delete them) and not have to worry about migrating the db.
Make sure you're backing up your db and can recover (and actually practice doing this). Or use something like [Amazon Web Service's RDS](https://aws.amazon.com/rds/) for a more managed database. 

## App monitoring
It would be great to have a dashboard where you can see response times, CPU levels, number of users, revenue, and other KPIs all in one glance.

I'm blending business insights (usage and revenue) with the technical monitoring (which might be a mistake) but you're more likely to check how things are going if it's all in one accessible location.

You also want to set up alarms that will email/sms you when a server goes down, is slow or something like that. 

## Seperate Static Frontend
I prefer to have www.site.com and site.com be pointed to the same frontend marketing pages, and have a login/register button take the user to app.site.com

With this you can experiment more with the marketing pages without worrying about breaking your app. You can also have your frontend be a static html site deployed from a CDN so it's really fast. Also if the app goes offline it won't take 
down your frontend, and you could display some messages to users.

GitHub Pages looks like a good free option.

## To Be Determined...
There are lots of mistakes to be made and lessons to be learned.
