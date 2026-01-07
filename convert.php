<?php
if (isset($_GET['note'])) {
    $note = $_GET['note'];
    
    $correspondances = [
        'do' => 'C',
        'ré' => 'D',
        'mi' => 'E',
        'fa' => 'F',
        'sol' => 'G',
        'la' => 'A',
        'si' => 'B'
    ];

    if (array_key_exists($note, $correspondances)) {
        echo "La notation américaine pour la note $note est " . $correspondances[$note];
    } else {
        echo "Note inconnue.";
    }
} else {
    echo "Aucune note reçue.";
}