import Dexie from 'dexie'

export const db =new Dexie('my insta')
db.version(1).stores({
    bio: ', name, about',
    gallery: '++id,url'
})