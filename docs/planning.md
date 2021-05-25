
# Planning

## Contents

  - [Description](#description)
  - [Technology](#technology)
  - [Features](#features)
  - [Potential Features](#nice-to-have-features)
  - [Technical Risks](#technical-risks)

## Description

Scribbler lets folks quickly scribble an idea and share it with others via temporary link; after 30 minutes, the image is permanently deleted. 

Normally you have to first open or install a drawing app, save it locally, and then upload it somewhere. With uploading images, it's not uncommon that once it's on their servers it stays there, even after you delete the message or post. 

Personally I often scribble on a napkins or sticky-notes when chatting with others, but virtually, it's not as simple. I want to streamline the doodle-sharing process, while also giving users control over their data.



![mockup of main page](./images/scribbler-view-main.png)

## Technology

- React
- PostgreSQL
- Express
- Node.JS
- AWS S3 API
- Colormind API
- Excalidraw
- Heroku

## Features

- Create and upload drawings, which are auto-deleted after a certain time
- Generate a link to the uploaded image for user to share with others
- Optional user registration
- Keep record of registered users' cloud images for a longer duration of time, up to 7 days
- Registered users can immediately delete one of their uploaded images

## Nice-to-Have Features

- Toggle light/dark mode
  - Registered users can set it as a default preference
- Registered users can set how long the image link is active (max 7 days)
- Real-time collaboration on doodles
- CAPTCHA to prevent spammers
- Upload your own background images to draw on
  - Filter inappropriate images, or at least for image uploads

## Technical Risks

- AWS S3 might have limitations or auto-deletion (as I want it) might be too complicated.
  - I can use Cloudinary instead, which also offers guides on how to do it. 
  - I can adjust the timer as well if there's a limitation with that, ie expires after 15 minutes instead of 30,
- When a user deletes their own images, an insecure implementation might cause other users' data to be deleted or leaked. 
  - I can disable the user ability to delete their own images immediately. While un-ideal, at least the image will still expire/auto-delete after 7 days.


