<?php
$notes = ['do', 'ré', 'mi', 'fa', 'sol', 'la', 'si'];

echo '<form id="note-form" action="convert.php">';
echo '<label for="note-select">Choisissez une note :</label>';
echo '<select name="note" id="note-select">';
foreach ($notes as $note) {
    echo "<option value=\"$note\">$note</option>";
}
echo '</select>';
echo '</form>';
?>