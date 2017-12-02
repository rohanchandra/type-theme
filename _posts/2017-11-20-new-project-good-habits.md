---
layout: post
title:  "New Project: Good Habits"
tags: Laravel
---

Currently my ideal workflow when starting a new project:

1. Initialize the project locally, I'm using Laravel/Spark. No custom work is allowed at this point.
2. Create a repo for it in GitHub.
3. Configure and push the newly initialized project to GitHub.
4. Add continuous integration to the project, I'm using [Travis](https://travis-ci.org). 
   Ensure changes can't be merged into the master branch unless the tests pass.
5. Begin with custom development.

## Alternatively...
It's possible I'd add a Step 4.5 where I set up a production server and deploy the blank project. 

There are pros and cons to this step as it will result in unnecessary expense and delay, 
though I think that by having a production server ready to receive code you are more likely to ship an MVP sooner. 

It's also good to do the basic infrastructure config while you are still excited about the idea. 
This will save you from having to switch into operations mode halfway through your development phase, 
so you can push features without breaking the flow.

Of course, all of this ignores validating that anyone wants what you are about to build, but that's the topic for a different post...