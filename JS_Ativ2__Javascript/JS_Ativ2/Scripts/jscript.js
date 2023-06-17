/* Mudar a Figura (Redes Sociais) */

/* 1º Criar os objetos para os elementos que serão manipulados: */
const obj_sel_rede_social = document.querySelector('#sel_rede_social')
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

/* 2º Adicionar o evento para chamar a função: */
obj_sel_rede_social.addEventListener('change', FunMudaFigura)

/* 3º Declarar a função para executar as ações: */
function FunMudaFigura() {
    obj_img_rede_social.setAttribute('src', 'Imagens/' + 
                                        obj_sel_rede_social.value + '.png')
    obj_img_rede_social.setAttribute('alt', 'Logo ' + obj_sel_rede_social.value)
    obj_img_rede_social.setAttribute('title', 'Logo ' + obj_sel_rede_social.value)

    obj_p_rede_social.innerHTML = 'Logo ' + obj_sel_rede_social.value
}

/* Adiionar figuras */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */

const array_img_figuras = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

/* 2º Criar novos objetos para serem manipulados: */

const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')

/* 3º Adicionar os eventos para chamar a função: */

for ( obj_img of array_img_figuras ) {
    obj_img.addEventListener('click', 
        function() { FunAdicionaFigura( this.src, this.alt ) } 
        )
}

/* 4º Declarar a função para executar as ações: */

function FunAdicionaFigura( param_src, param_alt ) {
    obj_img_nova.setAttribute('src', param_src)
    obj_img_nova.setAttribute('alt', param_alt)
    obj_img_nova.setAttribute('title', param_alt)
    obj_div_adiciona_figura.appendChild(obj_img_nova)


    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('value', param_alt)
    obj_input_novo.setAttribute('disable', 'true')
    obj_input_novo.setAttribute('class', 'novo_input')
    obj_div_adiciona_figura.appendChild(obj_input_novo)
} 

/* Preencher tabela */ 
const array_td = document.querySelectorAll('#tab_principal td')a
const obj_tab_vazia = document.querySelector('#tab_vazia')
const obj_caption_vazia = document.querySelector('#tab_vazia caption')
const obj_prog_tab_vazia = document.querySelector('#prog_tab_vazia')

/* 2º Declarar variável para controlar a quantidade de linhas na tabela nova. Iniciar com ZERO.
 */

let contador_linhas = 0

/* 3º Adicionar os eventos para chamar as funções: */

for(obj_td of array_td) {
    obj_td.addEventListener('click', function(){ FunPreencheTabela(this.innerHTML) })
}

/* 4º Declarar a função para executar as ações: */
function FunPreencheTabela(param_text) {
    if ( contador_linhas < 5 ) {
        const obj_tr_novo = document.createElement('tr')
        const obj_td_novo = document.createElement('td')
        obj_td_novo.innerHTML = param_text
        obj_tr_novo.appendChild(obj_td_novo)
        obj_tab_vazia.appendChild(obj_tr_novo)
        contador_linhas++
        obj_caption_vazia.innerHTML = 'Tabela com ' + contador_linhas + ' linha(s)'
        obj_prog_tab_vazia.value = contador_linhas
    }
    else {
        alert('Tabela cheia')
    }
}