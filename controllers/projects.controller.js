const { initApi } = require('../config/initApi');
const chirac_backup = require('../datas/projects/jacques_chirac/chirac_datas');


/**
 *
 * Get Project1 Jacques Chirac Quiz
 * @param {*} req
 * @param {*} res
 */
module.exports.getJacquesChiracQuizProject = async (req, res) => {
    try {
        const api = await initApi(req);
        const project = (await api.getSingle('jacques_chirac_project')).data;
        const citationArray = project.citations.map((citation) => citation.citation[0].text);
console.log('project', project.logo['url'])

        res.render('projects/jacques_chirac/index.ejs', {
            project: project,
            citations: citationArray,
        });
    } catch (error) {
        console.error('ERROR getHomepage', error);

        res.render('projects/jacques_chirac/index.ejs', {
            project: chirac_backup.chirac_datas,
            citations: chirac_backup.chirac_datas.citations,
        });
    }
};