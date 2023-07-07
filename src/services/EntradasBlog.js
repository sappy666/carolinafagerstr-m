
  export class Entradas{
    static entradas = [
      {
        "id": 0,
        "title": "A toda cuerda concluyó el festival clásico del eclipse",
        "type": "festival",
        "img": require("../assets/15.jpg"),
        "date": "0",
        "text": "La Orquesta Marga Marga se presentó en la jornada final del encuentro de música de cámara realizado en La Serena.",
        "link": "blog-single.html"
      },
      {
        "id": 1,
        "title": "Obtención Primer lugar",
        "type": "noticia",
        "img": require("../assets/06.jpg"),
        "date": "2022",
        "text": "",
        "link": "blog-single.html"
      },
      {
        "id": 2,
        "title": "Festival Puente 2022 IV versión",
        "type": "festival",
        "img": require("../assets/11.jpg"),
        "date": "15 Noviembre 2022",
        "text": "",
        "link": "blog-single.html"
      }
    ];

    static getEntradas(){
      return this.entradas;
    }
  }
