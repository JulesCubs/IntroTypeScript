export{}

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
    public id: number;
    public title: string; 
    public orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    toString() {
        return `[id: ${this.id}, 
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album {
    id: number;
    title: string;
    pictures: Picture[];

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
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

//Accediendo a los miembros publicos
picture.id = 100; //public
picture.title = 'Another title'; // public
album.title = 'Personal Activities';

console.log('Album', album)
