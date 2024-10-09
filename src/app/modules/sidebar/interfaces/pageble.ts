import { SubscriberUser } from './subscriber-user';

export interface Pageble {
    items: SubscriberUser[];
    total: number;
    page: number;
    size: number;
    pages: number;
}
