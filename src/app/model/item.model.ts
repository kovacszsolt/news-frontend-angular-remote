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
        const _created_at = this.created_at.split(' ');
        this.created_at = _created_at[5] + ' ' + _created_at[1] + ' ' + _created_at[2] + ' ' + _created_at[3];
    }
}

class MetaModel {
    error = '';
    url = '';
    title = '';
    description = '';
    image = '';
    imageUrlWebP = '';
    imageUrl = '';
    slug = '';
    extension = '';

    constructor(myObj: any = {}) {
        (<any>Object).assign(this, myObj);
        this.imageUrlWebP = environment.BACKEND_SERVER + '/image/size1/' + this.slug + '.webp';
        this.imageUrl = environment.BACKEND_SERVER + '/image/size1/' + this.slug + '.' + this.extension;

    }

}
