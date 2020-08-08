<?php
date_default_timezone_set('Europe/Moscow');
$start = microtime(true);
if(isset($_POST['X'])&&isset($_POST['Y'])&&isset($_POST['R'])){
    $x = $_POST['X'];
    $y = $_POST['Y'];
    $r = $_POST['R'];
    $date = date("d/m/Y H:i:s");
    $timer = microtime(true) - $start;
    $hit = getResult($x,$y,$r);
    $result='<tr><td>'.$x.'</td><td>'.$y.'</td><td>'.$r.'</td><td>'.$date.'</td><td>'.round($timer,10).'</td>'.$hit.'</tr>';
    echo $result;
}
function getResult($x,$y,$r){
    if ($x>=0 && $y>=0 && $x<$r&&$y<$r) return '<td  bgcolor=#EDF5E1> hited </td>';
    else if($x>=0 && $y<0 && $x<$r && $y>=($x/2-$r/2)) return '<td bgcolor=#EDF5E1> hited </td>';
    else if($x<0 && $y<0 && $x*$x+$y*$y<=$r*$r)return '<td bgcolor=#EDF5E1> hited </td>';
    else return '<td bgcolor=#FC4445>  not hited </td>';
}
?>