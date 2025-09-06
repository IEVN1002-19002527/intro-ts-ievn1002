//una interfaz es una definición de un objeto
interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number;//el signo de interrogacion es para que el campo sea opcional
}

const alumno:Alumno={
    nombre:"Juan",
    apellido:"Perez",
    edad:20,
    email:"juan@gmail.com"
}

console.table(alumno);

let mascotas:string[]=["Perro","Gato","Perico"];
mascotas[1]="Nuevo gato";
mascotas.push("Leon");
console.table(mascotas);

let tem:(number | string)[]=[]
tem.push(11);
tem.push("once");