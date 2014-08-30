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
    controlGroup.style.background = "#FFFAF0";
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
    "demo": "",
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
    "title": "No-nonsense",
    "author": "Mihnea Dobrescu-Balaur",
    "author_url": "http://www.mihneadb.net/",
    "cost": 0,
    "source": "https://github.com/mihneadb/no-nonsense",
    "demo": "http://www.mihneadb.net/",
    "screenshot" : "img/screenshots/lg/no-nonsense.png",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "sans"]
  },
  "4": {
    "id" : "4",
    "title": "Wharton",
    "author": "MeanThemes",
    "author_url": "http://meanthemes.com/",
    "cost": 19,
    "source": "http://themeforest.net/item/-wharton-a-big-bold-ghost-blog-theme/7789814",
    "demo": "http://wharton.github.io",
    "screenshot" : "https://0.s3.envato.com/files/91960826/preview-wharton-ghost.__large_preview.jpg",
    "tags" : ["light", "1-column", "typographic", "minimal", "responsive", "serif"]
  },
    "5": {
    "id" : "5",
    "title": "Photo Ghost",
    "author": "Casper van Donderen",
    "author_url": "https://twitter.com/de_krenk",
    "cost": 0,
    "source": "https://github.com/cvandonderen/photoghost",
    "demo": "http://photoghost-demo.azurewebsites.net/",
    "screenshot" : "img/screenshots/lg/photo-ghost.png",
    "tags" : ["dark", "1-column", "photographic", "minimal", "responsive", "sans"]
  },
    "6": {
    "id" : "6",
    "title": "Heidi",
    "author": "Interslice",
    "author_url": "https://github.com/interslice ",
    "cost": 0,
    "source": "https://github.com/interslice/heidi",
    "demo": "http://heidi.interslice.in/",
    "screenshot" : "img/screenshots/lg/heidi.png",
    "tags" : ["light", "2-column", "typographic", "minimal", "responsive", "sans"]
  }
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

    var link = theme.source;
    if (theme.demo){
      link = theme.demo;
    }

    output += '<div class="mix theme-card '+costTag+' '+themeTags(theme)+'" data-myorder="'+theme.id+'">';
    output += '<a href="'+link+'" class="unstyled-anchor" target="_blank">';
    output += '<img width="300px" src="'+theme.screenshot+'">';
    output += '<div class="theme-card__info"><h4 class="theme-title">'+theme.title+'</h4>';
    output += '<span><strong>$'+theme.cost+'</strong> — <a href="'+theme.demo+'">Demo</a> &bull; <a href="'+theme.source+'">Source</a></span>';
    output += '</a>';
    output += '</div></div>';
  };
  el.innerHTML += output;
};

generateList(themes, 'Container');



setTimeout(loadFooterContent, 2000);

function loadFooterContent(){
document.getElementById('site-footer').innerHTML = '<br><hr><h3><br><a href="https://omphalosskeptic.typeform.com/to/rJ75zP">&raquo; SUBMIT A THEME &laquo;</a></h3> <small><strong>(or better yet, update the theme.json file <a href="http://github.com/omphalosskeptic/ghost-theme-directory">on GitHub.</a></strong>)</small><br><br><hr><br> <em>Built with ☕ by <a href="http://omphalosskeptic.github.io">@omphalosskeptic</a> <Br><small>— using <a href="http://omphalosskeptic.github.io/microplate">Microplate</a>, <a href="http://typeplate.com">Typeplate</a>, <a href="http://kennethormandy.com/journal/normalize-opentype-css">Normalize-Opentype.css</a>, <a href="http://mixitup.io">MixItUp</a>, and <a href="http://brick.im">Brick Webfonts</a></em></small><br><br> ';
};
