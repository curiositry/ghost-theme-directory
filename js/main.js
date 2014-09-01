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
    "tags" : ["light", "multi-column", "typographic", "minimal", "responsive", "sans"]
  },
    "7": {
    "id" : "7",
    "title": "Wordy",
    "author": "Dominick Turnbull",
    "author_url": "https://twitter.com/symphaticidiot ",
    "cost": 0,
    "source": "https://github.com/symphaticidiot/wordy",
    "demo": "http://blog.dominickturnbull.co.uk",
    "screenshot" : "https://raw.githubusercontent.com/symphaticidiot/Wordy/master/screenshot.png",
    "tags" : ["light", "multi-column", "typographic", "minimal", "responsive", "sans"]
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
  '<p>The Ghost Theme Directory is an open-source side project by <a href="http://omphalosskeptic.github.io">@omphalosskeptic</a> created to solve the problem of finding high quality Ghost themes that match the tone of your blog.</p>'+
'<a class="btn unstyled-anchor" href="https://omphalosskeptic.typeform.com/to/rJ75zP">Submit a Theme</a>'+
  ' <a class="btn unstyled-anchor" href="http://github.com/omphalosskeptic/ghost-theme-directory">Contribute on GitHub</a>'+
  ' <a class="btn unstyled-anchor" href="http://twitter.com/omphalosskeptic/">Follow</a>'+
  '<br><br><br><hr><br>'+
  '<em>Built with ☕ by '+
'<a href="http://omphalosskeptic.github.io">@omphalosskeptic</a>'+
  '<Br><small>— using '+
  '<a href="http://omphalosskeptic.github.io/microplate">Microplate</a>, '+
  '<a href="http://typeplate.com">Typeplate</a>, '+
  '<a href="http://kennethormandy.com/journal/normalize-opentype-css">Normalize-Opentype.css</a>, '+
  '<a href="http://mixitup.io">MixItUp</a>, '+
  'and <a href="http://brick.im">Brick Webfonts</a></em></small>';
};
