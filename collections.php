<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "codexworld";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM gallery_images";
$result = $conn->query($sql);
$count=mysqli_num_rows($result);
//echo $count;
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
  // echo $row['name'];

  }
  
} else {
  echo "0 results";
}
// update\
if(isset($_POST['submit'])){
    for($i=0;$i<$count;$i++){
      $name = $_POST['name'];
      $id = $_POST['id'];
      $price = $_POST['price'];
      $description = $_POST['description'];
      $ext = $_POST['ext'];

        $sql = "UPDATE gallery_images SET name='$name[$i]',description='$description[$i]', price='$price[$i]',ext='$ext[$i]' WHERE id='$id[$i]'";

        if ($conn->query($sql) === TRUE) {
          echo "";
        } else {
          echo "Error updating record: " . $conn->error;
        }
    }
    }
    
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Collections</title>
    <script defer src="./script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <form action="" method="post"> 
    <div class="container"></div>
   <input class="update" type="submit" name="submit" value="Upadte">
   <a href="index.php" class="btn-secondary" style="position: fixed; top:0; left:0;margin-top:79px;margin-left:21px; width:63px;">Back</a>
  </form>
</body>
</html>