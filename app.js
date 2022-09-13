$(document).ready(function() {
    const inputBar = $('#inputBar');
    const inputValue = $('#inputBar').value;
    const introPrompt = $('#introPrompt');
    const submit = $('#submitBtn');
    const quote = $('#quote');
    const authors = $('#author');

    submit.click((e) => {
        e.preventDefault();
        introPrompt.slideUp(2000);
        quote.removeClass('noDisplay');
        fetch('https://type.fit/api/quotes')
        .then((response) => response.json())
        .then((data) => {
            quote[0].innerHTML = `"` + data[Math.floor(Math.random() * data.length)].text + `"`
            //authors.innerHTML = `-` + data[Math.floor(Math.random() * data.length)].author
        })
        .catch((err) => console.log(err))
    });

    inputBar.click(() => {
        introPrompt.slideDown(2000);
        quote.addClass('noDisplay');
    });
})
