const inputBar = $('#inputBar');
const inputValue = $('#inputBar').value;
const introPrompt = $('#introPrompt');
const submit = $('submitBtn');

inputBar.click(() => {
    introPrompt.slideToggle(2000);
});

