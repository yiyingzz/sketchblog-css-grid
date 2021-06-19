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
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = 'span ' + rowSpan;
  console.log('rowspan', rowSpan);
  console.log(
    'content height',
    item.querySelector('.content').getBoundingClientRect().height
  );
}

function resizeAllGridItems() {
  console.log('resize');
  const allItems = document.querySelectorAll('.item');
  for (let i = 0; i < allItems.length; i++) {
    resizeGridItem(allItems[i]);
  }
}

window.onload = resizeAllGridItems();
window.addEventListener('resize', resizeAllGridItems);
