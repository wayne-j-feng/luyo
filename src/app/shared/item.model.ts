import { Container } from './container.model';

export class Item {
    constructor(
        public id: string,
        public name: string,
        public container: Container,
        public type: string
    ) {}
};

export class Country {
    constructor(public code: string, public name: string) {}
};

export class City {
    constructor(public code:string, public name: string, public countryCode: string, public iconUri: string) {}
};
