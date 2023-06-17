/* Redimensionar o Polígono */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_num_largura = document.querySelector('#num_largura')
const obj_num_altura = document.querySelector('#num_altura')
const obj_div_poligono = document.querySelector('#div_poligono')
const obj_p_perimetro = document.querySelector('#p_perimetro')

/* Declarar variaveis */

/* Adicionar os eventos para chamar as funções */
obj_num_largura.addEventListener('change', FunRedimensionPoligono)
obj_num_altura.addEventListener('change', FunRedimensionPoligono)

/* Declare as funções para  executar as ações */
function FunRedimensionPoligono() {
    if ( obj_num_largura.value < 50 ||  obj_num_largura.value > 100 || 
    obj_num_altura.value < 50 || obj_num_altura.value > 100){
        alert('Valores invalidos!')
    }
    else {
        obj_div_poligono.style.width = obj_num_largura.value + 'px' // junta o numero e o px
        obj_div_poligono.style.height = obj_num_altura.value + 'px' // junta o numero e o px
        let area = obj_num_largura.value * obj_num_altura.value
        obj_div_poligono.innerHTML = 'Área: ' + area + 'px'

        let perim = parseInt(obj_num_largura.value) /* pesquisa o que é parse em ingles */ + parseInt(obj_num_altura.value) 
            + parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value)
        obj_p_perimetro.innerHTML = 'Perímetro' + perim + 'px'
    }
}