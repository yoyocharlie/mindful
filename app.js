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
            let mappedData = data.map(obj=> obj.text);
            let mappedQuote = mappedData.filter(function(text){
                const inputValue = inputBar.val();
                return text.includes(inputValue.toLowerCase());
            });
            let randomQuote = mappedQuote[Math.floor(Math.random() * mappedQuote.length)];

            return randomQuote == undefined ? 
            quoteSpace.html('It seems your feelings are too complex for our site. Try again :)')
            : quoteSpace.html(`"${randomQuote}"`);
        })
        .catch((err) => console.log(err));
    }

    submit.click((e) => {
        const inputValue = inputBar.val();

        e.preventDefault();

        if(inputValue.length < 3) {
            invalid.text('*please enter feelings');
        } else {
            introPrompt.slideUp(2000);
            quoteSpace.removeClass('noDisplay');
            inputBar.fadeOut(2000);
            submit.fadeOut(2000);
            invalid.fadeOut(500);
            generateQuote();
            quoteSpace.addClass('fadeIn');
            authors.addClass('fadeIn');
        };   
    });
});

