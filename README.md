# Comparación de Algoritmos por Complejidad Temporal

Este proyecto proporciona una herramienta visual para comparar el rendimiento de algoritmos con diferentes complejidades temporales. Genera una gráfica que muestra cómo el tiempo de ejecución de cada algoritmo aumenta a medida que crece el tamaño de entrada (n).

## 📊 Funcionalidades

- **Mide el rendimiento real** de algoritmos con diferentes complejidades:
  - O(log n) - Algoritmos logarítmicos
  - O(n) - Algoritmos lineales
  - O(n log n) - Algoritmos como Merge Sort o Quick Sort
  - O(n²) - Algoritmos como Bubble Sort o Insertion Sort
  - O(n³) - Algoritmos cúbicos
  - O(2ⁿ) - Algoritmos exponenciales

- **Genera una gráfica visual** que muestra la comparación entre los diferentes algoritmos
- **Incluye datos de tiempos de ejecución** junto a cada algoritmo en la leyenda

## 💻 Tecnologías utilizadas

- **Node.js** - Entorno de ejecución
- **chart.js** - Biblioteca para gráficos
- **canvas** - Generación de gráficos en Node.js

## 🚀 Instalación

1. Clona el repositorio o descarga los archivos
2. Instala las dependencias:

```bash
npm install
```

## 🔍 Uso

Ejecuta el script principal:

```bash
node index.js
```

Esto generará una imagen `comparacion_algoritmos.png` en el directorio del proyecto que muestra la comparación visual de los tiempos de ejecución.

## 📄 Estructura del código

- **Implementación de algoritmos**: El código implementa funciones que simulan algoritmos con cada complejidad temporal.
- **Medición de tiempo**: Cada función mide su propio tiempo de ejecución utilizando `performance.now()`.
- **Visualización**: La herramienta genera una gráfica utilizando el módulo canvas.

## 📈 Explicación de complejidades

1. **O(log n)** - Algoritmos que dividen el problema en mitades (o proporciones constantes) en cada paso. Ejemplos: búsqueda binaria, algunos algoritmos de árbol.

2. **O(n)** - Algoritmos lineales que procesan cada entrada una vez. Ejemplos: búsqueda lineal, recorrido de array.

3. **O(n log n)** - Típicamente algoritmos que dividen y combinan. Ejemplos: Merge Sort, Quick Sort, Heap Sort.

4. **O(n²)** - Algoritmos con bucles anidados que procesan toda la entrada varias veces. Ejemplos: Bubble Sort, Insertion Sort, Selection Sort.

5. **O(n³)** - Algoritmos con tres bucles anidados. Ejemplos: algunos algoritmos de matrices, multiplicación de matrices ingenua.

6. **O(2ⁿ)** - Algoritmos exponenciales cuyo tiempo de ejecución se duplica (o más) con cada elemento adicional. Ejemplos: Fibonacci recursivo, el problema de la subconjuntos.

## 🔎 Interpretación de resultados

La gráfica muestra cómo escala cada algoritmo a medida que aumenta el tamaño de entrada. Algunos aspectos a observar:

- Los algoritmos de menor complejidad (O(log n), O(n)) apenas se ven afectados por el aumento del tamaño de entrada.
- Los algoritmos de mayor complejidad (O(n³), O(2ⁿ)) crecen rápidamente a medida que aumenta el tamaño de entrada.
- Para entradas pequeñas, las diferencias pueden no ser muy notables.

## ⚠️ Limitaciones

- Para entradas muy pequeñas, el overhead de JavaScript puede dominar el tiempo de ejecución.
- Para algoritmos muy rápidos, la precisión de la medición puede verse afectada.
- Para complejidades muy altas (como O(2ⁿ)), se utiliza una simulación con valores limitados para evitar tiempos de ejecución extremadamente largos.

## 📝 Notas adicionales

Este proyecto es una herramienta educativa para visualizar y comprender las diferentes complejidades temporales de los algoritmos. Las mediciones exactas pueden variar según el hardware, el sistema operativo y otros factores.
