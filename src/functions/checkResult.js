const checkResult = (result) => {
    if (result.status === 200) {
        return result;
    } else {
        throw new Error();
    }
}

export default checkResult;