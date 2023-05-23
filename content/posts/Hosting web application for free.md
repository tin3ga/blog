---
title: "Hosting Web Application for Free"
date: 2020-07-10T10:24:39+03:00
draft: false
tags: ["hosting", "vue", "netlify", "web", "free"]
weight: 120
---

# Introduction 
A weather application is always the first and easiest way for many developers to learn how to use APIs.Today we are going to go through the basics of creating and deploying your site build using Vue.js.

# Getting Started
First we need to create a free [open weather](https://home.openweathermap.org/users/sign_up) account to access their API.
To use vueCLI, we need to download and install [Node.js](https://nodejs.org/en/download/).

<a href='https://nodejs.org/en/download/'>![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/lvmykcuig1hfwjut4ivz.png)</a>

Once the installation is completed run the following commands in the terminal.

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
# creating the project

To create a project open your terminal and,run `vue create weather`

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/f8uqfngw44nuf763q733.png)
Navigate and select default using the arrow keys.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/zwzi4rjesn1gw3706n44.png)
When completed a folder will be created with git initialized.
Open the folder using your code editor of choice.
It should show something similar to this.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/aiwdr5hb4ety3fayc9if.png)

## Coding
Since it is a very small application we wont need the components folder and we are going to have to delete the boilerplate code already there in the App.vue file.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/vr3cpvv90mltjnbv81u1.png)

inside the div tag type the following code
```
<header>
      <h1>WeatherApp</h1>
      <input
        type="text"
        autocomplete="off"
        class="search-box"
        placeholder="Search for a city..."
        v-model="query"
        @keypress="fetchWeather"
      />
    </header>
    <main class="card" v-if="typeof weather.main != 'undefined'">
      <div class="location">{{weather.name}}, {{weather.sys.country}}</div>
      <div class="temp">{{ Math.round(weather.main.temp)}}°C</div>
      <div class="weather">{{weather.weather[0].main}}</div>
    </main>
```
**V-model** is a directive in vue.js that interacts with the DOM,we have bind the input to a variable data stored in query.
**@keypress**(which can also be expressed as v-on:keypress) is a directive that listens to DOM events and runs fetchWeather method when triggered.

The following code goes inside the script tag
```
export default {
  name: "App",
  data() {
    return {
      api_key: "<your api key>",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {}
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key === "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then(res => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    }
  }
};
```
Viewing the app in a local server open the terminal,run `npm run server` then click at the localhost:8080 link.

# Deployment
There are various platforms from which we can deploy our app from.But we are going to focus on netlify for today.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/akgrf4xvp5fku9qonzo8.png)
We will need to sign up for an account.i recommend signing up with github.

Netlify allows you to drag and drop the files to be deployed but
alternatively you can deploy directly from github.

Using github makes it easy to update your site since changes are made as soon as they are pushed to your repository.To do so follow the steps below

* On the sites menu select new site from git.
* Connect to Git Provider
* Search for your repo/configure the netlify app on Github.
* Build and deploy

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/i3iay416xyxfjx2rzv9j.png)
Always ensure the build command is set to `npm run build` and the publish directory set to `dist`