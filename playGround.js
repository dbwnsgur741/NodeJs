const Company = require('./models/companies');
const Group = require('./models/groups')

exports.test = {
    model: () => {
        console.log('모델 테스트');

        Company.findOne({ name: '테스트' })
            .then((cp) => {
                if (!cp) throw new Error('회사가 존재하지 않음');
                const gr = new Group({
                    name: '소속2',
                    cp_id: cp._id,
                });
                return gr.save();
            })
            .then((gr) => {
                return Company.findOneAndUpdate(
                    { _id: gr.cp_id },
                    { $addToSet: { gr_ids : gr._id }},
                    { new: true })
                    .populate('gr_ids');
            })
            .then((r) => {
                console.log(r);
            })
            .catch(err => console.error(err));
    },
};

// save method 는 추가한 객체를 반환한다.
// insert method 는 성공 유무를 반환.
// mongoose 5 부터는 모든 반환을 promise로 받을 수 있다.
// update 는 업데이트
// company가 없을 수도 있기 때문에 예외처리함 promise chain에서 나갈 때는 꼭 throw로 보내야한다. return할 경우 다음 then으로 간다
// 전에 update에서는 수행 유무만 나왔지만 findOneAndUpdate와 맨 마지막 { new: true } 옵션으로 수행 유무 대신 갱신된 도큐를 출력한다.
// populate(‘gr_ids’)로 해당 그룹 2개에 대한 내용이 각각 출력되었다. populate는 추후 다시 언급

/*

****  COMPANY DB에 등록하기 *****

exports.test = {
    model: () => {
        console.log('모델 테스트');

        const cp = new Company({
            name: '테스트',
        });
        cp.save() // 객체 생성
            .then((r)=>{
                console.log(r);
            })
            .catch(err=> console.error(err));
    },
};

**** COMPANY 에서 읽어 오기 *****

exports.test = {
    model: () => {
        console.log('모델 테스트');

        Company.findOne({ name: '테스트'})
            .then((r)=>{
            console.log(r);
            })
            .catch(err => console.error(err));
    },


**** COMPANY 에서 읽어온 id값을 Group에 넣어서 추가  *****

exports.test = {
    model: () => {
        console.log('모델 테스트');

        Company.findOne({ name: '테스트'})
            .then((cp) => {
                console.log(cp);
                const gr = new Group({
                    name: '소속1',
                    cp_id: cp._id,
                });
                return gr.save();
            })
            .then((gr)=>{
                console.log(gr);
                return Company.update({ _id: gr.cp_id }, { $addToSet: { gr_ids : gr._id }});
            })
            .then((r)=>{
                console.log(r);
            })
            .catch(err => console.error(err));
    },
};

 */