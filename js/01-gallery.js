import { galleryItems } from './gallery-items.js';

const listGallery = document.querySelector(`.gallery`) // возвр-т элемент (Element) док, кот-й соот-т указанному селектору

const makeListImg = createImage(galleryItems);    //викл ф-ю, робимо список картинок обращаясь из шаблона createImage к библиотеке galleryItems заполняем фактически                                              
listGallery.insertAdjacentHTML('beforeend', makeListImg); //разбирает  текст как HTML/XML и вставляет полученные узлы (nodes)  

function createImage(items) {                    //make шаблон element div 
    return items.map (({preview, original, description}) =>{    
        return `<div class="gallery__item">
          <a class="gallery__link" 
            href="${original}">
              <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
          /> </a>
         </div> `;
        })
        .join(''); 
}
//onsole.log(makeListImg)

listGallery.addEventListener('click', onClickHandler )
//listGallery.addEventListener('click', showGallery) 


function onClickHandler(event) {
  event.preventDefault();                           //отменяет переход в браузере
   
  if (event.target.nodeName!== "IMG")
    { return;};                                             //выход если не картинка   
               
   const instance =  basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" heigft="600">`
   //const instance =  basicLightbox.create(`<img src='https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg' width="800" heigft="600">`
);
  instance.show();
  
  if (event.code === "Escape") {
    instance.close ();

  }
                      
}

// refClose.addEventListener("keydown", (event) => {   //закриття
//   if (event.code === "Escape") {
//   instance.close ();
// }
// })



// // const makeListImages = images.map(({alt, url}) =>{
// //     return `<li class="list"> 
// //   <img class="js-gallery" src="${url}" alt="${alt}"></li>`;
// //   });

// //   let elImages= makeListImages.join(``);
// //   getGaleryList.insertAdjacentHTML(`afterbegin`, makeListImages );
