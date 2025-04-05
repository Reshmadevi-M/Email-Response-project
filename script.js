
 document.getElementById('emailForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const subject = document.getElementById('subject').value;
  const content = document.getElementById('content').value;
  const tone = document.getElementById('tone').value;

  const response = `This is a ${tone.toLowerCase()} response to the email titled "${subject}".\n\nYour response has been accepted.Thanks for your message!\n\nBest regards,\nAutomated Bot`;

  document.getElementById('responseText').textContent = response;
  document.getElementById('responseContainer').classList.remove('hidden');
});