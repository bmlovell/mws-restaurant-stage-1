#### Udacity Restaurant Reviews App

## Project Overview

This project takes the provided starter code and converts a static webpage to a mobile-ready web application. Accessibility is added to meet ARIA standards. The design is responsive on different-sized displays and accessible for screen reader use. A service worker is added to begin the process of creating a seamless offline experience for your users.

### Instructions
Download or clone a copy of the repository and open the project in a text editor.
https://github.com/bmlovell/mws-restaurant-stage-1-master.zip
https://github.com/bmlovell/mws-restaurant-stage-1.git

1. In the root of your project directory, start up a simple HTTP server to serve up the site files on your local computer. Follow the instructions below:

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
2. Override your port number in dbhelper.js line 11.
3. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
4. Explore the provided code and functionality implemented in these in three areas: responsive design, accessibility and offline use.

## Requirements:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace my api key with your own inside main.js where you see `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Credits

The starter code is from Udacity and the project owner. I worked on the rest according to the project rubric.
Special thanks to help and references from Matthew Cranford's project walkthroughs (https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-1-map-api/), and Doug Brown's webinar (https://www.youtube.com/watch?v=92dtrNU1GQc).


