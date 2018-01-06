
"use strict";

var log = console.log;

$('document').ready(function () {
    customTab("#content-container");
});

var customTab = function customTab(id) {
    var consainer = $(id);
    var list = $(consainer.find('.content-list li'));
    var imgBtn = $(consainer.find('.show-pic li'));
    var controlShow = function controlShow(parent, index) {
        for (var i = 0; i < parent.length; i++) {
            $(parent).eq(i).animate({
                'opacity': '0.5'
            }, 300, 'swing').css('display', 'none');
            $(imgBtn).eq(i).removeClass('wrap-border');
        }
        $(parent).eq(index).animate({
            'opacity': '1'
        }, 300, 'swing').css('display', 'block');
        $(imgBtn).eq(index).addClass('wrap-border');
    };
    controlShow(list, 0);

    var _loop = function _loop(i) {
        var self = $(imgBtn).eq(i);
        self.click(function (e) {
            controlShow(list, i);
        });
    };

    for (var i = 0; i < imgBtn.length; i++) {
        _loop(i);
    }
};

/*
"use strict";

const log=console.log;

$('document').ready(function(){
    customTab("#content-container");
})


const customTab=(id)=>{
    const consainer=$(id);
    const list=$(consainer.find('.content-list li'));
    const imgBtn=$(consainer.find('.show-pic li'));
    const controlShow=function(parent,index){
        for(let i=0;i<parent.length;i++){
            $(parent).eq(i).animate({
                'opacity':'0.5',
            },300,'swing').css('display','none');   
            $(imgBtn).eq(i).removeClass('wrap-border');     
        }
        $(parent).eq(index).animate({
            'opacity':'1',
        },300,'swing').css('display','block');
        $(imgBtn).eq(index).addClass('wrap-border');
        
    }
    controlShow(list,0)
    for(let i=0;i<imgBtn.length;i++){
        let self=$(imgBtn).eq(i);
        self.click(function(e){
            controlShow(list,i);
        })
    }
}


*/