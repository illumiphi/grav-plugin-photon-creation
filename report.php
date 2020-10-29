
<?php
$yaml_str = file_get_contents('blueprints.yaml');
$yaml = yaml_parse($yaml);
echo $yaml["name"];
?>

