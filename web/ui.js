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
    };

}(this, this.document));


  var opa = 0; //透明度
  var opacnt = 3; //増加割合
  var timer = 100; //setTimeout関数の実行感覚(ms)

function changeIMG(element){
  var img = new Array();

  img[1] = new Image();
  img[1].src = "photo/1.png";
  img[2] = new Image();
  img[2].src = "photo/2.png";
  img[3] = new Image();
  img[3].src = "photo/3.png";
  img[4] = new Image();
  img[4].src = "photo/4.png";
  img[5] = new Image();
  img[5].src = "photo/5.png";

  var getid = element.id;

  MainIMG = document.getElementById("IMG");
  MainIMG.src = img[getid].src;
  //MainIMG.style.visibility = "visible";
  //FadeIn(getid,opa);
}
//実装中
/*function FadeIn(getid,opa){
  if(opa<=100){
    MainIMG.style.filter = "alpha(opacity:"+opa+")";//IE source
    MainIMG.style.opacity = opa/100;//Firefox source
    opa += opacnt;
    setTimeout("FadeIn('"+getid+"',"+opa+")",timer);
  }
}*/
