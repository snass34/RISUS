var images = [];
images[0] = "images/alpaca1.jpg";
images[1] = "images/corgi1.jpg";
images[2] = "images/corgi2.jpg";
images[3] = "images/fatcat.jpg";
images[4] = "images/fatcat2.jpg";
images[5] = "images/giraffe1.jpg";
images[6] = "images/hedgehog1.jpg";
images[7] = "images/penguins1.jpg";
images[8] = "images/pig1.jpg";
images[9] = "images/puppy1.jpg";
images[10] = "images/puppy2.jpg";
images[11] = "images/redpanda1.jpg";
images[12] = "images/seal1.jpg";
 
document.addEventListener("DOMContentLoaded", function() {
   var link = document.getElementById("next");
 
   link.addEventListener("click", function() {
       if (String(document.getElementById("img").src).endsWith(images[0])) {
           document.getElementById("img").src=images[1]
       }
       else if (String(document.getElementById("img").src).endsWith(images[1])) {
           document.getElementById("img").src=images[2]
       }
       else if (String(document.getElementById("img").src).endsWith(images[2])) {
           document.getElementById("img").src=images[3]
       }
       else if (String(document.getElementById("img").src).endsWith(images[3])) {
        document.getElementById("img").src=images[4]
       }
       else if (String(document.getElementById("img").src).endsWith(images[4])) {
        document.getElementById("img").src=images[5]
       }
       else if (String(document.getElementById("img").src).endsWith(images[5])) {
        document.getElementById("img").src=images[6]
       }
       else if (String(document.getElementById("img").src).endsWith(images[6])) {
        document.getElementById("img").src=images[7]
       }
       else if (String(document.getElementById("img").src).endsWith(images[7])) {
        document.getElementById("img").src=images[8]
       }
       else if (String(document.getElementById("img").src).endsWith(images[8])) {
        document.getElementById("img").src=images[9]
       }
       else if (String(document.getElementById("img").src).endsWith(images[9])) {
        document.getElementById("img").src=images[10]
       }
       else if (String(document.getElementById("img").src).endsWith(images[10])) {
        document.getElementById("img").src=images[11]
       }
       else if (String(document.getElementById("img").src).endsWith(images[11])) {
        document.getElementById("img").src=images[12]
       }
       else if (String(document.getElementById("img").src).endsWith(images[12])) {
        document.getElementById("img").src=images[0]
       }
       
   });
 
});
