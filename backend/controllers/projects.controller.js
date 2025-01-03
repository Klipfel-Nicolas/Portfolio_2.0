const { initApi } = require('../config/initApi');
const chirac_backup = require('../datas/projects/jacques_chirac/chirac_datas');


/**
 * Project1 Jacques Chirac Quiz
 * Home Page
 * @param {*} req
 * @param {*} res
 */
module.exports.getJacquesChiracHome = async (req, res) => {
    try {
        const api = await initApi(req);
        const project = (await api.getSingle('jacques_chirac_project')).data;
        const citationArray = project.citations.map((citation) => citation.citation[0].text);
        const timelineArray = project.timeline.map((timeline) => ({'date': timeline.timeline_dates[0].text, 'event': timeline.timeline_event[0] ? timeline.timeline_event[0].text : '',}));

        res.render('projects/jacques_chirac/index.ejs', {
            project: project,
            citations: citationArray,
            timeline: timelineArray
        });
    } catch (error) {
        console.error('ERROR getHomepage', error);

        res.render('projects/jacques_chirac/index.ejs', {
            project: chirac_backup.chirac_datas,
            citations: chirac_backup.chirac_datas.citations,
            timeline: chirac_backup.chirac_datas.timeline
        });
    }
};


/**
 * Project1 Jacques Chirac Quiz
 * Quizz Page
 * @param {*} req
 * @param {*} res
 */
module.exports.getJacquesChiracQuiz = async (req, res) => {
    try {
        const api = await initApi(req);
        const project = (await api.getSingle('jacques_chirac_project')).data;
        const timelineArray = project.timeline.map((timeline) => ({'date': timeline.timeline_dates[0].text, 'event': timeline.timeline_event[0] ? timeline.timeline_event[0].text : '',}));
        
        const quizDatas = (await api.getSingle('project_jacques_chirac_quiz')).data;
        const gainsArray = quizDatas.gains_amounts.map((gain) => gain.gain_amount[0].text);

        res.render('projects/jacques_chirac/quiz.ejs', {
            project: project,
            timeline: timelineArray,
            quizDatas: quizDatas,
            gainsArray: gainsArray,
        });
    } catch (error) {
        console.error('ERROR getHomepage', error);

        res.render('projects/jacques_chirac/quiz.ejs', {
            project: chirac_backup.chirac_datas,
            timeline: chirac_backup.chirac_datas.timeline,
            quizDatas: chirac_backup.chirac_quiz,
            gainsArray: chirac_backup.chirac_quiz.gains_amounts,
        });
    }
};

/**
 * Quiz datas fetch by front
 * @param {} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getQuizDatas = async (req, res) => {
    try {
        const api = await initApi(req);
        const quizDatas = (await api.getSingle('project_jacques_chirac_quiz')).data;

        const questionArray = quizDatas.questions_list.map((question) => (
            {
            'image': {
                'alt': question.image.alt,
                'url': question.image.url,
                'position': question.image_position,
            },
            'question': question.question[0].text,
            'answers': [
                question.response_a[0].text,
                question.response_b[0].text,
                question.response_c[0].text,
                question.response_d[0].text
            ],
            'correct_answer': question.good_answer[0].text,
        }));
        
        return res.status(200).json(questionArray);

    } catch (error) {
        console.error('ERROR getQuizDatas', error);
    }
}