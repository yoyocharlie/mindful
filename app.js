$(document).ready(function() {
    const inputBar = $('#inputBar');;
    const introPrompt = $('#introPrompt');
    const submit = $('#submitBtn');
    const quoteSpace = $('#quote');
    const authors = $('#author');
    const invalid = $('#invalid');
    

    function generateQuote() {
        fetch('https://type.fit/api/quotes')
        .then((response) => response.json())
        .then((data) => {
            let randomQuote = data[Math.floor(Math.random() * data.length)]

            quoteSpace[0].innerHTML = `"` + randomQuote.text + `"`;
            authors[0].innerHTML = `- ` + randomQuote.author;
        })
        .catch((err) => console.log(err));
    }

    submit.click((e) => {
        const inputValue = inputBar.val();

        e.preventDefault();

        if(inputValue.length < 3) {
            invalid.text('*please enter feelings')
        } else {
            introPrompt.slideUp(2000);
            quoteSpace.removeClass('noDisplay');
            inputBar.fadeOut(2000);
            submit.fadeOut(2000);
            invalid.fadeOut(500);
            generateQuote();
            quoteSpace.addClass('fadeIn');
            authors.addClass('fadeIn');
        }
    });
});

