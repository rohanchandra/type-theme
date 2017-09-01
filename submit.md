---
layout: page
title: Submit
permalink: /submit/

---
<div class="box">
You can use this submission form to let us know if you've had any unsolicited contact on LinkedIn and would like to submit them to this site.

Let me know if;<br><br>
<ul>
  <li>I need to hide their name</li>
  <li>I need to blur their face</li>
  <li>I can print your name / website / twitter / etc as credit</li>
</ul>
Cheers!<br><br>

<form action="https://formspree.io/kittysquee@gmail.com"
      method="POST">
  <label for="name">Name</label>
  <input type="text" name="name" placeholder="Your name"><br>

  <label for="_replyto">Email</label>
  <input type="email" name="_replyto" placeholder="your@email.com"><br>

  <label for="message">Message</label>
  <textarea rows="4" name="message" placeholder="What do you want to say?"></textarea><br>

  <input type="hidden" role="uploadcare-uploader" name="content" data-public-key="9cdebcff17e1df93b396" data-images-only /><br>

  <input type="submit" value="Send" class="submit-button">
</form>
</div>
