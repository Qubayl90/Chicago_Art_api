let img_id;
let img_title;
let img_artist_title;
let img_artwork_type_title;
let img_department_title;

 async function clickedEvent(img_id){
    let request = new Request(`https://api.artic.edu/api/v1/artworks/${img_id}`,{
         method: 'GET',
         //headers: headers
    });

     let result = await fetch(request);
     let response = await result.json();
    
     console.log('API Response:');
     console.log(response);
     console.log(`Art Id: ${response.data.id}`);
     console.log(`Art Title: ${response.data.title}`);
     console.log(`Artist Title: ${response.data.artist_title}`);
     console.log(`Artwork Type: ${response.data.artwork_type_title}`);
     console.log(`Department Title: ${response.data.department_title}`);

     document.getElementById('art_info').style.display = 'block';
     document.getElementById("art_id").innerHTML = response.data.id;
     document.getElementById("art_title").innerHTML = response.data.title;
     document.getElementById("artist_title").innerHTML = response.data.artist_title;
     document.getElementById("artwork_type_title").innerHTML = response.data.artwork_type_title;
     document.getElementById("department_title").innerHTML = response.data.department_title;
     document.querySelector(".gallery__item.gallery__item--1").style.borderWidth='0px';
     document.querySelector(".gallery__item.gallery__item--2").style.borderWidth='0px';
     document.querySelector(".gallery__item.gallery__item--3").style.borderWidth='0px';
     document.querySelector(".gallery__item.gallery__item--4").style.borderWidth='0px';
     document.querySelector(".gallery__item.gallery__item--5").style.borderWidth='0px';
     document.querySelector(".gallery__item.gallery__item--6").style.borderWidth='0px';
     
     document.getElementById(img_id).style.borderStyle ='solid';
     document.getElementById(img_id).style.borderWidth ='7px';
     document.getElementById(img_id).style.borderColor ='Black';
     window.scrollTo(0, document.body.scrollHeight);
}

function getImage(img_id,event){
    event.stopPropagation();
    clickedEvent(img_id);
   
}

function hideArtWorkInfo(){
    document.getElementById('art_info').style.display = 'none'
    document.querySelector(".gallery__item.gallery__item--1").style.borderWidth='0px';
    document.querySelector(".gallery__item.gallery__item--2").style.borderWidth='0px';
    document.querySelector(".gallery__item.gallery__item--3").style.borderWidth='0px';
    document.querySelector(".gallery__item.gallery__item--4").style.borderWidth='0px';
    document.querySelector(".gallery__item.gallery__item--5").style.borderWidth='0px';
    document.querySelector(".gallery__item.gallery__item--6").style.borderWidth='0px';
}
