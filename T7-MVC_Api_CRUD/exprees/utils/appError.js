class AppError extends Error {
    constructor() {
        super();
    }
createError(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
        this.statusTxt = statusTxt;
        return this;
    }
}

export default new AppError();