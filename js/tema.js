let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';
console.log(temaConfigurado)
cambiarTema(temaConfigurado)

let btnThemeDark = document.querySelector('#btnThemeDark')
let btnThemeLight = document.querySelector('#btnThemeLight')

btnThemeDark.addEventListener('click', ()=> cambiarTema('dark'));
btnThemeLight.addEventListener('click', ()=> cambiarTema('light'));

function cambiarTema(color){
    document.querySelector('body').setAttribute('data-bs-theme', color);
    //guardar en localstorage
    localStorage.setItem('tema', JSON.stringify(color));
    //actualizar el icono
    
}