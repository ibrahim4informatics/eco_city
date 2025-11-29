type Answer = {
    content: string,
    isCorrect: boolean
}
type Question = {
    id: number;
    question: string;
    answers: Answer[]
}

const questions: Question[] = [
    {
        "id": 1,
        "question": "What is waste management?",
        "answers": [
            { "content": "Throwing trash anywhere", "isCorrect": false },
            { "content": "Taking care of trash in a safe and smart way", "isCorrect": true },
            { "content": "Burning all trash", "isCorrect": false },
            { "content": "Keeping trash at home", "isCorrect": false }
        ]
    },
    {
        "id": 2,
        "question": "Why is sorting waste important?",
        "answers": [
            { "content": "It helps waste magically disappear", "isCorrect": false },
            { "content": "It helps recycle and protect nature", "isCorrect": true },
            { "content": "It makes trash heavier", "isCorrect": false },
            { "content": "It makes bins colorful", "isCorrect": false }
        ]
    },
    {
        "id": 3,
        "question": "Where should plastic bottles go?",
        "answers": [
            { "content": "The glass bin", "isCorrect": false },
            { "content": "The plastic bin", "isCorrect": true },
            { "content": "The organic bin", "isCorrect": false },
            { "content": "The paper bin", "isCorrect": false }
        ]
    },
    {
        "id": 4,
        "question": "What can recycled plastic become?",
        "answers": [
            { "content": "Food", "isCorrect": false },
            { "content": "New toys or bottles", "isCorrect": true },
            { "content": "Sand", "isCorrect": false },
            { "content": "Leaves", "isCorrect": false }
        ]
    },
    {
        "id": 5,
        "question": "Where should used paper and boxes go?",
        "answers": [
            { "content": "Plastic bin", "isCorrect": false },
            { "content": "Organic bin", "isCorrect": false },
            { "content": "Paper bin", "isCorrect": true },
            { "content": "Glass bin", "isCorrect": false }
        ]
    },
    {
        "id": 6,
        "question": "What happens to paper during recycling?",
        "answers": [
            { "content": "It is melted like metal", "isCorrect": false },
            { "content": "It is mixed with water to make pulp", "isCorrect": true },
            { "content": "It becomes plastic", "isCorrect": false },
            { "content": "It turns into glass", "isCorrect": false }
        ]
    },
    {
        "id": 7,
        "question": "What new things can recycled paper become?",
        "answers": [
            { "content": "New notebooks and books", "isCorrect": true },
            { "content": "Rocks", "isCorrect": false },
            { "content": "Water", "isCorrect": false },
            { "content": "Grass", "isCorrect": false }
        ]
    },
    {
        "id": 8,
        "question": "Where do glass bottles and jars go?",
        "answers": [
            { "content": "The organic bin", "isCorrect": false },
            { "content": "The plastic bin", "isCorrect": false },
            { "content": "The glass bin", "isCorrect": true },
            { "content": "The paper bin", "isCorrect": false }
        ]
    },
    {
        "id": 9,
        "question": "What makes glass special for recycling?",
        "answers": [
            { "content": "It disappears after melting", "isCorrect": false },
            { "content": "It can be recycled forever", "isCorrect": true },
            { "content": "It turns into plastic", "isCorrect": false },
            { "content": "It becomes food", "isCorrect": false }
        ]
    },
    {
        "id": 10,
        "question": "What do factories do with glass before melting it?",
        "answers": [
            { "content": "Paint it", "isCorrect": false },
            { "content": "Clean and sort it by color", "isCorrect": true },
            { "content": "Turn it into paper", "isCorrect": false },
            { "content": "Freeze it", "isCorrect": false }
        ]
    },
    {
        "id": 11,
        "question": "Where should food scraps and leaves go?",
        "answers": [
            { "content": "Glass bin", "isCorrect": false },
            { "content": "Organic bin", "isCorrect": true },
            { "content": "Plastic bin", "isCorrect": false },
            { "content": "Paper bin", "isCorrect": false }
        ]
    },
    {
        "id": 12,
        "question": "What breaks down organic waste?",
        "answers": [
            { "content": "Robots", "isCorrect": false },
            { "content": "Microbes and worms", "isCorrect": true },
            { "content": "Plastic machines", "isCorrect": false },
            { "content": "Glass beads", "isCorrect": false }
        ]
    },
    {
        "id": 13,
        "question": "What does organic waste turn into?",
        "answers": [
            { "content": "Metal", "isCorrect": false },
            { "content": "Compost, rich soil for plants", "isCorrect": true },
            { "content": "Plastic toys", "isCorrect": false },
            { "content": "Glass bottles", "isCorrect": false }
        ]
    },
    {
        "id": 14,
        "question": "Who uses compost?",
        "answers": [
            { "content": "Astronauts", "isCorrect": false },
            { "content": "Farmers and gardeners", "isCorrect": true },
            { "content": "Fish", "isCorrect": false },
            { "content": "Robots", "isCorrect": false }
        ]
    },
    {
        "id": 15,
        "question": "What does recycling plastic help protect?",
        "answers": [
            { "content": "Oceans and animals", "isCorrect": true },
            { "content": "Video games", "isCorrect": false },
            { "content": "Buildings", "isCorrect": false },
            { "content": "Shoes", "isCorrect": false }
        ]
    },
    {
        "id": 16,
        "question": "What happens to plastic at the factory?",
        "answers": [
            { "content": "It is planted in soil", "isCorrect": false },
            { "content": "It is washed, sorted, shredded, and melted", "isCorrect": true },
            { "content": "It is frozen", "isCorrect": false },
            { "content": "It becomes wood", "isCorrect": false }
        ]
    },
    {
        "id": 17,
        "question": "Why is waste management important?",
        "answers": [
            { "content": "To make more trash", "isCorrect": false },
            { "content": "To keep the planet clean and safe", "isCorrect": true },
            { "content": "To hide trash underground", "isCorrect": false },
            { "content": "To make beaches dirty", "isCorrect": false }
        ]
    },
    {
        "id": 18,
        "question": "What do we get from recycling paper?",
        "answers": [
            { "content": "New notebooks and boxes", "isCorrect": true },
            { "content": "Ice cream", "isCorrect": false },
            { "content": "Stones", "isCorrect": false },
            { "content": "Metal spoons", "isCorrect": false }
        ]
    },
    {
        "id": 19,
        "question": "What should we do with trash to help the planet?",
        "answers": [
            { "content": "Sort it correctly", "isCorrect": true },
            { "content": "Mix everything together", "isCorrect": false },
            { "content": "Throw trash on the street", "isCorrect": false },
            { "content": "Burn everything", "isCorrect": false }
        ]
    },
    {
        "id": 20,
        "question": "Which type of waste can be recycled forever?",
        "answers": [
            { "content": "Plastic", "isCorrect": false },
            { "content": "Glass", "isCorrect": true },
            { "content": "Food scraps", "isCorrect": false },
            { "content": "Paper", "isCorrect": false }
        ]
    }
]


const getQuestion = () => {
    const randomId = Math.ceil(Math.random() * 20);
    return questions.filter(question => question.id === randomId)[0];
}


const checkAnswer = (question: Question, answersContent: string) => {
    return question.answers.filter(ans => ans.content === answersContent)[0].isCorrect;
}

export { questions, checkAnswer, getQuestion };