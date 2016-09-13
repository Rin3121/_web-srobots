(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

}(this, this.document));


/*//画像切り替え
function changeIMG(x){
   imgcount = x.id;
}
*/
function showimage(num) {
   var imagename = "photo/" + num.id + ".png";
   document.getElementById('IMG').src = imagename;
}
/*
// 画像の数
var imgs = 5;
// 切替秒数(ミリ秒)
var inttime = 1000;
// showimage
function showimage(num) {
   var imagename = "photo/" + num + ".png";
   document.getElementById('IMG').src = imagename;
}
// slideshow
var imgcount=1;
function slideimage() {
   if( imgcount > imgs ) {
      imgcount = 1;
   }
   showimage( imgcount );
   imgcount++;
}

// start_slideshow
var slideid;
function startshow() {
   stopshow();
   slideid = setInterval("slideimage()",inttime);
}
*/
