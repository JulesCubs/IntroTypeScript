"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, userName, firstName, isPro) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    removeAlbum(album) {
        //Buscar Album
        const index = this.album.findIndex(a => a.id === album.id);
        let deletedAlbum;
        if (index >= 0) {
            deletedAlbum = this.album[index];
            this.album.splice(index, 1);
        }
        return deletedAlbum;
    }
}
exports.User = User;
