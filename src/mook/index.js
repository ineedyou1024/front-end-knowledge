const Mock = require('mockjs');

Mock.mock('/api/taskmanagement', (req, res) => {
    console.log(req, res);
    return Mock.mock({
        'taskArrangement|4': [
            {
                'name': '@name',
                'date': '@date'
            }
        ]
    });
});
Mock.mock('/api/students', 'get', () => {
    return Mock.mock({
        'students|10': [
            {
                'number': '@id',
                'name': '@cname',
                'professional|1': ['哲学', '经济学', '法学', '汉语言文学', '物理学', '应用气象学'],
                'theClass': '@integer(1, 10)班',
                'clubMember': '@integer(1, 2)',
                'clubInfo': []
            }
        ],
        'returnCode': 0
    });
});
Mock.mock('/api/achievement', 'get', () => {
    return Mock.mock({
        'achievement|20': [
            {
                'id|+1': '1001',
                'time': '@integer(5, 12)岁的时候',
                'type|1': ['县级乒乓球冠军', '全校歌唱比赛冠军', '画画冠军', '游泳冠军', '数学奥林匹克冠军', '团结友爱人气冠军'],
            }
        ],
        'returnCode': 0
    });
});
const test = Mock.mock({
    'data|5': [
        {
            'name': '@name',
            'date': '@date',
            'infoo|2': [
                {
                    'position': '@city(true)',
                    'task|2': [
                        {
                            'start': '@time',
                            'end': '@time',
                            'place': '@csentence(5)'
                        }
                    ]
                }
            ]
        }
    ]
});
export {
    test
};
