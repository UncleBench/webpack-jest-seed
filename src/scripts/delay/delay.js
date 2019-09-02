module.exports = (time, message) => {
    return new Promise (function(resolve, reject) {
        setTimeout(() => resolve(message), time)
    });
};