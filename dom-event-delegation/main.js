var $taskList = document.querySelector('.task-list');

function taskListener(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    var $taskListItem = event.target.closest('.task-list-item');
    console.log('taskListItem: ', $taskListItem);
    $taskListItem.remove();
  }
}

$taskList.addEventListener('click', taskListener);
