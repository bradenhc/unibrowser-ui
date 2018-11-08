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
		"date": "Tue, 06 Nov 2018 16:00:00 -0800",
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
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "Tue, 06 Nov 2018 16:00:00 -0800",
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
		"address" : "Memorial Union, 2501 SW Jefferson Way, Corvallis, OR 97331",
		"lat": "44.568231",
		"long": "-123.280393",
		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	]
  }

  export {sportsMock, seminarMock}



export default mocks;
