const Option = {
    method: "GET", // POST, PUT, DELETE, etc.
    headers: {
      // the content type header value is usually auto-set
      // depending on the request body
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
    referrer: "about:client", // or "" to send no Referer header,
    // or an url from the current origin
    referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
    mode: "cors", // same-origin, no-cors
    credentials: "same-origin", // omit, include
    cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
    redirect: "follow", // manual, error
    integrity: "", // a hash, like "sha256-abcdef1234567890"
    keepalive: false, // true
    signal: undefined, // AbortController to abort request
    window: window // null
  };
  const fav ='<svg width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 592 59C 592 59 592 59 592 59C 592 59 685 249 685 249C 685 249 896 280 896 280C 896 280 895 280 895 280C 933 285 965 312 977 348C 989 386 978 425 952 452C 952 452 800 599 800 599C 800 599 835 809 835 809C 835 809 835 809 835 809C 841 846 827 885 795 908C 777 920 757 927 736 927C 721 927 705 923 689 916C 689 916 689 915 689 915C 689 915 501 817 501 817C 501 817 313 915 313 915C 313 915 313 915 313 915C 279 933 239 930 207 908C 207 908 207 907 207 907C 207 907 207 907 207 907C 176 885 161 847 167 809C 167 809 167 809 167 809C 167 809 203 599 203 599C 203 599 51 452 51 452C 51 452 50 452 50 452C 24 425 14 385 25 349C 25 349 25 348 25 348C 25 348 26 348 26 348C 38 312 70 285 108 280C 108 280 107 280 107 280C 107 280 317 249 317 249C 317 249 410 59 410 59C 410 59 410 59 410 59C 428 25 462 3 501 3C 540 3 575 26 592 59C 592 59 592 59 592 59M 478 93C 478 93 382 287 382 287C 382 287 382 287 382 287C 372 306 354 320 331 322C 331 322 333 322 333 322C 333 322 118 354 118 354C 118 354 118 354 118 354C 109 355 100 362 97 372C 94 381 97 391 103 398C 103 398 260 550 260 550C 260 550 261 552 261 552C 274 566 280 585 278 605C 278 605 278 606 278 606C 278 606 241 821 241 821C 239 831 244 841 251 847C 260 852 271 853 279 849C 279 849 471 748 471 748C 471 748 471 747 471 747C 490 738 512 738 531 747C 531 747 531 748 531 748C 531 748 723 848 723 848C 727 851 731 852 736 852C 741 852 747 850 751 847C 751 847 751 846 751 846C 751 846 751 846 751 846C 759 841 763 832 761 821C 761 821 725 607 725 607C 725 607 725 609 725 609C 721 587 729 564 743 549C 743 549 744 549 744 549C 744 549 899 398 899 398C 906 391 909 381 906 372C 906 372 905 372 905 372C 905 372 905 371 905 371C 902 362 895 355 885 354C 885 354 885 354 885 354C 885 354 669 322 669 322C 669 322 671 322 671 322C 648 320 630 306 620 287C 620 287 620 287 620 287C 620 287 524 93 524 93C 519 82 512 78 501 78C 492 78 482 83 478 93C 478 93 478 93 478 93"/></svg>'
  const fav_fill='<svg width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 925 425C 925 425 770 576 770 576C 763 583 760 592 762 601C 762 601 798 815 798 815C 802 839 793 863 773 877C 762 885 749 889 736 889C 726 889 716 887 706 882C 706 882 514 781 514 781C 506 777 496 777 488 781C 488 781 296 882 296 882C 275 893 249 891 229 877C 210 863 200 839 204 815C 204 815 241 601 241 601C 242 592 239 583 233 576C 233 576 77 425 77 425C 60 408 54 383 61 360C 69 337 89 320 113 317C 113 317 327 285 327 285C 336 284 344 278 348 270C 348 270 444 76 444 76C 455 54 477 40 501 40C 526 40 547 54 558 76C 558 76 654 270 654 270C 658 278 666 284 675 285C 675 285 890 317 890 317C 914 320 934 337 941 360C 949 383 942 408 925 425"/></svg>'
   const deletex ='<svg width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 357 378C 344 378 332 390 333 403C 333 403 329 848 329 848C 329 857 333 866 341 870C 349 875 359 875 366 870C 374 866 379 858 379 849C 379 849 383 404 383 404C 383 397 380 391 375 386C 371 381 364 378 357 378C 357 378 357 378 357 378M 650 375C 636 375 625 386 625 400C 625 400 625 850 625 850C 625 859 630 867 637 872C 645 876 655 876 663 872C 670 867 675 859 675 850C 675 850 675 400 675 400C 675 393 672 387 668 382C 663 377 656 375 650 375C 650 375 650 375 650 375M 500 375C 486 375 475 386 475 400C 475 400 475 850 475 850C 475 859 480 867 487 872C 495 876 505 876 513 872C 520 867 525 859 525 850C 525 850 525 400 525 400C 525 393 522 387 518 382C 513 377 506 375 500 375C 500 375 500 375 500 375M 198 299C 198 299 800 299 800 299C 800 299 800 850 800 850C 800 913 759 950 700 950C 700 950 300 950 300 950C 238 950 200 911 201 855C 201 855 198 299 198 299M 438 138C 438 138 438 187 438 187C 438 187 563 187 563 187C 563 187 563 138 563 138C 563 138 438 138 438 138M 425 63C 425 63 575 63 575 63C 609 63 638 91 638 125C 638 125 638 187 638 187C 638 187 849 187 849 187C 870 187 887 204 887 225C 887 245 870 262 849 262C 849 262 151 263 151 263C 130 263 113 246 113 225C 113 205 130 188 151 188C 151 188 363 188 363 188C 363 188 363 125 363 125C 363 125 362 125 362 125C 362 91 391 63 425 63C 425 63 425 63 425 63"/></svg>'
  data =async ()=>{
  // gallery
    const response_gallery = await fetch(`http://localhost/panel/json_gallery.php`,Option);
    const data_gallery = await response_gallery.json();
    // gallery_image
     const response_gallery_images = await fetch(`http://localhost/panel/json_gallery_images.php`,Option);
    const data_gallery_images = await response_gallery_images.json();
    
    //search
    document.getElementById('inp').addEventListener("input", () => { 
      const value= document.getElementById('inp').value;
     
      var mySet = new Set();
      for (let i = 0; i < data_gallery_images.length; i++) {
        const element = data_gallery_images[i];
        const name = data_gallery_images[i].name;
        
        if (name.indexOf(value) > -1 && value!=null && value!=0 ) {
          mySet.add(element);
        } 
        else {
          document.querySelector(".search-result").innerHTML="";
          document.querySelector(".search-result").style.display="none"
        }
      }
      mySet.forEach(element => {
       document.querySelector(".search-result").innerHTML+=`
       <div class="img-box-2">
       <span class="ext-2">${element.ext}موجود</span>
       <span name="${element.name}" class="fav-icon">${fav}</span>
       <span class="fav-text">افزودن به علاقه مندی</span>
      <img src="./uploads/images/${element.file_name}">
      <span class="name-2">${element.name}</span>
      <span class="price-2">قیمت ${element.price} تومان</span>
       </div>
       `;
       document.querySelector(".search-result").style.display="flex"
      const ext =document.querySelectorAll(".ext-2");
     ext.forEach(element => {
       if (element.innerHTML=="موجود") {
        element.innerHTML="سفارش";
        element.style.borderColor="orange"
       }
     });
const favIcon= document.querySelectorAll(".fav-icon");
const favText= document.querySelectorAll(".fav-text");

for (let i = 0; i < favIcon.length; i++) {
  const element = favIcon[i];
  element.onclick=(e)=>{
    element.innerHTML=fav_fill;
    favText[i].style.display="none"
   
    localStorage.setItem(element.getAttribute("name"), element.getAttribute("name"));
    app.fromTo("#msg-add",{display:"block"},{display:"none", duration:1})

  }
  if (localStorage.getItem(element.getAttribute("name"))==element.getAttribute("name")) {
    element.innerHTML=fav_fill;
    favText[i].style.display="none"
  }
}
      });

     }, false);
   
    const main =document.querySelector(".main");
    const gallery = data_gallery_images.map(gid => gid.gallery_id);
    const ids = data_gallery.map(id => id.id);
    const img=[]

    for (let i = 0; i < data_gallery.length; i++) {
      const element = data_gallery[i];
      var galleries =  data_gallery_images.filter(gallery => gallery.gallery_id==ids[i]);
     
     main.innerHTML+=
     `<div data-tilt class="img-box" >
     <img src="./uploads/images/${galleries[0].file_name}">
     <ol>${element.title}</span>
     <ol class='col'>محصول<p>${galleries.length}</p></ol>
     </div>`;
    }
  
    const allBox= document.querySelectorAll(".img-box");
    for (let i = 0; i < allBox.length; i++) {
      const element = allBox[i];
      element.onclick = function() {myFunction(x =  data_gallery_images.filter(gallery => gallery.gallery_id==ids[i]))};
    }
    function myFunction() {
     for (let i = 0; i < x.length; i++) {
       const element = x[i];
       document.getElementById("holder").innerHTML+=`<div class="col-4">
       <img width=103 height=103 name="${element.name}" description="${element.description}"
       price="${element.price}" imgName="${element.file_name}" ext="${element.ext}"
        class="list" src="./uploads/images/${element.file_name}">
        <div>
        <div name="${element.name}" class="fav-icon-2">${fav}</div>
        <div class="fav-text-2">افزودن به علاقه مندی</div>
        </div>
        </div>
       `;
      
       app.fromTo("#holder",{opacity:0,x:"-60vw"},{opacity:1,x:0,duration:.6})
       document.querySelector(".close").style.display="flex";
       document.querySelector(".col-1").style.display="flex";
       
     }
    //  col-2 #0
     document.querySelector(".org").src=`./uploads/images/${x[0].file_name}`;
     document.querySelector(".price").innerHTML=`<span>تومان</span> ${x[0].price}<span> قیمت</span>`;
     document.querySelector(".name").innerHTML=` ${x[0].name} <span>نام کالا</span>`;
     document.querySelector(".description").innerHTML=`<d> توضیحات</d> ${x[0].description}`;
    //  onHover
  
     //vanellia
     VanillaTilt.init(document.querySelectorAll(".org" ),{
      maxTilt:        20,
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
      scale:          1.3,      // 2 = 200%, 1.5 = 150%, etc..
      speed:          900,    // Speed of the enter/exit transition.
      transition:     true,   // Set a transition on enter/exit.
      disableAxis:    null,   // What axis should be disabled. Can be X or Y.
      reset:          true,   // If the tilt effect has to be reset on exit.
      glare:          false,  // Enables glare effect
      maxGlare:       1       // From 0 - 1.
      
  });   
    
    //  document.querySelector(".fav-icon-2").innerHTML=`${fav}`;
    //  document.querySelector(".fav-text-2").innerHTML=`افزودن به علاقه مندی`;
     
     if (x[0].ext!=0 && x[0].ext!=null ) {
      
      document.querySelector(".ext").innerHTML=` ${x[0].ext} موجود`;
     }
     else{
     
      document.querySelector(".ext").innerHTML=` سفارش`;
     }
    //  col-2 i
    const list =document.querySelectorAll(".list");
    list.forEach(element => {

      element.onclick=()=>{
       
     document.querySelector(".org").src=`./uploads/images/${element.getAttribute("imgName")}`;
     document.querySelector(".price").innerHTML=`<span>تومان</span> ${element.getAttribute("price")}<span> قیمت</span>`;
     document.querySelector(".name").innerHTML=` ${element.getAttribute("name")}<span> نام کالا<span>`;
     document.querySelector(".description").innerHTML=`<d> توضیحات</d> ${element.getAttribute("description")}`;
     
     

     if (element.getAttribute("ext")!=0 && element.getAttribute("ext")!=null ) {
      
      document.querySelector(".ext").innerHTML=` ${element.getAttribute("ext")} موجود`;
     }
     else{
      document.querySelector(".ext").innerHTML=` سفارش`;
     }
      }
      
    });
//fav
const favIcon2= document.querySelectorAll(".fav-icon-2");
const favText2= document.querySelectorAll(".fav-text-2");
//  is it fav or nah

for (let i = 0; i < favIcon2.length; i++) {
  
  const element = favIcon2[i];
  element.onclick=(e)=>{
    element.innerHTML=fav_fill;
    favText2[i].style.display="none"
    
    localStorage.setItem(`${element.getAttribute("name")}`, `${element.getAttribute("name")}`);

    app.fromTo("#msg-add",{display:"block"},{display:"none", duration:1})
  }
  if (localStorage.getItem(`${element.getAttribute("name")}`)==`${element.getAttribute("name")}`) { 
   element.innerHTML=fav_fill;
    favText2[i].style.display="none"
  }
}
    }
    
    document.querySelector(".close").onclick=()=>{
      document.querySelector(".close").style.display="none";
      document.getElementById("holder").innerHTML=``;
      document.querySelector(".col-1").style.display="none";
    }
    
      inventor=(keys = Object.keys(localStorage))=>{
        
       for (let i = 0; i < keys.length; i++) {
         const element = keys[i];
         const inventory =  data_gallery_images.filter(gallery => gallery.name==element);
        inventory.forEach(element => {
          document.querySelector(".cors").innerHTML+=`
          <div class="img-box-3">
          <img   src="./uploads/images/${element.file_name}">
          </di>
          <div name="${element.name}" class="fav-icon-3">${deletex}</div>
          <div class="fav-text-3">حذف محصول</div>
          </div>
          </div>
          `;
        });
        
       }
       const box = document.querySelectorAll(".img-box-3");
       const fav3 = document.querySelectorAll(".fav-icon-3");
      for (let i = 0; i < box.length; i++) {
        const element = box[i];
        element.onmouseover=()=>{
          app.to(fav3[i],{display:"flex",duration:.1})
         }
         element.onmouseout=()=>{
          app.to(fav3[i],{display:"none",duration:.1})
         }
         fav3[i].onclick=()=>{
          localStorage.removeItem(`${fav3[i].getAttribute("name")}`);
          element.style.display="none";
          app.fromTo("#msg-del",{display:"block"},{display:"none", duration:1})
         }
      }
      }
     

       app.to(".cors",{x:"100vw",position:"fixed"})
       document.getElementById("inventory").onclick=()=>{

         inventor();

         document.querySelector(".inventory").style.display="flex";
        app.fromTo(".cors",{x:"60vw"},{x:0,opacity:1,duration:.3})
        app.to(".cors",{position:"absolute",delay:1})
        
       }
       document.querySelector(".inventory").onclick=()=>{
        document.querySelector(".inventory").style.display="none";
        app.fromTo(".cors",{x:0},{x:"60vw",position:"fixed",opacity:0,innerHTML:"",duration:.3})
       }

  }
    data();
   
    function bigImg() {
      app.to(".price",{x:190})
      app.to(".ext",{x:90})
      app.to("#holder",{y:19})
    }
    
    function normalImg() {
      app.to(".price",{x:0})
       app.to(".ext",{x:0})  
       app.to("#holder",{y:0})
    }
   