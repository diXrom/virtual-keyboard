/* eslint no-param-reassign: "off" */
/* eslint no-return-assign: "off" */
/* eslint class-methods-use-this: "off" */
import Key from './Key';

export default class Keyboard {
  constructor() {
    this.keysData = [
      'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
      'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW',
      'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight',
      'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ',
      'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV',
      'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft',
      'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
    this.keysEn = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '← ',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
      'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
      'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
    ];
    this.keysRu = [
      'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '← ',
      'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
      'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
      'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];
    this.keysShift = [
      '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '← ',
      'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
      'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
      'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
    ];
    this.keysShiftRu = [
      'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '← ',
      'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
      'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
      'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
    ];
    this.lang = this.keysEn;
    this.langShift = this.keysShift;
  }

  createKey(key, data) {
    let mod = '';
    if (key === '← ' || key.length > 4) mod = 'key-special';
    if (key === 'Space') mod = 'key-unique';
    return new Key(key, data, mod).render();
  }

  localStorageCheck(key) {
    if (key === 'ru') [this.lang, this.langShift] = [this.keysRu, this.keysShiftRu];
    if (key === 'en') [this.lang, this.langShift] = [this.keysEn, this.keysShift];
    localStorage.setItem('lang', key);
  }

  languageSelection(e) {
    if (!e.altKey || !e.ctrlKey) return;
    if (localStorage.getItem('lang') === 'ru') this.localStorageCheck('en');
    else this.localStorageCheck('ru');
    document.querySelectorAll('.key').forEach((key, i) => [key.innerHTML, key.dataset.shift] = [this.lang[i], this.langShift[i]]);
  }

  render() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard__container');
    document.documentElement.addEventListener('keydown', this.languageSelection.bind(this));
    this.localStorageCheck(localStorage.getItem('lang'));
    this.lang.forEach((key, i) => keyboard.append(this.createKey(key, this.keysData[i], this.langShift[i])));
    return keyboard;
  }
}
