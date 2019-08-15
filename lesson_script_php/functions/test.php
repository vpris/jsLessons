<?php
$carName = 'Ford';
$carYear = 2015;
$personYear = 1993;

function calcAge($year) {
    $currentYear = 2019;
    $result = $currentYear - $year;
    return $result;
}
function checkAndLogAge ($year, $name, $compareTo) {
    if (calcAge($year) < $compareTo) {
        print 'возраст ' . $name . ' меньше ' . $compareTo . ' лет' . '<br>';
    } elseif (calcAge($year) > $compareTo) {
        print 'возраст ' . $name . ' больше ' . $compareTo . ' лет';
    } else {
        print 'возраст ' . $name . ' равен ' . $compareTo . ' лет';
    }
}

// Функция в переменной
$checkName  = function ($name) {
    print 'Hello, ' . $name . '<br>';
};

$checkName('Елена');