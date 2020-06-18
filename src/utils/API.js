import axios from 'axios';

export default {
    getData: () =>
        axios({
            'method': 'GET',
            'url': 'https://joke3.p.rapidapi.com/v1/joke',
            'headers': {
                'content-type': 'application/json',
                'x-rapidapi-host':'joke3.p.rapidapi.com',
                "x-rapidapi-key": "84480a3cf0msh8d248fa4ed5623fp1bdd02jsn05455d0f5dd3"
            }
        })
}

