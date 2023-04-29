var usuario = prompt ("cual es tu peso?")
var Planeta = parseInt (prompt("Elige un Planeta.\n1 es Mercurio\n2 es venus\n3 es Tierra\n4 es Marte\n5 es jupiter\n6 es saturno\n7 es urano\n8 es neptuno"));
var peso = parseInt(usuario);
var g_mercurio = 3.7;
var g_venus = 8.9;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.4;
var g_urano = 8.9;
var g_neptuno = 11.15;
var peso_final;
var nombre = "";
if(Planeta ==1)
{
    peso_final=peso*g_mercurio/g_tierra;
    nombre = "mercurio";
}
    else if(Planeta ==2)
{
    peso_final=peso*g_venus/g_tierra;
    nombre = "Venus";
}
else if(Planeta ==3)
{
    peso_final=peso*g_tierra/g_tierra;
    nombre = "tierra";
}
else if(Planeta ==4)
{
    peso_final=peso*g_tierra/g_tierra;
    nombre = "marte";
}
else if(Planeta ==5)
{
    peso_final=peso*g_tierra/g_tierra;
    nombre = "jupiter";
}
else if(Planeta ==6)
{
    peso_final=peso*g_tierra/g_tierra;
    nombre = "saturno";
}
else if(Planeta ==7)
{
    peso_final=peso*g_tierra/g_tierra;
    nombre = "urano";
}
else if(Planeta ==8)
{
    peso_final=peso*g_tierra/g_tierra;
    nombre = "neptuno";
}
else
{
    peso_final=100000000;
    nombre = "krypton";
}
    peso_final=parseInt(peso_final);
    document.write("tu peso en " + nombre + " es <strong>" + peso_final + "kilos </strong>");
