<?php

    $con = new mysqli('localhost', 'root', '', 'family_store', 3308);

    if($con->connect_error)
    {
        die("Connection failed: " . $con->connect_error);
    }

    if(isset($_POST['dobaw_products']))
    {
        $product = $_POST['product'];
        $shop = $_POST['shop'];
        $type = $_POST['type'];
        $amount = $_POST['amount'];
        
        $sql = "insert into products 
        (name, added_date, magazin, amount) 
        values ('". $product . "', 
        '" . date("Y-m-d h:i:sa") . "', 
        '" . $shop . "', 
        '" . $amount . $type . "')";

        if($con->query($sql) === true)
        {
            echo 'successs!!!!';
        }
        else
        {
            echo 'Eroor: ' . $con->error;
        }

    }

    if(isset($_POST['get_products']))
    {
        $products = array();
        $sql1 = 'select magazin from products group by magazin';
        $query1 = $con->query($sql1);

        if($query1->num_rows > 0)
        {
            while($row1 = $query1->fetch_assoc())
            {
                $sql2 = 'select name, magazin, amount from products where magazin="'. $row1["magazin"] .'";';
                $query2 = $con->query($sql2);
                $store = array();
                while($row2 = $query2->fetch_assoc())
                {
                    array_push($store, $row2);
                }
                array_push($products, $store);
            }
        }
        echo json_encode($products);
    }
    
    $con->close();

?>