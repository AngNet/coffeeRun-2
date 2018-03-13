# CPSC 473 - Front-End Engineering - Spring 2018
## Homework 4
### Section 02 - due March 12, Section 01 - due March 14

In this assignment, you will finish the CoffeeRun app and modify the RemoteDataStore module  it to work with Deployd as a back end.
Complete the following:

1. If you have not yet completed Chapter 12, work through that chapter to add form validation.

2. Work through Chapter 13 to connect CoffeeRun to the back-end service at http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders.

3.Install MongoDB and Deployd.

If you are using the Ubuntu MATE VM and have completed Homework 0, you should already have an updated version of Node.js installed. Use the following shell commands:
$ sudo apt update
$ sudo apt install -y mongodb
$ sudo systemctl stop mongodb
$ sudo systemctl disable mongodb
$ npm install deployd-cli -g

4. Create a new Deployd app for CoffeeRun and open the dashboard:
$ dpd create coffeerun-backend
$ cd coffeerun-backend
$ dpd -d
Note that you may see the following error in your terminal window:
ls: no such file or directory: resources/**/config.json
The message should disappear when you have completed the next step.

5. Use the Deployd dashboard to create a Collection for coffeeorders, using the data sent to the API hosted on Heroku as a guide.

6. Modify SERVER_URL in scripts/main.js to the following URL:
http://localhost:2403/coffeeorders

7. Update scripts/remotedatastore.js as necessary to use Deployd as CoffeeRun’s new back-end.  Note the following:
You may need to change the way that orders are created.
Any changes you make should not affect the code outside remotedatastore.js.
As with the Heroku API, access the collections over HTTP, rather than through the dpd.js library.
