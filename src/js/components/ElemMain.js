import Keyboard from './Keyboard';

export default class Main {
  constructor() {
    this.main = document.createElement('main');
    this.arrays = new Keyboard();
    this.keyboard = new Keyboard().render();
    this.textarea = document.createElement('textarea');
    this.note = document.createElement('div');
    this.keys = this.keyboard.querySelectorAll('.key');
    this.shift = null;
    this.caps = null;
  }

  changeCase(reg) {
    if (reg === 'Low') {
      this.keys.forEach((key) => {
        const tmp = key;
        if (!/[^A-ZА-ЯЁ]/.test(tmp.innerHTML)) tmp.innerHTML = tmp.innerHTML.toLowerCase();
      });
    }
    if (reg === 'Up') {
      this.keys.forEach((key) => {
        const tmp = key;
        if (!/[^a-zа-яё]/.test(tmp.innerHTML)) tmp.innerHTML = tmp.innerHTML.toUpperCase();
      });
    }
  }

  deleteСharactersAfter(start, end) {
    if (start === end) this.textarea.setRangeText('', start, start + 1, 'end');
    else this.textarea.setRangeText('', start, end, 'end');
  }

  deleteСharactersBefore(start, end) {
    if (start === 0 && end === 0) return;
    if (start === end) this.textarea.setRangeText('', start - 1, start, 'end');
    else this.textarea.setRangeText('', start, end, 'end');
  }

  static getLengthRows(rows, symbNum) {
    const newRows = rows.reduce((acc, el) => {
      if (el.length > symbNum) {
        for (let i = 0; i < el.length; i += symbNum) {
          acc.push(el.slice(i, i + symbNum - 1));
        }
      } else acc.push(el);
      return acc;
    }, []);
    return newRows;
  }

  eventDownHandler(e) {
    if (!e.target.closest('.key')) return;
    this.textarea.focus();
    const area = this.textarea;
    const pos = area.selectionStart;
    const posEnd = area.selectionEnd;
    const left = area.value.slice(0, pos);
    const right = area.value.slice(pos);
    const key = e.target.innerHTML;
    e.target.classList.add('active');
    if (key === '← ') this.deleteСharactersBefore(pos, posEnd);
    if (key === 'Del') this.deleteСharactersAfter(pos, posEnd);
    if (key === 'Tab') {
      area.value = `${left}\t${right}`;
      area.setSelectionRange(pos + 1, pos + 1);
    }
    if (key === 'Shift') {
      if (this.keyboard.closest('.Shift')) return;
      this.arrays.localStorageCheck(localStorage.getItem('lang'));
      this.keys.forEach((item, i) => {
        const tmp = item;
        tmp.innerHTML = this.arrays.langShift[i];
      });
      if (this.keyboard.closest('.CapsLock')) this.changeCase('Low');
      this.keyboard.classList.add('Shift');
    }
    if (key === 'CapsLock') {
      if (this.caps) return;
      this.caps = true;
      this.changeCase('Up');
      document.querySelector('[data-key="CapsLock"]').classList.add('active');
      this.keyboard.classList.toggle('CapsLock');
      if (this.keyboard.closest('.Shift')) this.changeCase('Low');
      if (this.keyboard.closest('.CapsLock')) return;
      this.changeCase('Low');
    }
    if (key === 'Enter') {
      area.value = `${left}\n${right}`;
      area.setSelectionRange(pos + 1, pos + 1);
    }
    if (key === 'Space') {
      area.value = `${left} ${right}`;
      area.setSelectionRange(pos + 1, pos + 1);
    }
    if (key === '►') {
      area.setSelectionRange(pos + 1, pos + 1);
    }
    if (key === '◄' && pos > 0) {
      area.setSelectionRange(pos - 1, pos - 1);
    }
    if (key === '▲') {
      let strLength = 0;
      const symbNum = Math.round((area.clientWidth - 40) / 8.783);
      let rows = area.value.slice(0, area.selectionStart).split('\n');
      rows = Main.getLengthRows(rows, symbNum);
      if (rows.length === 1 && rows[0].length === symbNum) {
        rows.push('');
        strLength = 1;
      }
      if (rows.length < 2) return;
      const currentRowLength = rows[rows.length - 1].length;
      const targetRowLength = rows[rows.length - 2].length;

      area.selectionStart = currentRowLength < targetRowLength
        ? pos - (targetRowLength) - 1 + strLength
        : pos - (currentRowLength) - 1 + strLength;
      area.selectionEnd = area.selectionStart;
    }
    if (key === '▼') {
      const symbNum = Math.round((area.clientWidth - 40) / 8.783);
      let rows = area.value.slice(0, area.selectionStart).split('\n');
      rows = Main.getLengthRows(rows, symbNum);
      const currentRowLength = rows[rows.length - 1].length;

      rows = area.value.slice(area.selectionStart, area.value.length).split('\n');
      let strLength = 0;
      if (rows[0].length > symbNum - currentRowLength) {
        const firstRow = rows[0].slice(0, symbNum - currentRowLength);
        rows[0] = rows[0].slice(symbNum - currentRowLength, rows[0].length);
        rows.unshift(firstRow);
        strLength = -1;
      }

      rows = Main.getLengthRows(rows, symbNum);
      if (rows.length < 2) return;
      const restCurRowLength = rows[0].length;
      const targetRowLength = rows[1].length;

      area.selectionStart = currentRowLength > targetRowLength
        ? area.selectionStart + (targetRowLength + restCurRowLength) + 1 + strLength
        : area.selectionStart + (restCurRowLength + currentRowLength) + 1 + strLength;
      area.selectionEnd = area.selectionStart;
    }
    if (['▲', '▼', '◄', '►'].some((item) => item === key)) return;
    if (key.length > 1) return;
    area.value = `${left}${key}${right}`;
    area.setSelectionRange(pos + 1, pos + 1);
  }

  eventUpHandler(e) {
    const key = e.target.innerHTML;
    document.querySelectorAll('.key').forEach((item) => item.classList.remove('active'));
    if (key === 'Shift') {
      this.keys.forEach((item, i) => {
        const tmp = item;
        tmp.innerHTML = this.arrays.lang[i];
      });
      this.keyboard.classList.remove('Shift');
    }
    if (key === 'CapsLock') this.caps = false;
    if (this.keyboard.closest('.Shift')) this.changeCase('Up');
    if (this.keyboard.closest('.CapsLock')) {
      this.changeCase('Up');
      document.querySelector('[data-key="CapsLock"]').classList.add('active');
    }
    if (this.keyboard.closest('.Shift') && this.keyboard.closest('.CapsLock')) this.changeCase('Low');
  }

  keyHandler(e, type) {
    e.preventDefault();
    if (e.key === 'Shift') this.shift = e.code;
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
      if (key.dataset.key === e.code) {
        const event = new Event(type, { bubbles: true });
        key.dispatchEvent(event);
      }
    });
  }

  init() {
    this.keyboard.addEventListener('mousedown', this.eventDownHandler.bind(this));
    this.keyboard.addEventListener('mouseup', this.eventUpHandler.bind(this));
    this.keyboard.addEventListener('click', () => this.textarea.focus());
    document.documentElement.addEventListener('keydown', (e) => this.keyHandler(e, 'mousedown'));
    document.documentElement.addEventListener('keyup', (e) => {
      this.keyHandler(e, 'mouseup');
      if (e.shiftKey) document.querySelector(`[data-key="${this.shift}"]`).classList.add('active');
    });
  }

  render() {
    const section = document.createElement('section');
    const wrapper = document.createElement('div');
    section.classList.add('keyboard');
    wrapper.classList.add('wrapper', 'keyboard__wrapper');
    this.textarea.classList.add('keyboard__textarea');
    this.note.classList.add('keyboard__note');
    this.note.innerHTML = 'NOTE: Press <span>ctrl + alt</span> to change language';
    wrapper.append(this.textarea, this.keyboard, this.note);
    section.append(wrapper);
    this.main.append(section);
    this.init();
    return this.main;
  }
}
