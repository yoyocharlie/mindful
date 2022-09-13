$(document).ready(function() {
    const inputBar = $('#inputBar');
    const inputValue = $('#inputBar').value;
    const introPrompt = $('#introPrompt');
    const submit = $('#submitBtn');
    const quoteSpace = $('#quote');
    const authors = $('#author');
    

    function generateQuote() {
        fetch('https://type.fit/api/quotes')
        .then((response) => response.json())
        .then((data) => {
            quoteSpace[0].innerHTML = `"` + data[Math.floor(Math.random() * data.length)].text + `"`
            //authors.innerHTML = `-` + data[Math.floor(Math.random() * data.length)].author
        })
        .catch((err) => console.log(err));
    }

    submit.click((e) => {
        e.preventDefault();
        introPrompt.slideUp(2000);
        quoteSpace.removeClass('noDisplay');
        inputBar.fadeOut(2000);
        submit.fadeOut(2000);
        generateQuote();
        quoteSpace.addClass('fadeIn')
    });

    inputBar.click(() => {
        introPrompt.slideDown(2000);
        quoteSpace.addClass('noDisplay');
    });
})
