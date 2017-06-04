import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ItemData implements InMemoryDbService {
    createDb() {
        let items = [
            { id: 1, priority: 1, todo: 'Mr. Nice', startTime: new Date(), endTime: new Date() },
            { id: 2, priority: 2, todo: 'Narco', startTime: new Date(), endTime: new Date() },
            { id: 3, priority: 3, todo: 'Bombasto', startTime: new Date(), endTime: new Date() },
            { id: 4, priority: 4, todo: 'Celeritas', startTime: new Date(), endTime: new Date() },
            { id: 5, priority: 5, todo: 'Magneta', startTime: new Date(), endTime: new Date() }
        ];
        return { items };
    }
}