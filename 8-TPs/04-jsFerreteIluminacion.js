/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*function CalcularPrecio () 
{
    const precio=35;
    let cantLamparas;
    let descuento;
    let marca;
    let precioConDescuento;
    let totalConIibb;
    let iibb;

        cantLamparas= parseInt(document.getElementById("txtIdCantidad").value);
        marca = document.getElementById("Marca").value;
        
        if (cantLamparas >= 6) {
            descuento= 0.50;
            
        } else {
            if (cantLamparas == 5) {
                if (marca == "ArgentinaLuz") {
                       descuento= 0.60;
                  
                }else{
                    descuento=0.70;
                }
            } else {
                if (cantLamparas == 4) {
                    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                        descuento=0.75;
                        
                    } else {
                        descuento= 0.80;
                    }
                    
                } else {
                    if (cantLamparas == 3) {
                        if (marca== "ArgentinaLuz") {
                            descuento=0.85;}
                        if (cantLamparas == 3) {
                            if(marca == "FelipeLamparas") {
                                descuento=0.90;
                                
                            } else {
                                descuento=0.95;
                            }
                            
                        } 
                    }else{
                        if (cantLamparas < 3) {
                            descuento=1
                            
                        }
                    
                        
                    }
                }
            }
        } 
      precioConDescuento=parseFloat(((cantLamparas*precio)*descuento)).toFixed(2);
      document.getElementById("txtIdprecioDescuento").value=precioConDescuento;

        if (precioConDescuento > 120) {
            totalConIibb= precioConDescuento *1.10;
            iibb=totalConIibb - precioConDescuento;
                alert ("Ud. pago " + totalConIibb+ " siendo " +iibb+ " el impuesto que se pagó")
           
        }

    
 	
}*/

