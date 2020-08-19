export class User {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;

    constructor(username: string, email: string, firstName: string, lastName: string, password: string) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
}
