export default class Message { 
    // constructor(id, message, role = "user" | "assistant") {
    //     this.message = message;
    //     this.id = id;
    //     this.role = role;
    // }

    // constructor(message) {
    //     this.message;
    // }

    constructor(message,  role = "user" | "assistant") {
        this.message = message;
        this.role = role;
    }

    getMessage() {
        return this.message
    }

    getID() {
        return this.id;
    }

    getRole () {
        return this.role;
    }



}