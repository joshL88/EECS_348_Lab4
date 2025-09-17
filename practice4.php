<?php
    echo "<html><body>";
    echo "<link rel='stylesheet' href='styles.css'>";
    if (isset($_POST['size']) && !empty($_POST['size'])){
        $size = $_POST['size'];
        echo "<table><tr><td></td>";
        for($i = 1; $i <= $size; $i++){
            echo "<td> $i </td>";
        }
        echo "</tr>";
        for($i = 1; $i <= $size; $i++){
            echo "<tr><td>" . $i . "</td>";
            for($j = 1; $j <= $size; $j++){
                echo "<td>" . ($i*$j) . "</td>";
            } 
            echo "</tr>";
        }
        echo "</table></body></html>";
    }
?>