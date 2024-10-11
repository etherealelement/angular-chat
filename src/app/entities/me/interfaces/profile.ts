export interface Profile {
    avatarUrl: string | null;
    city: string | null;
    description: string;
    firstName: string;
    id: number;
    isActive: boolean;
    lastName: string;
    subscribersAmount: number;
    username: string;
    stack: string[];
}
