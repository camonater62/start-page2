String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for(var i=0; i < str.length; i++){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}
 
function search(query){
    switch(query.substr(0, 2)){
        case "-y":
            query = query.substr(3);
            window.location =
                "https://www.youtube.com/results?search_query=" +
                query.replaceChars(" ", "%20");
            break;
        case "-p":
            query = query.substr(3);
            window.location =
                "https://thepiratebay.org/search/" +
                query.replaceChars(" ", "%20");
            break;
		case "-d":
            query = query.substr(3);
            window.location =
                "http://www.dictionary.com/browse/" +
                query.replaceChars(" ", "-");
            break;

    case "-w":
        query=query.substr(3);
        window.location = 
            "https://en.wikipedia.org/wiki/" + 
            query.replaceChars(" ", "_");
            break;
			
	case "-u":
		query=query.substr(3);
		window.location =
			"http://www.urbandictionary.com/define.php?term=" +
			query.replaceChars(" ", "+");
		break;
		
	case "-i":
		query=query.substr(3);
		window.location =
			"https://www.google.com/search?tbm=isch&q=" +
			query.replaceChars(" ", "%20");
		break;
		
	case "-a":
		query=query.substr(3);
		window.location =
			"https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=" +
		    query.replaceChars(" ", "+");
		break;
		
        default:
            window.location="https://www.google.com/?gws_rd=ssl#q=" +
                query.replaceChars(" ", "%20");
    }
}
 
window.onload = function(){
    searchinput = document.getElementById("search");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }
 
    var search_sqr = document.getElementById("search_sqr");
 
        }
