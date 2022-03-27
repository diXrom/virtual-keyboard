import '../styles/index.scss';
import Header from './components/ElemHeader.js';
import Main from './components/ElemMain.js';
import Footer from './components/ElemFooter.js';
const header = new Header().render();
const main = new Main().render()
const footer = new Footer().render()
document.body.append(header, main, footer);
