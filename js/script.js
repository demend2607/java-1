"use strict";

// const p = document.querySelectorAll('p');
// console.log(p);


function loadScript(src) {
    const script = document.createElement('script'); // Создаем скрипт внутри скрипта
    script.src = src;
    script.async = false;
    document.body.append(script); // append - помещает элемент в конец себя
}
loadScript("js/test.js");
loadScript();