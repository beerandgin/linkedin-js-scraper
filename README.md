# Linkedin Employee Name JavaScript Scraper
linkedin-js-scraper.js is a code snippet to be used during the reconnaissance phase of a penetration test. This JavaScript will pull out all names that belog to your client's organization from the LinkedIn results and print them as JSON data into the console. 

I made this tool out of frustration while using the GatherContacts.jar plugin for Burp Suite. It only pulls the names of the users as JSON data which can then be used to create email lists for password spraying/phishing purposes of the external attack phase of the penetration test.

## Usage
1. browse to LninkedIn.com and search for your current client (per your engagement).
2. click on the company name
3. click on the "People" tab on the top (near the left side)
4. scroll down as far as you want to populate the page with employees.
5. right click and select "inspect Element" (or "Inspect" depending on your browser)
6. click on the "Console" tab in the developer tools
7. copy the ljs.js code and paste it into the console
8. copy the JSON data into a file on your PC.


