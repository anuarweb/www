<<<<<<< HEAD
<?php
    if(isset($_GET['name']) && isset($_GET['surname'])){
        $mas = [
            'nameServer' => $_GET['name'],
            'surnameServer' => $_GET['surname']
        ];
        echo json_encode($mas);
    }
=======
<?php
    if(isset($_GET['name']) && isset($_GET['surname'])){
        $mas = [
            'nameServer' => $_GET['name'],
            'surnameServer' => $_GET['surname']
        ];
        echo json_encode($mas);
    }
>>>>>>> 97bff1b82a2f6506a747f2f5e80ab10ce79655d1
?>