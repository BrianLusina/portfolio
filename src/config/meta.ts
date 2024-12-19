const {
    _env_
} = window;

const name = _env_ ? _env_.NAME : import.meta.env.NAME || 'Portfolio'
const title = _env_ ? _env_.TITLE : import.meta.env.TITLE || 'Folio'
const owner = _env_ ? _env_.OWNER : import.meta.env.OWNER || 'BrianLusina'

export default {
    name, title, owner
}
