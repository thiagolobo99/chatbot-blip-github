var axios = require(`axios`)

function searchGitRep() {
    let url = "https://api.github.com/orgs/takenet/repos?q=language:C#&order=cresc"
    return axios.get(url).then((response) => {
        let filter = response.data.map((result) => {
            return result
        })

        var objectType = {
            itemType: "application/vnd.lime.document-select+json",
            items: [
                {
                    header: {
                        type: "application/vnd.lime.media-link+json",
                        value: {
                            title: filter[0].full_name,
                            text: filter[0].description,
                            type: "image/jpeg",
                            uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4",
                        },
                    },
                },
                {
                    header: {
                        type: "application/vnd.lime.media-link+json",
                        value: {
                            title: filter[1].full_name,
                            text: filter[1].description,
                            type: "image/jpeg",
                            uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4",
                        },
                    },
                },
                {
                    header: {
                        type: "application/vnd.lime.media-link+json",
                        value: {
                            title: filter[2].full_name,
                            text: filter[2].description,
                            type: "image/jpeg",
                            uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4",
                        }
                    }
                },
                {
                    header: {
                        type: "application/vnd.lime.media-link+json",
                        value: {
                            title: filter[3].full_name,
                            text: filter[3].description,
                            type: "image/jpeg",
                            uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4",
                        }
                    }
                },
                {
                    header: {
                        type: "application/vnd.lime.media-link+json",
                        value: {
                            title: filter[4].full_name,
                            text: filter[4].description,
                            type: "image/jpeg",
                            uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4",
                        }
                    }
                }
            ]
        }

        return objectType
    })
}

module.exports = { searchGitRep: searchGitRep }
