// add scripts

$(document).on('ready', function() {

  console.log('sainty check');

  var heading = $('#first-heading');
  console.log(heading);

  heading.append('yo');

  var test = $('.container p').first();
  // $('p:eq( 3 )').append('&nbsp;&nbsp;<span>appending</span>')

  console.log(test);


  });