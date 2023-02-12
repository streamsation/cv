    let url = 'https://tracker.gg/valorant/profile/riot/ECO%20ara%23zzz/overview';

    fetch(url)
    .then(res => res.json())
    .then(out =>
      console.log('Checkout this JSON! ', out))
    .catch(err => { throw err });