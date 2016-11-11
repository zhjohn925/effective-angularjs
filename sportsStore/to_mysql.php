<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
/* - this file is for github/effective-angularjs/sportsStore
   - put this file in webroot in "192.168.1.218"
   - need the above line to resolve the issue (same origin)
     when localhost:5000/sportsStore/app.html accesses this file */
$connect = mysqli_connect("localhost", "udeer", "co57mysql", "sportsStore");
$result = mysqli_query($connect, "select * from products");
$data = array();
while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
print json_encode($data);
?>
