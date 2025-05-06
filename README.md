# Markdown2html
A simple markdown to html converter. Made as a part of a bigger project of making a markdown to pdf converter
**Update:** I wished to make a complete client side option, but all the client side options weren't good enough.

## Struggle
### 1. Client-side
It is possible to do this client side but all the client side ways achieve it in a similar manner. They first add the html to a canvas and then screenshot it, then add the image to pdf. **Yes** it looks nice, but you know the issue? The **text is not selectable**. Ofc I want the text to be selectable and searchable in my PDF, I don't want a collection of screenshots.

### 2. Server-side
There are ways to do this server-side. I could use something that lets me run chromium on the backend and then render a dummy page and print it as a pdf using the browser and return it to the user. **But** I don't have the money for the servers.

I was stuck on this, I just had a markdown to HTML converter but then a friend said "Hack the users browser and press `ctrl + p`". It was a joke...but it made sense.    

Yes, I could just press `ctrl + p` and be done with this but it prints the entire page. There is so much unwanted data on these pages oh myy.

#### What is User Experience?
I don't care about user experience at this point, I just want a way to make pdfs out of my markdown files because an online tool asked me to **pay them for this service**. I AM NOT GOING TO PAY THEM. **I WILL MAKE MY OWN**

#### So what now?
Let me give you the user flow
1. Type the markdown and get the HTML
2. Copy the markdown or HTML content as you like
3. Clicking on `PDF` will redirect you to a page built solely out of your html so you can press `ctrl + p` to print it.


## Link
[markdown2html](https://markdown2html-umber.vercel.app/)
