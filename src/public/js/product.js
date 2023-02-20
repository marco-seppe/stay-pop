window.addEventListener('load', function() {
    let productDetailBox = document.querySelector('.product-detail-box');
    let brandAboutBox = document.querySelector('.brand-about-box');
    let otherInfoBox = document.querySelector('.other-info-box');
    let productTitle = document.querySelector('.product-title');
        productTitle.style.font = 'bold';
    
    productDetailBox.addEventListener('click', function(){
        document.querySelector('.product-title').innerText = 'Título do Produto';
        document.querySelector('.product-details').innerText = 'Descrição detalhada do produto, etc, etc, etc';
    });
    brandAboutBox.addEventListener('click', function(){
        document.querySelector('.product-title').innerText = 'Título da Marca';
        document.querySelector('.product-details').innerText = 'Descrição da marca, etc etc etc';
    });

    otherInfoBox.addEventListener('click', function(){
        document.querySelector('.product-title').innerText = 'Outras informações';
        document.querySelector('.product-details').innerText = 'Texto de outras informações, etc etc etc';
    });

});