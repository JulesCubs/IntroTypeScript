// Typescript define una manera propia de declarar o marcar un miembro como privado
export{}

//Typescript 3.8

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    // Typescript genera por defecto sus atributos como Public
    // Igualmente se puede configurar explicitamente cada uno de sus atributos de manera independiente
    #id: number;
    #title: string; 
    #orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    // Comportamiento
    toString() {
        return `[id: ${this.#id}, 
                title: ${this.#title},
                orientation: ${this.#orientation}]`;
    }
}

class Album {
    #id: number;
    #title: string;
    #pictures: Picture[];

    constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    addPicture(picture: Picture) {
        this.#pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square)
album.addPicture(picture);

console.log('album', album);

//Accediendo a los miembros publicos
// picture.id = 100; //error porque es privado
// picture.title = 'Another title'; // error porque es privado
// album.title = 'Personal Activities'; //error porque es privado

console.log('Album', album)