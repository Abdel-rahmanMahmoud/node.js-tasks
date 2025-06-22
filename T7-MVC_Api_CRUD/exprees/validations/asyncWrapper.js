const asyncWrapper = (asyncFn) => (req, res, next) => {
    asyncFn(req, res, next).catch((err)=> next(err));
};

export default asyncWrapper;
