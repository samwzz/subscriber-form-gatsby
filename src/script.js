const https = require('https');
const fs = require('fs');

const data = {
  '583ecb8f-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'ATL',
      market: 'Atlanta',
        name: 'Hawks',
          sportradar_id: '583ecb8f-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'E13A3E',
              twitter: 'hawks-beat-reporters',
  },
  '583eccfa-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'BOS',
      market: 'Boston',
        name: 'Celtics',
          sportradar_id: '583eccfa-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '008348',
              twitter: 'celtics-beat-reporters',
  },
  '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'BKN',
      market: 'Brooklyn',
        name: 'Nets',
          sportradar_id: '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'FFFFFF',
              twitter: 'nets-beat-reporters',
  },
  '583ec97e-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'CHA',
      market: 'Charlotte',
        name: 'Hornets',
          sportradar_id: '583ec97e-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '008CA8',
              twitter: 'hornets-beat-reporters',
  },
  '583ec5fd-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'CHI',
      market: 'Chicago',
        name: 'Bulls',
          sportradar_id: '583ec5fd-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'CE1141',
              twitter: 'bulls-beat-reporters',
  },
  '583ec773-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'CLE',
      market: 'Cleveland',
        name: 'Cavaliers',
          sportradar_id: '583ec773-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '860038',
              twitter: 'cavs-beat-reporters',
  },
  '583ecf50-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'DAL',
      market: 'Dallas',
        name: 'Mavericks',
          sportradar_id: '583ecf50-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '007DC5',
              twitter: 'mavs-beat-reporters',
  },
  '583ed102-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'DEN',
      market: 'Denver',
        name: 'Nuggets',
          sportradar_id: '583ed102-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'FDB927',
              twitter: 'nuggets-beat-reporters',
  },
  '583ec928-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'DET',
      market: 'Detroit',
        name: 'Pistons',
          sportradar_id: '583ec928-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'ED174C',
              twitter: 'pistons-beat-reporters',
  },
  '583ec825-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'GSW',
      market: 'Golden State',
        name: 'Warriors',
          sportradar_id: '583ec825-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'FDB927',
              twitter: 'warriors-beat-reporters',
  },
  '583ecb3a-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'HOU',
      market: 'Houston',
        name: 'Rockets',
          sportradar_id: '583ecb3a-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'FFFFFF',
              twitter: 'rockets-beat-reporters',
  },
  '583ec7cd-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'IND',
      market: 'Indiana',
        name: 'Pacers',
          sportradar_id: '583ec7cd-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'FFC633',
              twitter: 'pacers-beat-reporters',
  },
  '583ecdfb-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'LAC',
      market: 'Los Angeles',
        name: 'Clippers',
          sportradar_id: '583ecdfb-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'FFFFFF',
              twitter: 'clippers-beat-reporters',
  },
  '583ecae2-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'LAL',
      market: 'Los Angeles',
        name: 'Lakers',
          sportradar_id: '583ecae2-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'FDB927',
              twitter: 'lakers-beat-reporters',
  },
  '583eca88-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'MEM',
      market: 'Memphis',
        name: 'Grizzlies',
          sportradar_id: '583eca88-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '0F586C',
              twitter: 'grizzlies-beat-reporters',
  },
  '583ecea6-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'MIA',
      market: 'Miami',
        name: 'Heat',
          sportradar_id: '583ecea6-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '98002E',
              twitter: 'heat-beat-reporters',
  },
  '583ecefd-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'MIL',
      market: 'Milwaukee',
        name: 'Bucks',
          sportradar_id: '583ecefd-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '00471B',
              twitter: 'bucks-beat-reporters',
  },
  '583eca2f-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'MIN',
      market: 'Minnesota',
        name: 'Timberwolves',
          sportradar_id: '583eca2f-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '00A94F',
              twitter: 't-wolves-beat-reporters',
  },
  '583ecc9a-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'NOP',
      market: 'New Orleans',
        name: 'Pelicans',
          sportradar_id: '583ecc9a-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '002B5C',
              twitter: 'pelicans-beat-reporters',
  },
  '583ec70e-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'NYK',
      market: 'New York',
        name: 'Knicks',
          sportradar_id: '583ec70e-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'F58426',
              twitter: 'knicks-beat-reporters',
  },
  '583ecfff-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'OKC',
      market: 'Oklahoma City',
        name: 'Thunder',
          sportradar_id: '583ecfff-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'F05133',
              twitter: 'thunder-beat-reporters',
  },
  '583ed157-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'ORL',
      market: 'Orlando',
        name: 'Magic',
          sportradar_id: '583ed157-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '007DC5',
              twitter: 'magic-beat-reporters',
  },
  '583ec87d-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'PHI',
      market: 'Philadelphia',
        name: '76ers',
          sportradar_id: '583ec87d-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '006BB6',
              twitter: 'sixers-beat-reporters',
  },
  '583ecfa8-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'PHX',
      market: 'Phoenix',
        name: 'Suns',
          sportradar_id: '583ecfa8-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'E56020',
              twitter: 'suns-beat-reporters',
  },
  '583ed056-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'POR',
      market: 'Portland',
        name: 'Trail Blazers',
          sportradar_id: '583ed056-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'E03A3E',
              twitter: 'blazers-beat-reporters',
  },
  '583ed0ac-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'SAC',
      market: 'Sacramento',
        name: 'Kings',
          sportradar_id: '583ed0ac-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '724C9F',
              twitter: 'kings-beat-reporters',
  },
  '583ecd4f-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'SAS',
      market: 'San Antonio',
        name: 'Spurs',
          sportradar_id: '583ecd4f-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '061922',
              twitter: 'spurs-beat-reporters',
  },
  '583ecda6-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'TOR',
      market: 'Toronto',
        name: 'Raptors',
          sportradar_id: '583ecda6-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'BE0F34',
              twitter: 'raptors-beat-reporters',
  },
  '583ece50-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'UTA',
      market: 'Utah',
        name: 'Jazz',
          sportradar_id: '583ece50-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: '002B5C',
              twitter: 'jazz-beat-reporters',
  },
  '583ec8d4-fb46-11e1-82cb-f4ce4684ea4c': {
    alias: 'WAS',
      market: 'Washington',
        name: 'Wizards',
          sportradar_id: '583ec8d4-fb46-11e1-82cb-f4ce4684ea4c',
            team_color: 'E31837',
              twitter: 'wizards-beat-reporters',
  },
  'cb51f332-f19a-4941-b0c0-d02d74d9c49f': {
    alias: 'LBN',
      market: 'Team',
        name: 'LeBron',
          sportradar_id: 'cb51f332-f19a-4941-b0c0-d02d74d9c49f',
            team_color: '860038',
  },
  '1d12f1f2-fb48-4f6a-8424-4a2cccdf1b18': {
    alias: 'STP',
      market: 'Team',
        name: 'Stephen',
          sportradar_id: '1d12f1f2-fb48-4f6a-8424-4a2cccdf1b18',
            team_color: 'FDB927',
  },
  '0eae5d80-a7a7-4921-9d1a-f8bad67756fd': {
    alias: 'WLD',
      market: 'Team',
        name: 'World',
          sportradar_id: '0eae5d80-a7a7-4921-9d1a-f8bad67756fd',
            team_color: '',
  },
  'fa69b5b1-3861-47e9-8d6b-366000133ef9': {
    alias: 'USA',
      market: 'Team',
        name: 'USA',
          sportradar_id: 'fa69b5b1-3861-47e9-8d6b-366000133ef9',
            team_color: '',
  },
};

try {
  fs.writeFileSync('src/data.json', JSON.stringify(data), { flag: 'wx' });
} catch (e) {
  console.log(e);
}

const raw = fs.readFileSync('src/data.json');
const teams = JSON.parse(raw);

const download = (url, dest, cb) => {
  const file = fs.createWriteStream(dest);
  const request = https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(cb);
    });
  });
};
Object.keys(teams).forEach((key) => {
  const alias = teams[key].alias;
  const fileName = `${alias}_s.png`;
  const url = `https://clutchpoints.com/clutchboard/assets/NBALogos/${fileName}`;
  download(url, `src/images/nba-logos/${fileName}`, () => {
    console.log(`${fileName} downloaded`);
  });
});