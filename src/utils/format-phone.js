const RUSSIANS_PREFIXS = ['7', '8', '9'];

export const formatPhone = (evt) => {
  const input = evt.target;
  const value = input.value;
  let numbers = value.replace(/\D/g, '');
  const selectionStart = +input.selectionStart;
  let formattedValue = '';

  if (!numbers) {
    return '';
  }

  if (value.length !== selectionStart) {
    const symbol = evt.nativeEvent.data;
    if (symbol && /\D/g.test(symbol)) {
      return value.replace(symbol, '');
    }
    return value;
  }

  if (RUSSIANS_PREFIXS.indexOf(numbers[0]) > -1) {
    // format phone for russian numbers
    if (numbers[0] === '9') {
      numbers = `7${numbers}`;
    }
    const firstSymbols = (numbers[0] === '8') ? '8' : '+7';
    formattedValue = input.value = `${firstSymbols} `;

    if (numbers.length > 1) {
      formattedValue += `(${numbers.substring(1, 4)}`;
    }
    if (numbers.length >= 5) {
      formattedValue += `) ${numbers.substring(4, 7)}`;
    }
    if (numbers.length >= 8) {
      formattedValue += `-${numbers.substring(7, 9)}`;
    }
    if (numbers.length >= 10) {
      formattedValue += `-${numbers.substring(9, 11)}`;
    }
  } else {
    // don't format for not russian numbers
    formattedValue = `+${numbers.substring(0, 16)}`;
  }

  return formattedValue;
};

export const deleteLastDigit = (evt) => {
  // delete first digit (prefix)
  const inputValue = evt.target.value.replace(/\D/g, '');
  if (evt.keyCode === 8 && inputValue.length === 1) {
    return '';
  }
};

export const checkPhoneLength = (phone, length) => phone[0] === '+' ? phone.length === length : phone.length === length - 1;
