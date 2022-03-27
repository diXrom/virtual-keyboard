import Keyboard from './Keyboard.js';
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
        if (reg == 'Low') this.keys.forEach(key => /[^A-ZА-ЯЁ]/.test(key.innerHTML)
            || (key.innerHTML = key.innerHTML.toLowerCase()))
        if (reg == 'Up') this.keys.forEach(key => /[^a-zа-яё]/.test(key.innerHTML)
            || (key.innerHTML = key.innerHTML.toUpperCase()))
    }
    eventDownHandler(e) {
        if (!e.target.closest('.key')) return;
        this.textarea.focus()
        let area = this.textarea;
        let pos = area.selectionStart
        let left = area.value.slice(0, pos)
        let right = area.value.slice(pos)
        let key = e.target.innerHTML;
        e.target.classList.add('active');
        if (key == "← ") {
            area.value = `${left.slice(0, left.length - 1)}${right}`;
            area.setSelectionRange(pos - 1, pos - 1)
        }
        if (key == "Del") {
            area.value = `${left}${right.slice(1)}`;
            area.setSelectionRange(pos, pos)
        }
        if (key == "Tab") {
            area.value = `${left}\t${right.slice(1)}`;
            area.setSelectionRange(pos + 1, pos + 1)
        }
        if (key == "Shift") {
            if (this.keyboard.closest('.Shift')) return;
            this.arrays.localStorageCheck(localStorage.getItem('lang'))
            this.keys.forEach((key, i) => key.innerHTML = this.arrays.langShift[i])
            if (this.keyboard.closest('.CapsLock')) this.changeCase('Low')
            this.keyboard.classList.add('Shift');
        }
        if (key == "CapsLock") {
            if (this.caps) return;
            this.caps = true;
            this.changeCase('Up')
            document.querySelector(`[data-key="CapsLock"]`).classList.add('active');
            this.keyboard.classList.toggle('CapsLock');
            if (this.keyboard.closest('.Shift')) this.changeCase('Low')
            if (this.keyboard.closest('.CapsLock')) return
            this.changeCase('Low')
        }
        if (key == "Enter") {
            area.value = `${left}\n${right.slice(1)}`;
            area.setSelectionRange(pos + 1, pos + 1)
        }
        if (key == "Space") {
            area.value = `${left} ${right}`;
            area.setSelectionRange(pos + 1, pos + 1)
        }
        if (key.length > 1) return;
        area.value = `${left}${key}${right}`;
        area.setSelectionRange(pos + 1, pos + 1)
    }
    eventUpHandler(e) {
        let key = e.target.innerHTML;
        document.querySelectorAll('.key').forEach(key => key.classList.remove('active'))
        if (key == "Shift") {
            this.keys.forEach((key, i) => key.innerHTML = this.arrays.lang[i])
            this.keyboard.classList.remove('Shift');
        }
        if (key == "CapsLock") this.caps = false;
        if (this.keyboard.closest('.Shift')) this.changeCase('Up')
        if (this.keyboard.closest('.CapsLock')) {
            this.changeCase('Up')
            document.querySelector(`[data-key="CapsLock"]`).classList.add('active');
        }
        if (this.keyboard.closest('.Shift') && this.keyboard.closest('.CapsLock')) this.changeCase('Low')
    }
    keyHandler(e, type) {
        e.preventDefault();
        if (e.key == 'Shift') this.shift = e.code;
        let keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            if (key.dataset.key == e.code) {
                let event = new Event(type, { bubbles: true });
                key.dispatchEvent(event);
            }
        })
    }
    init() {
        this.keyboard.addEventListener('mousedown', this.eventDownHandler.bind(this))
        this.keyboard.addEventListener('mouseup', this.eventUpHandler.bind(this))
        document.documentElement.addEventListener('keydown', (e) => this.keyHandler(e, "mousedown"))
        document.documentElement.addEventListener('keyup', (e) => {
            this.keyHandler(e, "mouseup")
            if (e.shiftKey) document.querySelector(`[data-key="${this.shift}"]`).classList.add('active');
        })
    }
    render() {
        let section = document.createElement('section');
        let wrapper = document.createElement('div');
        section.classList.add('keyboard');
        wrapper.classList.add('wrapper', 'keyboard__wrapper')
        this.textarea.classList.add('keyboard__textarea')
        this.note.classList.add('keyboard__note')
        this.note.innerHTML = 'NOTE: Press <span>ctrl + alt</span> to change language';
        wrapper.append(this.textarea, this.keyboard, this.note)
        section.append(wrapper)
        this.main.append(section)
        this.init();
        return this.main;
    }
}