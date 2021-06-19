function resizeGridItem(item) {
  console.log(item.querySelector('.content'));
  const grid = document.querySelector('.grid');
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
  );
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue('row-gap')
  );
  const rowSpan = Math.ceil(
    (item.querySelector('.content').getBoundingClientRect().height + rowGap) /
      (rowHeight + rowGap) +
      30
  );
  item.style.gridRowEnd = 'span ' + rowSpan;
  console.log('rowspan', rowSpan);
  console.log(
    'content height',
    item.querySelector('.content').getBoundingClientRect().height
  );
}

function resizeAllGridItems() {
  const allItems = document.querySelectorAll('.item');
  for (let i = 0; i < allItems.length; i++) {
    imagesLoaded(allItems[i], resizeInstance);
  }
}

function resizeInstance(instance) {
  const item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener('resize', resizeAllGridItems);
