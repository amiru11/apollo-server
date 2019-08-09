import bcrypt from 'bcrypt-nodejs'
import models from './models'
import config from '../config'

export default async () => {
  try {
    await models.sequelize.sync({
      force: config.db.forceSync,
      alter: config.db.alter
    })

    if (config.db.forceSync) {
      await initialize()
    }
    console.log('db synced!')
  } catch (err) {
    console.error(err)
  }
}

const initialize = async function() {
  /**
   * 사용자 생성
   */
  try {
    // Users
    await Promise.all(modelsToInit.users.map(user => models.User.create(user)))
    // Posts
    await Promise.all(modelsToInit.posts.map(post => models.Post.create(post)))
  } catch (err) {
    throw err
  }
}

const hash = bcrypt.hashSync('1234')

const modelsToInit = {
  users: [
    {
      id: 1,
      username: 'admin',
      password: hash,
      nickname: '테스트 관리자',
      isAdmin: true
    },
    {
      id: 2,
      username: 'user',
      password: hash,
      nickname: '테스트 사용자'
    }
  ],

  posts: [
    {
      id: 1,
      title: '테스트 포스트 1',
      content: '이것은 테스트용 포스트입니다.',
      UserId: 1
    },
    {
      id: 2,
      title: '테스트 포스트 2',
      content: '이것은 테스트용 두번재 포스트입니다.',
      UserId: 2
    }
  ]
}
