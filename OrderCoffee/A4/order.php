<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Order summary</title>
    <link rel="stylesheet" href="
    styles.css">

</head>
<body>
<h1>Thank You for choosing Tim Horton's. Your order details are as follows: </h1>
<?php 



$number=$_REQUEST['nCoffees'];
$size=$_REQUEST['size'];
$cream=$_REQUEST['cream'];
$sugar=$_REQUEST['sugar'];

function getPrice($size){
     switch($size){
       case 'Small':
        $cost= number_format(1.6,2);
        break;
       case 'Medium':
        $cost= number_format(1.85,2);
        break;
       case 'Large': 
        $cost= number_format(2,2);
        break;
       case 'Extra-Large':
        $cost= number_format(2.3,2);
        break;
        default :
           $cost= null;
       }
        return  $cost;
   }
   $cost=getPrice($size);
   $tax =0.13*getPrice($size);
  

   $final_price= number_format(($number*getPrice($size) + $number*$tax),2);
 
        if($size == 'Small'){
        for($i=0;$i<$number;$i++){
            echo "<div class='Small'>";            
            echo "<img src='../Images/cup.jpg' width='20%' height='200px'>";

            if($cream){
                echo "<img src='../Images/plus.jpg'>";

            }
            for($j=0;$j<$cream;$j++){
                echo "<img src='../Images/cream.jpg'>";
            }

            if($sugar){
                echo "<img src='../Images/plus.jpg'>";
            }
            
            for($j=0;$j<$sugar;$j++){
                echo "<img src='../Images/sugar.jpg'>";
            }
            

            echo "</div>";

            
        }
       
    }

        else if($size == 'Medium'){
           
        for($i=0;$i<$number;$i++){
            echo "<div class='Medium'>";           
            echo "<img src='../Images/cup.jpg' width='20%' height='250px'>";
            if($cream){
                echo "<img src='../Images/plus.jpg'>";

            }
            for($j=0;$j<$cream;$j++){
                echo "<img src='../Images/cream.jpg'>";
            }

            if($sugar){
                echo "<img src='../Images/plus.jpg'>";
            }
            
            for($j=0;$j<$sugar;$j++){
                echo "<img src='../Images/sugar.jpg'>";
            }

            echo "</div>";
            
        }
       
    }
      
        else if($size == 'Large'){
        for($i=0;$i<$number;$i++){
            echo "<div class='Large'>";
            echo "<img src='../Images/cup.jpg' width='25%' height='300px'>";
            if($cream){
                echo "<img src='../Images/plus.jpg'>";

            }
            for($j=0;$j<$cream;$j++){
                echo "<img src='../Images/cream.jpg'>";
            }

            if($sugar){
                echo "<img src='../Images/plus.jpg'>";
            }
            
            for($j=0;$j<$sugar;$j++){
                echo "<img src='../Images/sugar.jpg'>";
            }
            echo "</div>";
        }
    }

       else if ($size == 'Extra-Large'){
        for($i=0;$i<$number;$i++){
            echo "<div class='xLarge'>";
            echo "<img src='../Images/cup.jpg' width='25%' height='350px'>";
            if($cream){
                echo "<img src='../Images/plus.jpg'>";

            }
            for($j=0;$j<$cream;$j++){
                echo "<img src='../Images/cream.jpg'>";
            }

            if($sugar){
                echo "<img src='../Images/plus.jpg'>";
            }
            
            for($j=0;$j<$sugar;$j++){
                echo "<img src='../Images/sugar.jpg'>";
            }
            echo "</div>";
        }
    }
    else{
        echo "<div class='error'>Please make a valid selection for the size.</div>";
        
    }

    if( $size == 'Small' || $size == 'Medium' || $size == 'Large' || $size == 'Extra-Large' ){
        echo "<p id='cost'>";
        echo "<b>Your order summary:</b><br>";
        echo "$number $size original blend coffees with $cream creams and $sugar sugars<br><br>";
        echo "<b>Payable amount: </b><br>";
        echo "Cost: $$cost x $number + tax = <b>$$final_price</b>";
        echo "</p>";
             
    }
    
  
        



       









?>


    






    
</body>
</html>
