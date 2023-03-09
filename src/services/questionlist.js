// import axios from 'axios';
// TODO Tijdens ontwikkeling mocken maar uiteindelijk API bevragen m.b.v. Axios

// TODO deze "services" constructie proberen (https://medium.com/nerd-for-tech/react-js-services-854be54a6ba1)

const getQuestionList = (questionlistId) => {
    const team = [
        {
            "id": 1,
            "name": "eerste lijst",
            "createdAt": "2023-02-26T15:52:59.673Z",
            "updatedAt": "2023-02-26T15:52:59.673Z",
            "Questions": [
                {
                    "id": 1,
                    "content": "Regent het ook?",
                    "createdAt": "2023-02-26T15:53:03.822Z",
                    "updatedAt": "2023-02-26T15:53:03.822Z",
                    "QuestionListId": 1
                }
            ]
        }
    ];

   return team;
}

export default getQuestionList;