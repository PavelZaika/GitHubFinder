function getJSN(yourUrl){
  let http = new XMLHttpRequest(); // a new request
  http.open("GET",yourUrl,false);
  http.send(null);
  return http.responseText;          
}



let client = JSON.parse(getJSN('/GitHubFinder/secret.json'));
let id_c = client.client_id;
let id_s = client.client_secret;



class Github {
  constructor() {
    this.client_id = id_c;
    this.client_secret = id_s;

  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}

