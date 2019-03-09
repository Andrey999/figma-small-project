// burger  menu
let menu = document.getElementById('header__menu-burger');
let showMenu = document.getElementById('mobile-menu');
menu.addEventListener('click', openMenu);

function openMenu() {
    let span1 = document.getElementById('line-1');
    let span2 = document.getElementById('line-2');
    let span3= document.getElementById('line-3');
    showMenu.classList.toggle('mobile-menu_show');
    span1.classList.toggle('line-1');
    span2.classList.toggle('line-2-hidden');
    span3.classList.toggle('line-3');
}
// burger  menu  end


//   add form
let contactUs = document.querySelectorAll('.js-btn');
contactUs.forEach(item=>{
    item.addEventListener('click', addModal);
});

function addModal() {
    let modal = document.getElementById('modal');
    let modalFeedback = document.getElementById('form__block-feedback');
    let btnSend = document.getElementById('form__block-btn');
    let modalClose = document.getElementById('form__block-close');
    modal.style.display = 'block';  // onclick add form

    modalClose.onclick = function() {  //  onclick to X hide form
        modal.style.display = 'none';
    };

    btnSend.onclick = function() {  // onclick on btn form
        if((document.getElementById('name').value == '') || (document.getElementById('email').value == '') || (document.getElementById('tel').value == '')) {
            modalFeedback.style.display = 'none';
        }
        else {
            modalFeedback.style.display = 'block';  // show  feedback  window
            setTimeout(()=>{
                modal.style.display = 'none';  //  hide window form
                modalFeedback.style.display = 'none';  //   hide feedback form
            },2000);
        }
    };
}

