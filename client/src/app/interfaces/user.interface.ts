export interface IUser {
    id: number;
    age: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    activateToken: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    createdAt: Date;
    deletedAt?: Date;
}