export default class Key {
    constructor(value, data, modification = '') {
        this.value = value;
        this.data = data;
        this.modification = modification;
    }
    render() {
        const key = document.createElement('div');
        if (this.modification) key.classList.add(this.modification)
        key.classList.add('key')
        key.setAttribute('data-key', this.data)
        key.innerHTML = `${this.value}`;
        return key;
    }
}