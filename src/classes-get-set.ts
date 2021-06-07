// Typescript define una manera propia de declarar o marcar un miembro como privado
export{}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// get y set modificadores de acceso

class Picture {
    // Propiedades
    // Typescript genera por defecto sus atributos como Public
    // Igualmente se puede configurar explicitamente cada uno de sus atributos de manera independiente
    private _id: number;
    private _title: string; 
    private _orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    get id() {
        return this._id;
    }
    set id(id:number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title:string) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o:PhotoOrientation) {
        this._orientation = o;
    }

    // Comportamiento
    toString() {
        return `[id: ${this.id}, 
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album {
    private _id: number;
    private _title: string;
    private pictures: Picture[];

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }

    get id() {
        return this._id;
    }
    set id(id:number) { 
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(t:string) {
        this._title = t;
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square)
album.addPicture(picture);

console.log('album', album);

// Accediendo a los miembros publicos
console.log('picture.id', picture.id)
picture.id = 100; // se puede acceder por los metodos accesores
picture.title = 'Another title'; // error porque es privado
album.title = 'Personal Activities'; //error porque es privado

console.log('Album', album)