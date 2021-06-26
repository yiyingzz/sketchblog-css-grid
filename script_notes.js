const grid = document.querySelector(".grid");

class Post {
  constructor(data) {
    this.date = data.file;
    this.file = data.file;
    this.text = data.text;
    this.imgDesc = data.imgDesc;
  }
  get date() {
    return this._date;
  }
  set date(value) {
    const newDate = new Date(value.split(".")[0]);
    const dateArr = newDate.toDateString().split(" ");
    dateArr.shift();
    this._date = `${dateArr[0]} ${dateArr[1]}, ${dateArr[2]}`;
  }
}

function resize() {
  const allItems = grid.querySelectorAll(".item");
  const rowHeight = getStyleValue(grid, "grid-auto-rows");
  const rowGap = getStyleValue(grid, "grid-row-gap");
  grid.style.gridAutoRows = "auto";
  allItems.forEach((item) => {
    item.style.gridRowEnd = `span ${Math.ceil(
      (item.clientHeight + rowGap) / (rowHeight + rowGap)
    )}`;
  });
  grid.removeAttribute("style");
}
// we save the vales for row height & row gap
// then set grid-auto-rows to auto --> which makes it automatically adjust to the content size
// set align-items to self-start --> like 'start', it aligns to start of cell but also along the item's starting side
// then set grid-row-end to (height of item + row gap) divided by (row height + row gap)
// since row gap is set to 0, this is basically height of item divided by row height
// which gives us the number of rows it spans over
// then we remove the attribute "style" which resets grid-auto-rows to default (b/c we remove the inline css)

function getStyleValue(element, property) {
  return parseInt(window.getComputedStyle(element).getPropertyValue(property));
}

function init() {
  const posts = [];
  data.forEach((item) => {
    const newPost = new Post(item);
    posts.push(newPost);
  });

  let html = ``;
  posts.forEach((post) => {
    let imgDesc = "";
    if (post.imgDesc !== undefined) {
      imgDesc = post.imgDesc;
    }
    html += `
    <article class="item">
      <div class="content">
        <h3 class="date sr-only">${post.date}</h3>
        <img
          src="./img/${post.file}"
          alt="${imgDesc}"
        />
        <p class="text">
          ${post.text}
        </p>
        <p class="date" aria-hidden="true">${post.date}</p>
      </div>
    </article>
  `;
  });
  grid.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", resize);
window.addEventListener("resize", resize);
// DOMContentLoaded waits for the DOM hierarchy to finish loading, so we add the posts here
// window load waits for everything including images, stylesheets, subframes, etc, so call resize function here
