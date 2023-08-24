---
title: "Interactive Twitch Gradient Changer"
description: "As a developer, one of the most exciting things to work on is a project that integrates with a platform or service that you're passionate about. For me, that platform is Twitch. Here is a project I built using the Twitch API."
pubDate: "May 17 2022"
heroImage: "/placeholder-hero.jpg"
tags: ["react", "twitch", "api"]
projectURL: "https://www.samkitkat.com/twitch-background/"
---

As a developer, one of the most exciting things to work on is a project that integrates with a platform or service that you're passionate about. For me, that platform is Twitch, the leading live streaming platform for gamers and content creators.

In this blog post, I want to share with you a project that I built using the Twitch API that allows viewers to redeem channel points to change the color of the stream background. Channel points are a virtual currency that Twitch viewers can earn by watching streams, and they can be redeemed for various rewards set by the streamer.

The idea for this project came to me when I was watching a streamer who had a static background throughout their stream. I thought it would be cool to give viewers the ability to change the background color based on their channel point redemptions, creating a more interactive and engaging viewing experience.

To get started, I first had to authenticate with the Twitch API using an OAuth token. This allowed me to access the necessary endpoints to listen for channel point redemption events and update the stream background color in real-time.

To handle multiple viewers redeeming different colors simultaneously, I implemented a queue system that prioritizes the most recently redeemed color. This ensures that the stream background color always reflects the most recent viewer redemption.

Overall, this project was a fun and challenging way to integrate with the Twitch API and create an interactive experience for viewers. It also provided a valuable learning opportunity for working with real-time updates and handling concurrent requests.

If you're interested in building your own project using the Twitch API, I highly recommend checking out the official Twitch Developer Documentation and exploring the available endpoints and resources. Who knows, maybe your project will become the next big thing in the Twitch community!
