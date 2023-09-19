function agregarTarea() {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const listaTareas = document.getElementById("listaTareas");
  const nuevaTareaTexto = nuevaTareaInput.value.trim();

  if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function () {
      listaTareas.removeChild(nuevaTarea);
    };

    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";

    document.getElementById("agregar").addEventListener("click", agregarTarea);
  }
}

//saque afuera esta funcion para poder tildar cualquier tarea en cualquier momento, sino el evento de marcar solo era funcional en tareas impares(si agregaba 2 tareas no respondia, pero si agregaba la primera, o 3 y luego probaba el tilde si lo hacia)
function marcarCompletada(tarea) {
  tarea.classList.toggle("completed");
}

document
  .getElementById("listaTareas")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      marcarCompletada(event.target);
    }
  });

//no lo pide pero agregue boton de traer nuevamente las tareas. no queda funcional 100% tengo que previamente elegir pendiente para que se aplique
const todas = () => {
  const tareas = document.querySelectorAll("li");
  tareas.forEach((tarea) => {
    if (tarea.classList.contains("completed" || "")) {
      tarea.style.display = "flex";
    }
  });
};

const completadas = () => {
  const tareas = document.querySelectorAll("li");
  tareas.forEach((tarea) => {
    if (tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
};

const pendientes = () => {
  const tareas = document.querySelectorAll("li");
  tareas.forEach((tarea) => {
    if (!tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
};

document.getElementById("todas").addEventListener("click", todas);
document.getElementById("pendientes").addEventListener("click", pendientes);
document.getElementById("completadas").addEventListener("click", completadas);
