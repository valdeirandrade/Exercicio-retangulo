class Retangulo {

    constructor (altura, largura){
          
     this.altura = altura
     this.largura = largura
     
     console.log("altura:"+altura)
     console.log("largura:"+largura)

    
    }
calcularArea() {

return this.altura*this.largura
}
}


class Triangulo {

    constructor(lado1, lado2, lado3, base, altura){

        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
        this.base = base;
        this.altura = altura;
    }
    calcularArea() { 
    
    return (this.base*this.altura) /2 
}
 verificardorTipoT(){

   if (this.lado1==this.lado2 && this.lado2==this.lado3)
    return "Triangulo Equilatero"  
   
    else if (this.lado1!=this.lado2 && this.lado1!=this.lado3 && this.lado2!=this.lado3)
            return "Triangulo Escaleno"
        
        else
            return "Triangulo Isóceles"
                 
    }

 }

