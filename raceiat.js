define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
		leftKeyText : '"E" harfine basın',
		rightKeyText : '"I" harfine basın', 
		finalText : 'Sonraki bölüme geçmek için boşluk tuşuna basın', 
		finalTouchText : 'Sonraki bölüme geçmek için alt yeşil alana dokunun',
		remindErrorText : '<p align="center" style="font-size:1em; font-family:arial; color:#000000">' +
		'Eğer bir hata yaparsanız, kırmızı bir <font color="#ff0000"><b>X</b></font> görünecektir. ' +
		'Devam etmek için diğer tuşa basın.<p/>',
		remindErrorTextTouch : '<p align="center" style="font-size:1.4em; font-family:arial; color:#000000">' +
		'Eğer bir hata yaparsanız, kırmızı bir <font color="#ff0000"><b>X</b></font> görünecektir. ' +
		'Devam etmek için diğer tarafa dokunun.<p/>',
		orText : 'ya da', 
		touchMaxStimulusWidth : '50%', 
		touchMaxStimulusHeight : '50%', 
		bottomTouchCss: {}, //Alt dokunma alanının css'sini değiştirmek için herhangi bir CSS değeri ekleyin.
		
		instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
		'<font color="#000000"><u>blockNum / nBlocks</u><br/><br/></p>' +
		'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
		'Soldaki kategoriye ait öğeler için <b>E</b> tuşuna basın. <font color="#0000ff">leftAttribute.</font>' +
		'<br/>Sağdaki kategoriye ait öğeler için <b>I</b> tuşuna basın. <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
		'Hata yaparsanız, kırmızı bir <font color="#ff0000"><b>X</b></font> görünecektir. ' +
		'Hata yaptıktan sonra devam etmek için diğer tuşa basın.<br/>' +
		'<u>Mümkün olduğunca hızlı olun</u> ve doğru cevap vermeye çalışın.<br/><br/></p>'+
		'<p align="center">Başlamaya hazır olduğunuzda <b>boşluk tuşuna</b> basın.</font></p></div>',
		instAttributePracticeTouch: [
		    '<div>',
		        '<p align="center">',
		            '<u>blockNum / nBlocks</u>',
		        '</p>',
		        '<p align="left" style="margin-left:5px">',
		            '<br/>',
		            'Soldaki kategoriye ait öğeler için <b>sol</b> yeşil alanın üzerine dokunun. <font color="#0000ff">leftAttribute</font>.<br/>',
		            'Sağdaki kategoriye ait öğeler için <b>sağ</b> yeşil alanın üzerine dokunun. <font color="#0000ff">rightAttribute</font>.<br/>',
		            'Öğeler birer birer görünecektir.<br/>',
		            '<br/>',
		            'Hata yaparsanız, kırmızı bir <font color="#ff0000"><b>X</b></font> görünecek. Diğer tarafa dokunun. <u>Mümkün olduğunca hızlı olun</u> ve doğru olmaya çalışın.',
		        '</p>',
		        '<p align="center">Başlamak için <b> alttaki</b> yeşil alana dokunun.</p>',
		    '</div>'
		].join('\n'),
		
		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
		'<font color="#000000"><u>blockNum / nBlocks</u><br/><br/></p>' +
		'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
		'Soldaki kategoriye ait öğeler için <b>E</b> tuşuna basın. <font color="#336600">leftCategory</font>. ' +
		'<br/>Sağdaki kategoriye ait öğeler için <b>I</b> tuşuna basın. <font color="#336600">rightCategory</font>.<br/>' +
		'Öğeler birer birer görünecektir.<br/><br/>' +
		'Hata yaparsanız, kırmızı bir <font color="#ff0000"><b>X</b></font> görünecektir. ' +
		'Hata yaptıktan sonra, devam etmek için diğer tuşa basın.<br/>' +
		'<u>Mümkün olduğunca hızlı olun</u> ve doğru cevap vermeye çalışın.<br/><br/></p>'+
		'<p align="center">Başlamaya hazır olduğunuzda <b>boşluk tuşuna</b> basın.</font></p></div>',
		instCategoriesPracticeTouch: [
		    '<div>',
		        '<p align="center">',
		            '<u>blockNum / nBlocks</u>',
		        '</p>',
		        '<p align="left" style="margin-left:5px">',
		            '<br/>',
		            'Soldaki kategoriye ait öğeler için <b>sol</b> yeşil alanın üzerine dokunun. <font color="#336600">leftCategory</font>.<br/>',
		            'Sağdaki kategoriye ait öğeler için <b>sağ</b> yeşil alanın üzerine dokunun. <font color="#336600">rightCategory</font>.<br/>',
		            'Öğeler birer birer görünecektir.<br/>',
		            '<br/>',
		            'Hata yaparsanız, kırmızı bir <font color="#ff0000"><b>X</b></font> görünecek. Diğer tarafa dokunun. <u>Mümkün olduğunca hızlı olun</u> ve doğru olmaya çalışın.',
		        '</p>',
		        '<p align="center">Başlamak için <b>alttaki </b> yeşil alana dokunun.</p>',
		    '</div>'
		].join('\n'),
		
		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>blockNum / nBlocks</u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'<font color="#336600">leftCategory</font> ve <font color="#0000ff">leftAttribute</font> için <b>E</b> tuşunu kullanın.<br/>' + 
			'<font color="#336600">rightCategory</font> ve <font color="#0000ff">rightAttribute</font> için <b>I</b> tuşunu kullanın.' +
			'Her öğe sadece bir kategoriye aittir.<br/><br/>' +
			'Hata yaparsanız, kırmızı bir <font color="#ff0000"><b>X</b></font> görünecektir. ' +
			'Devam etmek için diğer tuşa basın.<br/>' + 
			'<u>Mümkün olduğunca hızlı olun</u> ve doğru cevap vermeye çalışın.<br/><br/></p>' +
			'<p align="center">Başlamaya hazır olduğunuzda <b>boşluk tuşuna</b> basın.</font></p></div>',
		instFirstCombinedTouch:[
		    '<div>',
		        '<p align="center">',
		            '<u>blockNum / nBlocks</u>',
		        '</p>',
		        '<p align="left" style="margin-left:5px">',
		            '<br/>',
		            'Soldaki kategoriye ait öğeler için <b>sol</b> yeşil alanın üzerine dokunun. <font color="#336600">leftCategory</font>.<br/>',
		            'Sağdaki kategoriye ait öğeler için <b>sağ</b> yeşil alanın üzerine dokunun. <font color="#0000ff">rightAttribute</font>.<br/>',
		            'Öğeler birer birer görünecektir.<br/>',
		            '<br/>',
		            'Hata yaparsanız, kırmızı bir <font color="#ff0000"><b>X</b></font> görünecek. Diğer tarafa dokunun. <u>Mümkün olduğunca hızlı olun</u> ve doğru olmaya çalışın.',
		        '</p>',
		        '<p align="center">Başlamak için <b>alttaki </b> yeşil alana dokunun.</p>',
		    '</div>'
		].join('\n'),
	    
		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>blockNum / nBlocks</u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Bu bölüm, önceki bölümle aynıdır.<br/>' +
			'<font color="#336600">leftCategory</font> ve <font color="#0000ff">leftAttribute</font> için <b>E</b> tuşunu kullanın.<br/>' + 
			'<font color="#336600">rightCategory</font> ve <font color="#0000ff">rightAttribute</font> için <b>I</b> tuşunu kullanın.' +
			'Her öğe sadece bir kategoriye aittir.<br/><br/>' +
			'<u>Mümkün olduğunca hızlı olun</u> ve doğru cevap vermeye çalışın.<br/><br/></p>' +
			'<p align="center">Başlamaya hazır olduğunuzda <b>boşluk tuşuna</b> basın.</font></p></div>',
		instSecondCombinedTouch:[
		    '<div>',
		        '<p align="center"><u>blockNum / nBlocks</u></p>',
		        '<br/>',
		        '<br/>',
		        '<p align="left" style="margin-left:5px">',
		            'Soldaki kategoriye ait öğeler ve <font color="#0000ff">leftAttribute</font> için <b>sol</b> yeşil alanın üzerine dokunun.<br/>',
		            'Sağdaki kategoriye ait öğeler ve <font color="#0000ff">rightAttribute</font> için <b>sağ</b> yeşil alanın üzerine dokunun.<br/>',
		            '<br/>',
		            '<u>Mümkün olduğunca hızlı olun</u> ve doğru cevap vermeye çalışın.<br/>',
		        '</p>',
		        '<p align="center">Başlamak için <b>alttaki </b> yeşil alana dokunun.</p>',
		    '</div>'
		].join('\n'),
		
		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
		'<font color="#000000"><u>blockNum / nBlocks </u><br/><br/></p>' +
		'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
		'<b>Dikkat edin, öğelerin pozisyonu değişti!</b><br/>' +
		'Soldaki kategoriye ait öğeler için <b>E</b> tuşuna basın. <font color="#336600">leftCategory</font>. ' +
		'<br/>Sağdaki kategoriye ait öğeler için <b>I</b> tuşuna basın. <font color="#336600">rightCategory</font>.<br/>' +	
		'<u>Mümkün olduğunca hızlı olun</u> doğru cevap vermeye çalışın.<br/><br/></p>' +
		'<p align="center">Başlamaya hazır olduğunuzda <b>boşluk tuşuna</b> basın.</font></p></div>',
		instSwitchCategoriesTouch: [
		    '<div>',
		        '<p align="center">',
		            '<u>blockNum / nBlocks</u>',
		        '</p>',
		        '<p align="left" style="margin-left:5px">',
		            '<br/>',
		            'Lütfen dikkat edin, öğelerin pozisyonu değişti!<br/>',
		            	'Soldaki kategoriye ait öğeler için <b>sol</b> yeşil alanın üzerine dokunun. <font color="#336600">leftCategory</font>.<br/>',
		           	 'Sağdaki kategoriye ait öğeler için <b>sağ</b> yeşil alanın üzerine dokunun. <font color="#336600">rightCategory</font>.<br/>',
		            	'Öğeler birer birer görünecektir.',
		            	'<br/>',
		           	 'Hata yaparsanız, kırmızı bir <font color="#ff0000"><b>X</b></font> görünecek. Diğer tarafa dokunun. <u>Mümkün olduğunca hızlı olun</u> ve doğru olmaya çalışın.<br/>',
		        '</p>',
		        '<p align="center">Başlamak için <b>alttaki </b> yeşil alana dokunun.</p>',
		    '</div>'
		].join('\n'),
	    
		instThirdCombined : 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
		instFourthCombined : 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.
		instThirdCombinedTouch : 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
		instFourthCombinedTouch : 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.

	category1 : {
	    name : global.blackLabels, //Will appear in the data.
	    title : {
	        media : {word : global.blackLabels}, //Name of the category presented in the task.
		css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
		height : 4 //Used to position the "Or" in the combined block.
	    },
	    stimulusMedia : [ //Stimuli content as PIP's media objects
		{word: 'Ayşe'},
		{word: 'Fatma'},
		{word: 'Zeynep'},
		{word: 'Ceren'},
		{word: 'Selin'},
		{word: 'Elif'}
	    ],
	    //Stimulus css (style)
	    stimulusCss : {color:'#336600','font-size':'2.3em'}
	},
	category2 : {
	    name : global.whiteLabels, //Will appear in the data.
	    title : {
		media : {word : global.whiteLabels}, //Name of the category presented in the task.
		css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
		height : 4 //Used to position the "Or" in the combined block.
	    },
	    stimulusMedia : [ //Stimuli content as PIP's media objects
		{word: 'Ali'},
		{word: 'Ahmet'},
		{word: 'Yusuf'},
		{word: 'Mustafa'},
		{word: 'Hasan'},
		{word: 'Hüseyin'}
	    ],
	    //Stimulus css
	    stimulusCss : {color:'#336600','font-size':'2.3em'}
	},
        attribute1 : {
            name : 'Feminen',
            title : {
                media : {word : 'Feminen'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.negWords[0]},
                {word: global.negWords[1]},
                {word: global.negWords[2]},
                {word: global.negWords[3]},
                {word: global.negWords[4]},
                {word: global.negWords[5]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Maskülen',
            title : {
                media : {word : 'Maskülen'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.posWords[0]},
                {word: global.posWords[1]},
                {word: global.posWords[2]},
                {word: global.posWords[3]},
                {word: global.posWords[4]},
                {word: global.posWords[5]},
 
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});
