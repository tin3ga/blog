---
title: "Web Scraping Using Selenium"
date: 2023-10-09T17:20:55+03:00
draft: false
tags: ["automation", "python", "selenium", "web-scraping"]
weight: 130
---


## Introduction
[Selenium](https://www.selenium.dev/) is a framework that many developers use to automate web browsers. It's an open source tool that offers compatibility, with web browsers and supports programming languages. While its commonly used for testing web applications it's also handy for tasks like web scraping and automating browser actions. WebDriver, which is a part of Selenium allows developers to control web browsers programmatically. 

## Using Selenium to scrape data
Task: Scraping the latest news posts from a popular blog post
**Please note that to follow along you must have an understanding of basic HTML elements and CSS classes and id selectors as well as python**

To use selenium we first need to install the package using [pip](https://pypi.org/project/selenium/).
`pip install selenium`
Using a code editor of your choice create a .py file and import selenium.webdriver module which provides all the WebDriver implementations.
```
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://www.google.com')
```
To test if everything is working so far we need to instruct the Selenium WebDriver to navigate a given URL.
Running the .py file should launch a browser instance and close immediately the website loads.

Chrome() class also provides implementation for chromium based browsers e.g brave and not just the chrome.

To use Brave, a Chromium-based browser, with Selenium WebDriver in Python, you can set the binary location using the webdriver.ChromeOptions() class and then pass these options as a parameter when creating the WebDriver instance. Here's how you can do it:
```
from selenium import webdriver

BROWSER_PATH = r"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"
OPTIONS = webdriver.ChromeOptions()
OPTIONS.binary_location = BROWSER_PATH

driver = webdriver.Chrome(options=OPTIONS)
driver.get('https://www.google.com')
```
To prevent the browser instance from closing, add the following property with name 'detach' and set its value to 'True'
`OPTIONS.add_experimental_option("detach", True)`

## Scraping the data
I will demonstrate using pulselive website. The following code should load the website on a browser instance.

```
from selenium import webdriver

BROWSER_PATH = r"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"
OPTIONS = webdriver.ChromeOptions()
OPTIONS.binary_location = BROWSER_PATH
OPTIONS.add_experimental_option("detach", True)

URL = 'https://www.pulselive.co.ke/news'

driver = webdriver.Chrome(options=OPTIONS)
driver.get(URL)

```
We now need find the HTML elements that may be of use to us.
To interact with web pages and find HTML elements using Developer Tools, you can follow these steps:

1. Open Brave browser.

2. Navigate to the web page you want to inspect.

3. To open Developer Tools:
   - On Windows/Linux: Press `Ctrl + Shift + I`.
   - On macOS: Press `Option + ⌘ + I` or right-click anywhere on the page and select "Inspect" from the context menu.

4. In the Developer Tools panel that opens, you will see various tabs such as "Elements," "Console," "Network," etc. You are interested in the "Elements" tab, which shows the HTML structure of the web page.

5. In the "Elements" tab, you can expand and collapse elements to explore the page's structure. Look for the `<div>` element with a class name of "article-list-items." It should be under the `<ul>` (unordered list) element, and each list item `<li>` should contain an `<a>` tag for the article link and an `<h2>` tag for the article title.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j2zrt5cl839wcwpick36.png)

### Locating elements using By
This is done by first importing By from from selenium.webdriver.common.by
`from selenium.webdriver.common.by import By`
next we instruct the webdriver instance using find_element method i.e`driver.find_element(By.CLASS_NAME, value='article-list-items')` then assign this to a variable(i named mine articles)
**Note: div(class='article-list-items') is the parent element of the articles.**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/63zgifjh2ibbgenlcgqa.png)
Executing this code returns a selenium webElement, To access the relevant text and links, we need to narrow down using css selectors to the specific element that we are targeting i.e getting all the links contained in the div element with a class name **article-list-items**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/om2w8my75aoviff0nwl2.png)

Remember the div with a class name **article-list-items**,it is an unordered list element containing list elements(the list elements also contain other divs and anchor tags)
`find_elements(By.CSS_SELECTOR)` value='li a' helps narrow down to the target element in our case, links in the anchor tags.
Since `find_elements` does not return a single element but all the elements matching our value, assign a variable to point to the results and iterate to get a hold of each item.
Finally for each item call the `get_attribute` method with attribute name 'href' to return the url contained in each anchor tag.

For the article titles the approach is similar.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/583w3yuxtx2luu0ux9zl.png)

To get the title contained in h2 tags use find elements by css selector value='li h2' and because h2 tags do not have attributes but instead contain texts in between. The text can be retrieved by using the property `text`.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wh1a0shonmhwy7ml4f78.png)
The above code prints the articles with article titles and links separated by a semi-colon. 

**Final tips**
Have you noticed how every time we ran the code a new browser application window is launched.using this option `OPTIONS.add_argument("--headless=new")` runs everything in the background.
To automatically shut down the chromiumdriver executable instance i.e browser instance add `driver.quit()` at the end of your code.


## Conclusion

This is just a simple example use case on how automation can be used to simplify the process of acquiring information. The amount of applications is vast and i hope this demonstration provides you will a few insights and tips on how to get started with web scraping automation.

Check out the [Unofficial documentation](https://selenium-python.readthedocs.io/) here.

 




