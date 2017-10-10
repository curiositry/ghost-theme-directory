$(function () {
  $('#Container').mixItUp();
});

var controls = document.getElementById("controls");
controls.style.display = "block";


function toggleControls() {
  var controlsToggle = document.getElementById("controls-toggle");
  var controlGroup = document.getElementById("control-group");
  if (controls.style.display === "block") {
     $( "#controls" ).hide("slow");
    controlsToggle.innerHTML = "<strong> + </strong> SORT OPTIONS";
    controlGroup.style.border = "none";
    controlGroup.style.background = "none";
  } else {
    $( "#controls" ).show("slow");
    controlsToggle.innerHTML = "<strong> X </strong> SORT OPTIONS";
    controlGroup.style.border = "3px double moccasin";
    controlGroup.style.background = "#FEFDFB";
  }
}

var themes = {
  "0": {
    "id" : "0",
    "title": "Casper",
    "author": "Ghost",
    "author_url": "http://ghost.org",
    "cost": 0,
    "source": "https://github.com/TryGhost/Casper",
    "demo": "http://demo.ghost.io",
    "screenshot" : "img/screenshots/lg/casper.jpg",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "serif"]
  },

  "1": {
    "id" : "1",
    "title": "Abstraction",
    "author": "Will H. McMahan",
    "author_url": "http://mcmahan.me/",
    "cost": 0,
    "source": "https://github.com/whmii/Abstraction",
    "demo": "http://abstraction.ghost.io/",
    "screenshot" : "img/screenshots/lg/abstraction.png",
    "tags" : ["light", "1-column", "boilerplate", "typographic", "responsive", "sans"]
  },

  "2": {
    "id" : "2",
    "title": "Vapor",
    "author": "Seth Lilly",
    "author_url": "http://www.sethlilly.com/",
    "cost": 0,
    "source": "https://github.com/sethlilly/Vapor",
    "demo": "http://hipsterghost.com/",
    "screenshot" : "img/screenshots/lg/vapor.png",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "serif"]
  },
  "3": {
    "id" : "3",
    "title": "Mnml",
    "author": "Curiositry",
    "author_url": "http://curiositry.github.io",
    "cost": 0,
    "source": "https://github.com/curiositry/mnml-ghost-theme",
    "demo": "http://mnml.herokuapp.com",
    "screenshot" : "http://cdn.autodidacts.io/img/mnml/Screenshot-2014-11-09.png",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "serif"]
  },
  "4": {
    "id" : "4",
    "title": "Laminim",
    "author": "Curiositry",
    "author_url": "http://curiositry.github.io",
    "cost": 27,
    "source": "https://creativemarket.com/Curiositry/1037280-Laminim-—-Ghost-Theme-for-Bloggers",
    "demo": "http://laminim.curiositry.com",
    "screenshot" : "http://cdn.autodidacts.io/img/laminim/laminim-ghost-blog-theme.png",
    "tags" : ["light", "1-column", "typographic", "responsive", "serif", "minimal"]
  },
  "5": {
    "id" : "5",
    "title": "Triangle",
    "author": "Matthew Haeck",
    "author_url": "https://www.matthewhaeck.com/",
    "cost": 0,
    "source": "https://haeckdesign.com/freebies/themes/triangle-ghost-theme ",
    "demo": "https://demo.haeckdesign.com/triangle/ ",
    "screenshot" : "http://marketplace.ghost.org/wp-content/uploads/2016/01/triangle-ghost-theme-600x400.jpg",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "serif"]
  },
    "6": {
    "id" : "6",
    "title": "Photo Ghost",
    "author": "Casper van Donderen",
    "author_url": "https://twitter.com/de_krenk",
    "cost": 0,
    "source": "https://github.com/cvandonderen/photoghost",
    "demo": "http://photoghost-demo.azurewebsites.net/",
    "screenshot" : "img/screenshots/lg/photo-ghost.png",
    "tags" : ["dark", "1-column", "photographic", "minimal", "responsive", "sans"]
  },
    "7": {
    "id" : "7",
    "title": "Heidi",
    "author": "Interslice",
    "author_url": "https://github.com/interslice",
    "cost": 0,
    "source": "https://github.com/interslice/heidi",
    "demo": "https://github.com/interslice/heidi",
    "screenshot" : "img/screenshots/lg/heidi.png",
    "tags" : ["light", "multi-column", "typographic", "minimal", "responsive", "sans"]
  },

    "8": {
    "id" : "8",
    "title": "Crisp ",
    "author": "Kathy Qian ",
    "author_url": "http://kathyqian.com ",
    "cost": "0" ,
    "source": "https://github.com/kathyqian/crisp-ghost-theme ",
    "demo": "https://github.com/kathyqian/crisp-ghost-theme ",
    "screenshot" : "https://raw.githubusercontent.com/kathyqian/crisp-ghost-theme/master/screenshots/list.png",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "serif"]
  },

  // "9": {
  //   "id" : "9",
  //   "title": "Echo ",
  //   "author": "Christopher Yee ",
  //   "author_url": "http://christopheryee.ca/ ",
  //   "cost": 20,
  //   "source": "https://creativemarket.com/cmyee/24881-Echo ",
  //   "demo": "http://christopheryee.ca/ghost/echo/ ",
  //   "screenshot" : "https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/23/239/239193/2-o.jpg?1416269098",
  //   "tags" : ["light", "multi-column", "photographic", "minimal", "responsive", "sans"]
  // },
  //
  //  "10": {
  //   "id" : "10",
  //   "title": "Bento ",
  //   "author": "Christopher Yee ",
  //   "author_url": "http://christopheryee.ca ",
  //   "cost": 20,
  //   "source": "https://creativemarket.com/cmyee/42716-Bento ",
  //   "demo": "http://christopheryee.ca/ghost/bento/ ",
  //   "screenshot" : "https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/11/114/114481/1-o.png ",
  //   "tags" : ["light", "1-column", "photographic", "minimal", "responsive", "sans"]
  // },


  "9": {
    "id" : "9",
    "title": "Leap ",
    "author": "Haunted Themes ",
    "author_url": "https://www.hauntedthemes.com/",
    "cost": 34.99,
    "source": "https://www.hauntedthemes.com/",
    "demo": "https://leap.hauntedthemes.com/",
    "screenshot" : "https://leap.hauntedthemes.com/content/images/2017/09/leap-cover.png",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "serif"]
  },

  "10": {
    "id" : "10",
    "title": "Tawau ",
    "author": "Haunted Themes ",
    "author_url": "https://www.hauntedthemes.com/ ",
    "cost": 34.99,
    "source": "https://www.hauntedthemes.com/ ",
    "demo": "https://tawau.hauntedthemes.com/ ",
    "screenshot" : "https://tawau.hauntedthemes.com/content/images/2017/09/tawau-cover.png",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "serif"]
  },

  "11": {
    "id" : "11",
    "title": "Hoia ",
    "author": "Haunted Themes ",
    "author_url": "https://www.hauntedthemes.com/ ",
    "cost": 34.99,
    "source": "https://www.hauntedthemes.com/ ",
    "demo": "https://hoia.hauntedthemes.com/ ",
    "screenshot" : "https://hoia.hauntedthemes.com/content/images/2017/09/hoia-cover-1.png",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "serif"]
  },

    "12": {
    "id" : "13",
    "title": "Ghostium",
    "author": "Oswaldo Acauan",
    "author_url": "https://oswaldoacauan.com/",
    "cost": 0,
    "source": "https://github.com/oswaldoacauan/ghostium",
    "demo": "http://ghostium.oswaldoacauan.com/",
    "screenshot" : "https://camo.githubusercontent.com/a417b96865cc63d7984f9af2f5858a1b7f24b630/687474703a2f2f692e696d6775722e636f6d2f6d35566354426c2e706e67",
    "tags" : ["light", "multi-column", "typographic", "minimal", "responsive", "sans"]
  },
    "13": {
    "id" : "13",
    "title": "No-nonsense",
    "author": "Mihnea Dobrescu-Balaur",
    "author_url": "http://www.mihneadb.net/",
    "cost": 0,
    "source": "https://github.com/mihneadb/no-nonsense",
    "demo": "http://www.mihneadb.net/",
    "screenshot" : "img/screenshots/lg/no-nonsense.png",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "sans"]
  },
   "14": {
    "id" : "14",
    "title": "Attila",
    "author": "Peter Amende",
    "author_url": "http://zutrinken.com/",
    "cost": 0,
    "source": "https://github.com/zutrinken/attila",
    "demo": "http://attila.zutrinken.com/",
    "screenshot" : "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/Attila.png",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "serif"]
  },
};

function generateList(json, container) {
  var el = document.getElementById(container),
    output = "",
    themes = json;

  for (var i = 0; i < Object.keys(themes).length; i = i + 1){
    var theme = themes[i];

    function themeTags (theme){
      var tagsString = "";
      var tags = theme.tags;
      for (var i = 0; i < tags.length; i++){
        var tag = tags[i];
        tagsString += " "+tag;
      }
      return tagsString;
    }


    var costTag = "free";
    if (theme.cost > 0){
        var costTag = "paid";
    }

    var costText = "";
    if(theme.cost > 0){
      var costText = " $"+theme.cost;
    }

    var link = theme.source;
    if (theme.demo){
      link = theme.demo;
    }

    output += '<div class="mix theme-card '+costTag+' '+themeTags(theme)+'" data-myorder="'+theme.id+'">';


    output += '<a href="'+link+'" class="unstyled-anchor" target="_blank">';
    output += '<img width="340px" src="'+theme.screenshot+'">';
    output += '<div class="theme-card__info">';
    output += '<h4 class="theme-card__title">'+theme.title+'</h4>';
    output += '<div class="btn-group" style="position:relative;bottom:6px;"><a class="btn btn--small" href="'+theme.demo+'">↗ Demo</a><a class="btn btn--small" href="'+theme.source+'">↓ Download'+costText+'</a></div>';
    output += '</a>';
    output += '</div></div>';
  };
  el.innerHTML += output;
};

generateList(themes, 'Container');



setTimeout(loadFooterContent, 2000);

function loadFooterContent(){
document.getElementById('site-footer').innerHTML = '<br><hr><br>' +
  '<h3>About this Project</h3>'+
  '<p>The Ghost Theme Directory is an open-source side project by <a href="http://curiositry.github.io">@curiositry</a> created to solve the problem of finding high quality Ghost themes that match the tone of your blog.</p>'+
'<a class="btn unstyled-anchor" href="https://curiositry.typeform.com/to/rJ75zP">Submit a Theme</a>'+
  ' <a class="btn unstyled-anchor" href="http://github.com/curiositry/ghost-theme-directory">Contribute on GitHub</a>'+
  ' <a class="btn unstyled-anchor" href="http://twitter.com/curiositry/">Follow</a>'+
  '<br><br><br><hr><br>'+
  '<em>Built with ☕ by '+
'<a href="http://curiositry.github.io">@curiositry</a>'+
  '<Br><small>— using '+
  '<a href="http://curiositry.github.io/microplate">Microplate</a>, '+
  '<a href="http://typeplate.com">Typeplate</a>, '+
  '<a href="http://kennethormandy.com/journal/normalize-opentype-css">Normalize-Opentype.css</a>, '+
  '<a href="http://mixitup.io">MixItUp</a>, '+
  'and <a href="http://brick.im">Brick Webfonts</a></em></small>';
};
