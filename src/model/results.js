function createMock(id, type, heading, content, url, rank, tags) {
	return {
		id,
		type,
		heading,
		content,
		url,
		rank,
		tags
	};
}

const lorem =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
	'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
	'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
	'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id ' +
	'est laborum.';

let mocks = [];

for(var i = 0; i < 10; i++){
	mocks.push(createMock(i, i, 'Test', lorem, 'http://oregonstate.edu', 1, []));
}

let sportsMock = {
	"matches": [
	  {
			"sport": "Basketball (M)",
			"date": "Oct 27 2018",
			"progress": "final",
			"time": "12:00 PM PST",
			"airing": "Pac-12 Oregon",
			"details": "https://pac-12.com/mens-basketball/event/2018/10/27/montana-tech-oregon-state",
			"live": "https://pac-12.com/live?network=P12ORG",
			"tickets": "https://ev12.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=BEAVER&linkID=oregonst&shopperContext=&caller=&appCode=&RSRC=PAC12&RDAT=2017",
			"location": "Gill Coliseum, Corvallis, OR",
			"alt_title": "Pac-12 Tournament Day Three",
			"home": {
				"logo_url": "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-state-logo_0__1438812147.png?itok=f_Lwjkxw",
				"name": "OSU",
				"score": "54"
			},
			"away": {
				"logo_url": "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-state-logo_0__1438812147.png?itok=f_Lwjkxw",
				"name": "OSU",
				"score": "54"
			}
		},
		{
			"sport": "Basketball (M)",
			"date": "Oct 27 2018",
			"progress": "final",
			"time": "12:00 PM PST",
			"airing": "Pac-12 Oregon",
			"details": "https://pac-12.com/mens-basketball/event/2018/10/27/montana-tech-oregon-state",
			"live": "https://pac-12.com/live?network=P12ORG",
			"tickets": "https://ev12.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=BEAVER&linkID=oregonst&shopperContext=&caller=&appCode=&RSRC=PAC12&RDAT=2017",
			"location": "Gill Coliseum, Corvallis, OR",
			"alt_title": "Pac-12 Tournament Day Three",
		},
		{
			"sport": "Basketball (M)",
			"date": "Dec 27 2018",
			"progress": "final",
			"time": "12:00 PM PST",
			"airing": "Pac-12 Oregon",
			"details": "https://pac-12.com/mens-basketball/event/2018/10/27/montana-tech-oregon-state",
			"live": "https://pac-12.com/live?network=P12ORG",
			"tickets": "https://ev12.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=BEAVER&linkID=oregonst&shopperContext=&caller=&appCode=&RSRC=PAC12&RDAT=2017",
			"location": "Gill Coliseum, Corvallis, OR",
			"alt_title": "Pac-12 Tournament Day Three",
			"home": {
				"logo_url": "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-state-logo_0__1438812147.png?itok=f_Lwjkxw",
				"name": "OSU",
				"score": "54"
			},
			"away": {
				"logo_url": "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-state-logo_0__1438812147.png?itok=f_Lwjkxw",
				"name": "OSU",
				"score": "54"
			}
		},
	]
  }

  let seminarMock = {
	"events": [
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "",
		"desc": "A short workshop to learn how to simplify the class registration process",
		"lat": "44.568231",
		"long": "-123.280393",
		"address" : "Memorial Union, 2501 SW Jefferson Way, Corvallis, OR 97331",
		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "Tue, 06 Nov 2018 16:00:00 -0800",
		"desc": "A short workshop to learn how to simplify the class registration process",
		"lat": "44.568231",
		"long": "-123.280393",
		"address" : "",
		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "Tue, 06 Nov 2018 16:00:00 -0800",
		"desc": "A short workshop to learn how to simplify the class registration process",
		"address" : "Memorial Union, 2501 SW Jefferson Way, Corvallis, OR 97331",
		"lat": "44.568231",
		"long": "-123.280393",

		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "Tue, 06 Nov 2018 16:00:00 -0800",
		"desc": "A short workshop to learn how to simplify the class registration process. A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.",
		"lat": "44.568231",
		"long": "-123.280393",
		"address" : "Memorial Union, 2501 SW Jefferson Way, Corvallis, OR 97331",
		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "Tue, 06 Nov 2018 16:00:00 -0800",
		"desc": "A short workshop to learn how to simplify the class registration process",
		"address" : "Memorial Union, 2501 SW Jefferson Way, Corvallis, OR 97331",
		"lat": "44.568231",
		"long": "-123.280393",
		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	]
  }

  let freeFoodMock = [  
	{  
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"1036998224723279872",
	   "url":"https://twitter.com/statuses/1036998224723279872",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSU_StudyAbroad: If you studied abroad during the Academic Year 2017-2018, Spring 2018 or Summer 2018 you're invited to the Returning S…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"989151887856406533",
	   "url":"https://twitter.com/statuses/989151887856406533",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUgreen: Don't forget about the 🐛 Zoo  from 11am-2pm today in the S.U. Cowboy Underground (instead of the Plaza) #OSUInsectAdventure #…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"981299222749351937",
	   "url":"https://twitter.com/statuses/981299222749351937",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUCASNR: The OSU Bioeconomy and Sustainability Expo will be held tomorrow from 9 a.m. to 12 p.m. at the Student Union Plaza. Stop by t…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"768108782186475520",
	   "url":"https://twitter.com/statuses/768108782186475520",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @matt_fletch: On the Union Plaza today from 11:30-1:30 with @OSUCoachBrad! Winner of our free throw contest gets a football VIP Experien…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"722827493149769728",
	   "url":"https://twitter.com/statuses/722827493149769728",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"Stop by the union plaza from 11:30 to 1:30 today to try some samples of great products made in Oklahoma!!! @OSUUnion",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"722810527395647488",
	   "url":"https://twitter.com/statuses/722810527395647488",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUDining: Come support hard-working Okies...try samples from @MIO_Coalition vendors today in the SU Plaza from 11:30a-1:30p! https://t…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"718457308326420481",
	   "url":"https://twitter.com/statuses/718457308326420481",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: Don't miss the University Store's Mom's Day Beach Party tomorrow from 11am-3pm on the @OSUUnion Plaza with special guest @Gam…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"658436249062014976",
	   "url":"https://twitter.com/statuses/658436249062014976",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @matt_fletch: For those interested, there will be a Candlelight Vigil tonight at 9:00 at the @OSUUnion North Plaza. #StillwaterStrong",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"1050471035152228352",
	   "url":"https://twitter.com/statuses/1050471035152228352",
	   "screen_name":"eatfreeOSU",
	   "media_url":"http://pbs.twimg.com/media/DpQFdy2U0AAg5zX.jpg",
	   "description":"Doesn't this fruit look A-Peel-ing? Come grab some at the Sustainability Fair happening now till 3:00pm.\nLocation: SEC Plaza https://t.co/7yNQVdkmhf",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"909818325470920705",
	   "url":"https://twitter.com/statuses/909818325470920705",
	   "screen_name":"eatfreeOSU",
	   "media_url":"",
	   "description":"\"Go Beavs! Go Greek BBQ!\"\nLearn about Greek life opportunities:  \nStudent Experience Center Plaza\nTODAY from 12:00pm-1:30pm",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T23:31:30.133Z",
	   "id":"1012336436882956289",
	   "url":"https://twitter.com/statuses/1012336436882956289",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: Today is the last Summer on the Plaza of the Summer, and it's going to be a great one! \n\n🎵  Steelwind\n🎬  A Wrinkle in Time\n📍…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T23:31:30.993Z",
	   "id":"857349184743235584",
	   "url":"https://twitter.com/statuses/857349184743235584",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUCollegeofEd: #okstate students: Join President @BurnsHargis tomorrow on the @OSUUnion Plaza at noon for free #BurgersWithBurns! http…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T23:31:31.354Z",
	   "id":"778589054510125056",
	   "url":"https://twitter.com/statuses/778589054510125056",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: Vote Week continues today with the Round Up Block Party from 10a-2p in the Union Plaza. #LeadOrange @OSUCampusLife https://t.…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T23:31:31.594Z",
	   "id":"748523933712822272",
	   "url":"https://twitter.com/statuses/748523933712822272",
	   "screen_name":"okstatefood",
	   "media_url":"http://pbs.twimg.com/media/CmNEV4UUsAA_dM-.jpg",
	   "description":"RT @OKStateProbs: Hey summer homies, my friend @KaitlinButts is playing at the @OSUUnion tonight. Go see her! https://t.co/1pKjx5EYIq",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T23:31:31.624Z",
	   "id":"743504673395482624",
	   "url":"https://twitter.com/statuses/743504673395482624",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: Join the @OSUUnion tonight for Summer on the Plaza &amp; a little shopping at the University Store. All #okstate apparel is 25% o…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T23:31:35.050Z",
	   "id":"1055137842509209601",
	   "url":"https://twitter.com/statuses/1055137842509209601",
	   "screen_name":"eatfreeOSU",
	   "media_url":"",
	   "description":"I Stand With Immigrants National Day of Action! Show support to immigrants in Oregon, use the photo booth, win prizes, and enjoy warm refreshments and pastries. Today @ SEC Plaza 10-2pm!",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-07T23:31:35.346Z",
	   "id":"926161006971076608",
	   "url":"https://twitter.com/statuses/926161006971076608",
	   "screen_name":"eatfreeOSU",
	   "media_url":"http://pbs.twimg.com/media/DNpihboVwAA5E9X.jpg",
	   "description":"Today 11-1pm @ SEC Plaza. Free donuts, donations encouraged! For Corvallis Public Schools Foundation to fill backpacks w/food for homeless 🙂 https://t.co/7rq15F9sOv",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-08T00:00:00.000Z",
	   "id":"1011978877873414144",
	   "url":"https://twitter.com/statuses/1011978877873414144",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @okstate: 🎵  Steelwind\n🎬  A Wrinkle in Time\n📍  @OSUunion Plaza\n \nStop by Summer on the Plaza Thursday at 6 p.m. for live music, water ac…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-08T00:00:00.000Z",
	   "id":"1009465514975023105",
	   "url":"https://twitter.com/statuses/1009465514975023105",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @okstate: 🎵  New Time Zones\n🎬  Tarzan\n📍  @osuunion Plaza\n \nStop by Summer on the Plaza Thursday at 6 p.m. for live music, water activiti…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-08T00:00:00.000Z",
	   "id":"902549723202154496",
	   "url":"https://twitter.com/statuses/902549723202154496",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: GameDay at the Union is back! 🏈🏈 The fun starts Thursday at 3:30p on the @OSUUnion Plaza. Visit our website for all the detai…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-09T00:00:00.000Z",
	   "id":"770729145185603584",
	   "url":"https://twitter.com/statuses/770729145185603584",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: #OKSTATE PSA: College Colors Day is THIS WEEK! Get your orange ready and meet us on the SU Plaza at 2pm on Friday! https://t.…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-12T00:00:00.000Z",
	   "id":"1053470083794849792",
	   "url":"https://twitter.com/statuses/1053470083794849792",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @okstatereslife: Don't miss the Tailgate of Tailgates - kick off Homecoming week with us on Kerr-Drummond Plaza Monday night! 🎌🎌🎌Food, g…",
	   "location":"OSU"
	},
	{  
	   "event_date":"2018-11-21T00:00:00.000Z",
	   "id":"1030120778652631040",
	   "url":"https://twitter.com/statuses/1030120778652631040",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @suabokstate: Come kick off the semester with us on Tuesday the 21st at our Exotic Petting Zoo! The animals will be on the SU Plaza from…",
	   "location":"OSU"
	}
 ]

  export {sportsMock, seminarMock, freeFoodMock}



export default mocks;
