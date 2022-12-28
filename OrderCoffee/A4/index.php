<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Place your order</title>
   
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <form action="order.php" method="post">
        <h1>Welcome to Tim Horton's!</h1>
        <fieldset>
            <legend><b>Place Order</b></legend>

            <div class="container">
                <center><img src="../Images/Order.png"></center>
                <h3>How would you like your drink?</h3>
                <label>Number of Coffees:&nbsp;&nbsp;&nbsp;</label>
                <input type="number" value="1" name="nCoffees" min="1"><br>
                <label>Size: </label>
                <select name="size"> 
            <option value="-1">Select size</option>
            <option value="Small">Small (3 cals)</option>
            <option value="Medium">Medium (4 cals)</option>
            <option value="Large">Large (5cals)</option>
            <option value="Extra-Large">Extra-Large (5cals)</option>
        </select><br>
                <label>Numer of creams:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="number" value="0" name="cream" min="0"><br>
                <label>Numer of sugars:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="number" value="0" name="sugar" min="0"><br>
                <center><input type="submit" value="Order Coffee" class="submit"></center>
            </div>
        </fieldset>



    </form>


</body>

</html>