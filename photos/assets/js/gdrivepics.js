$(document).ready(function(){
  var api_key = 'AIzaSyDa5wotmqf0VJ78k-JRdAyOe60aro27Lcs';
  // var api_key = 'AIzaSyBK2p7xo5IXzmaOKnh0XjQGFcQ2iFmlvO4';
  var folderId = '0B53m5QwmR1KbY1ZtTGZ5eGZJdlk';

    // folderIds
    // Bay Games - 0B53m5QwmR1KbOFlyN2gwSWc2aGc
    // BdayBash - 0B53m5QwmR1KbY1ZtTGZ5eGZJdlk
    // Kreeda - 0B53m5QwmR1KbZWZ3ZE0ySnMtZFE
    // Parties & Outings - 0B53m5QwmR1KbZUFROEFDbFBhR0U
    // Special Wishes - 0B53m5QwmR1KbdThKSGJpM2ZXTGs

    switch ($('title').text()) {
        case 'Birthday Bash - Meraki':
            folderId = '0B53m5QwmR1KbY1ZtTGZ5eGZJdlk';
            break;
            
        case 'Parties & Outings - Meraki':
            folderId = '0B53m5QwmR1KbZUFROEFDbFBhR0U';
            break;

        case 'Bay Games - Meraki':
            folderId = '0B53m5QwmR1KbOFlyN2gwSWc2aGc';
            break;

        case 'Special Wishes - Meraki':
            folderId = '0B53m5QwmR1KbdThKSGJpM2ZXTGs';
            break;

        case 'Kreeda - Meraki':
            folderId = '0B53m5QwmR1KbZWZ3ZE0ySnMtZFE';
            break;
    
        default:
            break;
    }

  var url = "https://www.googleapis.com/drive/v3/files?q='" + folderId + "'+in+parents&key=" + api_key;
  console.log(url);
  var promise = $.getJSON( url, function( data, status ){

      data.files.forEach(function(e, i, a){
        var link = 'https://googledrive.com/host/' + folderId + '/' + e.name;
        console.log(link);
        $('#main').append('<article class="item thumb" data-width="282"><h2>' + e.name + '</h2><a href="' + link + ' class="image"><img src="' + link + '" alt="' + e.name + '"></a></article>');
        });
    
  });
  promise.done(function( data ){
      
  }).fail(function(){
    
  });
});