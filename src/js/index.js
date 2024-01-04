import '../css/style.scss'
import imgWebPack from '../assets/webpack.png'

const textComponent = () => {
    const textH1 = document.createElement('h1');
    textH1.innerHTML = 'Hello World!';
    textH1.classList.add('title');
    return textH1;
}

const imgComponent = () => {
    const img = new Image(700,500);
    img.src = imgWebPack;
    return img;
}

document.querySelector('body').appendChild(textComponent());
document.querySelector('body').appendChild(imgComponent());