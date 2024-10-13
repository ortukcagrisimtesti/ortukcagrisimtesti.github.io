define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, 
        header: 'Demografik Bilgiler',
        decline: true,
        declineText: isTouch ? 'Gec' : 'Soruyu Gec', 
        autoFocus:true, 
        progressBar:  'Sayfa <%= pagesMeta.number %> / 2',
	submitText: isTouch ? 'Gonder' : 'Gonder', 
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer, or click \'Gec\'' 
                : 'Please select an answer, or click \'Soruyu Gec\''
        },
        autoSubmit:'true',
        numericValues:'true',
    });

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });

    /**
	* Demographic Questions
	*/
    // Nickname
    API.addQuestionsSet('nickname',{
        inherit: 'basicQ',
        type: 'text',
        name: 'nickname',
        stem: 'Lutfen bir rumuz giriniz:'
    });

    // Gender
    API.addQuestionsSet('gender',{
        inherit: 'basicSelect',
        name: 'gender',
        stem: 'Cinsiyetiniz nedir?',
        answers: [
            {text: 'Kadin', value: 'Kadin'},
            {text: 'Erkek', value: 'Erkek'}
        ]
    });

    /**
	* Sequence
	*/
    API.addSequence([
        {inherit: 'basicPage', questions: {inherit: 'nickname'}},
        {inherit: 'basicPage', questions: {inherit: 'gender'}}
    ]);

    return API.script;
});
