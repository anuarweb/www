<<<<<<< HEAD
<?php
    sleep(1);
    $id = $_POST['id'];
    
    if($id == 1){
        $nat = [
            'kazakh' => 'Казах',
            'russian' => 'Русский',
            'ukrainan' => 'Украинец',
            'englishman' => 'Англичанин',
            'american' => 'Американец',
            'starwars' => 'Ситх'
        ];
    }
    else if($id == 2){
        $nat = [
            'kazakh' => 'Казашка',
            'russian' => 'Русская',
            'ukrainan' => 'Украинка',
            'englishman' => 'Англичанка',
            'american' => 'Американка',
            'starwars' => 'Арканианка'
        ]; 
    }

    echo json_encode($nat);
=======
<?php
    sleep(1);
    $id = $_POST['id'];
    
    if($id == 1){
        $nat = [
            'kazakh' => 'Казах',
            'russian' => 'Русский',
            'ukrainan' => 'Украинец',
            'englishman' => 'Англичанин',
            'american' => 'Американец',
            'starwars' => 'Ситх'
        ];
    }
    else if($id == 2){
        $nat = [
            'kazakh' => 'Казашка',
            'russian' => 'Русская',
            'ukrainan' => 'Украинка',
            'englishman' => 'Англичанка',
            'american' => 'Американка',
            'starwars' => 'Арканианка'
        ]; 
    }

    echo json_encode($nat);
>>>>>>> 97bff1b82a2f6506a747f2f5e80ab10ce79655d1
?>