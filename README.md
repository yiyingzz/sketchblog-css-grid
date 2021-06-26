# sketchblog-css-grid

css grid-based masonry-style sketch blog

Visit the live site here: https://yiying.ca/sketch/

- masonry layout tutorial from here: https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
- a follow up to the original tutorial that fixes some issues: https://medium.com/@RRafatpanah/first-of-all-thanks-so-much-for-this-great-article-it-was-exactly-what-i-was-hoping-to-find-b2ad245b127e

## notes

- so I used both the tutorials above, the first one to create the layout, then made the changes specified in the second one to fix some minor things
- however, I discovered a few remaining issues and made some changes of my own:

- first, I put `align-items: self-start;` into the CSS instead of re-adding it everytime through JS
- it seems like the default is more or less the same thing visually

- second, Chrome (and Edge, which also uses Chromium) only allows 1000 rows in a grid (you can see this in the inspector) so this layout will quickly break on mobile (and also on desktop/tablet if there's a lot of content) if you set your `grid-auto-rows` to a very small value, which I did in order to make the spacing more uniform
- you can actually see this happening on the codepen example in the 2nd tutorial since the dev made his rows 1px in height
- this isn't a huge problem but it does mean that the spacing between the items aren't exact (the first tutorial talks about this, basically the greater the `grid-auto-rows` value is, the more varied the extra space is at the end of the content for each item)
