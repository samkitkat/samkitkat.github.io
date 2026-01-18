---
title: "GatorDo"
description: "A local-first todo app with optional cloud sync, built for a university web development course."
pubDate: "2026-01-18"
tags: ["Vite", "React", "Supabase", "Netlify"]
projectURL: "https://gatordo.netlify.app/"
---

## Overview

**GatorDo 🐊** is a simple but intentionally designed todo app that I built for my web development course I took at university. The goal of the project was not just to create a functioning CRUD app, but to think critically about user experience, authentication, and resilience in real-world web applications.

The app works fully in guest mode by default, using local storage, with optional sign-in for cloud syncing. This allows anyone to try the app immediately without creating an account, while still supporting authenticated users who want persistence across devices.


GatorDo is designed as a local-first application:

- By default, todos are stored locally in the browser
- Users can optionally sign in via email magic link using Supabase
- When signed in, todos sync to the database
- If Supabase is unavailable, the app automatically falls back to local mode without crashing

This approach ensures the app is always usable, even in demo or offline scenarios.

## Tech Stack

- **Vite** – Development server and build tool for fast iteration and optimized production builds
- **React** – Component-based UI and state management
- **Supabase** – Authentication (magic link) and database with row-level security
- **Netlify** – Static hosting and continuous deployment

## Authentication & Data Design

Authentication is optional and handled via Supabase magic links. When signed in:

- Each user only has access to their own todos
- Row-level security (RLS) policies enforce data isolation
- Timestamps are stored for creation and completion


## UX & Interaction Details

Small details were intentionally added to improve usability:

- Hovering over a todo shows when it was created and, if completed, when it was finished
- Completed todos are sorted by most recent completion
- Completed items can be shown or hidden with a simple toggle
- A celebration animation for task completion
- Logged-in users see a subtle greeting with their email

## What I Learned

This project helped me think beyond just “making it work”, I focused on:

- Designing for failure states
- Separating core functionality from optional features
- Balancing simplicity with thoughtful UX
- Implementing authentication without making it mandatory
- Understanding how build tools, hosting, and client-side apps fit together

## Next Steps

Some things I'd like to add in the future:

- Syncing local todos to the cloud after sign-in
- Dark Mode
- Fun motivational pop ups



**Live Project:** [gatordo.netlify.app](https://gatordo.netlify.app/)  
**Source Code:** https://github.com/samkitkat/gatordo
