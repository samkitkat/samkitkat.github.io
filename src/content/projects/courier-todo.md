---
title: "Courier Cheerleader: Boosting Productivity with Automated Encouragement! 🎉"
description: "Courier"
pubDate: "June 5 2023"
heroImage: "/placeholder-hero.jpg"
tags: ["react", "nextjs", "courier", "segment"]
projectURL: "https://todo-app-samkitkat.vercel.app/"
---
<span style="color:#588157; font-weight: bold; font-size: 20px; -webkit-text-stroke: 2px #588157; letter-spacing: 1px;">
Intro to your *Courier Cheerleading Catalyst*
</span>

I absolutely ADORE a good todo app. Todo apps can be an invaluable tool for improving productivity, helping you stay organized and manage tasks effectively. They are the ultimate solution for decluttering the mind and ensuring nothing slips through the cracks.

One of the biggest struggles I faced with other productivity tools was their complexity and lack of user-friendliness. Instead of actually getting things done, I found myself getting lost in confusing interfaces and tangled features. It was incredibly frustrating and counterproductive. That's why I was determined to create a todo app that prioritized simplicity and intuitive functionality. I envisioned a clean and minimalistic app that allowed me to effortlessly add tasks, organize them according to my own logic, and easily mark them as complete. This newfound simplicity has truly revolutionized my productivity routine and made task management a breeze.

But I didn't stop there—I wanted to take the sense of accomplishment to the next level. Introducing the "Courier Cheerleading Catalyst"! This feature adds a delightful touch of motivation by sending cheerful notifications to encourage users as they complete their tasks. Celebrating small victories is crucial for maintaining momentum, and these notifications play a pivotal role in reinforcing a sense of accomplishment and progress. With visual and auditory cues acting as rewards, completing tasks becomes even more rewarding, boosting our motivation and fueling our productive streak.

<span style="color:#588157; font-weight: bold; font-size: 16px;">
To bring these cheerful notifications to life, we need three key components:
</span>

<span style="-webkit-text-stroke: 0.4px #588157">
<ol>
<li>An app: in our case a task tracker,</li>
<li>Segment: a tool to track events, such as completing a task,</li>
<li>and Courier: a tool that sends notifications based on those events.</li>
</ol>
</span>

By combining these three essential components, we create an exceptional todo app experience that not only keeps us organized but also adds a delightful touch of motivation and celebration along the way. So let's get started and embrace the power of cheerful notifications to supercharge our productivity!

*I invite you to visit the <a href="https://github.com/samkitkat/todo-app" target="_blank" rel="noopener noreferrer">Github Repo</a> for this app to see all the code. If you find the repository helpful or inspiring, don't forget to show your support by giving it a star! Your star would be greatly appreciated and would motivate me to continue improving the app and sharing more useful resources in the future. Thank you in advance for your support!*

<span style="color:#588157; font-weight: bold; font-size: 18px; -webkit-text-stroke: 1px #588157; letter-spacing: 1px;">
Step 1: Adding Courier as a Destination in Segment
</span>

Create a Segment account and workspace then follow the below:

<span style="-webkit-text-stroke: 0.4px #588157">
<ol>
<li>Go to your sources tab & click on the source you want to add courier to</li>
<li>Click “Add Destination” & then search for “Courier”</li>
<li>Now you can click “Configure Courier” and add your destination name</li>
<li>To finish setup you will need your Courier API key, which you can find <a href="https://app.courier.com/channels/segment" target="_blank" rel="noopener noreferrer">here</a></li>
</ol>
</span>

Now that it is connected you will be able to see all events that Segment is tracking though the Courier app!

<a href="https://www.courier.com/docs/external-integrations/segment/segment-integration/" target="_blank" rel="noopener noreferrer">Step by step instructions for configuring Segment</a>

<br>

<div align="center">
<span style="color:#588157; font-weight: bold; font-size: 20px; -webkit-text-stroke: 2px #588157; letter-spacing: 1px;">
✨ Code Time ✨
</span>
</div>

<br>
<br>

<span style="color:#588157; font-weight: bold; font-size: 18px; -webkit-text-stroke: 1px #588157; letter-spacing: 1px;">
Step 2: Importing Segment Analytical Tracking
</span>

For this step, I followed closely along to the <a href="https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/quickstart/" target="_blank" rel="noopener noreferrer">Quickstart: Analytics.js</a> Tutorial in the Segment Docs. In there they show you two different ways to add the necessary analytic tracking code.

<span style="-webkit-text-stroke: 0.4px #588157">
<ol>
<li>You can paste the given code snippet into the <head> tag of your site, or</li>
<li>Add Segment to your project as an NPM package: 'install @segment/snippet'</li>
</ol>
</span>

<div align="center"><img src="../../assets/images/todo-complete-segment.gif"></div>

Segment offers a wide range of events that you can keep track of. In my case, I wanted to use Segment's analytics tracking capabilities to monitor when I finish my todos. To make it happen, I created a special function that checks if all my todos are completed. 

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

This function helps me see if I've finished everything on my list or if there's still work left to do. It's a simple yet effective way to keep tabs on my progress and make sure I stay on top of my tasks.

<div align="left"><img src="../../assets/images/courier-img-1.png"></div>

<span style="color:#588157; font-weight: bold; font-size: 16px;">Note:</span> Please be aware that if you have any ad-blocking extensions enabled, they might interfere with the events being tracked by Segment. As a result, the tracked events may not be sent through and won't be visible in the logs. Consequently, notifications based on these events will not be sent as well.

### Step 3: Importing Courier's Inbox and Toast Notifications

Oooh the fun part! Adding the Inbox and Toast functionalities. It was incredibly simple to incorporate them into my project. I found all the necessary information <a href="https://www.courier.com/docs/inbox/" target="_blank" rel="noopener noreferrer">this section of the docs.</a>

Literally as easy as:

<span style="-webkit-text-stroke: 0.4px #588157">
<ol>
<li>npm i @trycourier/react-provider</li>
<li>npm i @trycourier/react-inbox</li>
<li>npm i @trycourier/react-toast</li>
</ol>
</span>

Once you've completed these steps, you'll have a cute little "🔔" icon wherever you choose to place it. This icon will serve as your inbox, hosting all your incoming notifications!

```jsx
import { CourierProvider } from "@trycourier/react-provider";
import { Inbox } from "@trycourier/react-inbox";
import { Toast, useToast } from "@trycourier/react-toast";

return (
		.
		.
		.
		<CourierProvider userId={USER_ID} clientKey={CLIENT_KEY}>
        <Inbox />
        <Toast />
     </CourierProvider>
)
```

### Step 4: Putting it All Together!

Now you have a fully functional app that sends all your chosen tracking events to a centralized location! However, there is one final step remaining: creating the automations to bring those wonderful notifications to life.

To begin, navigate to the designer section within your Courier app. Here, you can design how you want your notifications to look and what message they should convey. Once you have finalized the design, proceed to the automations tab.

In the automations tab, you will set up the triggers for your notifications. Choose "Segment" as the trigger and specify the name of the event you previously tracked. Next, add the Courier UserID to determine who will receive the notification. From the dropdown menu, select the notification you designed earlier. 

<span style="color:#588157; font-weight: bold; font-size: 18px; -webkit-text-stroke: 0.5px #588157; letter-spacing: 1px;">
And just like that, voila! 🎉
</span>
<br>
<br>

<div align="center"><img src="../../assets/images/todo-app.gif"></div>

The automation is now set up, and your carefully crafted notification will be sent to the intended recipient.

Exploring how Courier collaborates with Segment to send notifications was an incredibly enjoyable learning experience for me. If you're interested in delving further into the code or experimenting with the app, feel free to visit the <a href="https://github.com/samkitkat/todo-app" target="_blank" rel="noopener noreferrer">Github Repo</a> and <a href="https://todo-app-samkitkat.vercel.app/" target="_blank" rel="noopener noreferrer">Todo App</a>. Please note that this project is still a work in progress, so be sure to stay tuned for future updates and enhancements!

---