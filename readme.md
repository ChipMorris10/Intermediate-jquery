<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Intermediate jQuery</title>

    <!-- stylesheets -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
  </head>
  <body>

    <div class="row">

      <div class="col-xs-4">

        <!-- DOM creation/traversal example -->
        <div class="container">
          <h1>DOM CREATION</h1>
          <button class="btn btn-success btn-lg" id="main-btn">Click me!</button>
          <br><br>
          <p>Sibling</p>
        </div>

      </div>

      <div class="col-xs-4">

        <!-- event delegation example -->
        <div class="container" id="delegate">
          <h1>DELEGATION</h1>
          <button class="btn btn-primary btn-lg" id="minor-btn">Click me!</button>
        </div>

      </div>

      <div class="col-xs-4">

        <!-- bubbling example -->
        <div class="container">
          <h1>BUBBLING</h1>
          <button class="btn btn-warning btn-lg" id="add-btn">Add paragraph</button>
          <div id="paragraphs">
            <p>One</p>
            <p>Two</p>
            <p>Three</p>
            <p>Four</p>
            <p>Five</p>
            <p>Six</p>
          </div>
        </div>

      </div>

    </div>


    <!-- scripts -->
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>