const {
    _env_
} = window

const AUTHOR_NAME = _env_ ? _env_.AUTHOR_NAME : process.env.AUTHOR_NAME || '@Lusina'
const AUTHOR_LINKEDIN = _env_ ? _env_.AUTHOR_LINKEDIN : process.env.AUTHOR_LINKEDIN || 'https://www.linkedin.com/in/brianlusina/'
const AUTHOR_GITHUB = _env_ ? _env_.AUTHOR_GITHUB : process.env.AUTHOR_GITHUB || 'https://github.com/BrianLusina?tab=repositories'

export default {
    name: AUTHOR_NAME,
    linkedIn: AUTHOR_LINKEDIN,
    githubRepos: AUTHOR_GITHUB,
};
