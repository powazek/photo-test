

_____________________________________

Testing photo merging capabilities!

The main code is in `home.html` and `home.ts`

I utilize canvas objects, and adjust/stretch/crop images and draw them onto the canvas.
I've imported CamanJS but have yet to need its more specialized funcitonalities (like photo brightening, etc). 

The `stretch()` function in `home.ts` works, and I am continuing to work on the math to get the `crop()` method to work. This function is supposed to find the maximum rectangle proportional to the image width/height ratio, center it on the photo, crop this out of the photo, and scale it to the correct width/height. 

_____________________________________
