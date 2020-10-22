var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('tagName:', event.target.tagName);

  if (event.target && event.target.matches('button')) {
    var parentListItemEvent = event.target.closest('.task-list-item');
    console.log('parentListItemEvent:', parentListItemEvent);
    parentListItemEvent.remove();
  }
});
