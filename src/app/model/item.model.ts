import {environment} from '../../environments/environment';

export class ItemPageModel {
    empty = false;
    first = false;
    last = false;
    number_of_emelents = 0;
    size = 0;
    offset = 0;
    total_elements = 0;
    total_pages = 0;
    content = [];

    constructor(myObj: any = {}) {
        (<any>Object).assign(this, myObj);
        if (myObj.content) {
            this.content = myObj.content.map(i => new ItemModel(i));
        }
    }
}

export class ItemModel {
    _id = '';
    id = '';
    text = '';
    url_short = '';
    tags = [];
    created_at = '';
    position = 0;
    new = 1;
    status = 0;
    meta = new MetaModel({});

    constructor(myObj: any = {}) {
        (<any>Object).assign(this, myObj);
        if (myObj.meta) {
            this.meta = new MetaModel(myObj.meta);
        }

    }
}

class MetaModel {
    error = '';
    url = '';
    title = '';
    description = '';
    image = '';
    imageUrl = '';
    slug = '';
    extension = '';

    constructor(myObj: any = {}) {
        (<any>Object).assign(this, myObj);
        this.imageUrl = environment.BACKEND_SERVER + '/image/original/' + this.slug + '.' + this.extension;
    }

}
