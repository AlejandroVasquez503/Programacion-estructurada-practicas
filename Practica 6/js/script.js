//Definir la clase nodo
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

//Definir la clase arbol binario
class Arbolbinario {
    constructor() {
        this.raiz = null;

    }
    //Metodo insertar
    Insertar(valor) {
        const nuevoNodo = new Nodo(valor)


        if (!this.raiz) {
            this.raiz = nuevoNodo;
        } else {
            this.insertarnodo(this.raiz, nuevoNodo)
        }
    }

    //Metodo insertar nodo
    insertarnodo(nodo, nuevoNodo) {
        if (nuevoNodo.valor < nodo.valor) {
            if (!nodo.izquierda) {
                nodo.izquierda = nuevoNodo;
            } else {
                this.insertarnodo(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (!nodo.derecha) {
                nodo.derecha = nuevoNodo;
            } else {
                this.insertarnodo(nodo.derecha, nuevoNodo);
            }
        }
    }

    recorridoAmplitud(){
        const resultado = [];
        const cola = [];

        if(!this.raiz){
            return resultado;
        }

        cola.push(this.raiz);

        while(cola.length >0){
            const nodoActual = cola.shift();
            resultado.push(nodoActual.valor);

            if(nodoActual.izquierda){
                cola.push(nodoActual.izquierda);
            }

            if(nodoActual.derecha){
                cola.push(nodoActual.derecha);
            }

        }
        return resultado;

    }


    //Recorrido de profundidad Preorden
    recorridoPreorden(){
        return this.recorridoPreordenNodo(this.raiz,[])
    }

    recorridoPreordenNodo(nodo,resultado){
        if(nodo){
            resultado.push(nodo.valor);
            this.recorridoPreordenNodo(nodo.izquierda, resultado);
            this.recorridoPreordenNodo(nodo.derecha, resultado);
        }
        return resultado
    }




    //Recorrido de profundidad Orden Central
    recorridoOrdenCentral(){
        return this.recorridoOrdenCentralNodo(this.raiz,[])
    }

    recorridoOrdenCentralNodo(nodo,resultado){
        if(nodo){
            this.recorridoOrdenCentralNodo(nodo.izquierda, resultado)
            resultado.push(nodo.valor);
            this.recorridoOrdenCentralNodo(nodo.derecha, resultado)
        }
        return resultado
    }

    //Recorrido de profundida PostOrden
    recorridoPostOrden(){
        return this.recorridoPostOrdenNodo(this.raiz,[])
    }

    recorridoPostOrdenNodo(nodo,resultado){
        if(nodo){
            this.recorridoOrdenCentralNodo(nodo.izquierda, resultado)
            this.recorridoOrdenCentralNodo(nodo.derecha, resultado)
            resultado.push(nodo.valor);
        }
        return resultado
    }
}

//Crear Arbol Binario
const arbol = new Arbolbinario();
arbol.Insertar(10);
arbol.Insertar(5);
arbol.Insertar(15);
arbol.Insertar(3);
arbol.Insertar(7);
arbol.Insertar(12);
arbol.Insertar(18);

console.log('Recorrido en amplitud: ',arbol.recorridoAmplitud());
console.log('Recorrido en profundidad Preorden: ',arbol.recorridoPreorden());
console.log('Recorrido en profundidad Orden Central: ',arbol.recorridoOrdenCentral());
console.log('Recorrido en profundidad PostOrden: ',arbol.recorridoPostOrden());