export default class Juego {
    #codigo;
    #nombre;
    #imagen;
    #genero;
    #jugadores;
    #idioma;
    #lanzamiento;
    #edad;
    #descripcion;
    #requisitos;
    #recomendado;
  
    constructor(
      codigo = uuidv4(),
      nombre,
      imagen,
      genero,
      jugadores,
      idioma,
      lanzamiento,
      edad,
      descripcion,
      requisitos,
      recomendado
    ) {
      this.#codigo = codigo;
      this.#nombre = nombre;
      this.#imagen = imagen;
  
      this.#genero = genero;
      this.#jugadores = jugadores;
      this.#idioma = idioma;
      this.#lanzamiento = lanzamiento;
      this.#edad = edad;
      this.#descripcion = descripcion;
      this.#requisitos = requisitos;
      this.#recomendado = recomendado;
    }
  
    get codigo() {
      return this.#codigo;
    }
  
    set codigo(codigo) {
      this.#codigo = codigo;
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    set nombre(nombre) {
      this.#nombre = nombre;
    }
  
    get imagen() {
      return this.#imagen;
    }
  
    set imagen(imagen) {
      this.#imagen = imagen;
    }
  
    get genero() {
      return this.#genero;
    }
  
    set genero(genero) {
      this.#genero = genero;
    }
  
    get jugadores() {
      return this.#jugadores;
    }
  
    set jugadores(jugadores) {
      this.#jugadores = jugadores;
    }
  
    get idioma() {
      return this.#idioma;
    }
  
    set idioma(idioma) {
      this.#idioma = idioma;
    }
  
    get lanzamiento() {
      return this.#lanzamiento;
    }
  
    set lanzamiento(lanzamiento) {
      this.#lanzamiento = lanzamiento;
    }
  
    get edad() {
      return this.#edad;
    }
  
    set edad(edad) {
      this.#edad = edad;
    }
  
    get descripcion() {
      return this.#descripcion;
    }
  
    set descripcion(descripcion) {
      this.#descripcion = descripcion;
    }
  
    get requisitos() {
      return this.#requisitos;
    }
  
    set requisitos(requisitos) {
      this.#requisitos = requisitos;
    }
    get recomendado() {
      return this.#recomendado;
    }
  
    set recomendado(recomendado) {
      this.#recomendado = recomendado;
    }
  
    toJSON() {
      return {
        codigo: this.codigo,
        nombre: this.nombre,
  
        imagen: this.imagen,
        genero: this.genero,
        jugadores: this.jugadores,
        idioma: this.idioma,
        lanzamineto: this.lanzamiento,
        edad: this.edad,
        descripcion: this.descripcion,
        requisitos: this.requisitos,
        recomendado: this.recomendado,
      };
    }
  }