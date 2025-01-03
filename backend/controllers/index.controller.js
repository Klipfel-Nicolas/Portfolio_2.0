const { initApi } = require('../config/initApi');
const navigation_backup = require('../datas/components/componentsDatas');
const home_backup = require('../datas/pages/homepage_datas');
const projects_backup = require('../datas/pages/projects_datas');

/**
 *
 * Get Homepage
 * @param {*} req
 * @param {*} res
 */
module.exports.getHomepage = async (req, res) => {
    try {
        const api = await initApi(req);
        const homepage = (await api.getSingle('home_page')).data;
        const navigation = (await api.getSingle('navigation')).data;

        res.render('pages/homepage', {
            homepage: homepage,
            navigation: navigation.navigation_items,
            currentPath: req.path,
        });
    } catch (error) {
        console.error('ERROR getHomepage', error);

        res.render('pages/homepage', {
            navigation: navigation_backup.navigation_datas.navigation_items,
            homepage: home_backup.homepage_datas,
            currentPath: req.path,
        });
    }
};


  /**
 *
 * Get All Projects Page
 * @param {*} req
 * @param {*} res
 */
module.exports.getProjectsPage = async (req, res) => {
    try {
        const api = await initApi(req);
        const navigation = (await api.getSingle('navigation')).data;
        const projects = (await api.getSingle('projects_page')).data;

        res.render('pages/projects', {
            navigation: navigation.navigation_items,
            projects: projects,
            currentPath: req.path,
        });
    } catch (error) {
        console.error('ERROR getProjectsPage', error);

        res.render('pages/projects', {
            navigation: navigation_backup.navigation_datas.navigation_items,
            projects: projects_backup.projects_datas,
            currentPath: req.path,
        });
    }
};