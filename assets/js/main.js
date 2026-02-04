/*=============== SHOW MENU ===============*/
const navMenu =document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');
/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click',function(){
    navMenu.classList.add('show-menu');
  })
}
/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click',function(){
    navMenu.classList.remove('show-menu');
  })
}
/*=============== IMAGE GALLERY ===============*/

function imageGallery(){
  const mainImg=document.querySelector(".details_img"),
  smallImg=document.querySelectorAll(".details_small-img");
  smallImg.forEach((img)=>{
    img.addEventListener('click',function(){
      mainImg.src=this.src;
    });
  });
}
imageGallery();

document.querySelectorAll('.product_images').forEach((item)=>{
  item.addEventListener('click',function(){
    const defaultImg=this.querySelector('.product_img.default').src;
    const hoverImg=this.querySelector('.product_img.hover').src;
    localStorage.setItem("selecteddefaultitem",defaultImg);
    localStorage.setItem("selectedhoveritem",hoverImg);
  });
});

window.addEventListener('DOMContentLoaded',function(){
  const defImg=this.localStorage.getItem("selecteddefaultitem");
  const hovImg=this.localStorage.getItem("selectedhoveritem");

  if(defImg){
    document.querySelector('.details_img').src=defImg;
    document.querySelector('#img1').src=hovImg;
    document.querySelector('#img2').src=defImg;
    document.querySelector('#img3').src=hovImg;
  }
})
/*=============== SWIPER CATEGORIES ===============*/
 var swiperCatagories = new Swiper(".catagories_container", {
    spaceBetween: 24,
    loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      }
    });

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new_container", {
    spaceBetween: 24,
    loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }
    });
/*=============== PRODUCTS TABS ===============*/
const tabs=document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[content]');
tabs.forEach((tab) => {
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove('active-tab');
            console.log(target);
        });
        target.classList.add('active-tab');
        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
        });
        tab.classList.add('active-tab');
    });
});

/*=============== PRODUCT actions ===============*/
/*=============== Quick actions ===============*/
const quickBtn=document.querySelectorAll('.action_btn-quick').forEach((btn)=>{
  btn.addEventListener('click',function(e){
    let prdimg=this.closest('.product_actions').previousElementSibling;
    let defimg=prdimg.querySelector('.product_img.default').src;
    let hovimg=prdimg.querySelector('.product_img.hover').src;
    localStorage.setItem("selecteddefaultitem",defimg);
    localStorage.setItem("selectedhoveritem", hovimg);

    window.addEventListener('DOMContentLoaded',function(){
    let defimage=this.localStorage.getItem("selecteddefaultitem");
    const hovimage=this.localStorage.getItem("selectedhoveritem");
    if(defimage){
      document.querySelector('.details_img').src=defimage;
      document.querySelector('#img1').src=hovimage;
      document.querySelector('#img2').src=defimage;
      document.querySelector('#img3').src=hovimage;
  }
})
  })
})
/*=============== wishlist actions ===============*/
const wishlistBtn=document.querySelectorAll('.action_btn-wishlist').forEach((btn)=>{
  btn.addEventListener('click',function(e){
    prdimg=this.closest('.product_actions').previousElementSibling;
    defimg=prdimg.querySelector('.product_img.default').src;
    const wishlists=JSON.parse(localStorage.getItem('wishlist')) || [];
    if(!wishlists.includes(defimg)){
      wishlists.push(defimg);
      localStorage.setItem("wishlist",JSON.stringify(wishlists));
    }
  })
})
let wishList=JSON.parse(localStorage.getItem('wishlist')) || [];
  window.addEventListener('DOMContentLoaded',function(){
  const tables=document.querySelector('.wishtable');
  wishList.forEach((defimage)=>{
    tables.innerHTML+=
    `<tr>
        <td><img src="${defimage}" alt="" class="table_img cart-image"></td>

        <td>
            <h3 class="table_title">J.Crew Mercantile Women's Short-Sleeve</h3>
            <p class="table_description">Maboriosams in a tanto nesciung eget distingy magnapibus.</p>
        </td>

        <td><span class="table_price">$110</span></td>

        <td><span class="table_stock">In Stock</span></td>

        <td><a href="cart.html" class="btn btn-sm cart_add-btn">Add to Cart</a></td>

        <td><i class="fi fi-rs-trash table_trash"></i></td>
      </tr>`
  })
})
document.querySelectorAll('.count1').forEach((c)=>{
  c.textContent=wishList.length;
})
/*=============== cart actions ===============*/
const cartBtn=document.querySelectorAll('.cart_btn').forEach((btn)=>{
  btn.addEventListener('click',function(){
    prdimg=this.closest('.product_item');
    defimg=prdimg.querySelector('.product_img.default').src;
    const carts=JSON.parse(localStorage.getItem('cart')) || [];
    if(!carts.includes(defimg)){
      carts.push(defimg);
      localStorage.setItem('cart',JSON.stringify(carts));
    }
  })
})
let cartData=JSON.parse(localStorage.getItem('cart')) || [];
window.addEventListener('DOMContentLoaded',function(){
  let cartTable=document.querySelector('.carttable');
  cartData.forEach((cartImg)=>{
    cartTable.innerHTML+=`<tr>
                        <td>
                            <img src="${cartImg}" alt="" class="table_img">
                        </td>

                        <td>
                            <h3 class="table_title">Amazon Brand - Daily Ritual Women Dress.</h3>
                            <p class="table_description">Maboriosams in a tanto nesciung eget distingy magnapibus.</p>
                        </td>

                        <td><span class="table_price">$130</span></td>

                        <td><input type="number" value="2" class="quantity"></td>

                        <td><span class="table_subtotal">$250</span></td>

                        <td><i class="fi fi-rs-trash table_trash"></i></td>
                    </tr>`;
  })
})
document.querySelectorAll('.count2').forEach((c)=>{
  c.textContent=cartData.length;
})
/*=============== cart actions of add to cart button ===============*/
const addButtons = document.querySelectorAll('.cart_add-btn1, .cart_add-btn2, .cart_add-btn3');
const images = document.querySelectorAll('.cart-image1, .cart-image2, .cart-image3');
cartData = JSON.parse(localStorage.getItem('carts')) || [];

addButtons.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        const imgSrc = images[index].src;

        if (!cartData.includes(imgSrc)) {
            cartData.push(imgSrc);
            localStorage.setItem('carts', JSON.stringify(cartData));
        }

        updateCartCount();
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const cartTable = document.querySelector('.carttable');
    cartData = JSON.parse(localStorage.getItem('carts')) || [];

    cartData.forEach((cartImg) => {
        cartTable.innerHTML += `
            <tr>
                <td><img src="${cartImg}" class="table_img"></td>
                <td>
                    <h3 class="table_title">Amazon Brand - Daily Ritual Women Dress.</h3>
                    <p class="table_description">Maboriosams in a tanto nesciung eget distingy magnapibus.</p>
                </td>
                <td><span class="table_price">$130</span></td>
                <td><input type="number" value="1" class="quantity"></td>
                <td><span class="table_subtotal">$130</span></td>
                <td><i class="fi fi-rs-trash table_trash"></i></td>
            </tr>
        `;
    });

    updateCartCount();
});

function updateCartCount() {
    document.querySelectorAll('.count2').forEach(c => {
        c.textContent = cartData.length;
    });
}

/*=============== compare actions ===============*/
const compareBtn=document.querySelectorAll('.action_btn-compare').forEach((btn)=>{
  btn.addEventListener('click',function(e){
    prdimg=this.closest('.product_actions').previousElementSibling;
    defimg=prdimg.querySelector('.product_img.default').src;
    localStorage.setItem("selecteddefaultitem",defimg);
  })
})
window.addEventListener('DOMContentLoaded',function(){
  defimage=localStorage.getItem("selecteddefaultitem");
      if(defimage){
        const compareImg=document.querySelectorAll('.compare_img');
        let count=0;
        compareImg.forEach((comp)=>{
          if(comp.src.includes(defimage)){
            count=0;
          }
          else{
            count++;
          }
        })
        if(count==3){
          document.querySelector('.compare_img').src=defimage;
        }
      }
})
/*=============== update profile form actions ===============*/
const formAction=document.querySelectorAll('.form');
formAction.forEach((fr)=>{
  fr.addEventListener('submit', function(e){
    e.preventDefault();
    let inputs=fr.querySelectorAll('input');     
    const confirm=fr.querySelector('.confirm_message');
    let allField=true;
    inputs.forEach((input)=>{
      const errors = input.parentElement.querySelector('.error_message');
      if(input.value.trim() === ""){
        errors.style.display='block';
        allField=false;
        setTimeout(()=>{
          errors.style.display='none';
        },1000)
      }      
    })
    if(allField){
        confirm.style.display='block';
        setTimeout(()=>{
          confirm.style.display='none';
          inputs.forEach(input=>{
            input.value='';
          })
        },1000)       
    }
    
  })
});
/*=============== password show and hide ===============*/
const passContainer=document.querySelectorAll('.pass');
passContainer.forEach(container=>{
  let passInput=container.querySelector('input');
  const showPassword=container.querySelector('.show_pass');
  const hidePassword=container.querySelector('.hide_pass');
  
  hidePassword.style.display='none';

  showPassword.addEventListener('click',()=>{
    passInput.type='text';
    showPassword.style.display='none';
    hidePassword.style.display='inline';
  })

  hidePassword.addEventListener('click',()=>{
    passInput.type='password';
    hidePassword.style.display='none';
    showPassword.style.display='inline';
  })
});
/*=============== Update address info ===============*/
document.querySelector('.edit').addEventListener('click',()=>{
  document.querySelector('.address_update').style.display='block';
  document.querySelector('.current_address').style.display='none';
})

document.querySelector('.save_btn').addEventListener('click',()=>{
  const state=document.querySelector('.state').value;
  const mainStreet=document.querySelector('.main_street').value;
  const subStreet=document.querySelector('.sub_street').value;
  const road=document.querySelector('.road').value;
  const city=document.querySelector('.cities').value;

  document.querySelector('.states').textContent=state;
  document.querySelector('.main_streets').textContent=mainStreet;
  document.querySelector('.sub_streets').textContent=subStreet;
  document.querySelector('.roads').textContent=road;
  document.querySelector('.city').textContent=city;

  document.querySelector('.address_update').style.display='none';
  document.querySelector('.current_address').style.display='block';
})
