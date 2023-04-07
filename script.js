
var hours = {
  9: document.getElementById('hour-9'),
 10: document.getElementById('hour-10'),
 11: document.getElementById('hour-11'),
 12: document.getElementById('hour-12'),
 13: document.getElementById('hour-13'),
 14: document.getElementById('hour-14'),
 15: document.getElementById('hour-15'),
 16: document.getElementById('hour-16'),
 17: document.getElementById('hour-17')
 };

  
 var today = dayjs();
 var time = today.format('H')

 $('#currentDay').text(today.format('dddd, MMMM D'));
 
  
   
   var plan = JSON.parse(localStorage.getItem('plan'))
  
  $('textarea').innerText = plan
 
 
 Object.keys(hours).forEach(function(key){
   var hour = hours[key];
   var hourNumber = parseInt(key);
   if (hourNumber < time){
 hour.classList.add("past")
   }else if (hourNumber <= time){
     hour.classList.add("present")
   }else{
     hour.classList.add("future")
   }
 
 var plan = localStorage.getItem('plan-' + key);
 if (plan){
   $(hour).find('textarea').val(plan);
 }
 });
 
 $('button').click(function(){
  var textarea = $(this).siblings('textarea');
   var key = 'plan-' + textarea.parent().attr('id').split('-')[1];
   writtenPlan = textarea.val()
   if (localStorage.getItem(key) === writtenPlan){
      localStorage.removeItem(key);
      textarea.val('')
   }else{
     localStorage.setItem(key,textarea.val());
    
     var respones = $ ('<p>', {
       text: "your items were saved to local storage",
       css:{
         color: 'red'
       }
     })
     $('#head').html(respones);
   }

   
 });

 