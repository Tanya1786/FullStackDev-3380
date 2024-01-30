document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const weight = params.get('weight');
  const height = params.get('height');
  const age = params.get('age');
  const bmi = params.get('bmi');

  document.getElementById('resultWeight').value = weight; 
  document.getElementById('resultHeight').value = height; 
  document.getElementById('resultAge').value = age; 
  document.getElementById('bmiResult').textContent = bmi;

  document.getElementById('calc').removeAttribute('disabled');
});
