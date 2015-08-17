// add scripts

$(document).on('ready', function() {

  console.log('sainty check');


  var heading = $('#first-heading');
// console-logging the heading
  console.log(heading);


  // add the word yo to the <first-heading>
  heading.append('yo');


  console.log("There's a break here");

  var test = $('.container p').first();
  $('p:eq( 3 )').append('&nbsp;&nbsp;<span>appending</span>');

  console.log("I'm here TWO");

  var testClone = heading.clone();

  var testClone2 = $('#delegate');

  // console.log(testClone2.clone());


  // dom traversal

  // $('button').on('click'), function() {
  //   console.log("is working?");
  //   console.log($('button'));
  //   $(this).remove();

  // };


  });