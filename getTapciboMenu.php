<?php
header("Content-Type", "application/json");
echo file_get_contents('http://api.tapcibo.com/tapcibo_api/menu/menu_details');