console.log('js');
var clickCount = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $(document).on('click', '#generateButton', generateButtonClick);
    $(document).on('click', '.swapButton', swapButtonClick);
    $(document).on('click', '.swapButton2', swapButtonClick2);
    $(document).on('click', '.deleteButton', deleteButtonClick);
}

function deleteButtonClick() {
    $(this).parent().remove();
}

function generateButtonClick() {
    clickCount++;
    $('body').append('<div class="redDiv"><p>' + clickCount + 
    '</p><button class="swapButton">Swap</button><button class="deleteButton">Delete</button></div');
}

function swapButtonClick() {
    $(this).parent().css('background-color', 'yellow');
    $(this).replaceWith('<button class="swapButton2">Swap</button>');
}

function swapButtonClick2() {
    $(this).parent().css('background-color', 'red');
    $(this).replaceWith('<button class="swapButton">Swap</button>');
}