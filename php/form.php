<?php
if (isset($_POST)) {
   print("First Name: " . $_POST['firstName']);
   print("<br>Last Name: " . $_POST['lastName']);
   print("<br>Phone: " . $_POST['tel']);
   print("<br>Mail: " . $_POST['email']);
   print("<br>Message: " . $_POST['message']);
}
