define(['managerAPI',
		'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager){


	//You can use the commented-out code to get parameters from the URL.
	const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pt = urlParams.get('pt');

	var API    = new Manager();
	const subid = Date.now().toString(16)+Math.floor(Math.random()*10000).toString(16);
	init_data_pipe(API, 'nN1GHcK2Q7Py',  {file_type:'csv'});

    API.setName('mgr');
    API.addSettings('skip',true);
	
    let raceSet = API.shuffle(['a', 'b'])[0];
    let blackLabels = [];
    let whiteLabels = [];

    if (raceSet === 'a') {
	blackLabels.push('Kadın İsmi');
	whiteLabels.push('Erkek İsmi');
    } else {
	blackLabels.push('Kadın İsmi');
	whiteLabels.push('Erkek İsmi');
    }

    API.addGlobal({
	raceiat: {},
	baseURL: './images/',
	raceSet: raceSet,
	blackLabels: blackLabels,
	whiteLabels: whiteLabels,
	posWords: API.shuffle([
            'Yiğit' , 'Mantıklı' , 'Sert' , 'Otoriter' , 'Şakacı', 'Sorumsuz'
	]),
	negWords: API.shuffle([
	    'Hamarat' , 'Dedikoducu' , 'Şefkatli' , 'Fesat' , 'Evhamlı', 'Hassas' 
	]),
	kadinWords: API.shuffle([
	    'Ayşe' , 'Fatma' , 'Selin' , 'Ceren' , 'Elif' , 'Zeynep'
	]),
	erkekWords: API.shuffle([
	    'Ahmet' , 'Ali' , 'Mustafa' , 'Hasan' , 'Hüseyin' , 'Yusuf'
	]),
    });

    API.addTasksSet({
	instructions: [{
	    type: 'message',
	    buttonText: 'Devam et'
        }],

	intro: [{
	    inherit: 'instructions',
	    name: 'intro',
	    templateUrl: 'intro.jst',
	    title: 'Intro',
	    header: 'Welcome'
        }],
		
        explicits: [{
	   type: 'quest',
	   name: 'explicits',
	   scriptUrl: 'explicits.js'
        }],
			
	raceiat_instructions: [{
	   inherit: 'instructions',
	   name: 'raceiat_instructions',
	   templateUrl: 'raceiat_instructions.jst',
	   title: 'IAT Instructions',
	   header: 'Implicit Association Test'
	}],

	raceiat: [{
	   type: 'time',
	   name: 'raceiat',
	   scriptUrl: 'raceiat.js'
	}],

	lastpage: [{
	   type: 'message',
	   name: 'lastpage',
	   templateUrl: 'lastpage.jst',
	   title: 'End',
	   header: 'You have completed the study'
	}], 
		
	redirect: 
	[{ 
	    type: 'redirect', name: 'redirecting', url: 'https://www.google.com/'
	}],
		
	uploading: uploading_task({header: 'Bir dakika...', body: 'Lütfen Bekleyiniz...'})
    });
    API.addSequence([
        { type: 'isTouch' }, //Use Minno's internal touch detection mechanism. 
        
        { type: 'post', path: ['$isTouch', 'raceSet', 'blackLabels', 'whiteLabels'] },

        // apply touch only styles
        {
            mixer:'branch',
            conditions: {compare:'global.$isTouch', to: true},
            data: [
                {
                    type: 'injectStyle',
                    css: [
                        '* {color:red}',
                        '[piq-page] {background-color: #fff; border: 1px solid transparent; border-radius: 4px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); margin-bottom: 20px; border-color: #bce8f1;}',
                        '[piq-page] > ol {margin: 15px;}',
                        '[piq-page] > .btn-group {margin: 0px 15px 15px 15px;}',
                        '.container {padding:5px;}',
                        '[pi-quest]::before, [pi-quest]::after {content: " ";display: table;}',
                        '[pi-quest]::after {clear: both;}',
                        '[pi-quest] h3 { border-bottom: 1px solid transparent; border-top-left-radius: 3px; border-top-right-radius: 3px; padding: 10px 15px; color: inherit; font-size: 2em; margin-bottom: 20px; margin-top: 0;background-color: #d9edf7;border-color: #bce8f1;color: #31708f;}',
                        '[pi-quest] .form-group > label {font-size:1.2em; font-weight:normal;}',

                        '[pi-quest] .btn-toolbar {margin:15px;float:none !important; text-align:center;position:relative;}',
                        '[pi-quest] [ng-click="decline($event)"] {position:absolute;right:0;bottom:0}',
                        '[pi-quest] [ng-click="submit()"] {width:30%;line-height: 1.3333333;border-radius: 6px;}',
                        // larger screens
                        '@media (min-width: 480px) {',
                        ' [pi-quest] [ng-click="submit()"] {width:30%;padding: 10px 16px;font-size: 1.6em;}',
                        '}',
                        // phones and smaller screens
                        '@media (max-width: 480px) {',
                        ' [pi-quest] [ng-click="submit()"] {padding: 8px 13px;font-size: 1.2em;}',
                        ' [pi-quest] [ng-click="decline($event)"] {font-size: 0.9em;padding:3px 6px;}',
                        '}'
                    ]
                }
            ]
        },
        
        
        {inherit: 'intro'},
        {
            mixer: 'wrapper',
            data:[
                {inherit: 'explicits'},

                // force the instructions to preceed the iat
                {
                    mixer: 'wrapper',
                    data: [
                        {inherit: 'raceiat_instructions'},
                        {inherit: 'raceiat'}
                    ]
                }
            ]
        },

		{inherit: 'uploading'},
        {inherit: 'lastpage'},
        {inherit: 'redirect'}
    ]);
    return API.script;
});
