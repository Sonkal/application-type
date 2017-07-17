export interface Application{
    firstName: string;
    lastName: string;
    address: {
        street: string,
        city: string,
        postCode: string,
    };
    personalId: string;
    email: string;
    phone: string;
    phoneMother: string;
    phoneFather: string;
    subscribe: boolean;
    id?: string | number;
}

export interface AdminApplication extends Application{
    meta: {
        submittedOn: Date
    }
}
