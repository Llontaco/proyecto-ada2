const { createCanvas } = require('canvas');
const fs = require('fs');

// Funciones con diferentes complejidades de tiempo
function complejidadLogN(n) {
    const startTime = performance.now();
    let count = 0;
    for (let i = 1; i < n; i *= 2) {
        count++;
    }
    const endTime = performance.now();
    return endTime - startTime;
}

function complejidadN(n) {
    const startTime = performance.now();
    let count = 0;
    for (let i = 0; i < n; i++) {
        count++;
    }
    const endTime = performance.now();
    return endTime - startTime;
}

function complejidadNLogN(n) {
    const startTime = performance.now();
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            count++;
        }
    }
    const endTime = performance.now();
    return endTime - startTime;
}

function complejidadN2(n) {
    const startTime = performance.now();
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }
    const endTime = performance.now();
    return endTime - startTime;
}

function complejidadN3(n) {
    const startTime = performance.now();
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                count++;
            }
        }
    }
    const endTime = performance.now();
    return endTime - startTime;
}

function complejidad2N(n) {
    const startTime = performance.now();
    
    // Para evitar que tarde demasiado, simularemos la complejidad 2^n
    // pero con un valor mucho más bajo para n
    let simulatedN = Math.min(n, 20); // Limitamos para evitar tiempos excesivos
    
    function fibonacci(num) {
        if (num <= 1) return num;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
    
    fibonacci(simulatedN);
    
    const endTime = performance.now();
    
    // Ajustamos el tiempo basado en la complejidad esperada
    if (n > simulatedN) {
        // Proporcionalmente ajustamos el tiempo
        const factor = Math.pow(2, n - simulatedN);
        return (endTime - startTime) * factor;
    }
    
    return endTime - startTime;
}

function generarGrafica() {
    // Valores de n para los que vamos a medir el tiempo
    const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    // Almacenar los resultados
    const resultados = {
        'O(log n)': [],
        'O(n)': [],
        'O(n log n)': [],
        'O(n²)': [],
        'O(n³)': [],
        'O(2ⁿ)': []
    };
    
    // Ejecutar cada función para cada valor de n
    valores.forEach(n => {
        console.log(`Midiendo para n = ${n}...`);
        
        resultados['O(log n)'].push(complejidadLogN(n));
        resultados['O(n)'].push(complejidadN(n));
        resultados['O(n log n)'].push(complejidadNLogN(n));
        resultados['O(n²)'].push(complejidadN2(n));
        resultados['O(n³)'].push(complejidadN3(n));
        resultados['O(2ⁿ)'].push(complejidad2N(n));
    });
    
    console.log("Resultados:", resultados);
      // Crear una gráfica
    const width = 1200;  // Aumentamos el ancho para acomodar la leyenda con los tiempos
    const height = 600;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
      // Fondo blanco
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);
    
    // Añadir título
    ctx.fillStyle = 'black';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Comparación de Tiempos de Ejecución por Complejidad Algorítmica', width / 2, 25);
      // Dibujar el marco
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, width - 100, height - 100);
    
    // Añadir etiquetas de valores n en el eje X
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    valores.forEach((n, i) => {
        const x = 50 + (width - 100) * (i / (valores.length - 1));
        ctx.fillText(n.toString(), x, height - 30);
    });
    
    // Añadir título para el eje X
    ctx.font = '14px Arial Bold';
    ctx.fillText('Valor de n', width / 2, height - 10);
    
    // Añadir título para el eje Y
    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Tiempo de ejecución (ms)', 0, 0);
    ctx.restore();
    
    // Escalar los datos para que quepan en la gráfica
    const maxValue = Math.max(
        ...resultados['O(log n)'],
        ...resultados['O(n)'],
        ...resultados['O(n log n)'],
        ...resultados['O(n²)'],
        ...resultados['O(n³)'],
        ...resultados['O(2ⁿ)']
    );
    
    const normalizar = (valor) => {
        return 50 + (height - 100) - (valor / maxValue) * (height - 100);
    };
    
    // Colores para cada complejidad
    const colores = {
        'O(log n)': 'lightgreen',
        'O(n)': 'blue',
        'O(n log n)': 'cyan',
        'O(n²)': 'red',
        'O(n³)': 'green',
        'O(2ⁿ)': 'purple'
    };
    
    // Dibujar cada línea
    Object.entries(resultados).forEach(([nombre, datos]) => {
        ctx.beginPath();
        ctx.strokeStyle = colores[nombre];
        ctx.lineWidth = 2;
        
        // Mover al primer punto
        const x0 = 50 + (width - 100) * (0 / (valores.length - 1));
        const y0 = normalizar(datos[0]);
        ctx.moveTo(x0, y0);
        
        // Dibujar línea a través de todos los puntos
        for (let i = 1; i < datos.length; i++) {
            const x = 50 + (width - 100) * (i / (valores.length - 1));
            const y = normalizar(datos[i]);
            ctx.lineTo(x, y);
        }
        
        ctx.stroke();
    });
      // Añadir leyenda con tiempos de ejecución
    let legendY = 70;
    Object.entries(colores).forEach(([nombre, color]) => {
        // Calcular el tiempo promedio para esta complejidad
        const tiempos = resultados[nombre];
        const tiempoTotal = tiempos.reduce((acc, val) => acc + val, 0);
        const tiempoPromedio = tiempoTotal / tiempos.length;
        const tiempoUltimo = tiempos[tiempos.length - 1]; // Tiempo para el mayor valor de n (12)
        
        ctx.fillStyle = color;
        ctx.fillRect(70, legendY, 20, 10);
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.fillText(`${nombre} - Último: ${tiempoUltimo.toFixed(6)}ms - Promedio: ${tiempoPromedio.toFixed(6)}ms`, 
                    100, legendY + 9);
        legendY += 20;
    });
    
    // Guardar la gráfica como imagen
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('comparacion_algoritmos.png', buffer);
    
    console.log("Gráfica generada como 'comparacion_algoritmos.png'");
}

// Ejecutar la función para generar la gráfica
generarGrafica();