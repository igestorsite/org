//Powered by Alexandre Mota
//version 1.0 - 15/12/23

// Função para formatar o número com separador de milhar e, opcionalmente, casa decimal
function formatNumber(number, isCurrency) {
  const parts = number.toFixed(isCurrency ? 2 : 0).toString().split('.');
  const formattedNumber = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (isCurrency ? ',' + parts[1] : '');
  return formattedNumber;
}

// Função para animar o contador ascendente
function counterUp(element, start, end, duration, isCurrency) {
  let current = start;
  const increment = (end - start) / duration;

  const timer = setInterval(() => {
    current += increment;
    const formattedNumber = formatNumber(current, isCurrency);
    element.textContent = formattedNumber;

    if (current >= end) {
      clearInterval(timer);
      element.textContent = formatNumber(end, isCurrency);
    }
  }, 1000 / 60);
}

// Chama a função para animar o contador para cada span com a classe "counter"
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const start = parseFloat(counter.dataset.start);
    const end = parseFloat(counter.dataset.end);
    const duration = parseFloat(counter.dataset.duration);
    const isCurrency = counter.dataset.currency === 'true';

    counterUp(counter, start, end, duration, isCurrency);
  });
});