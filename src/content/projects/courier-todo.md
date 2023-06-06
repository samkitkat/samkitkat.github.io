---
title: "Courier Cheerleader: Boosting Productivity with Automated Encouragement! 🎉"
description: "Courier"
pubDate: "June 5 2023"
heroImage: "/placeholder-hero.jpg"
tags: ["react", "nextjs", "courier", "segment"]
projectURL: "https://todo-app-samkitkat.vercel.app/"
---

### Intro to your *Courier Cheerleading Catalyst*

A todo app is an invaluable tool for improving productivity it helps you stay organized and manage your tasks effectively. By centralizing tasks in one place, the app declutters the mind and ensures nothing is forgotten. In addition, progress tracking provides a sense of accomplishment, motivating us to keep moving forward.

However, I wanted to add another feature that could increase that sense of accomplishment and hopefully push forth another wave of motivation. Introducing your: “*Courier Cheerleading Catalyst!”*

To get our cheerful notifications going, we will first need three key components: 
1. A project, 
2. A way to track events, and 
3. A way to send notifications**. 
In this case, we have our todo app, Segment, and Courier!

### Step 1: Adding Courier as a Destination in Segment

Create a Segment account and workspace then follow the below:

**Step 1:** Go to your sources tab & click on the source you want to add courier to

**Step 2:** Click “Add Destination” & then search for “Courier”

**Step 3:** Now you can click “Configure Courier” and add your destination name

**Step 4:** To finish setup you will need your Courier API key, which you can find [here](https://app.courier.com/channels/segment)

Now that it is connected you will be able to see all events that Segment is tracking though the Courier app!

[*Step by step instructions for configuring Segment*](https://www.courier.com/docs/external-integrations/segment/segment-integration/)

## ✨ Code Time ✨

### Step 2: Importing **Segment Analytical Tracking**

For this step, I followed closely along to the [Quickstart: Analytics.js](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/quickstart/) Tutorial in the Segment Docs. In there they show you two different ways to add the necessary analytic tracking code.

**1:** You can paste the given code snippet into the <head> tag of your site, or

**2:** Add Segment to your project as an NPM package: `npm install @segment/snippet`

I decided to go the NPM route, here is how the code ends up looking:

```jsx
import * as snippet from '@segment/snippet'

function renderSnippet() {
    const opts = {
      apiKey: 'YOUR_WRITE_KEY'
    }
    if (process.env.NODE_ENV === 'development') {
      return snippet.max(opts)
    }
    return snippet.min(opts)
  }

return (
	<div>
		<Script
		    id="segment-script"
		    dangerouslySetInnerHTML={{ __html: renderSnippet() }}
		 />
	</div>
)
```

Segment offers a wide range of events that can be tracked. In my case, I specifically wanted to utilize Segment's analytical tracking capabilities to monitor the completion of all my todos. To achieve this, I developed a custom function that checks the status of each todo to determine if they are all marked as completed.

```jsx
const allCompleted = todos.every(todo => todo.status);

function allTodoDone() {
analytics.track("todos completed");
}

return (
	<div>
		.
		.
		.
		<div>{allCompleted ? allTodoDone() : null}</div>
	</div>
)
```

Please be aware that if you have any ad-blocking extensions enabled, they might interfere with the events being tracked by Segment. As a result, the tracked events may not be sent through and won't be visible in the logs. Consequently, notifications based on these events will not be sent as well.

<div align="center"><img src="../../assets/images/courier-img-1.png"></div>

### Step 3: Importing **Courier's Inbox and Toast Notifications**

Oooh the fun part! Adding the Inbox and Toast functionalities. It was incredibly simple to incorporate them into my project. I found all the necessary information [this section of the docs.](https://www.courier.com/docs/inbox/)

Literally as easy as:

1. `npm i @trycourier/react-provider`
2. `npm i @trycourier/react-inbox`
3. `npm i @trycourier/react-toast`

Once you've completed these steps, you'll have a cute little "🔔" icon wherever you choose to place it. This icon will serve as your inbox, hosting all your incoming notifications!

```jsx
import { CourierProvider } from "@trycourier/react-provider";
import { Inbox } from "@trycourier/react-inbox";
import { Toast, useToast } from "@trycourier/react-toast";

return (
	.
	.
	<CourierProvider userId={USER_ID} clientKey={CLIENT_KEY}>
		<Inbox />
		<Toast />
	</CourierProvider>
)
```

## Step 4: Putting it All Together!

Now you have a fully functional app that sends all your chosen tracking events to a centralized location! However, there is one final step remaining: creating the automations to bring those wonderful notifications to life.

To begin, navigate to the designer section within your Courier app. Here, you can design how you want your notifications to look and what message they should convey. Once you have finalized the design, proceed to the automations tab.

In the automations tab, you will set up the triggers for your notifications. Choose "Segment" as the trigger and specify the name of the event you previously tracked. Next, add the Courier UserID to determine who will receive the notification. From the dropdown menu, select the notification you designed earlier. 

**And just like that, voila!** 

<div align="center"><img src="../../assets/images/todo-app.gif"></div>

The automation is now set up, and your carefully crafted notification will be sent to the intended recipient.

Exploring how Courier collaborates with Segment to send notifications was an incredibly enjoyable learning experience for me. If you're interested in delving further into the code or experimenting with the app, feel free to visit the [Github Repo](https://github.com/samkitkat/todo-app) and [Todo App](https://todo-app-samkitkat.vercel.app/). Please note that this project is still a work in progress, so be sure to stay tuned for future updates and enhancements!

---