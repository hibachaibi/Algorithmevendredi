


var etoile_number=1;
var input= window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'etages veux-tu ?",5);
function print_char(nb_espace,nb_etoile)
{
var i;
        var str="";
for (i=0;i<nb_espace;i++)
{
        str=str.concat(' ');
}
for (i=0;i<nb_etoile;i++)
{
        str=str.concat('*');
}
for (i=0;i<nb_espace;i++)
{
        str=str.concat(' ');
}


console.log(str);
}
function calcul_nbre_espace(number_etoile,number_etage)
{
var number_etoile_base=number_etage * 2 - 1;
return (number_etoile_base - number_etoile)/2;
}
if (input<=25){
var j;
for (j=0;j<input;j++)
{
 print_char(calcul_nbre_espace(etoile_number,input), etoile_number);

    etoile_number = etoile_number +2;
        }
}
else {}
