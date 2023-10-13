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

    //METODO DE VALIDACION
    esArbolBinarioBusqueda() {
        return this.validarABB(this.raiz, -Infinity, Infinity)
    }

    validarABB(nodo, min, max) {
        if (!nodo) {
            return true
        }

        if (nodo.valor < min || nodo.valor < max) {
            return false
        }

        return (
            this.validarABB(nodo.izquierda, min, nodo.valor - 1) &&
            this.validarABB(nodo.derecha, nodo.valor + 1, max)
        );
    }

    //METODO PARA CONTEO DE NODOS
    contarNodos() {
        return this.contarNodosEnSubarbol(this.raiz);
    }

    contarNodosEnSubarbol(nodo) {
        if (!nodo) {
            return 0;
        }
        return (1 + this.contarNodosEnSubarbol(nodo.izquierda) +
            this.contarNodosEnSubarbol(nodo.derecha)
        );

    };

    //METODO PARA BUSCAR UN VALOR ESPECIFICO
    buscarValor(valor) {
        return this.buscarEnSubarbol(this.raiz, valor);
    }

    buscarEnSubarbol(nodo, valor) {
        if (!nodo) {
            return false;
        }
        if (nodo.valor == valor) {
            return true;
        }

        return (this.buscarEnSubarbol(nodo.izquierda) ||
                this.buscarEnSubarbol(nodo.derecha)
        );
    };

    //METODO PARA ELIMINAR NODOS
    eliminarValor(valor) {
        this.raiz = this.eliminarEnSubarbol(this.raiz, valor);
    }

    eliminarEnSubarbol(nodo, valor) {
        if (!nodo) {
            return null;
        }

        if (valor < nodo.valor) {
            nodo.izquierda = this.eliminarEnSubarbol(nodo.izquierda, valor);

        } else if (valor > nodo.valor) {
            nodo.derecha = this.eliminarEnSubarbol(nodo.derecha, valor);

        }else{
            if(!nodo.izquierda){
                return nodo.derecha;

            }else if(!nodo.derecha){
                return nodo.izquierda;

            }

            nodo.valor = this.encontrarMinimoValor(nodo.derecha);
            nodo.valor = this.eliminarEnSubarbol(nodo.derecha, nodo.valor);
        }
        return nodo;
    }

    encontrarMinimoValor(nodo){
        while(nodo.izquierda){
            nodo = nodo.izquierda;
        }
        return nodo.valor;
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

    recorridoAmplitud() {
        const resultado = [];
        const cola = [];

        if (!this.raiz) {
            return resultado;
        }

        cola.push(this.raiz);

        while (cola.length > 0) {
            const nodoActual = cola.shift();
            resultado.push(nodoActual.valor);

            if (nodoActual.izquierda) {
                cola.push(nodoActual.izquierda);
            }

            if (nodoActual.derecha) {
                cola.push(nodoActual.derecha);
            }

        }
        return resultado;

    }


    //Recorrido de profundidad Preorden
    recorridoPreorden() {
        return this.recorridoPreordenNodo(this.raiz, [])
    }

    recorridoPreordenNodo(nodo, resultado) {
        if (nodo) {
            resultado.push(nodo.valor);
            this.recorridoPreordenNodo(nodo.izquierda, resultado);
            this.recorridoPreordenNodo(nodo.derecha, resultado);
        }
        return resultado
    }




    //Recorrido de profundidad Orden Central
    recorridoOrdenCentral() {
        return this.recorridoOrdenCentralNodo(this.raiz, [])
    }

    recorridoOrdenCentralNodo(nodo, resultado) {
        if (nodo) {
            this.recorridoOrdenCentralNodo(nodo.izquierda, resultado)
            resultado.push(nodo.valor);
            this.recorridoOrdenCentralNodo(nodo.derecha, resultado)
        }
        return resultado
    }

    //Recorrido de profundida PostOrden
    recorridoPostOrden() {
        return this.recorridoPostOrdenNodo(this.raiz, [])
    }

    recorridoPostOrdenNodo(nodo, resultado) {
        if (nodo) {
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
arbol.Insertar(3);
arbol.Insertar(7);
arbol.Insertar(12);
arbol.Insertar(11);
arbol.Insertar(15);

console.log('Recorrido en profundidad Orden Central: ', arbol.recorridoOrdenCentral());

console.log('Es un arbol bibario de busqueda', arbol.esArbolBinarioBusqueda());
console.log('Numero de nodos en el arbol: ', arbol.contarNodos());

const valorABuscar = 2;
console.log(`El valor ${valorABuscar} se encuentra en el arbol? `, arbol.buscarValor(valorABuscar));

arbol.eliminarValor(10);
console.log('Arbol depues de eliminar el valor 10: ', arbol.recorridoOrdenCentral());

console.log('Recorrido en amplitud: ', arbol.recorridoAmplitud());
console.log('Recorrido en profundidad Preorden: ', arbol.recorridoPreorden());
console.log('Recorrido en profundidad Orden Central: ', arbol.recorridoOrdenCentral());
console.log('Recorrido en profundidad PostOrden: ', arbol.recorridoPostOrden());