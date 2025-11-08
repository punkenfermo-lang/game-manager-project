// src/organizador_proyecto.ts

// Función original para planificar tareas
export function planificarTareas(tareas: string[]): string[] {
    // Organiza y asigna tareas
    return tareas.sort();  // Simplemente las ordena para empezar
}

// Nueva función para recordatorio de commit
export function recordatorioDeCommit() {
    return `
    ¡Recuerda hacer un commit!

    Pasos para hacer el commit:

    1. Abre Visual Studio Code (VSC).
    2. Ve al panel de "Source Control" (ícono de Git en la barra lateral).
    3. Haz clic en el "+" junto a los archivos modificados.
    4. Escribe un mensaje en el campo de "Message" (Ej: "Añadir nueva funcionalidad").
    5. Haz clic en el ícono de la marca de verificación (Check) para hacer el commit.
    6. Luego, haz clic en los tres puntos "..." y selecciona "Push" para subir los cambios a GitHub.

    ¡Listo! ¡Tu commit será subido a GitHub!`;
}

// Nueva función para guiarte paso a paso en el commit
export function guiarParaHacerCommit() {
    console.log("Siguiendo estos pasos para hacer un commit:");
    console.log(recordatorioDeCommit());
}
