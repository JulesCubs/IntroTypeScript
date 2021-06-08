// Typescript define una manera propia de declarar o marcar un miembro como privado
export{}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//Superclase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() {
        return this._id;
    }
    // set id(id:number) {
    //     this._id = id;
    // }
    get title() {
        return this._title;
    }
    set title(title:string) {
        this._title = title;
    }
}
// get y set modificadores de acceso

class Picture extends Item{
    public static photoOrientation = PhotoOrientation
    // Propiedades
    private _orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        super(id, title);
        this._orientation = orientation;
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

class Album extends Item {
    private pictures: Picture[];

    constructor(id: number, title: string) {
        super(id, title); //constructor de SUPER clase
        // this._id = id;
        // this._title = title;
        this.pictures = [];
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
// picture.id = 100; // se puede acceder por los metodos accesores
picture.title = 'Another title'; // error porque es privado
album.title = 'Personal Activities'; //error porque es privado

console.log('Album', album);

//const item = new Item(1, 'Test title');  //Error porque no se puede crear una instancia de clases abstractas
//console.log('item', item);

//Probar el miembro estatico de clase picture
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);