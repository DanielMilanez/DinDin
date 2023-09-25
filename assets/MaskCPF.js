document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.querySelector('input[name="cpf"]');
  
    cpfInput.addEventListener('input', function() {
      let value = this.value.replace(/\D/g, '');
  
      if (value.length > 3) {
        value = value.substring(0, 3) + '.' + value.substring(3);
      }
      if (value.length > 7) {
        value = value.substring(0, 7) + '.' + value.substring(7);
      }
      if (value.length > 11) {
        value = value.substring(0, 11) + '-' + value.substring(11);
      }
  
      this.value = value;
    });
  });
  