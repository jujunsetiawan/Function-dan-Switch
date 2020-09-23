function namaSantri(nama, nilai) {
    document.write('Nama Santri : ' + nama + '<br>');
    switch(nilai) {
        case 'A' : document.write('Nilai nya sangat baik');
        break;
        case 'B' : document.write('Nilai nya baik');
        break;
        case 'C' : document.write('Nilai nya cukup');
        break;
        default : document.write('Nilainya error');
    }
    document.write('<hr>');
}
namaSantri('Panjul ', 'A')
namaSantri('Joni ', 'B');
namaSantri('Tono ', 'C');
namaSantri('Kevin ', 'D');