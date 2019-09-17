const api = `https://hacker-news.firebaseio.com/v0`
const json = '.json?print=pretty'

function removeDead (posts) {
  return posts.filter(Boolean).filter(({ dead }) => dead !== true)
}

function removeDeleted (posts) {
  return posts.filter(({ deleted }) => deleted !== true)
}

function onlyComments (posts) {
  return posts.filter(({ type }) => type === 'comment')
}

function onlyPosts (posts) {
  return posts.filter(({ type }) => type === 'story')
}

export function fetchItem (id) {
  return fetch(`${api}/item/${id}${json}`)
    .then((res) => res.json())
}

export function fetchComments (ids) {
  return Promise.all(ids.map(fetchItem))
    .then((comments) => removeDeleted(onlyComments(removeDead(comments))))
}

/*
  this fetches all the main posts of type top or new and converts them to json.
  it limits the posts to 50 and it then converts all the ids and calls fetchItem which gets each individual post

*/
export function fetchMainPosts (type) {
  return fetch(`${api}/${type}stories${json}`)
    .then((res) => res.json()) 
    .then((ids) => {
      if (!ids) {
        throw new Error(`There was an error fetching the ${type} posts.`)
      }

      return ids.slice(0, 50)
    })
    .then((ids) => Promise.all(ids.map(fetchItem)))
    .then((posts) => removeDeleted(onlyPosts(removeDead(posts)))) // not too sure the reason for this specific section.
}

export function fetchUser (id) {
  return fetch(`${api}/user/${id}${json}`)
    .then((res) => res.json())
}

export function fetchPosts (ids) {
  return Promise.all(ids.map(fetchItem))
    .then((posts) => removeDeleted(onlyPosts(removeDead(posts))))
}