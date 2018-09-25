function deleteRow(rowid)  
{
    var row = document.getElementById(rowid);
    var table = document.querySelector("#tab");
    while ( table && table.tagName != 'TABLE' )
        table = table.parentNode;
    if ( !table )
        return;
    table.deleteRow(row.rowIndex);
}
function curtir(j){
    var tbody = document.querySelector("#tab1");
    var r = document.getElementById(j);
    deleteRow(j);
    tbody.prepend(r);
}