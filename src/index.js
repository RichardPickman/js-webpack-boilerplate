import './sass/style.scss';
import { modules } from './modules';
import Me from './assets/img/Pickman.jpg';

window.onload = function () {
    const root = document.getElementById('root');

    const main = document.createElement('div');
    main.setAttribute('class', 'main container');

    const mainImg = document.createElement('img');
    mainImg.setAttribute('class', 'main__avatar');
    mainImg.src = Me;

    const list = document.createElement('ul');
    list.setAttribute('class', 'list');
    list.textContent = 'Used modules:';

    modules.forEach(module => {
        const element = document.createElement('li');
        element.setAttribute('class', 'list__item');
        element.textContent = module;

        list.append(element);
    })

    main.append(mainImg, list)

    root.append(main)
}
