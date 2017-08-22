const Settings = {
  // host: 'http://yummy.haoduoshipin.com'
  host: 'http://localhost:3008',
  defaultAvatar: 'http://media.haoduoshipin.com/yummy/default-avatar.png',
}

export const posterUrl = (poster) => `${Settings.host}/uploads/posters/${poster}`
export const avatarUrl = (avatar) =>`${Settings.host}/uploads/avatars/${avatar}`
export default Settings
