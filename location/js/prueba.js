$(function(){
var $newItem = $('#newButtonItem');
var $form = $('#Form');
var $list = $('ul');

function counterItems(){
    var numItems = $("li").length;
    $('h1').text('Number of Items: '+numItems);
};
counterItems();

$newItem.show();
$form.hide();
$newItem.on('click', function(){
    $form.show();
    $newItem.hide();
});
$form.on('submit',function(e){
    e.preventDefault();
    var input = $('input:text').val();
    $list.append('<li class = "none">' + input + '<span>✔️</span></li>');
    $form.hide();
    $newItem.show();
    $('input:text').val('');
    /* Adding the total items to the header */
    counterItems();

    
})
$('ul').on('click','span',function(e){
    $this = $(this).closest('li');
    if($this.hasClass('Complete')) {
        $this.animate({
            opacity : 0.0, 
            paddingLeft: '+=70' 
        },10, 'swing',function(){$this.remove();});
        
    }else if($this.hasClass('none')) {
        $this.detach();
    
        $this.addClass('Complete');
        $list.append($this);
    }
})

});
