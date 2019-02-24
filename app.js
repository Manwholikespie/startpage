var app = new Vue({
  el: '#main',
  data: {
    sections: [
      {
        'name': 'UNI',
        'sites': [
          { 'name': 'ecampus', 'url': 'https://ecampus.tamu.edu' },
          { 'name': 'google_docs', 'url': 'https://docs.google.com'}
        ]
      },
      {
        'name': 'NEWS',
        'sites': [
          { 'name': 'hacker_news', 'url': 'https://news.ycombinator.com' },
          { 'name': '538', 'url': 'https://fivethirtyeight.com' }
        ]
      },
      {
        'name': 'SOCIAL',
        'sites': [
          { 'name': 'twitter', 'url': 'https://twitter.com' },
          { 'name': 'instagram', 'url': 'https://instagram.com' }
        ]
      },
      {
        'name': 'MEDIA',
        'sites': [
          { 'name': 'plex', 'url': 'https://plex.robertism.com' },
          { 'name': 'netflix', 'url': 'https://netflix.com' }
        ]
      },
      {
        'name': 'CODE',
        'sites': [
          { 'name': 'github', 'url': 'https://news.ycombinator.com' },
          { 'name': 'gitlab', 'url': 'https://fivethirtyeight.com' },
          { 'name': 'elixir', 'url': 'https://hexdocs.pm/elixir/Kernel.html' }
        ]
      },
      {
        'name': 'MUSIC',
        'sites': [
          { 'name': 'scloud', 'url': 'https://soundcloud.com/stream' },
          { 'name': 'chiru.no', 'url': 'https://www.reddit.com/r/electronicmusic' },
          { 'name': 'mellow', 'url': 'https://fpgaminer.github.io/vip-html5-player/#Mellow' },
        ]
      },
      {
        'name': '"FREE"',
        'sites': [
          { 'name': 'iptorrents', 'url': 'https://iptorrents.com' },
          { 'name': 'dl', 'url': 'https://dl.robertism.com' },
          { 'name': 'books', 'url': 'books.html' },
        ]
      },
      {
        'name': 'CHANS',
        'sites': [
          { 'name': 'g', 'url': 'https://boards.4channel.org/g/' },
          { 'name': 'f', 'url': 'https://boards.4chan.org/f/' },
          { 'name': 'mu', 'url': 'https://boards.4channel.org/mu/' },
        ]
      }
    ]
  }
});