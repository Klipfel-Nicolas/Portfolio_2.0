/**
 * Page resolver
 * @param {Object} doc 
 * @returns 
 */
module.exports.linkPageResolver = (doc) => {

    if (doc.type == 'home_page') {
      return '/';
    }
  
    if (doc.type == 'projects_page') {
      return '/projects';
    }
  
    return '/';
  };
  



/**
 * Project link resolver
 * @param {Object} doc 
 * @returns 
 */
module.exports.linkProjectResolver = (doc) => {

  if (doc.type == 'jacques_chirac_project') {
    return '/project/jacques-chirac-quiz';
  }

  return '/';
};
