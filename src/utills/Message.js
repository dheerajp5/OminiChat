export default class Message { 


    // constructor(prompt,  aiResponse) {
    //     this.prompt = prompt;
    //     this.aiResponse = aiResponse;
    //     this.id = "";
    // }

    constructor(prompt,  aiResponse) {
        this.prompt = prompt;
        this.aiResponse = aiResponse;
        this.id = null;
    }

    getMessage() {
        return this
    }

    getID() {
        return this.id;
    }

    getPrompt () {
        return this.prompt;
    }

    getAiResponse () {
        return this.aiResponse;
    }



}