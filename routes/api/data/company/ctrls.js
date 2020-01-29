const Company = require('../../../../models/companies');

exports.list = (req, res) => {
    // res.send({ success: false, msg: 'list 준비중입니다' });
    Company.find({ name: '테스트' })
        .then(rs => res.send({ success: true, ds: rs }))
        .catch(err => res.send({ success: false, msg: err.message }));
};

exports.add = (req, res) => {
    // res.send({ success: false, msg: 'add 준비중입니다' });
    const { name, rmk } = req.body;

    if (!name) return res.send({ success: false, msg: '이름 없음' });
    if (!rmk) return res.send({ success: false, msg: '비고 없음' });
    const cp = new Company({ name: name, rmk: rmk });
     cp.save()
        .then(r => res.send({ success: true, d: r }))
        .catch(err => res.send({ success: false, msg: err.message }));
};

exports.mod = (req, res) => {
    res.send({ success: false, msg: 'mod 준비중입니다' });
};

exports.del = (req, res) => {
    res.send({ success: false, msg: 'del 준비중입니다' });
};