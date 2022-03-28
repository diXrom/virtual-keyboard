import '../styles/index.scss';
import Header from './components/ElemHeader';
import Main from './components/ElemMain';
import Footer from './components/ElemFooter';

const header = new Header().render();
const main = new Main().render();
const footer = new Footer().render();

document.body.append(header, main, footer);
