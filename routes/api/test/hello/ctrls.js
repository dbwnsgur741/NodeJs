exports.plz = (req, res) => {
    throw new Error('서버가 이상함 ;;');
    res.send({ success: true, msg: '여기까지 오느라 힘들었죠?' });
};