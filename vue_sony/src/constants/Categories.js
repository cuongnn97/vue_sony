const COPYRIGHTCATEGORIES = [
  { id: 'PERFORMING_RIGHTS_ETC', name: '演奏権等' },
  { id: 'RIGHTS_OF_RECORDING_INTO_A_MOVIE', name: '映画への録音' },
  { id: 'PUBLICATION_RIGHTS_ETC', name: '出版権等' },
  { id: 'RIGHTS_OF_BROADCASTING', name: '放送・有線放送' },
  {
    id: 'RIGHTS_OF_RECORDING_TO_GAME',
    name: 'ゲームに供する目的で行う複製'
  },
  { id: 'MECHANICAL_RIGHTS_ETC', name: '録音権等' },
  {
    id: 'RIGHTS_OF_COMMERCIAL_ON_DEMAND_KARAOKE',
    name: '業務用通信カラオケ'
  },
  {
    id: 'RIGHTS_OF_RECORDING_TO_VIDEOGRAMS_ETC',
    name: 'ビデオグラムへの録音'
  },
  { id: 'RENTAL_RIGHTS', name: '貸与権' },
  {
    id: 'RIGHTS_OF_INTERACTIVE_DISTRIBUTION',
    name: 'インタラクティブ配信'
  },
  {
    id: 'RIGHTS_OF_REPRODUCTION_FOR_ADVERTISEMENTS',
    name: '広告目的で行う複製'
  }
]
const GENRES = [
  'Blues',
  "Children's",
  'Christian',
  'Classical',
  'Country',
  'Educational',
  'Electronic',
  'Folk',
  'Hip-hop/Rap',
  'Holiday',
  'Jazz',
  'Latin Music',
  'Metal',
  'New Age',
  'Pop',
  'Punk',
  'R&B',
  'Reggae',
  'Rock',
  'Soundtracks',
  'Spoken Word',
  'World Music'
]
const SUBGENRES = [
  { genres: 'Blues', subGenres: 'Acoustic Blues' },
  { genres: 'Blues', subGenres: 'Blues' },
  { genres: 'Blues', subGenres: 'Blues Revival' },
  { genres: 'Blues', subGenres: 'Blues Rock' },
  { genres: 'Blues', subGenres: 'Boogie Woogie' },
  { genres: 'Blues', subGenres: 'Chicago Blues' },
  { genres: 'Blues', subGenres: 'Classic Blues' },
  { genres: 'Blues', subGenres: 'Contemporary Blues' },
  { genres: 'Blues', subGenres: 'Country Blues' },
  { genres: 'Blues', subGenres: 'Delta Blues' },
  { genres: 'Blues', subGenres: 'Dirty Blues' },
  { genres: 'Blues', subGenres: 'Electric Blues' },
  { genres: 'Blues', subGenres: 'Gospel' },
  { genres: 'Blues', subGenres: 'Harmonica Blues' },
  { genres: 'Blues', subGenres: 'Inspirational' },
  { genres: 'Blues', subGenres: 'Juke Joint Blues' },
  { genres: 'Blues', subGenres: 'Jump-Blues' },
  { genres: 'Blues', subGenres: 'Louisiana Blues' },
  { genres: 'Blues', subGenres: 'Memphis Blues' },
  { genres: 'Blues', subGenres: 'New Orleans R&B' },
  { genres: 'Blues', subGenres: 'Piano Blues' },
  { genres: 'Blues', subGenres: 'Piedmont Blues' },
  { genres: 'Blues', subGenres: 'Pre-War' },
  { genres: 'Blues', subGenres: 'Songster' },
  { genres: 'Blues', subGenres: 'Soul' },
  { genres: 'Blues', subGenres: 'Soul / R&B' },
  { genres: 'Blues', subGenres: 'Swamp Blues' },
  { genres: 'Blues', subGenres: 'Swing' },
  { genres: 'Blues', subGenres: 'Texas Blues' },
  { genres: 'Blues', subGenres: 'Traditional Blues' },
  { genres: 'Blues', subGenres: 'Urban Blues' },
  { genres: 'Blues', subGenres: 'Vaudeville Blues' },
  { genres: 'Blues', subGenres: 'Work Songs' },
  { genres: "Children's", subGenres: 'Ancient Tales' },
  { genres: "Children's", subGenres: "Children's" },
  { genres: "Children's", subGenres: 'Circus' },
  { genres: "Children's", subGenres: 'Classical' },
  { genres: "Children's", subGenres: 'Disney' },
  { genres: "Children's", subGenres: 'Educational' },
  { genres: "Children's", subGenres: 'Lullabies' },
  { genres: "Children's", subGenres: 'Other' },
  { genres: "Children's", subGenres: 'Religious' },
  { genres: "Children's", subGenres: 'Rhymes/Fairytales' },
  { genres: "Children's", subGenres: 'Sing-Along' },
  { genres: "Children's", subGenres: 'Stories' },
  { genres: 'Christian', subGenres: 'CCM' },
  { genres: 'Christian', subGenres: 'Christian' },
  { genres: 'Christian', subGenres: 'Christian Metal' },
  { genres: 'Christian', subGenres: 'Christian Pop' },
  { genres: 'Christian', subGenres: 'Christian Punk' },
  { genres: 'Christian', subGenres: 'Christian Rap' },
  { genres: 'Christian', subGenres: 'Christian Rock' },
  { genres: 'Christian', subGenres: 'Contemporary Gospel' },
  { genres: 'Christian', subGenres: 'Country' },
  { genres: 'Christian', subGenres: 'Gospel' },
  { genres: 'Christian', subGenres: 'Gospel Choir' },
  { genres: 'Christian', subGenres: 'Instrumental Gospel' },
  { genres: 'Christian', subGenres: 'Other' },
  { genres: 'Christian', subGenres: 'Praise & Worship' },
  { genres: 'Christian', subGenres: 'Ska' },
  { genres: 'Christian', subGenres: 'Southern Gospel' },
  { genres: 'Christian', subGenres: 'Spoken Word' },
  { genres: 'Christian', subGenres: 'Traditional Gospel' },
  { genres: 'Classical', subGenres: '20th/21st Century' },
  { genres: 'Classical', subGenres: 'Avant-garde Classical' },
  { genres: 'Classical', subGenres: 'Ballet' },
  { genres: 'Classical', subGenres: 'Band Music' },
  { genres: 'Classical', subGenres: 'Baroque' },
  { genres: 'Classical', subGenres: 'Chamber Music' },
  { genres: 'Classical', subGenres: 'Choral Music' },
  { genres: 'Classical', subGenres: 'Classical' },
  { genres: 'Classical', subGenres: 'Classical Crossover' },
  { genres: 'Classical', subGenres: 'Classical Sacred' },
  { genres: 'Classical', subGenres: 'Classical Vocal' },
  { genres: 'Classical', subGenres: 'Concerto' },
  { genres: 'Classical', subGenres: 'Crossover' },
  { genres: 'Classical', subGenres: 'Early' },
  { genres: 'Classical', subGenres: 'Electronic/Avant-Garde/Minimalis' },
  { genres: 'Classical', subGenres: 'Film Music' },
  { genres: 'Classical', subGenres: 'Gregorian' },
  { genres: 'Classical', subGenres: 'Guitar' },
  { genres: 'Classical', subGenres: 'High Classical' },
  { genres: 'Classical', subGenres: 'Impressionist' },
  { genres: 'Classical', subGenres: 'Keyboard Music' },
  { genres: 'Classical', subGenres: 'Medieval/ Renaissance' },
  { genres: 'Classical', subGenres: 'Modern Composition' },
  { genres: 'Classical', subGenres: 'Musical Theater' },
  { genres: 'Classical', subGenres: 'Opera' },
  { genres: 'Classical', subGenres: 'Orchestral Music' },
  { genres: 'Classical', subGenres: 'Other' },
  { genres: 'Classical', subGenres: 'Postmodern' },
  { genres: 'Classical', subGenres: 'Pre-Baroque' },
  { genres: 'Classical', subGenres: 'Romantic' },
  { genres: 'Classical', subGenres: 'Symphony' },
  { genres: 'Classical', subGenres: 'Vocal' },
  { genres: 'Classical', subGenres: 'Wedding Music' },
  { genres: 'Classical', subGenres: 'Zarzuela' },
  { genres: 'Country', subGenres: 'Alt. Country' },
  { genres: 'Country', subGenres: 'Americana' },
  { genres: 'Country', subGenres: 'Bluegrass' },
  { genres: 'Country', subGenres: 'Classic Country' },
  { genres: 'Country', subGenres: 'Compilations' },
  { genres: 'Country', subGenres: 'Contemporary Bluegrass' },
  { genres: 'Country', subGenres: 'Contemporary Country' },
  { genres: 'Country', subGenres: 'Country' },
  { genres: 'Country', subGenres: 'Country Boogie' },
  { genres: 'Country', subGenres: 'Country Folk' },
  { genres: 'Country', subGenres: 'Country Gospel' },
  { genres: 'Country', subGenres: 'Country Rock' },
  { genres: 'Country', subGenres: 'Country Singer/Songwriter' },
  { genres: 'Country', subGenres: 'Country-Pop' },
  { genres: 'Country', subGenres: 'Cowboy' },
  { genres: 'Country', subGenres: 'Honky-Tonk' },
  { genres: 'Country', subGenres: 'Instrumental Country' },
  { genres: 'Country', subGenres: 'Live Country' },
  { genres: 'Country', subGenres: 'Modern Country' },
  { genres: 'Country', subGenres: 'Nashville Sound/Countrypolitan' },
  { genres: 'Country', subGenres: 'Neo-Traditionalist' },
  { genres: 'Country', subGenres: 'Old-Timey' },
  { genres: 'Country', subGenres: 'Other' },
  { genres: 'Country', subGenres: 'Outlaw' },
  { genres: 'Country', subGenres: 'Progressive' },
  { genres: 'Country', subGenres: 'Rockabilly' },
  { genres: 'Country', subGenres: 'String Bands' },
  { genres: 'Country', subGenres: 'Traditional Country' },
  { genres: 'Country', subGenres: 'Urban Cowboy' },
  { genres: 'Country', subGenres: 'Western Swing' },
  { genres: 'Country', subGenres: 'Yodeling' },
  { genres: 'Educational', subGenres: 'Educational' },
  { genres: 'Electronic', subGenres: '2-step/British Garage' },
  { genres: 'Electronic', subGenres: 'Abstract' },
  { genres: 'Electronic', subGenres: 'Acid Jazz' },
  { genres: 'Electronic', subGenres: 'Ambient' },
  { genres: 'Electronic', subGenres: 'Ambient Dub' },
  { genres: 'Electronic', subGenres: 'Avant-garde' },
  { genres: 'Electronic', subGenres: 'Big Beat' },
  { genres: 'Electronic', subGenres: 'Break Beat' },
  { genres: 'Electronic', subGenres: 'Breaks' },
  { genres: 'Electronic', subGenres: 'Chill' },
  { genres: 'Electronic', subGenres: 'Club/Dance' },
  { genres: 'Electronic', subGenres: 'Compilations' },
  { genres: 'Electronic', subGenres: 'Crossover' },
  { genres: 'Electronic', subGenres: 'Dance' },
  { genres: 'Electronic', subGenres: 'Dance-Pop' },
  { genres: 'Electronic', subGenres: 'Dark' },
  { genres: 'Electronic', subGenres: 'Dark Wave' },
  { genres: 'Electronic', subGenres: 'Deep House' },
  { genres: 'Electronic', subGenres: 'Digital Hardcore' },
  { genres: 'Electronic', subGenres: 'DJ' },
  { genres: 'Electronic', subGenres: 'DJ Mix' },
  { genres: 'Electronic', subGenres: 'Downbeat' },
  { genres: 'Electronic', subGenres: 'Downtempo' },
  { genres: 'Electronic', subGenres: "Drum'n'Bass / Jungle" },
  { genres: 'Electronic', subGenres: 'Dubstep' },
  { genres: 'Electronic', subGenres: 'Electro' },
  { genres: 'Electronic', subGenres: 'Electro Dark' },
  { genres: 'Electronic', subGenres: 'Electro House' },
  { genres: 'Electronic', subGenres: 'Electroclash' },
  { genres: 'Electronic', subGenres: 'Electronic' },
  { genres: 'Electronic', subGenres: 'Electronic 12-inches' },
  { genres: 'Electronic', subGenres: 'Electronic Dub' },
  { genres: 'Electronic', subGenres: 'Euro-Beat' },
  { genres: 'Electronic', subGenres: 'Euro-Dance' },
  { genres: 'Electronic', subGenres: 'Experimental' },
  { genres: 'Electronic', subGenres: 'Fitness & Workout' },
  { genres: 'Electronic', subGenres: 'Freestyle' },
  { genres: 'Electronic', subGenres: 'Funky Breaks' },
  { genres: 'Electronic', subGenres: 'Future Pop-Synth' },
  { genres: 'Electronic', subGenres: 'Gabba' },
  { genres: 'Electronic', subGenres: 'Glitch' },
  { genres: 'Electronic', subGenres: 'Global Groove' },
  { genres: 'Electronic', subGenres: 'Gloom Wave' },
  { genres: 'Electronic', subGenres: 'Groove' },
  { genres: 'Electronic', subGenres: 'Happy Hardcore' },
  { genres: 'Electronic', subGenres: 'Hard House' },
  { genres: 'Electronic', subGenres: 'Hard Techno' },
  { genres: 'Electronic', subGenres: 'Hi-NRG' },
  { genres: 'Electronic', subGenres: 'House' },
  { genres: 'Electronic', subGenres: 'I.D.M.' },
  { genres: 'Electronic', subGenres: 'Illbient' },
  { genres: 'Electronic', subGenres: 'Indie Dance / Nu Disco' },
  {
    genres: 'Electronic',
    subGenres: 'Indie Dance / Nu Disco | Indie Dance'
  },
  {
    genres: 'Electronic',
    subGenres: 'Indie Dance / Nu Disco | Nu Disco'
  },
  { genres: 'Electronic', subGenres: 'Industrial' },
  { genres: 'Electronic', subGenres: 'Krautrock' },
  { genres: 'Electronic', subGenres: 'Lounge' },
  { genres: 'Electronic', subGenres: 'Minimal Techno' },
  { genres: 'Electronic', subGenres: 'Newbeat' },
  { genres: 'Electronic', subGenres: 'Nu Breaks' },
  { genres: 'Electronic', subGenres: 'Nu-Jazz/Broken Beat' },
  { genres: 'Electronic', subGenres: 'Other' },
  { genres: 'Electronic', subGenres: 'Post-Rock' },
  { genres: 'Electronic', subGenres: 'Progressive House' },
  { genres: 'Electronic', subGenres: 'Psychedelic' },
  { genres: 'Electronic', subGenres: 'Psytrance' },
  { genres: 'Electronic', subGenres: 'Rave' },
  { genres: 'Electronic', subGenres: 'Remix' },
  { genres: 'Electronic', subGenres: 'Space' },
  { genres: 'Electronic', subGenres: 'Tech-House' },
  { genres: 'Electronic', subGenres: 'Techno' },
  { genres: 'Electronic', subGenres: 'Techno Clash' },
  { genres: 'Electronic', subGenres: 'Techno Dark' },
  { genres: 'Electronic', subGenres: 'Techno Dub' },
  { genres: 'Electronic', subGenres: 'Teknobody' },
  { genres: 'Electronic', subGenres: 'Trance' },
  { genres: 'Electronic', subGenres: 'Tribal' },
  { genres: 'Electronic', subGenres: 'Tribal House' },
  { genres: 'Electronic', subGenres: 'Trip-Hop' },
  { genres: 'Folk', subGenres: 'Acoustic' },
  { genres: 'Folk', subGenres: 'Alternative Folk' },
  { genres: 'Folk', subGenres: 'Anti-Folk' },
  { genres: 'Folk', subGenres: 'Bluegrass' },
  { genres: 'Folk', subGenres: 'Chassidic' },
  { genres: 'Folk', subGenres: 'Contemporary' },
  { genres: 'Folk', subGenres: 'Contemporary Folk' },
  { genres: 'Folk', subGenres: 'Dark' },
  { genres: 'Folk', subGenres: 'Drinking Songs' },
  { genres: 'Folk', subGenres: 'Field Recordings' },
  { genres: 'Folk', subGenres: 'Flamenco' },
  { genres: 'Folk', subGenres: 'Folk' },
  { genres: 'Folk', subGenres: 'Folk Revival' },
  { genres: 'Folk', subGenres: 'Folk Singer/Songwriter' },
  { genres: 'Folk', subGenres: 'Folk-Rock' },
  { genres: 'Folk', subGenres: 'German Folk' },
  { genres: 'Folk', subGenres: 'Gypsy' },
  { genres: 'Folk', subGenres: 'Historical' },
  { genres: 'Folk', subGenres: 'Jota' },
  { genres: 'Folk', subGenres: 'Jug Bands' },
  { genres: 'Folk', subGenres: 'Live Folk' },
  { genres: 'Folk', subGenres: 'Medieval' },
  { genres: 'Folk', subGenres: 'Mediterranean' },
  { genres: 'Folk', subGenres: 'New Acoustic' },
  { genres: 'Folk', subGenres: 'Old Time' },
  { genres: 'Folk', subGenres: 'Other' },
  { genres: 'Folk', subGenres: 'Political/Protest' },
  { genres: 'Folk', subGenres: 'Progressive Folk' },
  { genres: 'Folk', subGenres: 'Sardana' },
  { genres: 'Folk', subGenres: 'Scottish Folk' },
  { genres: 'Folk', subGenres: 'Sea Shanties' },
  { genres: 'Folk', subGenres: 'Sepharad' },
  { genres: 'Folk', subGenres: 'Skiffle' },
  { genres: 'Folk', subGenres: 'Spoken Word' },
  { genres: 'Folk', subGenres: 'Traditional Folk' },
  { genres: 'Hip-hop/Rap', subGenres: 'A Cappellas' },
  { genres: 'Hip-hop/Rap', subGenres: 'Alternative Rap' },
  { genres: 'Hip-hop/Rap', subGenres: 'Bass' },
  { genres: 'Hip-hop/Rap', subGenres: 'Beats & Breaks' },
  { genres: 'Hip-hop/Rap', subGenres: 'British Rap' },
  { genres: 'Hip-hop/Rap', subGenres: 'Comedy Rap' },
  { genres: 'Hip-hop/Rap', subGenres: 'Conscious/Political' },
  { genres: 'Hip-hop/Rap', subGenres: 'Contemporary R&B' },
  { genres: 'Hip-hop/Rap', subGenres: 'Dirty South/Crunk' },
  { genres: 'Hip-hop/Rap', subGenres: 'East Coast' },
  { genres: 'Hip-hop/Rap', subGenres: 'Electro' },
  { genres: 'Hip-hop/Rap', subGenres: 'Electro-Funk' },
  { genres: 'Hip-hop/Rap', subGenres: 'Foreign Language Rap' },
  { genres: 'Hip-hop/Rap', subGenres: 'Funk' },
  { genres: 'Hip-hop/Rap', subGenres: 'Gangsta' },
  { genres: 'Hip-hop/Rap', subGenres: 'Hardcore Rap' },
  { genres: 'Hip-hop/Rap', subGenres: 'Hip-Hop' },
  { genres: 'Hip-hop/Rap', subGenres: 'Hip-Hop 12-inches' },
  { genres: 'Hip-hop/Rap', subGenres: 'Instrumentals' },
  { genres: 'Hip-hop/Rap', subGenres: 'Latin' },
  { genres: 'Hip-hop/Rap', subGenres: 'Live Urban/Hip-Hop' },
  { genres: 'Hip-hop/Rap', subGenres: 'Neosoul' },
  { genres: 'Hip-hop/Rap', subGenres: 'New Jack Swing' },
  { genres: 'Hip-hop/Rap', subGenres: 'New School' },
  { genres: 'Hip-hop/Rap', subGenres: 'Old School' },
  { genres: 'Hip-hop/Rap', subGenres: 'Other' },
  { genres: 'Hip-hop/Rap', subGenres: 'Party Rap' },
  { genres: 'Hip-hop/Rap', subGenres: 'R&B' },
  { genres: 'Hip-hop/Rap', subGenres: 'Rap' },
  { genres: 'Hip-hop/Rap', subGenres: 'Turntablism' },
  { genres: 'Hip-hop/Rap', subGenres: 'Underground' },
  { genres: 'Hip-hop/Rap', subGenres: 'West Coast' },
  { genres: 'Holiday', subGenres: 'Buddhist' },
  { genres: 'Holiday', subGenres: 'Christian' },
  { genres: 'Holiday', subGenres: 'Christmas' },
  { genres: 'Holiday', subGenres: "Christmas: Children's" },
  { genres: 'Holiday', subGenres: 'Christmas: Classic' },
  { genres: 'Holiday', subGenres: 'Christmas: Classical' },
  { genres: 'Holiday', subGenres: 'Christmas: Jazz' },
  { genres: 'Holiday', subGenres: 'Christmas: Modern' },
  { genres: 'Holiday', subGenres: 'Christmas: Pop' },
  { genres: 'Holiday', subGenres: 'Christmas: R&B' },
  { genres: 'Holiday', subGenres: 'Christmas: Religious' },
  { genres: 'Holiday', subGenres: 'Christmas: Rock' },
  { genres: 'Holiday', subGenres: 'Easter' },
  { genres: 'Holiday', subGenres: 'Halloween' },
  { genres: 'Holiday', subGenres: 'Hanukkah' },
  { genres: 'Holiday', subGenres: 'Hindu' },
  { genres: 'Holiday', subGenres: 'Holiday' },
  { genres: 'Holiday', subGenres: 'Jewish' },
  { genres: 'Holiday', subGenres: 'Kwaanza' },
  { genres: 'Holiday', subGenres: 'Muslim' },
  { genres: 'Holiday', subGenres: 'Others' },
  { genres: 'Holiday', subGenres: 'Thanksgiving' },
  { genres: 'Holiday', subGenres: 'Zorastrian' },
  { genres: 'Jazz', subGenres: 'Acid Jazz' },
  { genres: 'Jazz', subGenres: 'African Jazz' },
  { genres: 'Jazz', subGenres: 'Afro-Cuban Jazz' },
  { genres: 'Jazz', subGenres: 'Avant-garde Jazz' },
  { genres: 'Jazz', subGenres: 'BeBop' },
  { genres: 'Jazz', subGenres: 'Big Band' },
  { genres: 'Jazz', subGenres: 'Bop' },
  { genres: 'Jazz', subGenres: 'Brass Bands' },
  { genres: 'Jazz', subGenres: 'Brazilian Jazz' },
  { genres: 'Jazz', subGenres: 'Cabaret' },
  { genres: 'Jazz', subGenres: 'Classic Jazz' },
  { genres: 'Jazz', subGenres: 'Contemporary' },
  { genres: 'Jazz', subGenres: 'Contemporary Jazz' },
  { genres: 'Jazz', subGenres: 'Cool Jazz' },
  { genres: 'Jazz', subGenres: 'Crossover' },
  { genres: 'Jazz', subGenres: 'Cuban Jazz' },
  { genres: 'Jazz', subGenres: 'Dixieland' },
  { genres: 'Jazz', subGenres: 'Easy Listening' },
  { genres: 'Jazz', subGenres: 'Electronic' },
  { genres: 'Jazz', subGenres: 'Flamenco' },
  { genres: 'Jazz', subGenres: 'Free Jazz' },
  { genres: 'Jazz', subGenres: 'Funk' },
  { genres: 'Jazz', subGenres: 'Fusion' },
  { genres: 'Jazz', subGenres: 'Hard Bop' },
  { genres: 'Jazz', subGenres: 'Jazz' },
  { genres: 'Jazz', subGenres: 'Jazz/Jazz' },
  { genres: 'Jazz', subGenres: 'Jive' },
  { genres: 'Jazz', subGenres: 'Klezmer' },
  { genres: 'Jazz', subGenres: 'Latin Jazz' },
  { genres: 'Jazz', subGenres: 'Live Jazz' },
  { genres: 'Jazz', subGenres: 'Lounge' },
  { genres: 'Jazz', subGenres: 'Lounge Jazz' },
  { genres: 'Jazz', subGenres: 'Mainstream Jazz' },
  { genres: 'Jazz', subGenres: 'Marching Bands' },
  { genres: 'Jazz', subGenres: 'New Orleans Jazz' },
  { genres: 'Jazz', subGenres: 'Orchestral Jazz' },
  { genres: 'Jazz', subGenres: 'Other' },
  { genres: 'Jazz', subGenres: 'Post-Bop' },
  { genres: 'Jazz', subGenres: 'Progressive Jazz' },
  { genres: 'Jazz', subGenres: 'Ragtime' },
  { genres: 'Jazz', subGenres: 'Smooth Jazz' },
  { genres: 'Jazz', subGenres: 'Soul Jazz' },
  { genres: 'Jazz', subGenres: 'Swing' },
  { genres: 'Jazz', subGenres: 'Trad Jazz' },
  { genres: 'Jazz', subGenres: 'Vocal Jazz' },
  { genres: 'Jazz', subGenres: 'World Fusion' },
  { genres: 'Latin Music', subGenres: 'Afro-Brazilian' },
  { genres: 'Latin Music', subGenres: 'Afro-Cuban' },
  { genres: 'Latin Music', subGenres: 'Afro-Peruvian' },
  { genres: 'Latin Music', subGenres: 'Argentine Folklore' },
  { genres: 'Latin Music', subGenres: 'Bachata' },
  { genres: 'Latin Music', subGenres: 'Banda' },
  { genres: 'Latin Music', subGenres: 'Big Band Latino' },
  { genres: 'Latin Music', subGenres: 'Bolero' },
  { genres: 'Latin Music', subGenres: 'Bomba' },
  { genres: 'Latin Music', subGenres: 'Bossa Nova' },
  { genres: 'Latin Music', subGenres: 'Brazilian' },
  { genres: 'Latin Music', subGenres: 'Can' },
  { genres: 'Latin Music', subGenres: 'candombe' },
  { genres: 'Latin Music', subGenres: 'Cantautor' },
  { genres: 'Latin Music', subGenres: 'Caribbean' },
  { genres: 'Latin Music', subGenres: 'Carribbean' },
  { genres: 'Latin Music', subGenres: 'Cha Cha Cha' },
  { genres: 'Latin Music', subGenres: 'Conjunto' },
  { genres: 'Latin Music', subGenres: 'Contemporary Latin' },
  { genres: 'Latin Music', subGenres: 'Copla' },
  { genres: 'Latin Music', subGenres: 'Cuatro' },
  { genres: 'Latin Music', subGenres: 'Cumbia' },
  { genres: 'Latin Music', subGenres: 'Danzon' },
  { genres: 'Latin Music', subGenres: 'Fado' },
  { genres: 'Latin Music', subGenres: 'Flamenco' },
  { genres: 'Latin Music', subGenres: 'Forro' },
  { genres: 'Latin Music', subGenres: 'Guaganco' },
  { genres: 'Latin Music', subGenres: 'Guajira' },
  { genres: 'Latin Music', subGenres: 'Italian' },
  { genres: 'Latin Music', subGenres: 'Jibaro' },
  { genres: 'Latin Music', subGenres: 'Latin' },
  { genres: 'Latin Music', subGenres: 'Latin Folk' },
  { genres: 'Latin Music', subGenres: 'Latin Jazz' },
  { genres: 'Latin Music', subGenres: 'Latin Pop' },
  { genres: 'Latin Music', subGenres: 'Latin Rap' },
  { genres: 'Latin Music', subGenres: 'Latin Soul' },
  { genres: 'Latin Music', subGenres: 'Mambo' },
  { genres: 'Latin Music', subGenres: 'Mariachi' },
  { genres: 'Latin Music', subGenres: 'Merengue' },
  { genres: 'Latin Music', subGenres: 'Musica Popular Brasileira (MPB)' },
  { genres: 'Latin Music', subGenres: 'Norte' },
  { genres: 'Latin Music', subGenres: 'Novo Fado' },
  { genres: 'Latin Music', subGenres: 'Nueva Canci' },
  { genres: 'Latin Music', subGenres: 'Nuevo Flamenco' },
  { genres: 'Latin Music', subGenres: 'Other' },
  { genres: 'Latin Music', subGenres: 'Pachanga' },
  { genres: 'Latin Music', subGenres: 'Plena' },
  { genres: 'Latin Music', subGenres: 'Pop Rock Latino' },
  { genres: 'Latin Music', subGenres: 'Quechua' },
  { genres: 'Latin Music', subGenres: 'Ranchero' },
  { genres: 'Latin Music', subGenres: 'Reggaeton' },
  { genres: 'Latin Music', subGenres: 'Rock en Espa' },
  { genres: 'Latin Music', subGenres: 'Rumba' },
  { genres: 'Latin Music', subGenres: 'Salsa' },
  { genres: 'Latin Music', subGenres: 'Samba' },
  { genres: 'Latin Music', subGenres: 'Son' },
  { genres: 'Latin Music', subGenres: 'Spanish' },
  { genres: 'Latin Music', subGenres: 'Tango' },
  { genres: 'Latin Music', subGenres: 'Tejano' },
  { genres: 'Latin Music', subGenres: 'Timba' },
  { genres: 'Latin Music', subGenres: 'Toque' },
  { genres: 'Latin Music', subGenres: 'Tropicalia' },
  { genres: 'Latin Music', subGenres: 'Trova' },
  { genres: 'Latin Music', subGenres: 'Vallenato' },
  { genres: 'Metal', subGenres: 'Alternative' },
  { genres: 'Metal', subGenres: 'Black' },
  { genres: 'Metal', subGenres: 'British Metal' },
  { genres: 'Metal', subGenres: 'Death' },
  { genres: 'Metal', subGenres: 'Doom' },
  { genres: 'Metal', subGenres: 'Emo Metal' },
  { genres: 'Metal', subGenres: 'Glitter' },
  { genres: 'Metal', subGenres: 'Goth-Metal' },
  { genres: 'Metal', subGenres: 'Grindcore' },
  { genres: 'Metal', subGenres: 'Guitar Virtuoso' },
  { genres: 'Metal', subGenres: 'Hair Band' },
  { genres: 'Metal', subGenres: 'Heavy' },
  { genres: 'Metal', subGenres: 'Industrial Metal' },
  { genres: 'Metal', subGenres: 'Instrumental' },
  { genres: 'Metal', subGenres: 'Metal' },
  { genres: 'Metal', subGenres: 'Metalcore' },
  { genres: 'Metal', subGenres: 'Other' },
  { genres: 'Metal', subGenres: 'Pop-Metal' },
  { genres: 'Metal', subGenres: 'Power Metal' },
  { genres: 'Metal', subGenres: 'Rap Metal' },
  { genres: 'Metal', subGenres: 'Scandinavian' },
  { genres: 'Metal', subGenres: 'Sludge' },
  { genres: 'Metal', subGenres: 'Speed' },
  { genres: 'Metal', subGenres: 'Stoner Rock' },
  { genres: 'Metal', subGenres: 'Teenager' },
  { genres: 'Metal', subGenres: 'Thrash' },
  { genres: 'New Age', subGenres: 'Ambient/Atmospheres' },
  { genres: 'New Age', subGenres: 'Cartoon Music' },
  { genres: 'New Age', subGenres: 'Contemporary Instrumental' },
  { genres: 'New Age', subGenres: 'Electro-Acoustic' },
  { genres: 'New Age', subGenres: 'Environmental' },
  { genres: 'New Age', subGenres: 'Ethnic Fusion' },
  { genres: 'New Age', subGenres: 'Healing' },
  { genres: 'New Age', subGenres: 'Meditation/Relaxation' },
  { genres: 'New Age', subGenres: 'Minimalism' },
  { genres: 'New Age', subGenres: 'Nature' },
  { genres: 'New Age', subGenres: 'Neo-Classical' },
  { genres: 'New Age', subGenres: 'New Age' },
  { genres: 'New Age', subGenres: 'Other' },
  { genres: 'New Age', subGenres: 'Progressive' },
  { genres: 'New Age', subGenres: 'Relaxation' },
  { genres: 'New Age', subGenres: 'Sacred' },
  { genres: 'New Age', subGenres: 'Self-Help' },
  { genres: 'New Age', subGenres: 'Solo Instrumental' },
  { genres: 'New Age', subGenres: 'Spiritual' },
  { genres: 'New Age', subGenres: 'Vocal' },
  { genres: 'New Age', subGenres: 'World' },
  { genres: 'Pop', subGenres: 'A Cappella' },
  { genres: 'Pop', subGenres: 'Brit-Pop' },
  { genres: 'Pop', subGenres: 'Bubble Gum' },
  { genres: 'Pop', subGenres: 'Chamber Pop' },
  { genres: 'Pop', subGenres: 'Christian Music' },
  { genres: 'Pop', subGenres: 'Dance-Pop' },
  { genres: 'Pop', subGenres: 'Disco' },
  { genres: 'Pop', subGenres: 'Diva' },
  { genres: 'Pop', subGenres: 'Dream Pop' },
  { genres: 'Pop', subGenres: 'Euro-Pop' },
  { genres: 'Pop', subGenres: 'Female Vocalist' },
  { genres: 'Pop', subGenres: 'German Pop' },
  { genres: 'Pop', subGenres: 'Girl Group' },
  { genres: 'Pop', subGenres: 'Indie Pop' },
  { genres: 'Pop', subGenres: 'Instrumental' },
  { genres: 'Pop', subGenres: 'Male Vocalist' },
  { genres: 'Pop', subGenres: 'Other' },
  { genres: 'Pop', subGenres: 'Parody' },
  { genres: 'Pop', subGenres: 'Pop' },
  { genres: 'Pop', subGenres: 'Pop Singer/Songwriter' },
  { genres: 'Pop', subGenres: 'Power Pop' },
  { genres: 'Pop', subGenres: 'Standards' },
  { genres: 'Pop', subGenres: 'Teen Pop' },
  { genres: 'Pop', subGenres: 'Traditional Pop' },
  { genres: 'Punk', subGenres: 'Alt/Punk Ska' },
  { genres: 'Punk', subGenres: 'Anarchist' },
  { genres: 'Punk', subGenres: 'Brit-Punk' },
  { genres: 'Punk', subGenres: 'Cowpunk' },
  { genres: 'Punk', subGenres: 'Digital Hardcore' },
  { genres: 'Punk', subGenres: 'Emo Punk' },
  { genres: 'Punk', subGenres: 'Hardcore' },
  { genres: 'Punk', subGenres: 'Industrial' },
  { genres: 'Punk', subGenres: 'International Punk' },
  { genres: 'Punk', subGenres: 'L.A. Punk' },
  { genres: 'Punk', subGenres: 'Live Alt/Punk' },
  { genres: 'Punk', subGenres: 'New York Punk' },
  { genres: 'Punk', subGenres: 'No Wave' },
  { genres: 'Punk', subGenres: 'Oi!' },
  { genres: 'Punk', subGenres: 'Other' },
  { genres: 'Punk', subGenres: 'Political Punk' },
  { genres: 'Punk', subGenres: 'Pop-Punk' },
  { genres: 'Punk', subGenres: 'Post-Punk' },
  { genres: 'Punk', subGenres: 'Punk' },
  { genres: 'Punk', subGenres: 'Punkabilly' },
  { genres: 'Punk', subGenres: 'Queercore' },
  { genres: 'Punk', subGenres: 'Riot Girl' },
  { genres: 'Punk', subGenres: 'Ska-Punk' },
  { genres: 'Punk', subGenres: 'Skate-Punk' },
  { genres: 'Punk', subGenres: 'Straight Edge' },
  { genres: 'R&B', subGenres: 'Diva' },
  { genres: 'R&B', subGenres: 'Doo Wop' },
  { genres: 'R&B', subGenres: 'Funk' },
  { genres: 'R&B', subGenres: 'Gospel' },
  { genres: 'R&B', subGenres: 'Motown' },
  { genres: 'R&B', subGenres: 'Neo-Soul' },
  { genres: 'R&B', subGenres: 'Other' },
  { genres: 'R&B', subGenres: 'Soul' },
  { genres: 'Reggae', subGenres: 'Calypso' },
  { genres: 'Reggae', subGenres: 'Dancehall' },
  { genres: 'Reggae', subGenres: 'Dub' },
  { genres: 'Reggae', subGenres: 'Lovers Rock' },
  { genres: 'Reggae', subGenres: 'Other' },
  { genres: 'Reggae', subGenres: 'Political Reggae' },
  { genres: 'Reggae', subGenres: 'Ragga' },
  { genres: 'Reggae', subGenres: 'Reggae' },
  { genres: 'Reggae', subGenres: 'Reggae Gospel' },
  { genres: 'Reggae', subGenres: 'Rocksteady' },
  { genres: 'Reggae', subGenres: 'Roots Reggae' },
  { genres: 'Reggae', subGenres: 'Ska' },
  { genres: 'Reggae', subGenres: 'Soca' },
  { genres: 'Rock', subGenres: "80's" },
  { genres: 'Rock', subGenres: 'Adult Alternative' },
  { genres: 'Rock', subGenres: 'Adult Contemporary' },
  { genres: 'Rock', subGenres: 'Alternative' },
  { genres: 'Rock', subGenres: 'American Trad Rock' },
  { genres: 'Rock', subGenres: 'Americana' },
  { genres: 'Rock', subGenres: 'Arena Rock' },
  { genres: 'Rock', subGenres: 'Boogie Rock' },
  { genres: 'Rock', subGenres: 'Brit-Pop' },
  { genres: 'Rock', subGenres: 'British Invasion' },
  { genres: 'Rock', subGenres: 'Classic Rock' },
  { genres: 'Rock', subGenres: 'College Rock' },
  { genres: 'Rock', subGenres: 'Commercial Alternative' },
  { genres: 'Rock', subGenres: 'Contemporary Singer/Songwriter' },
  { genres: 'Rock', subGenres: 'Country-Rock' },
  { genres: 'Rock', subGenres: 'Drone' },
  { genres: 'Rock', subGenres: 'Duro' },
  { genres: 'Rock', subGenres: 'Folk Rock' },
  { genres: 'Rock', subGenres: 'Foreign Language Rock' },
  { genres: 'Rock', subGenres: 'Funk Rock' },
  { genres: 'Rock', subGenres: 'Garage Rock' },
  { genres: 'Rock', subGenres: 'Glam Rock' },
  { genres: 'Rock', subGenres: 'Goth' },
  { genres: 'Rock', subGenres: 'Grunge' },
  { genres: 'Rock', subGenres: 'Hard Rock' },
  { genres: 'Rock', subGenres: 'Indie Rock' },
  { genres: 'Rock', subGenres: 'Industrial Rock' },
  { genres: 'Rock', subGenres: 'Instrumental Rock' },
  { genres: 'Rock', subGenres: 'Jam Band' },
  { genres: 'Rock', subGenres: 'Jam Rock' },
  { genres: 'Rock', subGenres: 'Krautrock' },
  { genres: 'Rock', subGenres: 'Live Rock' },
  { genres: 'Rock', subGenres: 'Lo-fi' },
  { genres: 'Rock', subGenres: 'Math Rock' },
  { genres: 'Rock', subGenres: 'Modern Rock' },
  { genres: 'Rock', subGenres: 'New Wave' },
  { genres: 'Rock', subGenres: 'Noise-Rock' },
  { genres: 'Rock', subGenres: 'Oldies' },
  { genres: 'Rock', subGenres: 'Other' },
  { genres: 'Rock', subGenres: 'Pop-Rock' },
  { genres: 'Rock', subGenres: 'Post-Punk' },
  { genres: 'Rock', subGenres: 'Post-Rock / Experimental' },
  { genres: 'Rock', subGenres: 'Power-Pop' },
  { genres: 'Rock', subGenres: 'Prog-Rock/Art Rock' },
  { genres: 'Rock', subGenres: 'Progressive' },
  { genres: 'Rock', subGenres: 'Proto-Punk' },
  { genres: 'Rock', subGenres: 'Psychedelic Rock' },
  { genres: 'Rock', subGenres: 'Psychobilly' },
  { genres: 'Rock', subGenres: 'Radical' },
  { genres: 'Rock', subGenres: 'Rock' },
  { genres: 'Rock', subGenres: "Rock 'n' Roll" },
  { genres: 'Rock', subGenres: 'Rock Singer/Songwriter' },
  { genres: 'Rock', subGenres: 'Rockabilly' },
  { genres: 'Rock', subGenres: 'Roots Rock' },
  { genres: 'Rock', subGenres: 'Soft Rock' },
  { genres: 'Rock', subGenres: 'Southern Rock' },
  { genres: 'Rock', subGenres: 'Surf' },
  { genres: 'Rock', subGenres: 'Tex-Mex' },
  { genres: 'Rock', subGenres: 'Urbano' },
  { genres: 'Soundtracks', subGenres: "Children's" },
  { genres: 'Soundtracks', subGenres: 'Comedy (Soundtracks)' },
  { genres: 'Soundtracks', subGenres: 'Film Soundtracks' },
  { genres: 'Soundtracks', subGenres: 'Holiday' },
  { genres: 'Soundtracks', subGenres: 'Marching Band' },
  { genres: 'Soundtracks', subGenres: 'Original Score' },
  { genres: 'Soundtracks', subGenres: 'Other' },
  { genres: 'Soundtracks', subGenres: 'Other Environmental' },
  { genres: 'Soundtracks', subGenres: 'Radio' },
  { genres: 'Soundtracks', subGenres: 'Sound Effects' },
  { genres: 'Soundtracks', subGenres: 'Soundtracks' },
  { genres: 'Soundtracks', subGenres: 'Spoken Word' },
  { genres: 'Soundtracks', subGenres: 'Theatre Scores' },
  { genres: 'Soundtracks', subGenres: 'TV Soundtracks' },
  { genres: 'Soundtracks', subGenres: 'Vocal Pop' },
  { genres: 'Spoken Word', subGenres: 'Blue Humor' },
  { genres: 'Spoken Word', subGenres: 'Christian Comedy' },
  { genres: 'Spoken Word', subGenres: 'Comedy (Spoken Word)' },
  { genres: 'Spoken Word', subGenres: 'Ethnic Comedy' },
  { genres: 'Spoken Word', subGenres: 'Gay Comedy' },
  { genres: 'Spoken Word', subGenres: 'Lectures' },
  { genres: 'Spoken Word', subGenres: 'Musical Comedy' },
  { genres: 'Spoken Word', subGenres: 'Novelty' },
  { genres: 'Spoken Word', subGenres: 'Observational Humor' },
  { genres: 'Spoken Word', subGenres: 'Poetry' },
  { genres: 'Spoken Word', subGenres: 'Political Humor' },
  { genres: 'Spoken Word', subGenres: 'Prank Calls' },
  { genres: 'Spoken Word', subGenres: 'Radio Comedy' },
  { genres: 'Spoken Word', subGenres: 'Satire' },
  { genres: 'Spoken Word', subGenres: 'Self-Help' },
  { genres: 'Spoken Word', subGenres: 'Sketch Comedy' },
  { genres: 'Spoken Word', subGenres: 'Spoken Word' },
  { genres: 'Spoken Word', subGenres: 'Standup Comedy' },
  { genres: 'World Music', subGenres: 'African' },
  { genres: 'World Music', subGenres: 'African Pop' },
  { genres: 'World Music', subGenres: 'Afrikaans' },
  { genres: 'World Music', subGenres: 'Afrobeat' },
  { genres: 'World Music', subGenres: 'Alternative' },
  { genres: 'World Music', subGenres: 'Arabic Belly-Dance' },
  { genres: 'World Music', subGenres: 'Arabic Children' },
  { genres: 'World Music', subGenres: 'Arabic Classic' },
  { genres: 'World Music', subGenres: 'Arabic Dance' },
  { genres: 'World Music', subGenres: 'Arabic Folklore' },
  { genres: 'World Music', subGenres: 'Arabic Pop' },
  { genres: 'World Music', subGenres: 'Arabic Rock' },
  { genres: 'World Music', subGenres: 'Arabic Romantic' },
  { genres: 'World Music', subGenres: 'Asia' },
  { genres: 'World Music', subGenres: 'Asturias' },
  { genres: 'World Music', subGenres: 'Australian' },
  { genres: 'World Music', subGenres: 'Bangladeshi - Classical' },
  { genres: 'World Music', subGenres: 'Bangladeshi - Devotional' },
  { genres: 'World Music', subGenres: 'Bangladeshi - Film' },
  { genres: 'World Music', subGenres: 'Bangladeshi - Folk' },
  { genres: 'World Music', subGenres: 'Bangladeshi - Pop & Fusion' },
  { genres: 'World Music', subGenres: 'Basque' },
  { genres: 'World Music', subGenres: 'Belgian' },
  { genres: 'World Music', subGenres: 'World Music' },
  { genres: 'World Music', subGenres: 'Brazil' },
  { genres: 'World Music', subGenres: 'Brazilian World Music' },
  { genres: 'World Music', subGenres: 'Brazilian Hip Hop' },
  { genres: 'World Music', subGenres: 'Brazilian Metal' },
  { genres: 'World Music', subGenres: 'Brazilian Pop' },
  { genres: 'World Music', subGenres: 'Brazilian Reggae' },
  { genres: 'World Music', subGenres: 'Brazilian Rock' },
  { genres: 'World Music', subGenres: 'Brazilian Soul' },
  { genres: 'World Music', subGenres: 'Brazilian-Afro' },
  { genres: 'World Music', subGenres: 'Brazilian-Arrocha' },
  { genres: 'World Music', subGenres: 'Brazilian-Axe' },
  { genres: 'World Music', subGenres: 'Brazilian-Baião' },
  { genres: 'World Music', subGenres: 'Brazilian-Boi Bumba' },
  { genres: 'World Music', subGenres: 'Brazilian-Bossa Nova' },
  { genres: 'World Music', subGenres: 'Brazilian-Brega' },
  { genres: 'World Music', subGenres: 'Brazilian-Caipira' },
  { genres: 'World Music', subGenres: 'Brazilian-Candomble' },
  { genres: 'World Music', subGenres: 'Brazilian-Capoeira' },
  { genres: 'World Music', subGenres: "Brazilian-Children's" },
  { genres: 'World Music', subGenres: 'Brazilian-Choro' },
  { genres: 'World Music', subGenres: 'Brazilian-Christian' },
  { genres: 'World Music', subGenres: 'Brazilian-Classical' },
  { genres: 'World Music', subGenres: 'Brazilian-Forró' },
  { genres: 'World Music', subGenres: 'Brazilian-Funk Carioca' },
  { genres: 'World Music', subGenres: 'Brazilian-Gaucho' },
  { genres: 'World Music', subGenres: 'Brazilian-Instrumental' },
  { genres: 'World Music', subGenres: 'Brazilian-Jazz' },
  { genres: 'World Music', subGenres: 'Brazilian-Jovem Guarda' },
  { genres: 'World Music', subGenres: 'Brazilian-Lambada' },
  {
    genres: 'World Music',
    subGenres: 'Brazilian-Mangue Beat/Pernambuco'
  },
  { genres: 'World Music', subGenres: 'Brazilian-Maracatu' },
  { genres: 'World Music', subGenres: 'Brazilian-MPB' },
  { genres: 'World Music', subGenres: 'Brazilian-Regional' },
  { genres: 'World Music', subGenres: 'Brazilian-Samba/Pagode' },
  { genres: 'World Music', subGenres: 'Brazilian-Sertaneja' },
  { genres: 'World Music', subGenres: 'Brazilian-Spoken Word' },
  { genres: 'World Music', subGenres: 'Brazilian-Tecnobrega' },
  { genres: 'World Music', subGenres: 'Brazilian-Tropicalia' },
  { genres: 'World Music', subGenres: 'C-Pop' },
  { genres: 'World Music', subGenres: 'Cajun' },
  { genres: 'World Music', subGenres: 'Cantopop' },
  { genres: 'World Music', subGenres: 'Cap-verde' },
  { genres: 'World Music', subGenres: 'Caribbean' },
  { genres: 'World Music', subGenres: 'Castilla' },
  { genres: 'World Music', subGenres: 'Celtic' },
  { genres: 'World Music', subGenres: 'Celtic Folk' },
  { genres: 'World Music', subGenres: 'Central Asian' },
  { genres: 'World Music', subGenres: 'Central European' },
  { genres: 'World Music', subGenres: 'Chants' },
  { genres: 'World Music', subGenres: 'Chinese' },
  { genres: 'World Music', subGenres: 'Chinese Alternative' },
  { genres: 'World Music', subGenres: "Chinese Children's" },
  { genres: 'World Music', subGenres: 'Chinese Classical' },
  { genres: 'World Music', subGenres: 'Chinese Comedy' },
  { genres: 'World Music', subGenres: 'Chinese Electrical' },
  { genres: 'World Music', subGenres: 'Chinese Flute' },
  { genres: 'World Music', subGenres: 'Chinese Folk' }
]

export default {
  COPYRIGHTCATEGORIES: COPYRIGHTCATEGORIES,
  GENRES: GENRES,
  SUBGENRES: SUBGENRES,
}
