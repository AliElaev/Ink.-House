document.getElementById('burger').addEventListener('click', function() {
   document.getElementById('list').classList.toggle('active');
   this.classList.toggle('open');
 });

//  Табы
 function openTab(event, tabId) {
   // Скрыть все вкладки
   const tabContents = document.querySelectorAll('.tab-content');
   tabContents.forEach(tab => tab.style.display = 'none');

   // Удалить класс "active" у всех кнопок
   const tabButtons = document.querySelectorAll('.tab-button');
   tabButtons.forEach(button => button.classList.remove('active'));

   // Показать текущую вкладку и выделить кнопку
   document.getElementById(tabId).style.display = 'grid';
   event.currentTarget.classList.add('active');
}
