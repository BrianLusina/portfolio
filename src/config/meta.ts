const {
    _env_
} = window;

const name = _env_ ? _env_.NAME : process.env.NAME || 'Portfolio'
const title = _env_ ? _env_.TITLE : process.env.TITLE || 'Folio'
const owner = _env_ ? _env_.OWNER : process.env.OWNER || 'BrianLusina'

export default {
    name, title, owner
}
